import ProductProvider from '@/providers/Product/ProductProvider'
import { queryClient } from '@/services/queryclient'
import { QueryClientProvider } from '@tanstack/react-query'
import 'antd/dist/reset.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </QueryClientProvider>
  )
}
