import { describe, expect, it } from "vitest";

import {
  loginSchema,
  signupSchema,
} from "@/features/auth/schemas/auth.schema";

describe("loginSchema", () => {
  it("accepts valid credentials and normalizes the email address", () => {
    const result = loginSchema.parse({
      email: "  creator@example.com  ",
      password: "password123",
    });

    expect(result).toEqual({
      email: "creator@example.com",
      password: "password123",
    });
  });

  it("rejects invalid email addresses", () => {
    const result = loginSchema.safeParse({
      email: "not-an-email",
      password: "password123",
    });

    expect(result.success).toBe(false);
  });

  it("requires passwords to contain at least eight characters", () => {
    const result = loginSchema.safeParse({
      email: "creator@example.com",
      password: "short",
    });

    expect(result.success).toBe(false);
  });
});

describe("signupSchema", () => {
  it("accepts valid account details and normalizes name and email", () => {
    const result = signupSchema.parse({
      name: "  Alex Creator  ",
      email: "  alex@example.com  ",
      password: "password123",
      confirmPassword: "password123",
    });

    expect(result).toEqual({
      name: "Alex Creator",
      email: "alex@example.com",
      password: "password123",
      confirmPassword: "password123",
    });
  });

  it("requires a name between two and eighty characters", () => {
    expect(
      signupSchema.safeParse({
        name: "A",
        email: "alex@example.com",
        password: "password123",
        confirmPassword: "password123",
      }).success,
    ).toBe(false);

    expect(
      signupSchema.safeParse({
        name: "A".repeat(81),
        email: "alex@example.com",
        password: "password123",
        confirmPassword: "password123",
      }).success,
    ).toBe(false);
  });

  it("requires password confirmation to match the password", () => {
    const result = signupSchema.safeParse({
      name: "Alex Creator",
      email: "alex@example.com",
      password: "password123",
      confirmPassword: "different-password",
    });

    expect(result.success).toBe(false);
  });
});
