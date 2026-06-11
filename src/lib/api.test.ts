import { afterEach, describe, expect, it, vi } from "vitest";

import {
  ApiClientError,
  apiDelete,
  apiGet,
  apiPatch,
  apiPost,
} from "@/lib/api";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("API client", () => {
  it("joins endpoint paths and includes cookie credentials", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: true, message: "OK", data: {} }), {
        headers: { "Content-Type": "application/json" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    await apiGet("/api/health");

    expect(fetchMock).toHaveBeenCalledWith(
      "http://localhost:5000/api/health",
      expect.objectContaining({
        credentials: "include",
        method: "GET",
      }),
    );
  });

  it("serializes plain object bodies as JSON", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: true, message: "Created", data: {} })),
    );
    vi.stubGlobal("fetch", fetchMock);

    await apiPost("/api/example", { title: "Example" });

    const request = fetchMock.mock.calls[0]?.[1] as RequestInit;
    expect(request.body).toBe(JSON.stringify({ title: "Example" }));
    expect(new Headers(request.headers).get("Content-Type")).toBe(
      "application/json",
    );
  });

  it("preserves FormData bodies without setting a JSON content type", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    const formData = new FormData();
    formData.append("video", new Blob(["video"]), "video.mp4");
    vi.stubGlobal("fetch", fetchMock);

    await apiPost("/api/example/upload", formData);

    const request = fetchMock.mock.calls[0]?.[1] as RequestInit;
    expect(request.body).toBe(formData);
    expect(new Headers(request.headers).has("Content-Type")).toBe(false);
  });

  it("returns null for empty successful responses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response(null, { status: 204 })),
    );

    await expect(apiDelete("/api/example")).resolves.toBeNull();
  });

  it("uses a backend JSON error message and error details", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            success: false,
            message: "The request is invalid.",
            errors: [{ field: "title", message: "Title is required." }],
          }),
          { status: 422 },
        ),
      ),
    );

    await expect(apiPatch("/api/example", {})).rejects.toMatchObject({
      name: "ApiClientError",
      message: "The request is invalid.",
      status: 422,
      errors: [{ field: "title", message: "Title is required." }],
    });
  });

  it("uses a safe generic message for non-JSON errors", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response("<html>Internal details</html>", { status: 500 }),
      ),
    );

    try {
      await apiGet("/api/example");
      expect.fail("Expected apiGet to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(ApiClientError);
      expect(error).toMatchObject({
        message: "Request failed. Please try again.",
        status: 500,
      });
      expect(error).not.toHaveProperty("responseBody");
    }
  });

  it("normalizes network failures without exposing the original error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Sensitive connection details")),
    );

    await expect(apiGet("/api/example")).rejects.toMatchObject({
      name: "ApiClientError",
      message: "Unable to reach the server. Please try again.",
      status: 0,
    });
  });

  it("normalizes request preparation failures", async () => {
    const circularBody: Record<string, unknown> = {};
    circularBody.self = circularBody;

    await expect(apiPost("/api/example", circularBody)).rejects.toMatchObject({
      name: "ApiClientError",
      message: "Request failed. Please try again.",
      status: 0,
    });
  });
});
