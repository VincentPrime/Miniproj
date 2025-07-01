import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";

export function Canceled(){
    return(
        <Card>
               <CardContent>
                     <div className="flex justify-between">
                       <div className="flex flex-col gap-7">
                         <CardDescription className="font-medium text-[15px]">Canceled</CardDescription>
       
                       <h1 className="font-bold text-4xl">714k</h1>
       
                       <h1 className="flex font-bold gap-2"><ChartNoAxesCombined className="text-red-500" /> -0.1% </h1>
                       </div>
                       <Image
                       src="/icons/canceled.jpg"
                       alt=""
                       width={150}
                       height={150}
                       className="rounded-4xl"
                       />
                     </div>
               </CardContent>
        </Card>
    )
}