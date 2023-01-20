import { Layout } from 'antd'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from './skeleton.module.css'

type ILayoutWrapper = {
  children: React.ReactNode
}

const LayoutWrapper: React.FC<ILayoutWrapper> = ({ children }) => {
  return (
    <Layout>
      <Navbar />

      <Layout.Content className={styles.layout_content}>
        {children}
      </Layout.Content>

      <Footer />
    </Layout>
  )
}

export default LayoutWrapper
