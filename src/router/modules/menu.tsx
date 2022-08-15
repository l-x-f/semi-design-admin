import { lazy } from 'react'
import { IconMenu } from '@douyinfe/semi-icons'
import OutletRoute from '@/layout/OutletRoute'

const Menu = lazy(() => import('@/views/menu'))

const dynamicRouter: IRoute[] = [
  {
    text: '菜单管理',
    icon: <IconMenu size="large" />,
    path: '/menu',
    element: <OutletRoute />,
    sort: 0,
    children: [
      {
        path: '',
        breadcrumb: false,
        hidden: true,
        element: <Menu />
      }
    ]
  }
]

export default dynamicRouter
