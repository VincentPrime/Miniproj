"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { Tooltip,TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip"

export  function Quicktransfer() {
  const [amount, setAmount] = useState([150])

  return (
    <Card>
        <CardHeader className="text-[20px] font-medium">
            Quick Transfer
        </CardHeader>

        <CardContent>
            <CardDescription className="font-medium text-[13px]">INSERT AMOUNT</CardDescription>
            <div className="text-center mb-2">
                <div className="text-5xl font-bold text-gray-900">${amount[0].toLocaleString()}</div>
            </div>
            <Slider value={amount} onValueChange={setAmount} max={1000} min={10} step={10} className="w-full cursor-pointer"/>

            <div className="flex justify-between mt-5">
                <h1 className="font-medium">Your Balance</h1>
                <h1 className="font-medium">$34,100</h1>
            </div>
        </CardContent>


        <CardFooter>
            <Button className="w-full">Transfer now</Button>
        </CardFooter>
    </Card>
  )
}
