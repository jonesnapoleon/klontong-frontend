export const transformToOptions = <T>(array: T[]) => {
  return array.map((item) => ({ value: item, label: item })) as {
    label: T
    value: T
  }[]
}

export const formatIDR = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}
