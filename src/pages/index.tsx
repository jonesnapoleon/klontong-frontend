import AllProducts from '@/components/@Home'
import HeadTag from '@/components/meta'

const HomePage = () => {
  return (
    <>
      <HeadTag
        title="All Products"
        description="All products, reserved by Klontong"
      />
      <AllProducts />
    </>
  )
}
export default HomePage
