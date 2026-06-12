import { describe, expect, it } from "vitest";

import {
  getLoginErrorMessage,
  getSignupErrorMessage,
} from "@/features/auth/lib/auth-errors";

describe("getLoginErrorMessage", () => {
  it("uses a safe credential message for invalid credentials", () => {
    expect(getLoginErrorMessage("INVALID_EMAIL_OR_PASSWORD")).toBe(
      "Invalid email or password.",
    );
  });

  it("does not expose unknown backend errors", () => {
    expect(getLoginErrorMessage("INTERNAL_DATABASE_ERROR")).toBe(
      "We could not sign you in. Please try again.",
    );
  });
});

describe("getSignupErrorMessage", () => {
  it("uses a safe duplicate account message", () => {
    expect(getSignupErrorMessage("USER_ALREADY_EXISTS")).toBe(
      "An account with this email may already exist.",
    );
    expect(getSignupErrorMessage("USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL")).toBe(
      "An account with this email may already exist.",
    );
  });

  it("does not expose unknown backend errors", () => {
    expect(getSignupErrorMessage("INTERNAL_DATABASE_ERROR")).toBe(
      "We could not create your account. Please try again.",
    );
  });
});
