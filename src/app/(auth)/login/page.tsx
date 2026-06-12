import { LoginForm } from "@/features/auth/components/login-form";
import { getSafeRedirectPath } from "@/features/auth/utils/redirect";

type LoginPageProps = {
  searchParams: Promise<{
    redirect?: string | string[];
    signup?: string | string[];
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { redirect, signup } = await searchParams;

  return (
    <LoginForm
      redirectPath={getSafeRedirectPath(redirect)}
      signupSucceeded={signup === "success"}
    />
  );
}
