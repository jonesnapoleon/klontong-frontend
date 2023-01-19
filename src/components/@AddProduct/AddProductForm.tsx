import { Modal } from 'antd'

type IAddProductModal = {
  isOpen: boolean
  closeModal: () => void
}

const AddProductForm = ({ isOpen, closeModal }: IAddProductModal) => {
  return (
    <Modal
      title="Add New Product"
      centered
      open={isOpen}
      onOk={closeModal}
      onCancel={closeModal}
    >
      
    </Modal>
  )
}

export default AddProductModal
