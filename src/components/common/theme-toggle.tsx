"use client";

import * as React from "react";
import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

type ThemeOption = {
  value: "light" | "dark" | "system";
  label: string;
  icon: LucideIcon;
};

const themeOptions: ThemeOption[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

const subscribe = () => () => {};

export function ThemeToggle() {
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <div
      className="flex w-fit gap-1 rounded-lg border bg-muted/50 p-1"
      role="group"
      aria-label="Choose color theme"
    >
      {themeOptions.map(({ value, label, icon: Icon }) => {
        const isActive = mounted && theme === value;
        const systemResolution =
          value === "system" && mounted && systemTheme
            ? ` (currently ${systemTheme})`
            : "";

        return (
          <Button
            key={value}
            type="button"
            size="sm"
            variant={isActive ? "secondary" : "ghost"}
            className="gap-1.5"
            aria-label={`Use ${label.toLowerCase()} theme${systemResolution}`}
            aria-pressed={isActive}
            disabled={!mounted}
            onClick={() => setTheme(value)}
          >
            <Icon aria-hidden="true" />
            {label}
          </Button>
        );
      })}
    </div>
  );
}
