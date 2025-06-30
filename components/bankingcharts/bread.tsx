import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardFooter, CardHeader } from "../ui/card"
import { BreadcrumbEllipsis, BreadcrumbItem } from "../ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronRight, CloudDownload, Printer, Share2, Trash2, UserRound } from "lucide-react"

const invoices = [
  {

    invoice: "Iasdas",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentDates: "26 June 2025",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentDates: "26 June 2025"
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentDates: "26 June 2025"
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentDates: "26 June 2025"
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentDates: "26 June 2025"
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentDates: "26 June 2025"
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentDates: "26 June 2025"
  },
]

export function TableDemo() {
  return (
    <Card className="mt-4 p-6 bg-gradient-to-tl from-[#FEF0ED] to-[#E9F9FC]">
        <CardHeader className="font-medium text-xl">
            Recent Transitions 
        </CardHeader>
    <Table>
      <TableHeader>
        <TableRow >
          <TableHead className="w-[200px]">Description</TableHead>
          <TableHead>Dates</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right pr-17">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium flex gap-4"><UserRound className="bg-gray-400 rounded-b-full w-10 h-10"/>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentDates}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell className="text-right pr-10">{invoice.paymentStatus}
        <BreadcrumbItem className="ml-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="flex flex-col gap-4 bg-gradient-to-tl from-[#E9F9FC] to-[#FEF0ED] p-2 rounded-2xl">
              <DropdownMenuItem className="flex gap-2 p-2"> <CloudDownload/> Download</DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 p-2"> <Printer/> Print</DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 p-2"> <Share2/> Share</DropdownMenuItem>
              <DropdownMenuItem className="flex gap-2 p-2 text-[#FBA390]"> <Trash2/> Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
            </TableCell>
          </TableRow> 
        ))}
      </TableBody>
    </Table>
    <CardFooter  className="font-medium  ">
       <span className="hover:bg-[#F0F0F0] cursor-pointer flex p-2 pl-4 rounded-2xl">View all <ChevronRight/></span>
    </CardFooter>
    </Card>
  )
}
