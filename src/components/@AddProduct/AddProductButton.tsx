import { Button } from 'antd'
import { useState } from 'react'
import AddProductModal from './AddProductModal'

const AddProductButton = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setIsModalActive((a) => !a)}>
        Add product
      </Button>
      <AddProductModal
        isOpen={isModalActive}
        closeModal={() => setIsModalActive(false)}
      />
    </>
  )
}

export default AddProductButton
