import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { centsToDollars } from "@/lib/utils";
import { DollarSign } from "lucide-react"


const AnalyticsTab = () => {
  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$24,50</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">405</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">48</div>
        </CardContent>
      </Card>
     </div>
     <div className="flex flex-wrap gap-5 my-5">
      <RECENTSUBSCRIPTIONS />
      <RecentSales />
     </div>
    </>
  )
}


export default AnalyticsTab;



const RECENTSUBSCRIPTIONS = async () => {

  const recentSubscriptions = [
    {
      user: {
        name: "john doe",
        email: "john@gmail.com",
        image: ""
      },
      price: 10_00
    },
    {
      user: {
        name: "wendy rose",
        email: "wendy@gmail.com",
        image: ""
      },
      price: 22_00
    }
  ]
  
  return (
    <Card className="flex-1">
     <CardHeader className="px-3">
      <CardTitle>Recent Subscriptions</CardTitle>
     </CardHeader>
     <CardContent className="grid gap-8 px-3">
     {recentSubscriptions.length === 0 && <p className="text-sm text-muted-foreground">No recent Subscriptions</p>}
      {recentSubscriptions.map((subscription) => (
        <div className="flex items-center gap-2" key={subscription.user.email}>
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src={subscription.user.image || "/user-placeholder.png"} alt="avatar" />
            <AvatarFallback>cn</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-xs font-medium leading-none">{subscription.user.name}</p>
            <p className="text-xs text-muted-foreground">{subscription.user.email}</p>
          </div>
          <div className="ml-auto font-medium">+${centsToDollars(subscription.price)}</div>
        </div>
      ))}
     </CardContent>
    </Card>
)
}



const RecentSales = async () => {

  const recentSales = [
    {
      user: {
        name: "john doe",
        email: "john@gmail.com",
        image: ""
      },
      price: 10_00
    },
    {
      user: {
        name: "wendy rose",
        email: "wendy@gmail.com",
        image: ""
      },
      price: 22_00
    }
  ]

  return (
    <Card className="flex-1">
      <CardHeader className="px-3">
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8 px-3">
        {recentSales.length === 0 && <p className="text-sm text-muted-foreground">No recent Sales</p>}
        {recentSales.map((order)=>(
          <div className="flex items-center gap-2" key={order.user.email}>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={order.user.image || "/user-placeholder.png"} alt="avatar" />
              <AvatarFallback>
                <p>{order?.user?.name![0] || ""}</p>
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-xs font-medium leading-none">{order.user.name}</p>
              <p className="text-xs text-muted-foreground">{order.user.email}</p>
            </div>
            <div className="ml-auto font-medium">${centsToDollars(order.price)}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )

}