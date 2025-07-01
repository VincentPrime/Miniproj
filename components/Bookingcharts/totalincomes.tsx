"use client"


import { TrendingUp } from "lucide-react";
import {  Card,CardHeader,CardFooter,CardTitle,CardAction,CardDescription,CardContent,} from "../ui/card";
import { CartesianGrid, LabelList, Line, LineChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { browser: "Jan", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Feb", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Mar", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Apr", visitors: 173, fill: "var(--color-edge)" },
  { browser: "May", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "#898df5",
  },
  Jan: {
    label: "Jan",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Totalincome(){
    return(
        <Card className="bg-[#030899] text-gray-300 font-medium"> 
            <CardHeader>
                <div className="flex justify-between">
                    <div> 
                        <span>Total Booked</span>
                        <h1 className="text-[40px] font-extrabold">$18,700</h1>
                    </div>
                    <div>
                        <span className="flex gap-2"><TrendingUp/>+2.6%</span>
                        <CardDescription>last month</CardDescription>
                    </div>
                </div>
            </CardHeader> 
            <CardContent>
        <ChartContainer config={chartConfig} className="h-19 w-full" >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="visitors"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="visitors"
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-visitors)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey="browser"
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Line>
          </LineChart>
        </ChartContainer>
            </CardContent>
        </Card>
    )
}