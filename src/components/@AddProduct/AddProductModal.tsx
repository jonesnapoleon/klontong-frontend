import { productCategories } from '@/providers/Product/constant'
import { useProductMutation } from '@/services/product'
import { transformToOptions } from '@/utils/transformers'
import { Button, Form, Input, InputNumber, Modal, Select } from 'antd'

type IAddProductModal = {
  isOpen: boolean
  closeModal: () => void
}

const AddProductModal = ({ isOpen, closeModal }: IAddProductModal) => {
  const [form] = Form.useForm()
  const { mutate, isLoading } = useProductMutation()

  const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo)

  return (
    <Form
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      layout="horizontal"
      onFinish={(values) => {
        mutate(values)
        closeModal()
      }}
      onFinishFailed={onFinishFailed}
    >
      <Modal
        title="Add New Product"
        centered
        open={isOpen}
        bodyStyle={{ marginTop: '2rem' }}
        onCancel={closeModal}
        footer={
          <Form.Item style={{ display: 'inline-table' }}>
            <Button
              htmlType="submit"
              type="primary"
              onClick={form.submit}
              size="large"
              loading={isLoading}
              disabled={isLoading}
            >
              Submit
            </Button>
          </Form.Item>
        }
      >
        <Form.Item label="Name" name={'name'} rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryName"
          rules={[{ required: true }]}
        >
          <Select options={transformToOptions(productCategories)} />
        </Form.Item>
        <Form.Item
          label="Picture URL"
          name="image"
          rules={[
            { required: true },
            { type: 'url', warningOnly: true },
            { type: 'string', min: 6 },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>
      </Modal>
    </Form>
  )
}

export default AddProductModal
