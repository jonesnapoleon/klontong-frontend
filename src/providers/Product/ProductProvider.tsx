import { useProductQuery } from '@/services/product'
import { AtLeastOne } from '@/services/type'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'
import { Product } from './type'

const ProductContext = createContext<IProductProviderReturnValue | null>(null)

export const useProduct = () =>
  useContext(ProductContext) as IProductProviderReturnValue

type IProductProviderProps = {
  children: React.ReactNode
}

type IProductProviderReturnValue = {
  products: AtLeastOne<Product>[]
  searchResults: AtLeastOne<Product>[]
  query: string
  setQuery: SetStateAction<Dispatch<string>>
  obtainProductDataFromId: (id: string) => AtLeastOne<Product> | undefined
}

const ProductProvider: React.FC<IProductProviderProps> = ({ children }) => {
  const [query, setQuery] = useState('')

  const { data: products } = useProductQuery()

  const searchResults = useMemo(
    () =>
      products?.filter((product) =>
        product?.name?.includes(query.toLowerCase().trim())
      ) ?? [],
    [query, products]
  )

  const obtainProductDataFromId = (
    id: string
  ): AtLeastOne<Product> | undefined => {
    return products?.filter((product) => product?._id === id)?.[0]
  }

  return (
    <ProductContext.Provider
      value={{
        products: products ?? [],
        searchResults,
        query,
        setQuery,
        obtainProductDataFromId,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
