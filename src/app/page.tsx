import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/common/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-12">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <Badge variant="secondary" className="mb-3 w-fit">
            Phase 3
          </Badge>
          <CardTitle className="text-3xl tracking-tight">
            RepurposePro
          </CardTitle>
          <CardDescription className="text-base leading-7">
            Upload long-form videos and generate summaries, reels, and captions
            from one workspace.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-sm font-medium text-primary">
            Theme system is ready.
          </p>
          <ThemeToggle />
        </CardContent>
      </Card>
    </main>
  );
}
