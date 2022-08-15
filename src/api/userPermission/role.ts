import { AxiosResponse } from 'axios'
import request from '@/utils/request'

/**
 * 角色接口
 */
class RoleServe {
  /**
   * 前缀
   */
  suffix = '/role'

  /**
   * 获取列表
   */
  getList<T = any>(params = {}): Promise<AxiosResponse<T>> {
    return request({
      url: `${this.suffix}/list`,
      method: 'get',
      params
    })
  }

  /**
   * 获取下拉选择列表
   */
  getSelectList<T = any>(): Promise<AxiosResponse<T>> {
    return request({
      url: `${this.suffix}/commonList`,
      method: 'get'
    })
  }

  /**
   * 获取详情
   */
  getInfo<T = any>(roleId: number): Promise<AxiosResponse<T>> {
    return request({
      url: `${this.suffix}/${roleId}`,
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
      data
    })
  }

  /**
   * 编辑
   */
  edit(data: any): IApiResponse {
    return request({
      url: `${this.suffix}`,
      method: 'put',
      data
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
}

export default new RoleServe()
