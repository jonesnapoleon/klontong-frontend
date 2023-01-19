import { ProductCategoryType } from './type'

export const productCategories = Object.keys(ProductCategoryType).filter(
  (item) => isNaN(Number(item))
)
