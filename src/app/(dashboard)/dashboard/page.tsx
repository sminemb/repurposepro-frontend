import { LayoutDashboard } from "lucide-react";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/feedback/page-header";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Track your projects, processing jobs, and generated videos."
      />
      <EmptyState
        icon={LayoutDashboard}
        title="Your workspace is ready"
        description="Your workspace is ready. Create a project later to start repurposing videos."
      />
    </div>
  );
}
