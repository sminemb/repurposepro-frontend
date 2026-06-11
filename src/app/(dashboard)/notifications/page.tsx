import { Bell } from "lucide-react";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/feedback/page-header";

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Notifications"
        description="View updates about uploads, processing, and generated videos."
      />
      <EmptyState
        icon={Bell}
        title="Notifications are not connected yet"
        description="Notifications will be connected in a later phase."
      />
    </div>
  );
}
