import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ActionCardProps = Readonly<{
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: LucideIcon;
}>;

export function ActionCard({
  title,
  description,
  href,
  actionLabel,
  icon: Icon,
}: ActionCardProps) {
  return (
    <Card className="flex h-full flex-col shadow-none">
      <CardHeader className="gap-4 pb-3">
        <div className="grid size-10 place-items-center rounded-lg border bg-muted/50 text-muted-foreground">
          <Icon className="size-4" aria-hidden="true" />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-6 text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link href={href}>
            {actionLabel}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
