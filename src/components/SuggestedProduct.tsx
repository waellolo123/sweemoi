import { Card, CardHeader, CardTitle } from "./ui/card"


const SuggestedProduct = ({product}: {product: any}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="px-2 flex flex-row items-center justify-between space-y-0 pb-0">
        <CardTitle className="text-sm font-medium">
          <p className="w-28 text-ellipsis overflow-hidden text-nowrap">{product.name}</p>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}

export default SuggestedProduct