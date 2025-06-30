import { ChevronRight, Link, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import Image from "next/image"

const contacts = [
  {
    name: "Melanie Noble",
    email: "luella.ryan33@gmail.com",
  },
  {
    name: "Chase Day",
    email: "joana.simonis84@gmail.com",
  },
  {
    name: "Shawn Manning",
    email: "marjolaine.white94@gmail.com",
  },
  {
    name: "Soren Durham",
    email: "vergie.block82@hotmail.com",
  },
  {
    name: "Cortez Herring",
    email: "vito.hudson@hotmail.com",
  },
]

export function Contacts() {
  return (
    <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Contacts</h1>
            <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <span className="text-sm font-medium">View all</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <p className="text-gray-500 text-sm">You have 122 contacts</p>
        </CardHeader>

        <CardContent>
          <div>
            {contacts.map((contact, index) => (
              <Card key={index} className="border-0 shadow-none hover:bg-gray-50 transition-colors cursor-pointer">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gray-400">
                          <User className="w-5 h-5 text-white" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-500">{contact.email}</p>
                      </div>
                    </div>
                    <Tooltip>
                        <TooltipTrigger >
                              <Image
                                src="/icons/arrows.png"
                                alt=""
                                width={20}
                                height={20}
                                className="hover:bg-gray-200 rounded-full"
                                />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Quick Transfer</p>
                        </TooltipContent>
                    </Tooltip>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
  )
}
