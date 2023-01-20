import { CONSTANT_RESOURCE_MAPPING } from '@/utils/constants'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import abstractFetcher, { IError } from './api/fetcher'
import { IProductDataResponse, IProductDatumResponse } from './type'

export const useProductQuery = () => {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  const isClient = hydrated && typeof window !== 'undefined'
  const item = isClient
    ? window.localStorage.getItem(CONSTANT_RESOURCE_MAPPING) ?? ''
    : ''

  const placeholderData = isClient && !!item ? JSON.parse(item) : []

  return useQuery<IProductDataResponse, IError>(
    [CONSTANT_RESOURCE_MAPPING],
    async () => {
      const data = await abstractFetcher<IProductDataResponse>({
        url: `${CONSTANT_RESOURCE_MAPPING}?rq_uid=NX5Qp7z4eBhUaZWofEAxFSkZ7YM2`,
        method: 'GET',
      })
      return data
    },
    {
      enabled: isClient && !item,
      placeholderData,
      onSuccess: (data: IProductDataResponse) => {
        if (isClient)
          window.localStorage.setItem(
            CONSTANT_RESOURCE_MAPPING,
            JSON.stringify(data)
          )
      },
    }
  )
}

export const useProductMutation = () => {
  const queryClient = useQueryClient()

  return useMutation<IProductDatumResponse, IError, IProductDatumResponse>(
    async (data: IProductDatumResponse) => {
      const result = await abstractFetcher<IProductDatumResponse>({
        url: CONSTANT_RESOURCE_MAPPING,
        method: 'POST',
        data,
      })
      return result
    },
    {
      onSuccess: (newProduct: IProductDatumResponse) => {
        queryClient.setQueryData<IProductDataResponse>(
          [CONSTANT_RESOURCE_MAPPING],
          (currentProducts: IProductDataResponse | undefined) => {
            return [...(currentProducts ?? []), newProduct]
          }
        )
      },
    }
  )
}
