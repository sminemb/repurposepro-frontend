import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-12 sm:px-6">
      <Card className="min-w-0 w-full max-w-xl">
        <CardHeader>
          <Badge variant="secondary" className="mb-3 w-fit">
            Auth pages are ready.
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight">
            RepurposePro
          </h1>
          <CardDescription className="text-base leading-7">
            Turn long-form videos into a focused summary and vertical highlight
            reels from one workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Sign in or create an account to start your RepurposePro workflow.
            Dashboard protection will be added in Frontend Phase 9.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup">Create account</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/dashboard">Open dashboard</Link>
            </Button>
            <ThemeToggle />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
