import { ProductCategoryType } from './type'

export const obtainColorFromCategory = (
  categoryName: ProductCategoryType
): string => {
  const availableColors = [
    '#f50',
    '#2db7f5',
    '#87d068',
    '#108ee9',
    '#13c2c2',
    '#9254de',
  ]

  const index = Object.keys(ProductCategoryType).indexOf(categoryName)

  return availableColors[index]
}
