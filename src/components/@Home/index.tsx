import { useProduct } from '@/providers/Product/ProductProvider'
import { Row } from 'antd'
import ProductCard from './ProductCard'

const AllProducts = () => {
  const { displayedProducts } = useProduct()

  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
      {displayedProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Row>
  )
}

export default AllProducts
