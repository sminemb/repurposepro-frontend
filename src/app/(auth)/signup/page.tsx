import { SignupForm } from "@/features/auth/components/signup-form";
import { getSafeRedirectPath } from "@/features/auth/utils/redirect";

type SignupPageProps = {
  searchParams: Promise<{
    redirect?: string | string[];
  }>;
};

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const { redirect } = await searchParams;

  return <SignupForm redirectPath={getSafeRedirectPath(redirect)} />;
}
