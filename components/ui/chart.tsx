import AIGEKIA_Signature from "@/components/aigekia-signature";
"use client";

import { forwardRef } from "react";
import { ResponsiveContainer } from "recharts";

import { cn } from "@/lib/utils";

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: Record<string, any>;
}

const ChartContainer = forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ config, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          {children as React.ReactElement}
        </ResponsiveContainer>
      </div>
    );
  }
);
ChartContainer.displayName = "ChartContainer";

interface ChartTooltipProps {
  children: React.ReactNode;
  className?: string;
  cursor?: boolean;
  content?: React.ReactNode;
}

const ChartTooltip = ({
  children,
  className,
  cursor,
  content,
}: ChartTooltipProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

interface ChartTooltipContentProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  nameKey?: string;
  hideLabel?: boolean;
}

const ChartTooltipContent = ({
  active,
  payload,
  label,
  nameKey = "name",
  hideLabel = false,
}: ChartTooltipContentProps) => {
  if (!active || !payload) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-cols-2 gap-2">
        {!hideLabel && label && (
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {label}
            </span>
          </div>
        )}
        {payload.map((item: any, index: number) => (
          <div key={index} className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">
              {item[nameKey]}
            </span>
            <span className="text-xs font-bold text-muted-foreground">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export type ChartConfig = Record<string, { label: string; color?: string }>;

export { ChartContainer, ChartTooltip, ChartTooltipContent };
