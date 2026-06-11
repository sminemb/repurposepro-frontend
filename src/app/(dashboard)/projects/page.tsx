import { FolderKanban } from "lucide-react";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/feedback/page-header";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects"
        description="Manage long-form videos and generated outputs."
      />
      <EmptyState
        icon={FolderKanban}
        title="Projects are not connected yet"
        description="Project data will be connected in a later phase."
      />
    </div>
  );
}
