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
import { getLoginErrorMessage } from "@/features/auth/lib/auth-errors";
import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas/auth.schema";
import { getSafeRedirectPath } from "@/features/auth/utils/redirect";
import { signIn } from "@/lib/auth-client";

type LoginFormProps = {
  redirectPath?: string;
  signupSucceeded?: boolean;
};

export function LoginForm({
  redirectPath,
  signupSucceeded = false,
}: LoginFormProps) {
  const router = useRouter();
  const safeRedirectPath = getSafeRedirectPath(redirectPath);
  const signupHref = `/signup?redirect=${encodeURIComponent(safeRedirectPath)}`;
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setSubmitError(null);

    try {
      const result = await signIn.email({ email, password });

      if (result.error) {
        setSubmitError(getLoginErrorMessage(result.error.code));
        return;
      }

      router.replace(safeRedirectPath);
      router.refresh();
    } catch {
      setSubmitError(getLoginErrorMessage());
    }
  });

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign in to RepurposePro
        </h1>
        <CardDescription className="leading-6">
          Continue working on your video projects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" noValidate onSubmit={onSubmit}>
          {signupSucceeded ? (
            <p
              className="rounded-lg border border-success/30 bg-success/10 px-3 py-2 text-sm text-foreground"
              role="status"
            >
              Your account is ready. Sign in to continue.
            </p>
          ) : null}

          {submitError ? (
            <p
              className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-foreground"
              role="alert"
            >
              {submitError}
            </p>
          ) : null}

          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              type="email"
              autoComplete="email"
              spellCheck={false}
              aria-describedby={errors.email ? "login-email-error" : undefined}
              aria-invalid={Boolean(errors.email)}
              disabled={isSubmitting}
              {...register("email")}
            />
            {errors.email ? (
              <p
                id="login-email-error"
                className="text-xs text-destructive"
                role="alert"
              >
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <Input
              id="login-password"
              type="password"
              autoComplete="current-password"
              aria-describedby={
                errors.password ? "login-password-error" : undefined
              }
              aria-invalid={Boolean(errors.password)}
              disabled={isSubmitting}
              {...register("password")}
            />
            {errors.password ? (
              <p
                id="login-password-error"
                className="text-xs text-destructive"
                role="alert"
              >
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <Button
            className="w-full"
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center border-t pt-6 text-sm text-muted-foreground">
        New to RepurposePro?{" "}
        <Link
          href={signupHref}
          className="ml-1 font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Create an account
        </Link>
        .
      </CardFooter>
    </Card>
  );
}
