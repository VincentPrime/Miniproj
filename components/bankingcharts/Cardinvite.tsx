"use client"
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {Input} from "../ui/input"
export function Cardinvite(){


    return(
        <Card className="bg-gradient-to-tl from-[#007967] to-[#00A56E] text-white p-10">

        <CardContent>
            <div className="font-medium text-[17px] mb-2">Invite Friends and Earn!</div>
            <div className="text-6xl font-extrabold mb-7">$50</div>
            <div>Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam.</div>
        </CardContent>

        <CardFooter >
            <div className="bg-gray-400 flex p-1 rounded-xl w-full">
                <Input 
                type="text" 
                placeholder="Email" 
                className="border-none shadow-none placeholder:text-gray-300 "/>
            <Button className="bg-[#FFAB00]">
                invite
            </Button>
            </div>
        </CardFooter>
        </Card>
    )
}