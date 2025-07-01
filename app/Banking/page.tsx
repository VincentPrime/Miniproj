import { AppSidebar } from "@/components/foldersidebar/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import {Command,CommandInput,} from "@/components/ui/command"
import { Settings } from "lucide-react";
import { SheetDemo } from "@/components/side/side-bar";
import { Income } from "@/components/bankingcharts/income";
import { Radial } from "@/components/analyticscharts/radial";
import { Barc } from "@/components/bankingcharts/barchart";
import { Piec } from "@/components/bankingcharts/piechart";
import { TableDemo } from "@/components/bankingcharts/bread";
import { Contacts } from "@/components/bankingcharts/Contacts";
import { Cardinvite } from "@/components/bankingcharts/Cardinvite";
import { Quicktransfer } from "@/components/bankingcharts/Quicktransfer";


export default function Banking(){
    return(
        <>
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

              <div className="grid auto-rows-min md:grid-cols-[1fr_400px] grid-cols-1 gap-4 m-5">
                {/*  */}
                <div>
                  <Income />

                <div className="mt-3">
                  <Barc />
                </div>
                <div className="mt-3">
                  <Piec/>
                </div>

                <div>
                  <TableDemo/>
                </div>

                </div>
                {/* 2nd */}
                <div className="flex flex-col gap-4">
                    <div>
                      <Radial/>
                    </div>

                    <div>
                      <Contacts/>
                    </div>

                    <div>
                      <Cardinvite/>
                    </div>

                    <div>
                      <Quicktransfer/>
                    </div>
                </div>
                
               
              </div>


            </SidebarInset>
          </SidebarProvider>
        </>
    )
}