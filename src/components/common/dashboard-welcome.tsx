"use client";

import { useSession } from "@/lib/auth-client";

export function DashboardWelcome() {
  const { data: session } = useSession();
  const displayName = session?.user.name?.trim() || "Creator";

  return (
    <header className="max-w-3xl space-y-3">
      <p className="text-sm font-medium text-primary">
        Welcome back, {displayName}
      </p>
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Dashboard
      </h1>
      <p className="text-sm leading-6 text-muted-foreground sm:text-base">
        Upload long-form videos, start processing jobs, and review generated
        summaries and reels from one workspace.
      </p>
    </header>
  );
}
