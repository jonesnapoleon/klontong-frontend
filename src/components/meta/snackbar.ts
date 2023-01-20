import { notification } from 'antd'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

export const openNotification = (
  message: string,
  description: string,
  type: NotificationType = 'error'
) => {
  notification.open({
    message,
    description,
    type,
    placement: 'bottomLeft',
  })
}
