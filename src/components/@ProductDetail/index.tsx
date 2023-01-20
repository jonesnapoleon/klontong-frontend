/* eslint-disable @next/next/no-img-element */
import { obtainColorFromCategory } from '@/providers/Product/helper'
import { Product, ProductCategoryType } from '@/providers/Product/type'
import { AtLeastOne } from '@/services/type'
import { formatIDR } from '@/utils/transformers'
import { Button, Col, Row, Space, Tag, Typography } from 'antd'
import styles from './productdetail.module.css'

type IProductDetailProps = {
  product: AtLeastOne<Product>
}

const ProductDetail: React.FC<IProductDetailProps> = ({ product }) => {
  return (
    <Row justify="center" align="middle" style={{ height: '100%' }}>
      <Col xs={24} md={12}>
        <img
          src={product?.image!}
          alt={product?.name!}
          className={styles.productdetail_image}
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

        <Row style={{ marginBottom: '2rem' }}>
          <Button
            type="primary"
            size="large"
            href="https://midtrans.com/id/fitur/metode-pembayaran"
          >
            Purchase
          </Button>
        </Row>

        <Typography.Paragraph>{product?.description}</Typography.Paragraph>
      </Col>
    </Row>
  )
}

export default ProductDetail
