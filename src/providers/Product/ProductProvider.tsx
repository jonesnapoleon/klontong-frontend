import { useProductQuery } from '@/services/product'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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
  products: Product[]
  searchResults: Product[]
  displayedProducts: Product[]

  query: string
  setQuery: Dispatch<SetStateAction<string>>
  obtainProductDataFromId: (id: string) => Product | undefined

  paginationPage: number
  setPaginationPage: Dispatch<SetStateAction<number>>
}

export const ITEM_PER_PAGE = 18

const ProductProvider: React.FC<IProductProviderProps> = ({ children }) => {
  const [query, setQuery] = useState('')
  const [paginationPage, setPaginationPage] = useState(1)

  const { data: products } = useProductQuery()

  const searchResults = useMemo(
    () =>
      products?.filter((product) =>
        product?.name?.toLowerCase()?.includes(query.trim().toLowerCase())
      ) ?? [],
    [query, products]
  )

  const displayedProducts = useMemo(() => {
    return searchResults.slice(
      (paginationPage - 1) * ITEM_PER_PAGE,
      paginationPage * ITEM_PER_PAGE
    )
  }, [searchResults, paginationPage])

  const obtainProductDataFromId = (id: string): Product | undefined =>
    products?.filter((product) => product._id === id)?.[0]

  useEffect(() => {
    if (searchResults.length >= (paginationPage - 1) * ITEM_PER_PAGE) return
    setPaginationPage(1)
  }, [searchResults, paginationPage])

  return (
    <ProductContext.Provider
      value={{
        products: products ?? [],
        searchResults,
        displayedProducts,

        query,
        setQuery,
        obtainProductDataFromId,

        paginationPage,
        setPaginationPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
