import { lazy } from 'react'
import { IconHelpCircle } from '@douyinfe/semi-icons'

const User = lazy(() => import('@/views/helpCenter/index'))

const dynamicRouter: IRoute[] = [
  {
    text: '帮助中心',
    icon: <IconHelpCircle size="large" />,
    path: '/help',
    element: <User />,
    sort: 1
  }
]

export default dynamicRouter
