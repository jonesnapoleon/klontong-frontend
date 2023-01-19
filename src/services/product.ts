import { CONSTANT_RESOURCE_MAPPING } from '@/utils/constants'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import abstractFetcher, { IError } from './api/fetcher'
import { IProductDataResponse, IProductDatumResponse } from './type'

export const useProductQuery = () => {
  return useQuery<IProductDataResponse, IError>(
    [CONSTANT_RESOURCE_MAPPING],
    async () => {
      const data = await abstractFetcher<IProductDataResponse>({
        url: `${CONSTANT_RESOURCE_MAPPING}?rq_uid=NX5Qp7z4eBhUaZWofEAxFSkZ7YM2`,
        method: 'GET',
      })
      return data
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
        queryClient.setQueryData<IProductDatumResponse>(
          [CONSTANT_RESOURCE_MAPPING],
          (currentProducts: IProductDataResponse) => [
            ...(currentProducts ?? []),
            newProduct,
          ]
        )
      },
    }
  )
}
