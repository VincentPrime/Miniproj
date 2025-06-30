"use client"

import { useState, useMemo } from "react"
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown, Info, Plus, ArrowDownToLine, Car } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

export function Income() {
  const [income, setIncome] = useState(9990)
  const [expenses, setExpenses] = useState(1989)
  const [activeCard, setActiveCard] = useState<"income" | "expenses" | null>("income")

  // Calculate total balance
  const totalBalance = income - expenses

  // Generate chart data based on income and expenses
  const chartData = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]

    if (activeCard === "income") {
      // Show income growth pattern
      return months.map((month, index) => ({
        month,
        value: 20 + index * 15 + Math.sin(index * 0.5) * 8,
      }))
    } else if (activeCard === "expenses") {
      // Show expenses pattern (more volatile)
      return months.map((month, index) => ({
        month,
        value: 45 + index * 8 + Math.sin(index * 0.8) * 12,
      }))
    }

    // Default balanced view
    return months.map((month, index) => ({
      month,
      value: 30 + index * 12 + Math.sin(index * 0.6) * 10,
    }))
  }, [activeCard])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleIncomeClick = () => {
    // Generate more accurate chart data based on income
    setActiveCard("income")
  }

  const handleExpensesClick = () => {
    // Generate more accurate chart data based on expenses
    setActiveCard("expenses")
  }

  return (
    <Card className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Total balance</span>
            <Info className="h-4 w-4" />
          </div>
          <div className="text-4xl font-bold">{formatCurrency(totalBalance)}</div>
        </div>

        <div className="flex flex-wrap gap-2 justify-end sm:flex-nowrap">
          <Button variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200 sm:w-auto">
            <ArrowUp className="h-4 w-4 mr-2" />
            Send
          </Button>
          <Button variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200 sm:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            Add card
          </Button>
          <Button variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200 sm:w-auto">
            <ArrowDownToLine className="h-4 w-4 mr-2" />
            Request
          </Button>
        </div>
      </div>

      {/* Income and Expenses Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-2 p-2 rounded-2xl">
        {/* Income Card */}
        <Card
          className={`bg-gray-50 cursor-pointer transition-all hover:shadow-md ${activeCard === "income" ? "ring-2 ring-teal-500" : ""}`}
          onClick={handleIncomeClick}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Income</span>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                <ArrowUp className="h-3 w-3" />
                <span>+8.2%</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-600">{formatCurrency(income)}</div>
            </div>
          </CardContent>
        </Card>

        {/* Expenses Card */}
        <Card
          className={`bg-gray-50 cursor-pointer transition-all hover:shadow-md ${activeCard === "expenses" ? "ring-2 ring-amber-500" : ""}`}
          onClick={handleExpensesClick}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Expenses</span>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded text-sm">
                <ArrowDown className="h-3 w-3" />
                <span>-6.6%</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-600">{formatCurrency(expenses)}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card className="border-none shadow-none">
        <CardContent className="p-6">
          <ChartContainer
            config={{
              value: {
                label: "Balance Growth",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="min-h-[100px]"
          >
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 12,
                bottom: 12,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={true} tickMargin={8} className="text-xs" />
              <YAxis tickLine={false} axisLine={true} tickMargin={8} className="text-xs" />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Line
                dataKey="value"
                type="monotone"
                stroke="#ea580c"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#ea580c",
                }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </Card>
  )
}
