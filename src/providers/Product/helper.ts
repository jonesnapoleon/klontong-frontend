import { ProductCategoryType } from './type'

export const obtainColorFromCategory = (
  categoryName: ProductCategoryType
): string => {
  const availableColors = [
    '#f50',
    '#2db7f5',
    '#87d068',
    '#108ee9',
    '#cde',
    '#5f4',
  ]
  const index = Object.keys(ProductCategoryType).indexOf(categoryName)

  return availableColors[index]
}
