"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

import { getSafeRedirectPath } from "@/features/auth/utils/redirect";
import { useSession } from "@/lib/auth-client";

type ProtectedRouteProps = Readonly<{
  children: React.ReactNode;
}>;

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();

  React.useEffect(() => {
    if (isPending || session) {
      return;
    }

    const redirectPath = getSafeRedirectPath(pathname);
    router.replace(`/login?redirect=${encodeURIComponent(redirectPath)}`);
  }, [isPending, pathname, router, session]);

  if (isPending || !session) {
    return (
      <main
        className="grid min-h-screen place-items-center px-4"
        aria-busy="true"
      >
        <div
          className="w-full max-w-sm rounded-xl border bg-card p-6 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-sm font-medium">Checking your session...</p>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            Your workspace will open after your session is confirmed.
          </p>
        </div>
      </main>
    );
  }

  return children;
}
