const DEFAULT_REDIRECT_PATH = "/dashboard";

export function isSafeInternalRedirect(path: unknown): path is string {
  if (
    typeof path !== "string" ||
    path.length === 0 ||
    path.trim() !== path ||
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.includes("\\")
  ) {
    return false;
  }

  try {
    const url = new URL(path, "http://localhost");
    return url.origin === "http://localhost";
  } catch {
    return false;
  }
}

export function getSafeRedirectPath(
  path: unknown,
  fallback: unknown = DEFAULT_REDIRECT_PATH,
) {
  if (isSafeInternalRedirect(path)) {
    return path;
  }

  return isSafeInternalRedirect(fallback) ? fallback : DEFAULT_REDIRECT_PATH;
}
