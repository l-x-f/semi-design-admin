import type { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'
import type { AxiosResponse } from 'axios'

declare global {
  /**
   * api数据响应类型
   */
  type IApiResponse = Promise<AxiosResponse<IResponse['data']>>

  /**
   * 路由配置项
   */
  interface IRoute extends RouteObject {
    /**
     * 标题
     */
    text?: ReactNode
    /**
     * 子路由
     */
    children?: IRoute[]
    /**
     * 图标
     */
    icon?: ReactNode
    /**
     * 重定向
     */
    redirect?: string

    /**
     *  隐藏菜单 默认 false 显示  true 不显示
     */
    hidden?: boolean
    /**
     *  隐藏面包屑 默认 true显示  false不显示
     */
    breadcrumb?: boolean

    /**
     * 排序
     */
    sort?: number
  }
}
