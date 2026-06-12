const LOGIN_ERROR_MESSAGE = "We could not sign you in. Please try again.";
const SIGNUP_ERROR_MESSAGE =
  "We could not create your account. Please try again.";
const DUPLICATE_ACCOUNT_CODES = new Set([
  "USER_ALREADY_EXISTS",
  "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL",
]);

export function getLoginErrorMessage(code?: string) {
  return code === "INVALID_EMAIL_OR_PASSWORD"
    ? "Invalid email or password."
    : LOGIN_ERROR_MESSAGE;
}

export function getSignupErrorMessage(code?: string) {
  return code && DUPLICATE_ACCOUNT_CODES.has(code)
    ? "An account with this email may already exist."
    : SIGNUP_ERROR_MESSAGE;
}
