import { AppShell } from "@/components/layout/app-shell";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: Add auth protection in Frontend Phase 9.
  return <AppShell>{children}</AppShell>;
}
