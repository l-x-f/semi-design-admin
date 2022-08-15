import { AxiosResponse } from 'axios'
import request from '@/utils/request'

/**
 * 菜单接口
 */
class MenuServe {
  /**
   * 前缀
   */
  suffix = '/menus'

  /**
   * 获取列表
   */
  getList<T = any>(params = {}): Promise<AxiosResponse<T>> {
    return request({
      url: `${this.suffix}`,
      method: 'get',
      params
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
      url: `${this.suffix}/${data.menuId}`,
      method: 'put',
      data
    })
  }

  /**
   * 删除
   */
  delete(menuId: number): IApiResponse {
    return request({
      url: `${this.suffix}/${menuId}`,
      method: 'delete'
    })
  }

  /**
   * 批量删除data
   */
  batchDelete(data: number[]): IApiResponse {
    return request({
      url: `${this.suffix}`,
      method: 'delete',
      data
    })
  }
}

export default new MenuServe()
