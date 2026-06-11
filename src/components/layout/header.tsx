import { User } from "lucide-react";

import { ThemeToggle } from "@/components/common/theme-toggle";

export function Header() {
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
          <ThemeToggle />
          <div
            className="flex h-9 items-center gap-2 rounded-lg border bg-card px-3 text-sm font-medium"
            aria-label="Account placeholder"
          >
            <User className="size-4 text-muted-foreground" aria-hidden="true" />
            <span>Creator</span>
          </div>
        </div>
      </div>
    </header>
  );
}
