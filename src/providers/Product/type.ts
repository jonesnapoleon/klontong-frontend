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
  categoryId: number // modified from 'CategoryId' to make consistent variable naming of camelCase
  categoryName: string
  sku: string
  name: string
  description: string
  weight: number
  width: number
  length: number
  height: number
  image: string
  price: number // modified from 'harga' to uniformize code in English
}
