/* eslint-disable @next/next/no-img-element */
import { Product } from '@/providers/Product/type'
import { formatIDR } from '@/utils/transformers'
import { Card, Col } from 'antd'
import { useRouter } from 'next/router'

type IProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { push } = useRouter()

  return (
    <Col xs={24} md={12} lg={6} xl={4}>
      <Card
        onClick={() => push(`${product._id}`)}
        hoverable
        style={{ width: '100%', height: '100%', position: 'relative' }}
        cover={
          <img
            loading="lazy"
            alt={product.description ?? product.name ?? ''}
            src={product.image!}
          />
        }
      >
        <Card.Meta
          title={product.name}
          description={formatIDR(product.price!)}
        />
      </Card>
    </Col>
  )
}

export default ProductCard
