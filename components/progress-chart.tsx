import AIGEKIA_Signature from "@/components/aigekia-signature";
"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ProgressChartProps {
  title: string;
  description: string;
  data: Array<{
    name: string;
    value: number;
    fill: string;
  }>;
  total: number;
  percentage: number;
  trend: string;
  subtitle: string;
}

export function ProgressChart({
  title,
  description,
  data,
  total,
  percentage,
  trend,
  subtitle,
}: ProgressChartProps) {
  const chartConfig = {
    value: {
      label: "Progression",
    },
    ...data.reduce(
      (acc, item, index) => ({
        ...acc,
        [item.name]: {
          label: item.name,
          color: `var(--chart-${index + 1})`,
        },
      }),
      {}
    ),
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={data}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip cursor={false}>
              <ChartTooltipContent hideLabel nameKey="name" />
            </ChartTooltip>
            <RadialBar dataKey="value" background>
              <LabelList
                position="insideStart"
                dataKey="name"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          {trend} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">{subtitle}</div>
      </CardFooter>
    </Card>
  );
}
