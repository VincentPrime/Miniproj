"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { month: "January", desktop: 170, mobile: 50 },
  { month: "February", desktop: 290, mobile: 150 },
  { month: "March", desktop: 220, mobile: 100 },
  { month: "April", desktop: 70, mobile: 170 },
  { month: "May", desktop: 180, mobile: 130 },
  { month: "June", desktop: 200, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#0261fa",
  },
  mobile: {
    label: "Mobile",
    color: "#f5424e",
  },
} satisfies ChartConfig

export function Linebars2() {
  return (
    <Card className="bg-gradient-to-br from-[#F6E9FF] to-[#E4C5FF]">
      <CardHeader>
        <CardTitle>New Users</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
             <Line
              dataKey="mobile"
              type="natural"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-mobile)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
