import { useProduct } from '@/providers/Product/ProductProvider'

const AllProducts = () => {
  const { products } = useProduct()
  console.log(products)
  return <div>Home</div>
}

export default AllProducts
