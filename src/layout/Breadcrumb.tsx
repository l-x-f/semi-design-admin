import type { FC } from 'react'
import { Breadcrumb } from '@douyinfe/semi-ui'
import type { BreadcrumbProps } from 'semi-ui/lib/es/breadcrumb/index'
import { IconChevronRightStroked } from '@douyinfe/semi-icons'
import { useLocation, matchRoutes, useNavigate } from 'react-router-dom'
import { router } from '@/router'

type BreadcrumbRoutes = Exclude<BreadcrumbProps['routes'], undefined>

const BreadcrumbApp: FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const routes = (matchRoutes(router, pathname)
    ?.filter(item => {
      const temp = item.route as IRoute
      return temp.breadcrumb !== false && temp.text
    })
    .map(item => ({
      name: (item.route as IRoute).text,
      onClick: () => {
        navigate((item.route as IRoute).redirect || item.pathname)
      }
    })) || []) as BreadcrumbRoutes

  return (
    <Breadcrumb
      separator={<IconChevronRightStroked />}
      style={{ marginBottom: 16 }}
      routes={routes}
    />
  )
}
export default BreadcrumbApp
