type PageHeaderProps = Readonly<{
  title: string;
  description: string;
}>;

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h1>
      <p className="text-sm leading-6 text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
}
