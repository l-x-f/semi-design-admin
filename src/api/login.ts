import type { AxiosResponse } from 'axios'
import md5 from 'js-md5'
import request from '@/utils/request'

/**
 *  登录
 * @param data
 * @returns
 */
export function login(data: RecordType): Promise<AxiosResponse<any>> {
  return request({
    url: '/login',
    method: 'post',
    data: { ...data, password: md5(data.password) }
  })
}

/**
 * 退出
 * @returns
 */
export function logout(): IApiResponse {
  return request({
    url: '/logout',
    method: 'post'
  })
}
