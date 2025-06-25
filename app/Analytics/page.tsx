"use client"
import { AppSidebar } from "@/components/foldersidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"



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

import { Linebars } from "@/components/analyticscharts/linechart"
import { Radarchart } from "@/components/analyticscharts/radarchart"
import { Settings } from "lucide-react"
import { Barcharts } from "@/components/analyticscharts/barchart2"
import { Sidechart } from "@/components/analyticscharts/sidechart"
import { Radial } from "@/components/analyticscharts/radial"
import { Linebars2 } from "@/components/analyticscharts/linechart2"
import { Linebars3 } from "@/components/analyticscharts/linechart3"
import { Linebars4 } from "@/components/analyticscharts/linechart4"

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
                    <h1 className="text-4xl font-medium flex">Hi Welcome Back
                      <Image
                      src="/icons/wave.gif"
                      alt=""
                      width={40}
                      height={20}
                      />
                    </h1>
                </div>
      
      
                <div className="grid auto-rows-min gap-4 md:grid-cols-4">
                    <div>
                        <Linebars/>
                    </div>
                    <div >
                         <Linebars2/>
                    </div>
                    <div >
                         <Linebars3/>
                    </div>
                    <div>
                         <Linebars4/>
                    </div>
                </div>
      
                <div className="grid auto-rows-min md:grid-cols-[360px_1fr] grid-cols-1 gap-4 mt-4">
                  <div>
                  <Radarchart/>
                  </div>
                  <div>
                   <Barcharts/>
                  </div>
                </div>

                <div className="grid auto-rows-min md:grid-cols-[1fr_400px] grid-cols-1 gap-4 mt-4">
                  <div>
                  <Sidechart/>
                  </div>
                  <div>
                  <Radial/>
                  </div>
                </div>
                
              </div>
            </SidebarInset>
          </SidebarProvider>
    )
}