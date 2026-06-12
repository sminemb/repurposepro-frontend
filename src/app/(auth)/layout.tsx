import Link from "next/link";

import { ThemeToggle } from "@/components/common/theme-toggle";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen px-4 py-8 sm:px-6">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <main className="mx-auto flex w-full max-w-md flex-col gap-6 py-12 sm:py-16">
        <div className="space-y-2 text-center">
          <Link
            href="/"
            className="inline-block text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            RepurposePro
          </Link>
          <p className="text-sm leading-6 text-muted-foreground">
            A focused workspace for creating video summaries and short reels.
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}
