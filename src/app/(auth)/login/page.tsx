import { LoginForm } from "@/features/auth/components/login-form";

type LoginPageProps = {
  searchParams: Promise<{
    signup?: string | string[];
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { signup } = await searchParams;

  return <LoginForm signupSucceeded={signup === "success"} />;
}
