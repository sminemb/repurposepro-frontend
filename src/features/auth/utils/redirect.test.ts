import { describe, expect, it } from "vitest";

import {
  getSafeRedirectPath,
  isSafeInternalRedirect,
} from "@/features/auth/utils/redirect";

describe("isSafeInternalRedirect", () => {
  it("allows internal application paths", () => {
    expect(isSafeInternalRedirect("/dashboard")).toBe(true);
    expect(isSafeInternalRedirect("/projects/123?tab=details#status")).toBe(true);
  });

  it("rejects external and malformed redirect values", () => {
    expect(isSafeInternalRedirect("https://evil.com")).toBe(false);
    expect(isSafeInternalRedirect("//evil.com")).toBe(false);
    expect(isSafeInternalRedirect("/\\evil.com")).toBe(false);
    expect(isSafeInternalRedirect("javascript:alert(1)")).toBe(false);
    expect(isSafeInternalRedirect("")).toBe(false);
    expect(isSafeInternalRedirect(undefined)).toBe(false);
  });
});

describe("getSafeRedirectPath", () => {
  it("returns a safe requested destination", () => {
    expect(getSafeRedirectPath("/projects")).toBe("/projects");
  });

  it("falls back to the dashboard for unsafe destinations and fallbacks", () => {
    expect(getSafeRedirectPath("https://evil.com")).toBe("/dashboard");
    expect(getSafeRedirectPath("//evil.com", "https://evil.com")).toBe(
      "/dashboard",
    );
  });

  it("uses a safe custom fallback", () => {
    expect(getSafeRedirectPath(null, "/settings")).toBe("/settings");
  });
});
