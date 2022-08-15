import { AxiosResponse } from 'axios'
import md5 from 'js-md5'
import request from '@/utils/request'

/**
 * 用户接口
 */
class UserServe {
  /**
   * 前缀
   */
  suffix = '/user'

  /**
   * 获取列表
   */
  getList(params = {}): IApiResponse {
    return request({
      url: `${this.suffix}/list`,
      method: 'get',
      params
    })
  }
  /**
   * 获取info
   */
  getInfo<T = any>(userId: number): Promise<AxiosResponse<T>> {
    return request({
      url: `${this.suffix}/info/${userId}`,
      method: 'get'
    })
  }

  /**
   * 新增
   */
  create(data: any): IApiResponse {
    return request({
      url: `${this.suffix}`,
      method: 'post',
      data: { ...data, password: md5(data.password) }
    })
  }

  /**
   * 编辑
   */
  edit(data: any): IApiResponse {
    return request({
      url: `${this.suffix}`,
      method: 'put',
      data: { ...data }
    })
  }

  /**
   * 删除
   */
  delete(data: number[]): IApiResponse {
    return request({
      url: `${this.suffix}`,
      method: 'delete',
      data
    })
  }

  /**
   * 重置密码
   */
  resetPassword(data: any): IApiResponse {
    return request({
      url: `${this.suffix}/password/reset`,
      method: 'post',
      data
    })
  }

  /**
   * 修改密码
   */
  editPassword(data: any): IApiResponse {
    return request({
      url: `${this.suffix}/password/update`,
      method: 'post',
      data: { ...data, password: md5(data.password) }
    })
  }
}

export default new UserServe()
