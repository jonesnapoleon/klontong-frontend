import { CONSTANT_COMPANY_LOGO } from '@/utils/constants'
import { Col, Input, Layout, Row, Space } from 'antd'
import Image from 'next/image'
import AddProductButton from '../@AddProduct/AddProductButton'

const Navbar = () => {
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
            />
            <Input.Search
              addonBefore=""
              placeholder="Search product..."
              allowClear
              onSearch={() => {}}
              style={{ width: 280, verticalAlign: 'middle' }}
            />
          </Space>
        </Col>
        <Col flex="200px">
          <AddProductButton />
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Navbar
