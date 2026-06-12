"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";

export function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isSigningOut, setIsSigningOut] = React.useState(false);
  const [signOutError, setSignOutError] = React.useState<string | null>(null);
  const displayName =
    session?.user.name?.trim() || session?.user.email?.trim() || "Creator";

  async function handleSignOut() {
    setIsSigningOut(true);
    setSignOutError(null);

    try {
      const result = await signOut();

      if (result.error) {
        setSignOutError("We could not sign you out. Please try again.");
        return;
      }

      router.replace("/login");
      router.refresh();
    } catch {
      setSignOutError("We could not sign you out. Please try again.");
    } finally {
      setIsSigningOut(false);
    }
  }

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex min-h-16 flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium">Creator Workspace</p>
          <p className="text-xs text-muted-foreground">
            Manage your video repurposing workflow.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div
            className="flex h-9 max-w-52 items-center gap-2 rounded-lg border bg-card px-3 text-sm font-medium"
            aria-label={`Signed in as ${displayName}`}
            title={displayName}
          >
            <User className="size-4 text-muted-foreground" aria-hidden="true" />
            <span className="truncate">{displayName}</span>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={isSigningOut}
            aria-busy={isSigningOut}
            onClick={handleSignOut}
          >
            <LogOut aria-hidden="true" />
            {isSigningOut ? "Signing out..." : "Sign out"}
          </Button>
          {signOutError ? (
            <p className="w-full text-xs text-destructive sm:text-right" role="alert">
              {signOutError}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
