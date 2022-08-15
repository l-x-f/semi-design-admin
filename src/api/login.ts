import { AxiosResponse } from 'axios'
import md5 from 'js-md5'
import request from '@/utils/request'
import { IUserInfo } from '/types/store'
import { LoginFrom } from '@/views/login/type'

/**
 *  登录
 * @param data
 * @returns
 */
export function login(data: LoginFrom): Promise<AxiosResponse<IUserInfo>> {
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
