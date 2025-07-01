import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export  function Booked() {
  const bookingData = [
    {
      status: "PENDING",
      value: "9.91k",
      progress: 45,
      color: "bg-yellow-500",
    },
    {
      status: "CANCELED",
      value: "1.95k",
      progress: 20,
      color: "bg-red-500",
    },
    {
      status: "SOLD",
      value: "9.12k",
      progress: 100,
      color: "bg-green-500",
    },
  ]

  return (
    <Card className="w-full max-w-md border-none shadow-none bg-gray-100 *:">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold text-gray-900">Booked</CardTitle>
      </CardHeader>
      <CardContent className="space-y-">
        {bookingData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600 tracking-wide">{item.status}</span>
              <span className="text-lg font-semibold text-gray-900">{item.value}</span>
            </div>
            <div className="relative">
              <Progress value={item.progress} className="h-2" />
              <div
                className={`absolute top-0 left-0 h-2 rounded-full ${item.color}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
