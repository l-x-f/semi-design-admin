import type { AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import axios from 'axios'
import { Toast } from '@douyinfe/semi-ui'
import { atomKey } from '@/store/atom'

const Message = (message: string) => Toast.error(message)
const baseURL = import.meta.env.VITE_APP_BASE_API
console.log(baseURL, 'baseURL')

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: baseURL,
  timeout: 10 * 1000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: { message: string }) => {
  console.log(error.message, 'error.message ')
  let message
  if (error?.message === 'Network Error') {
    // 网络错误
    message = '网络错误'
  } else if (error?.message?.includes('timeout ')) {
    // 请求超时
    message = '请求超时'
  }
  Toast.destroyAll()
  Message(message || error.message)
  return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use((config: AxiosRequestConfig<IResponse>) => {
  const { token } = JSON.parse(localStorage.getItem(atomKey) || '')
  const headers: AxiosRequestHeaders = { ...config.headers }
  // 如果 token 存在
  if (token) {
    headers.token = token
  }
  return { ...config, headers }
}, errorHandler)

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse<IResponse>): Promise<any> | AxiosResponse<IResponse> => {
    const data = response.data
    if (data.code && data.code !== 200) {
      let message = data.msg
      if (data.code === 501) {
        message = '认证过期'
      }
      Toast.destroyAll()
      Message(message)
      return Promise.reject(new Error(message || 'Error'))
    }
    if (response.config.responseType === 'blob') {
      return response
    }
    return Promise.resolve(data)
  },
  errorHandler
)

export default request
