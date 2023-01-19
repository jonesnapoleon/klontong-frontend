import { useProduct } from '@/providers/Product/ProductProvider'
import { Row } from 'antd'
import ProductCard from './ProductCard'

const AllProducts = () => {
  const { products } = useProduct()

  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Row>
  )
}

export default AllProducts
