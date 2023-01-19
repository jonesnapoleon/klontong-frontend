/* eslint-disable @next/next/no-img-element */
import { useProduct } from '@/providers/Product/ProductProvider'
import { obtainColorFromCategory } from '@/providers/Product/helper'
import { ProductCategoryType } from '@/providers/Product/type'
import { formatIDR } from '@/utils/transformers'
import { Col, Empty, Row, Space, Tag, Typography } from 'antd'
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
        <Typography.Title style={{ marginBottom: '1rem' }}>
          {product?.name}
        </Typography.Title>

        <Space style={{ marginBottom: '2rem' }}>
          <Typography.Title level={4} style={{ marginBottom: 0 }}>
            {formatIDR(product?.price!)}
          </Typography.Title>
          <Tag
            color={obtainColorFromCategory(
              product?.categoryName! as ProductCategoryType
            )}
          >
            {product?.categoryName}
          </Tag>
        </Space>

        <Typography.Paragraph>{product?.description}</Typography.Paragraph>
      </Col>
    </Row>
  )
}

export default ProductDetail
