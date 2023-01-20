import AllProducts from '@/components/@Home'
import PaginationArea from '@/components/@Home/Pagination'
import HeadTag from '@/components/meta'

const HomePage = () => {
  return (
    <>
      <HeadTag
        title="All Products"
        description="All products, reserved by Klontong"
      />
      <PaginationArea />
      <AllProducts />
    </>
  )
}
export default HomePage
