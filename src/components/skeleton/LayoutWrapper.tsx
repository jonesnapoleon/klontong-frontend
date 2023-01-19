import { Layout } from 'antd'
import Footer from './Footer'
import Navbar from './Navbar'

type ILayoutWrapper = {
  children: React.ReactNode
}

const LayoutWrapper: React.FC<ILayoutWrapper> = ({ children }) => {
  return (
    <Layout>
      <Navbar />

      <Layout.Content
        style={{
          padding: '28px 50px 28px',
          minHeight: 'calc(100vh - 64px - 64px)',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {children}
      </Layout.Content>

      <Footer />
    </Layout>
  )
}

export default LayoutWrapper
