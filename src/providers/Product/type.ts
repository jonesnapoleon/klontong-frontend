export enum ProductCategoryType {
  FASHION = 'Fashion',
  ELECTRONIC = 'Electronic',
  CONVENIENCE = 'Convenience',
  FURNITURE = 'Furniture',
  AUTOMOTIVE = 'Automotive',
  SPORTS = 'Sports',
}

export type Product = {
  _id: string
  name: string
  categoryName: string
  description: string
  image: string
  price: number // modified from 'harga' to uniformize code in English
  categoryId?: number // modified from 'CategoryId' to make consistent variable naming of camelCase
  sku?: string
  weight?: number
  width?: number
  length?: number
  height?: number
}
