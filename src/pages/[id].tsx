import ProductDetail from '@/components/@ProductDetail'
import HeadTag from '@/components/meta'
import { useProduct } from '@/providers/Product/ProductProvider'
import { Empty, Typography } from 'antd'
import { useRouter } from 'next/router'

const ProductDetailPage = () => {
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
    <>
      <HeadTag title={product.name!} description={product.description!} />
      <ProductDetail product={product} />
    </>
  )
}

export default ProductDetailPage
