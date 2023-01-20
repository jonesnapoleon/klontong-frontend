import { useProduct } from '@/providers/Product/ProductProvider'
import { CONSTANT_COMPANY_LOGO, CONSTANT_FRONTEND_URL } from '@/utils/constants'
import { Col, Input, Layout, Row, Space } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AddProductButton from '../@AddProduct/AddProductButton'

const Navbar = () => {
  const { pathname, push } = useRouter()
  const { query, setQuery } = useProduct()

  return (
    <Layout.Header>
      <Row>
        <Col flex="auto">
          <Space>
            <Image
              src={CONSTANT_COMPANY_LOGO}
              height={48}
              width={100}
              alt={'Company logo'}
              style={{ cursor: 'pointer' }}
              onClick={() => push(CONSTANT_FRONTEND_URL.BASE_PATH)}
            />
            {pathname === CONSTANT_FRONTEND_URL.BASE_PATH && (
              <Input.Search
                addonBefore=""
                placeholder="Search product..."
                allowClear
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ width: 280, verticalAlign: 'middle' }}
              />
            )}
          </Space>
        </Col>
        {pathname === CONSTANT_FRONTEND_URL.BASE_PATH && (
          <Col flex="200px">
            <AddProductButton />
          </Col>
        )}
      </Row>
    </Layout.Header>
  )
}

export default Navbar
