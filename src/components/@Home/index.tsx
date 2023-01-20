import { useProduct } from '@/providers/Product/ProductProvider'
import { Empty, Row } from 'antd'
import AddProductButton from '../@AddProduct/AddProductButton'
import ProductCard from './ProductCard'

const AllProducts = () => {
  const { displayedProducts } = useProduct()

  return displayedProducts.length > 0 ? (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]}>
      {displayedProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Row>
  ) : (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<span>Currently no product available</span>}
    >
      <AddProductButton />
    </Empty>
  )
}

export default AllProducts
