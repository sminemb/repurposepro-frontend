import Link from "next/link";
import {
  Bell,
  CheckCircle2,
  Clapperboard,
  FolderKanban,
  Upload,
} from "lucide-react";

import { ActionCard } from "@/components/common/action-card";
import { DashboardWelcome } from "@/components/common/dashboard-welcome";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const workflowSteps = [
  {
    title: "Create a project",
    description: "Create a project to organize one long-form video.",
  },
  {
    title: "Upload a video",
    description: "Add an MP4, MOV, MKV, or WEBM file to the project.",
  },
  {
    title: "Start processing",
    description: "Start processing when the uploaded video is ready.",
  },
  {
    title: "Review the outputs",
    description:
      "Generated summaries and reels will appear in Results after processing completes.",
  },
] as const;

const quickActions = [
  {
    title: "Projects",
    description: "Organize long-form videos and manage each workflow.",
    href: "/projects",
    actionLabel: "Go to projects",
    icon: FolderKanban,
  },
  {
    title: "Upload",
    description: "Open the upload area after you have a project ready.",
    href: "/upload",
    actionLabel: "Open upload",
    icon: Upload,
  },
  {
    title: "Results",
    description: "Review generated summaries and reels when they are ready.",
    href: "/results",
    actionLabel: "View results",
    icon: Clapperboard,
  },
  {
    title: "Notifications",
    description: "View workflow updates when notifications are connected.",
    href: "/notifications",
    actionLabel: "Open notifications",
    icon: Bell,
  },
] as const;

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <DashboardWelcome />

      <section className="space-y-5" aria-labelledby="workflow-heading">
        <div className="max-w-2xl space-y-2">
          <h2 id="workflow-heading" className="text-lg font-semibold">
            From long-form video to reusable content
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            RepurposePro keeps the core video workflow clear from setup through
            review.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <li key={step.title}>
              <Card className="h-full shadow-none">
                <CardContent className="p-5">
                  <div className="mb-5 grid size-8 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-5" aria-labelledby="quick-actions-heading">
        <div className="max-w-2xl space-y-2">
          <h2 id="quick-actions-heading" className="text-lg font-semibold">
            Quick actions
          </h2>
          <p className="text-sm leading-6 text-muted-foreground">
            Move directly to the workspace area you need.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <ActionCard key={action.href} {...action} />
          ))}
        </div>
      </section>

      <section aria-labelledby="workspace-ready-heading">
        <Card className="overflow-hidden border-primary/20 shadow-none">
          <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex max-w-2xl gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl border bg-accent text-accent-foreground">
                <CheckCircle2 className="size-5" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <h2
                  id="workspace-ready-heading"
                  className="text-lg font-semibold"
                >
                  Your workspace is ready
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  Create a project first, then upload a video to start
                  generating summaries and reels.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Button asChild>
                <Link href="/projects">Go to projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/upload">Upload video</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
