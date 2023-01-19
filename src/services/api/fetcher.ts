import { CONSTANT_BASEPATH } from '@/utils/constants'
import axios, { AxiosError, RawAxiosRequestConfig } from 'axios'

export type IResponseError = {
  error?: {
    code?: string
    message?: string
  }
}

export type IError = AxiosError<IResponseError> & Error
export type RequestConfig = RawAxiosRequestConfig

const abstractFetcher = async <T = any>({
  ...requestConfig
}: RequestConfig): Promise<T> => {
  try {
    const { data } = await axios.request<T>({
      ...requestConfig,
      baseURL: CONSTANT_BASEPATH,
    })
    return data
  } catch (err) {
    throw err as AxiosError<IResponseError>
  }
}

export default abstractFetcher
