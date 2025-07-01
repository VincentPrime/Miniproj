"use client"
import { Card,CardHeader,CardFooter,CardTitle,CardAction,CardDescription,CardContent } from"../ui/card"
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "#145ff5",
  },
} satisfies ChartConfig

export function Soldchart(){
    return(
<Card>
    <CardContent className="flex justify-center gap-4">
    <div className="">
        <ChartContainer
          config={chartConfig}
          className="h-25 w-full"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={40}
            outerRadius={60}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[45, 35]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                       
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
    </div>
    <div className=" pt-5">
        <span className="font-bold text-[20px]">38,566</span>
        <CardDescription className="font-medium">Sold</CardDescription>
    </div>
    </CardContent>
</Card>
    )
}