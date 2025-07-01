import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card";
import { ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";

export function Sold(){
    return(
       <Card>
       
        <CardContent>
              <div className="flex justify-between">
                <div className="flex flex-col gap-7">
                  <CardDescription className="font-medium text-[15px]">Sold</CardDescription>

                <h1 className="font-bold text-4xl">311k</h1>

                <h1 className="flex font-bold gap-2"><ChartNoAxesCombined className="text-green-500" /> +0.2%</h1>
                </div>
                <Image
                src="/icons/sold.jpg"
                alt=""
                width={150}
                height={150}
                />
              </div>
        </CardContent>
       </Card>
    )
}