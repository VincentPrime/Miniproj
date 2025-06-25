"use client"

import Image from "next/image"
import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./team-swticher"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { title } from "process"
import { url } from "inspector"
// import { NavUser } from "./nav-user"

// This is sample data.
const data = {
 
  navMain: [
    {
      title: "Application",
      url: "#",
      icon: "/icons/application.png",
      isActive: true,
      items: [
        {
          title: "Ecommerce",
          url: "/Dashboard",
          icon: "/icons/money.png"
        },
        {
          title: "Analytics",
          url: "/Analytics",
          icon: "/icons/analysis.png"
        },
        {
          title: "Banking",
          url: "/Banking",
          icon: "/icons/bank.png"
        },
        {
          title:"Booking",
          url: "#",
          icon: "/icons/booking.png"
        },
        {
          title:"File",
          url: "#",
          icon: "/icons/folder.png"
        },
        {
          title:"Course",
          url: "#",
          icon: "/icons/online-learning.png"
        }
      ],
    },
    {
      title: "Management",
      url: "#",
      icon: "/icons/management.png",
      isActive: true,
      items: [
        {
          title: "Product",
          url: "#",
          icon: "/icons/new-product.png"
        },
        {
          title: "Mail",
          url: "#",
          icon: "/icons/email.png"
        },
        {
          title: "Calendar",
          url: "#",
          icon: "/icons/calendar.png"
        },
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Image 
            src="/images/digital.png"
            alt="picrture"
            width={100}
            height={100}
            className="rounded-full"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
     
      </SidebarContent>
    
      <SidebarRail />
    </Sidebar>
  )
}
