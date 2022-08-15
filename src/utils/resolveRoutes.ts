import { cloneDeep } from 'lodash-es'
import pathResolve from './pathResolve'

/**
 * 解析路由为绝对路径
 * @param data
 * @returns
 */
function resolveRoutes(data: IRoute[]): IRoute[] {
  const originData = cloneDeep(data)
  function resolve(data: IRoute[], parent: IRoute = { path: '', text: '' }): IRoute[] {
    data.forEach(item => {
      // 解析路径
      item.path = pathResolve.resolve(parent.path as string, item.path as string)
      // 递归解析
      if (item.children) {
        resolve(item.children, item)
      }
    })
    return data
  }
  resolve(originData)
  return originData
}

export default resolveRoutes
