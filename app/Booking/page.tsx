import { AppSidebar } from "@/components/foldersidebar/app-sidebar";
import { SheetDemo } from "@/components/side/side-bar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import {Command,CommandInput,} from "@/components/ui/command"
import { Settings } from "lucide-react";
import { Sold } from "@/components/Bookingcharts/sold";
import { Totalbook } from "@/components/Bookingcharts/totalbook";
import { Canceled } from "@/components/Bookingcharts/canceled";
import { TableDemo } from "@/components/bankingcharts/bread";
import { Radial } from "@/components/analyticscharts/radial";
import { Totalincome } from "@/components/Bookingcharts/totalincomes";
import { Booked } from "@/components/Bookingcharts/Booked";
import { Soldchart } from "@/components/Bookingcharts/soldchart";
import { Pending } from "@/components/Bookingcharts/pedingpayment";
import { Tour } from "@/components/Bookingcharts/ToursAvaild";

export default function Booking(){
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

              <div>
                    {/*  */}
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3 m-5">
                    <div> <Totalbook/> </div>

                    <div> <Sold/> </div>

                    <div> <Canceled/> </div>
                    </div>

                    {/* 2nd */}
                    <div className="grid auto-rows-min md:grid-cols-[1fr_400px] grid-cols-1 gap-4 m-5">
                       {/* 1st page */}
                       <div className="bg-gray-300 rounded-2xl p-2">
                          <div className=" flex flex-col md:flex-row gap-2 bg-gray-100 p-2 rounded-2xl">
                               <div className="flex-1">
                                  <Totalincome />
                                </div>
                                <div className="flex-1">
                                  <Booked />
                                </div>
                          </div>
                          <div className="flex flex-col md:flex-row gap-2 bg-gray-100 p-2 rounded-2xl mt-2">
                              <div className="flex-1">
                                  <Soldchart/>
                              </div>

                              <div className="flex-1">
                                  <Pending/>
                              </div>
                          </div>
                       </div>
                       <div className="h-full">
                        <Tour/>
                       </div>

                       {/* 2nd page */}
                       <div>
                        
                       </div>

                    </div>
                
               
                </div>


            </SidebarInset>
          </SidebarProvider>
        </>
    )
}