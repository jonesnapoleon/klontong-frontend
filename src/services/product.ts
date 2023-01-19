import { CONSTANT_RESOURCE_MAPPING } from '@/utils/constants'
import { useQuery } from '@tanstack/react-query'
import abstractFetcher, { IError } from './api/fetcher'
import { IProductDataResponse } from './type'

export const useProductQuery = () => {
  return useQuery<IProductDataResponse, IError>(
    [CONSTANT_RESOURCE_MAPPING],
    async () => {
      const data = await abstractFetcher<IProductDataResponse>({
        url: CONSTANT_RESOURCE_MAPPING,
        method: 'GET',
      })
      return data
    }
  )
}
