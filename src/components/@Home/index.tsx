import { useProduct } from '@/providers/Product/ProductProvider'

const AllProducts = () => {
  const { product } = useProduct()
  console.log(product)
  return <div>Home</div>
}

export default AllProducts
