import { Settings } from "lucide-react";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/feedback/page-header";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Settings"
        description="Manage account preferences and theme settings."
      />
      <EmptyState
        icon={Settings}
        title="Settings will be expanded later"
        description="Theme controls are available from the header."
      />
    </div>
  );
}
