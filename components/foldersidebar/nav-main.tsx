"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import Image from "next/image"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon | string
    isActive?: boolean
    items?: {
      title: string
      url: string
      icon?: LucideIcon | string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {typeof item.icon === "string" ? (
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={25}
                    height={25}
                    className="mr-2 object-contain"
                  />
                    ) : (
                  item.icon && <item.icon className="mr-2" />
                  )}

                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          {subItem.icon && typeof subItem.icon === "string" && (
                            <Image
                              src={subItem.icon}
                              alt={`${subItem.title} icon`}
                              width={20}
                              height={20}
                              className="mr-2 object-contain inline-block"
                            />
                            )}
                          <span>{subItem.title}</span>
                        </a>
                        
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
