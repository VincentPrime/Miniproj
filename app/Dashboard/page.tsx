"use client"
import { AppSidebar } from "@/components/foldersidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import Image from "next/image"
import{
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 70 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#08a671",
  },
  desktop1:{
     label: "Desktop1",
    color: "#02cff7",
  },
  desktop3:{
    color:"#faa405"
  }
} satisfies ChartConfig
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import{
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@/components/ui/command"

import { SheetDemo } from "@/components/side/side-bar"
import { ChartPieDonutText } from "@/components/piechart/pie-chart"
import {Component} from "@/components/piechart/barchart"



export default function Page() {
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow flex h-16  items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-2">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb className="w-full">
              <BreadcrumbList className="flex justify-between">
                <BreadcrumbItem>
                  Dashboard
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <Command className="border">
                        <CommandInput placeholder="input"/>
                    </Command>
                    <Image
                    src="/icons/sett.gif"
                    alt="Settings"
                    width={30}
                    height={30}
                    />
                    <SheetDemo />
  
                </BreadcrumbItem >
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 ">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <Card className="bg-muted/50 aspect-video rounded-xl bg-gradient-to-r from-gray-500 to-black p-5">
                <h1 className="text-white">vincent</h1>
            </Card>
            <Carousel opts={{ loop: true }} className=" relative bg-muted/50 aspect-video rounded-xl bg-gradient-to-r from-gray-500 to-black p-5">
            
              <CarouselContent className="w-full">
                <CarouselItem className="p-10">
                  <span>FEATURED APP</span>
                  <p>asdhasdh</p>
                </CarouselItem>
                <CarouselItem>asdjad</CarouselItem>
                <CarouselItem>ssss</CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow" />

            </Carousel>
          </div>


          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <Card className="bg-muted/50 rounded-xl w-full">
                <CardHeader>
                  <CardTitle>Total Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="w-40 h-20">
                    <BarChart data={chartData} margin={{ top: 0 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={5}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5}>
                          <LabelList
                            position="top"
                            className="hidden"
                            fontSize={12}
                          />
                        </Bar>
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
              
            
            {/* 2nd */}
            <Card className="bg-muted/50 rounded-xl w-full">
                <CardHeader>
                  <CardTitle>Total Installed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="w-40 h-20">
                    <BarChart data={chartData} margin={{ top: 0 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={5}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop1)" radius={5}>
                          <LabelList
                            position="top"
                            className="hidden"
                            fontSize={12}
                          />
                        </Bar>
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

              {/* 3rd */}
              <Card className="bg-muted/50 rounded-xl w-full">
                <CardHeader>
                  <CardTitle>Total Downloads</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="w-40 h-20">
                    <BarChart data={chartData} margin={{ top: 0 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={5}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop3)" radius={5}>
                          <LabelList
                            position="top"
                            className="hidden"
                            fontSize={12}
                          />
                        </Bar>
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
          </div>

          <div className="grid auto-rows-min md:grid-cols-[360px_1fr] grid-cols-1 gap-4">
            <div className="rounded-xl">
              <ChartPieDonutText/>
            </div>
            <div className=" rounded-xl">
              <Component />
            </div>
          </div>
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
