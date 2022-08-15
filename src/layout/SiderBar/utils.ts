import type { NavProps } from 'semi-ui/lib/es/navigation'
import { cloneDeep } from 'lodash-es'

/**
 * 处理菜单数据
 * @param dynamicRouter
 * @param onClick
 * @returns
 */
export function dynamicRouterMap(dynamicRouter: IRoute[], onClick?: NavProps['onClick']) {
  const list = cloneDeep(dynamicRouter)
  function each(list: any[], parent = '') {
    list.forEach(item => {
      const key = parent ? (item.path ? `${parent}/${item.path}` : parent) : item.path
      item.itemKey = key
      item.path = key
      item.onClick = onClick
      if (item.children?.length) {
        const children = item.children.filter((i: IRoute) => i.hidden !== true)
        if (children.length) {
          item.items = each(children, item.path)
        } else {
          Reflect.deleteProperty(item, 'children')
        }
      }
    })
    return list
  }
  each(list)
  return list
}
