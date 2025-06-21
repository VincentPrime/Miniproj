"use client"
import { AppSidebar } from "@/components/foldersidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
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
import { Linebars } from "@/components/piechart/linechart"
import { Radarchart } from "@/components/piechart/radarchart"
import { Settings } from "lucide-react"

export default function Analytics(){
    return(
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
                        <Settings className="hover:animate-spin w-7 h-7"/>

                        
                          <SheetDemo />
        
                      </BreadcrumbItem >
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </header>

              <div className="flex flex-1 flex-col gap-4 p-4 ">
                <div className="grid auto-rows-min">
                    <h1 className="text-4xl font-medium">Hi Welcome Back</h1>
                </div>
      
      
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div>
                        <Linebars/>
                    </div>
                    <div >
                         <Linebars/>
                    </div>
                    <div >
                         <Linebars/>
                    </div>
                    <div>
                         <Linebars/>
                    </div>
                </div>
      
                <div className="grid auto-rows-min md:grid-cols-[360px_1fr] grid-cols-1 gap-4">
                  <div>
                    <Radarchart/>
                  </div>
                  <div>
                   <Component/>
                  </div>
                </div>
                
              </div>
            </SidebarInset>
          </SidebarProvider>
    )
}