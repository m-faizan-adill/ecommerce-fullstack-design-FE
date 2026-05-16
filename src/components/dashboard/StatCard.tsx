import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Props {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down";
  icon: LucideIcon;
}

export function StatCard({ label, value, delta, trend = "up", icon: Icon }: Props) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-primary">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-3 text-2xl font-bold">{value}</p>
      {delta && (
        <p
          className={cn(
            "mt-1 text-xs font-medium",
            trend === "up" ? "text-success" : "text-destructive",
          )}
        >
          {trend === "up" ? "▲" : "▼"} {delta} vs last week
        </p>
      )}
    </div>
  );
}
