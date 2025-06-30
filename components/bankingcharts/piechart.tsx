"use client"

import {
  Gamepad2,
  Fuel,
  Coffee,
  Utensils,
  HeartIcon as HeartPlus,
  ShoppingBasket,
  Dumbbell,
  Signal,
  TrendingUp,
} from "lucide-react"
import { PolarGrid, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {  Separator } from "@/components/ui/separator"

const chartData = [
  { browser: "entertaiment", visitors: 22, fill: "var(--color-entertaiment)" },
  { browser: "foods", visitors: 16, fill: "var(--color-foods)" },
  { browser: "Connection", visitors: 14, fill: "var(--color-Connection)" },
  { browser: "Fitness", visitors: 10, fill: "var(--color-Fitness)" },
  { browser: "Fuel", visitors: 18, fill: "var(--color-Fuel)" },
  { browser: "Cafe", visitors: 17, fill: "var(--color-Cafe)" },
  { browser: "HealthCare", visitors: 22, fill: "var(--color-HealthCare)" },
  { browser: "SuperMarket", visitors: 21, fill: "var(--color-SuperMarket)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  entertaiment: {
    label: "entertaiment",
    color: "",
  },
  foods: {
    label: "foods",
    color: "#f522e0",
  },
  Connection: {
    label: "Connection",
    color: "#944703",
  },
  Fitness: {
    label: "Fitness",
    color: "#3b02f5",
  },
  Fuel: {
    label: "Fuel",
    color: "#f59105",
  },
   Cafe: {
    label: "Cafe",
    color: "#f7f00f",
  },
   HealthCare: {
    label: "HealthCare",
    color: "#02faa3",
  },
   SuperMarket: {
    label: "SuperMarket",
    color: "#f52222",
  },
} satisfies ChartConfig

export function Piec() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Expenses categories</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col md:flex-row items-center gap-8 p-6">
        <div className="flex-shrink-0">
          <ChartContainer config={chartConfig} className="aspect-square h-[250px] w-[250px]">
            <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey="browser" />} />
              <PolarGrid gridType="circle" />
              <RadialBar dataKey="visitors" />
            </RadialBarChart>
          </ChartContainer>
        </div>
        <div className="flex-1 flex justify-center font-medium">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <span className="flex gap-2 items-center">
              <Gamepad2 size={20} />
              Entertaiment
            </span>
            <span className="flex gap-2 items-center">
              <Fuel size={20} />
              Fuel
            </span>
            <span className="flex gap-2 items-center">
              <Utensils size={20} />
              foods
            </span>
            <span className="flex gap-2 items-center">
              <Coffee size={20} />
              Cafe
            </span>
            <span className="flex gap-2 items-center">
              <Signal size={20} />
              Connection
            </span>
            <span className="flex gap-2 items-center">
              <HeartPlus size={20} />
              HealthCare
            </span>
            <span className="flex gap-2 items-center">
              <Dumbbell size={20} className="bg-[#f522e0] text-white"/>
              Fitness
            </span>
            <span className="flex gap-2 items-center">
              <ShoppingBasket size={20} />
              Supermarket
            </span>
          </div>
        </div>
      </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
        <div className="w-full pt-6 border-t border-gray-200">
          <div className="flex justify-evenly items-center">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Categories</p>
              <p className="text-2xl font-bold">9</p>
            </div>
            <Separator orientation="vertical" className=" data-[orientation=vertical]:h-10" />
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Total</p>
              <p className="text-2xl font-bold">$18,765</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}


    