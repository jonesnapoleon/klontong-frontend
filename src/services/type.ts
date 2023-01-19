import { Product } from '@/providers/Product/type'

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U]

export type IProductDatumResponse = AtLeastOne<Product>
export type IProductDataResponse = IProductDatumResponse[]
