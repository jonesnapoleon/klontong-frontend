import { ITEM_PER_PAGE, useProduct } from '@/providers/Product/ProductProvider'
import { Pagination } from 'antd'

const PaginationArea = () => {
  const { searchResults, paginationPage, setPaginationPage } = useProduct()

  if (searchResults.length === 0) return <></>

  return (
    <Pagination
      showTotal={(total, range) =>
        `Showing ${range[0]}-${range[1]} of ${total} items`
      }
      style={{ marginBottom: '1rem' }}
      showSizeChanger={false}
      responsive
      current={paginationPage}
      onChange={(page) => setPaginationPage(page)}
      pageSize={ITEM_PER_PAGE}
      total={searchResults.length}
    />
  )
}

export default PaginationArea
