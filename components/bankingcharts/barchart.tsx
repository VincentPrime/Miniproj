"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart"

const monthlyData = [
  { month: "Jan", income: 78, savings: 45, investment: 23 },
  { month: "Feb", income: 110, savings: 48, investment: 38 },
  { month: "Mar", income: 120, savings: 42, investment: 35 },
  { month: "Apr", income: 85, savings: 58, investment: 32 },
  { month: "May", income: 98, savings: 38, investment: 18 },
  { month: "Jun", income: 108, savings: 55, investment: 28 },
  { month: "Jul", income: 112, savings: 52, investment: 25 },
  { month: "Aug", income: 105, savings: 42, investment: 38 },
  { month: "Sep", income: 92, savings: 48, investment: 22 },
]

const weeklyData = [
  { month: "week 1", income: 95, savings: 35, investment: 15 },
  { month: "week 2", income: 88, savings: 42, investment: 28 },
  { month: "week 3", income: 102, savings: 38, investment: 22 },
  { month: "week 4", income: 78, savings: 45, investment: 18 },
  { month: "week 5", income: 78, savings: 45, investment: 18 },
]

const yearlyData = [
  { month: "2021", income: 85, savings: 40, investment: 25 },
  { month: "2022", income: 95, savings: 45, investment: 30 },
  { month: "2023", income: 105, savings: 48, investment: 32 },
  { month: "2024", income: 98, savings: 44, investment: 28 },
]
const charConfig ={
    income:{
        label: "income",
        color: "#10b981"
    },
    savings: {
        label: "Savings",
        color: "#f59e0b"
    },
    investment: {
        label: "investment",
        color: "#06b6d4"
    }

}

export function Barc() {
  const [timePeriod, setTimePeriod] = useState("Monthly")

  const getData = () => {
    switch (timePeriod) {
      case "Weekly":
        return weeklyData
      case "Yearly":
        return yearlyData
      default:
        return monthlyData
    }
  }

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-2xl font-semibold">Balance statistics</CardTitle>
          <CardDescription className="text-muted-foreground">Statistics on balance over time</CardDescription>
        </div>
        <Select value={timePeriod} onValueChange={setTimePeriod}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Weekly">Weekly</SelectItem>
            <SelectItem value="Monthly">Monthly</SelectItem>
            <SelectItem value="Yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="text-sm text-muted-foreground">Income (+43%)</span>
            </div>
            <div className="text-3xl font-bold">$6,789</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <span className="text-sm text-muted-foreground">Savings (+3%)</span>
            </div>
            <div className="text-3xl font-bold">$1,234</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              <span className="text-sm text-muted-foreground">Investment (+8%)</span>
            </div>
            <div className="text-3xl font-bold">$1,012</div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-80 w-full">
        <ChartContainer config={charConfig} className="h-80 w-full">
            <BarChart
                data={getData()}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis
                dataKey="month"
                axisLine={true}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <YAxis
                axisLine={true}
                tickLine={true}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                domain={[0, 150]}
                ticks={[0, 50, 100, 150]}
                />

                {/* ✅ Tooltip enabled properly within ChartContainer */}
                <ChartTooltip content={<ChartTooltipContent />} />

                <Bar dataKey="income" fill="#10b981" radius={[2, 2, 0, 0]} maxBarSize={20} />
                <Bar dataKey="savings" fill="#f59e0b" radius={[2, 2, 0, 0]} maxBarSize={20} />
                <Bar dataKey="investment" fill="#06b6d4" radius={[2, 2, 0, 0]} maxBarSize={20} />
            </BarChart>
        </ChartContainer>

        </div>
      </CardContent>
    </Card>
  )
}
