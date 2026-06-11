import { Upload } from "lucide-react";

import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/feedback/page-header";

export default function UploadPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Upload"
        description="Upload a long-form video to prepare it for processing."
      />
      <EmptyState
        icon={Upload}
        title="Upload workflow is coming later"
        description="Upload flow will be added in a later phase."
      />
    </div>
  );
}
