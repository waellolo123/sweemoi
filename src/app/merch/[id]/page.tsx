import BaseLayout from "@/components/BaseLayout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/dummy-data";
import ProductCheckout from "./ProductCheckout";


const Merchingle = () => {

  

  return (
    <BaseLayout renderRightPanel={false}>
      <div className="px-3 md:px-7 my-20">
        <ProductCheckout product={products[0]} />
        <h1 className="text-3xl text-center mt-20 mb-10 font-bold tracking-tight">More Products from Market</h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </BaseLayout>
  )
}

export default Merchingle;

