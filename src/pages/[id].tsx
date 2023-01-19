/* eslint-disable @next/next/no-img-element */
import { useProduct } from '@/providers/Product/ProductProvider'
import { formatIDR } from '@/utils/transformers'
import { Col, Divider, Empty, Row, Space, Typography } from 'antd'
import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const { obtainProductDataFromId, products } = useProduct()

  const product = obtainProductDataFromId(id as string)

  if (!id || products.length === 0) return <></>

  if (!product)
    return (
      <>
        <Typography.Title type="danger">404 Not found</Typography.Title>
        <Empty />
      </>
    )

  return (
    <Row justify="center" align="middle">
      <Col xs={24} md={12}>
        <img
          src={product?.image!}
          alt={product?.name!}
          style={{ width: '80%', display: 'block', margin: 'auto' }}
        />
      </Col>
      <Col xs={24} md={12}>
        <Typography.Title>{product?.name}</Typography.Title>
        <Divider orientation="left" />

        <Space>
          <Typography.Title level={4}>
            {formatIDR(product?.price!)}
          </Typography.Title>
          <Tag color={obtainColorFromCategory(product.name!)}>magenta</Tag>
        </Space>

        <Typography.Paragraph>{product?.description}</Typography.Paragraph>
      </Col>
    </Row>
  )
}

export default ProductDetail
