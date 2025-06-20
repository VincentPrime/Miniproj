"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Badge, badgeVariants } from "@/components/ui/badge"
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
           <div className="relative w-fit">
            <Image
              src="/images/baby.jpeg"
              alt="baby"
              width={50}
              height={50}
              className="rounded-full border cursor-pointer"
            />
            <Badge variant="destructive" className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5">1</Badge>
          </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="items-center mt-10 pb-10  border-b-2 border-dotted">
            <Image
                src="/images/baby.jpeg"
                alt="baby"
                width={100}
                height={100}
                className="rounded-full border"
            />
          <SheetTitle>
            Maxene Dionisio
          </SheetTitle>
          <SheetDescription>
           Maxenedionisio@.com
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="p-2 hover:[background-color:#cfcfcf] rounded-xl ">
           <a href="#" className="flex gap-2">
             <Image
            src="/icons/house.png"
            alt=""
            width={23}
            height={20}
            />
            Home
           </a>
          </div>
          <div className="p-2 hover:[background-color:#cfcfcf] rounded-xl ">
           <a href="#" className="flex gap-2">
            <Image
            src="/icons/user.png"
            alt=""
            width={23}
            height={20}
            />
           Profile
           </a>
          </div>
          <div className="p-2 hover:[background-color:#cfcfcf] rounded-xl ">
            <a href="#" className="flex gap-2">
            <div className="relative w-fit">
            <Image
            src="/icons/chat.png"
            alt=""
            width={23}
            height={20}
            />
               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                1
                </span>
            </div>
            Chats
           </a>
          </div>
          <div className="p-2 hover:[background-color:#cfcfcf] rounded-xl  ">
           <a href="#" className="flex gap-2">
            <Image
            src="/icons/gear.png"
            alt=""
            width={23}
            height={20}
            />
           Account Settings
           </a>
          </div>

          <div className="p-2 hover:[background-color:#cfcfcf] rounded-xl  ">
            <a href="#" className="flex gap-2">
              <Image
              src="/icons/shield.png"
              alt=""
              width={23}
              height={20}
              />
              Security
            </a>
          </div>
        </div>
        <SheetFooter>
          <Button>
            <Link href="/">Lagout</Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
