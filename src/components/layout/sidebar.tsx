"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Clapperboard,
  FolderKanban,
  LayoutDashboard,
  Scissors,
  Settings,
  Upload,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type NavigationItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navigationItems: NavigationItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/upload", label: "Upload", icon: Upload },
  { href: "/results", label: "Results", icon: Scissors },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b bg-card/40 lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-b-0">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-3 px-4 py-4 lg:px-5 lg:py-6">
          <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Clapperboard className="size-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <Link
              href="/dashboard"
              className="block truncate text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              RepurposePro
            </Link>
            <p className="truncate text-xs text-muted-foreground">
              Creator Workspace
            </p>
          </div>
        </div>

        <nav
          className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-1 lg:flex-col lg:overflow-visible lg:pb-5"
          aria-label="Workspace navigation"
        >
          {navigationItems.map(({ href, label, icon: Icon }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex shrink-0 items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:w-full",
                  isActive
                    ? "border-primary/25 bg-accent font-medium text-accent-foreground"
                    : "hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span>{label}</span>
                {isActive ? <span className="sr-only">(current page)</span> : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
