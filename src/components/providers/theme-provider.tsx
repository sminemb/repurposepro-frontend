"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  useTheme,
} from "next-themes";

function SystemThemePreference() {
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    if (theme !== "system") {
      setTheme("system");
    }
  }, [setTheme, theme]);

  return null;
}

export function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <SystemThemePreference />
      {children}
    </NextThemesProvider>
  );
}
