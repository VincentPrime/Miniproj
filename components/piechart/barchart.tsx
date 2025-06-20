"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { month: "January", Asia: 186, Europe: 80, America: 100},
  { month: "February", Asia: 305, Europe: 200, America: 100 },
  { month: "March", Asia: 237, Europe: 120,America: 100 },
  { month: "April", Asia: 73, Europe: 190, America: 100 },
  { month: "May", Asia: 209, Europe: 130, America: 100 },
  { month: "June", Asia: 214, Europe: 140, America: 100 },
]


const chartConfig = {
  Asia: {
    label: "Asia",
    color: "#f22207",
  },
  Europe: {
    label: "Europe",
    color: "#0789f2",
  },
  America:{
    label: "America",
    color: "#9600b0"
  }
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Installed</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={20}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="Asia"
              fill="var(--color-Asia)"
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="Europe"
              fill="var(--color-Europe)"
              radius={[4, 4, 4, 4]}
            />
            <Bar
            dataKey="America"
              fill="var(--color-America)"
              radius={[4, 4, 4, 4]}
            />

          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
