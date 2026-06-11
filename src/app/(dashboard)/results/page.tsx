import { Clapperboard } from "lucide-react";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/feedback/page-header";

export default function ResultsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Results"
        description="Preview generated summaries and reels."
      />
      <EmptyState
        icon={Clapperboard}
        title="No generated videos yet"
        description="Generated videos will appear here after processing is connected."
      />
    </div>
  );
}
