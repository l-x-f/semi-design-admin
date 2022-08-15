import { lazy } from 'react'
import { IconHome } from '@douyinfe/semi-icons'
import OutletRoute from '@/layout/OutletRoute'

const Home = lazy(() => import('@/views/home'))

const dynamicRouter: IRoute[] = [
  {
    text: '首页',
    icon: <IconHome size="large" />,
    path: '/home',
    element: <OutletRoute />,
    sort: 0,
    children: [
      {
        text: '首页',
        path: '',
        breadcrumb: false,
        hidden: true,
        element: <Home />
      }
    ]
  }
]

export default dynamicRouter
