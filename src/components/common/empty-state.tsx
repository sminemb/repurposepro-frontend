import { type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type EmptyStateProps = Readonly<{
  title: string;
  description: string;
  icon?: LucideIcon;
}>;

export function EmptyState({
  title,
  description,
  icon: Icon,
}: EmptyStateProps) {
  return (
    <Card className="border-dashed shadow-none">
      <CardContent className="flex min-h-72 flex-col items-center justify-center px-6 py-12 text-center">
        {Icon ? (
          <div className="mb-5 grid size-12 place-items-center rounded-xl border bg-muted/50 text-muted-foreground">
            <Icon className="size-5" aria-hidden="true" />
          </div>
        ) : null}
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
