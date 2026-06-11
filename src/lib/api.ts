import { API_BASE_URL } from "@/lib/constants";
import type {
  ApiClientOptions,
  ApiErrorResponse,
  ApiSuccessResponse,
} from "@/types/api";

const DEFAULT_ERROR_MESSAGE = "Request failed. Please try again.";
const NETWORK_ERROR_MESSAGE = "Unable to reach the server. Please try again.";

type RequestOptions = Omit<ApiClientOptions, "body" | "method">;

export class ApiClientError extends Error {
  readonly status: number;
  readonly errors?: unknown[];
  readonly response?: ApiErrorResponse;

  constructor(
    message: string,
    status: number,
    errors?: unknown[],
    response?: ApiErrorResponse,
  ) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.errors = errors;
    this.response = response;
  }
}

function buildApiUrl(path: string) {
  const baseUrl = API_BASE_URL.replace(/\/+$/, "");
  const endpoint = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${endpoint}`;
}

function isPlainObject(value: unknown): value is object {
  if (value === null || typeof value !== "object") {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function prepareBody(
  body: ApiClientOptions["body"],
  headers: Headers,
): BodyInit | null | undefined {
  if (!isPlainObject(body)) {
    return body as BodyInit | null | undefined;
  }

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return JSON.stringify(body);
}

async function parseJsonResponse(response: Response): Promise<unknown | null> {
  const responseText = await response.text();

  if (!responseText) {
    return null;
  }

  try {
    return JSON.parse(responseText) as unknown;
  } catch {
    return null;
  }
}

function getApiErrorResponse(value: unknown): ApiErrorResponse | undefined {
  if (value === null || typeof value !== "object") {
    return undefined;
  }

  const response = value as Record<string, unknown>;
  if (response.success === true || typeof response.message !== "string") {
    return undefined;
  }

  return {
    success: false,
    message: response.message,
    errors: Array.isArray(response.errors) ? response.errors : undefined,
  };
}

export async function apiRequest<T>(
  path: string,
  options: ApiClientOptions = {},
): Promise<ApiSuccessResponse<T> | null> {
  try {
    const headers = new Headers(options.headers);
    const body = prepareBody(options.body, headers);
    let response: Response;

    try {
      response = await fetch(buildApiUrl(path), {
        method: options.method ?? "GET",
        headers,
        body,
        cache: options.cache,
        credentials: "include",
      });
    } catch {
      throw new ApiClientError(NETWORK_ERROR_MESSAGE, 0);
    }

    const responseBody = await parseJsonResponse(response);
    const apiError = getApiErrorResponse(responseBody);

    if (!response.ok || apiError) {
      throw new ApiClientError(
        apiError?.message ?? DEFAULT_ERROR_MESSAGE,
        response.status,
        apiError?.errors,
        apiError,
      );
    }

    return responseBody as ApiSuccessResponse<T> | null;
  } catch (error) {
    if (error instanceof ApiClientError) {
      throw error;
    }

    throw new ApiClientError(DEFAULT_ERROR_MESSAGE, 0);
  }
}

export function apiGet<T>(path: string, options?: RequestOptions) {
  return apiRequest<T>(path, { ...options, method: "GET" });
}

export function apiPost<T>(
  path: string,
  body?: ApiClientOptions["body"],
  options?: RequestOptions,
) {
  return apiRequest<T>(path, { ...options, method: "POST", body });
}

export function apiPatch<T>(
  path: string,
  body?: ApiClientOptions["body"],
  options?: RequestOptions,
) {
  return apiRequest<T>(path, { ...options, method: "PATCH", body });
}

export function apiDelete<T>(path: string, options?: RequestOptions) {
  return apiRequest<T>(path, { ...options, method: "DELETE" });
}
