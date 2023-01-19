import { useProductQuery } from '@/services/product'
import { createContext, useContext, useMemo, useState } from 'react'

const ProductContext = createContext({})
export const useProduct = () => useContext(ProductContext)

type IProductProviderProps = {
  children: JSX.Element
}

const ProductProvider = ({ children }: IProductProviderProps) => {
  const [query, setQuery] = useState('')

  const { data: products } = useProductQuery()

  const searchResults = useMemo(
    () =>
      products?.filter((product) =>
        product?.name?.includes(query.toLowerCase().trim())
      ) ?? [],
    [query, products]
  )

  return (
    <ProductContext.Provider
      value={{
        products,
        searchResults,
        query,
        setQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
