"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"
import { Tooltip } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
const chartData = [
  { title:"Asia", browser: "Asia", visitors: 275, fill: "var(--color-Asia)" },
  { title:"America",browser: "America", visitors: 200, fill: "var(--color-America)" },
  { title:"Europe",browser: "Europe", visitors: 187, fill: "var(--color-Europe)" },
  { title:"Africa",browser: "Africa", visitors: 173, fill: "var(--color-Africa)" },
]

const chartConfig = {
  Asia: {
    label: "Asia",
    color: "#E76E50",
  },
  America: {
    label: "America",
    color: "#2A9D90",
  },
  Europe: {
    label: "Europe",
    color: "#F4A462",
  },
  Africa: {
    label: "Africa",  
    color: "#F1C75A",
  },

} satisfies ChartConfig

export function Radarchart() {
  return (
    <Card className="flex flex-col ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Current Visits</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="browser"/>}
            />
            
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="browser"/>} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
