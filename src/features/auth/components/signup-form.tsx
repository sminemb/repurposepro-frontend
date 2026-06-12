"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSignupErrorMessage } from "@/features/auth/lib/auth-errors";
import {
  signupSchema,
  type SignupFormValues,
} from "@/features/auth/schemas/auth.schema";
import { signUp } from "@/lib/auth-client";

export function SignupForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(async ({ name, email, password }) => {
    setSubmitError(null);

    try {
      const result = await signUp.email({ name, email, password });

      if (result.error) {
        setSubmitError(getSignupErrorMessage(result.error.code));
        return;
      }

      router.replace(result.data?.token ? "/dashboard" : "/login?signup=success");
      router.refresh();
    } catch {
      setSubmitError(getSignupErrorMessage());
    }
  });

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold tracking-tight">
          Create your RepurposePro account
        </h1>
        <CardDescription className="leading-6">
          Start turning long-form videos into summaries and short reels.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" noValidate onSubmit={onSubmit}>
          {submitError ? (
            <p
              className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-foreground"
              role="alert"
            >
              {submitError}
            </p>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="signup-name">Name</Label>
            <Input
              id="signup-name"
              type="text"
              autoComplete="name"
              aria-describedby={errors.name ? "signup-name-error" : undefined}
              aria-invalid={Boolean(errors.name)}
              disabled={isSubmitting}
              {...register("name")}
            />
            {errors.name ? (
              <p
                id="signup-name-error"
                className="text-xs text-destructive"
                role="alert"
              >
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              type="email"
              autoComplete="email"
              spellCheck={false}
              aria-describedby={errors.email ? "signup-email-error" : undefined}
              aria-invalid={Boolean(errors.email)}
              disabled={isSubmitting}
              {...register("email")}
            />
            {errors.email ? (
              <p
                id="signup-email-error"
                className="text-xs text-destructive"
                role="alert"
              >
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <Input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              aria-describedby={
                errors.password ? "signup-password-error" : undefined
              }
              aria-invalid={Boolean(errors.password)}
              disabled={isSubmitting}
              {...register("password")}
            />
            {errors.password ? (
              <p
                id="signup-password-error"
                className="text-xs text-destructive"
                role="alert"
              >
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="signup-confirm-password">Confirm password</Label>
            <Input
              id="signup-confirm-password"
              type="password"
              autoComplete="new-password"
              aria-describedby={
                errors.confirmPassword
                  ? "signup-confirm-password-error"
                  : undefined
              }
              aria-invalid={Boolean(errors.confirmPassword)}
              disabled={isSubmitting}
              {...register("confirmPassword")}
            />
            {errors.confirmPassword ? (
              <p
                id="signup-confirm-password-error"
                className="text-xs text-destructive"
                role="alert"
              >
                {errors.confirmPassword.message}
              </p>
            ) : null}
          </div>

          <Button
            className="w-full"
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Creating account..." : "Create account"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center border-t pt-6 text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/login"
          className="ml-1 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Sign in
        </Link>
        .
      </CardFooter>
    </Card>
  );
}
