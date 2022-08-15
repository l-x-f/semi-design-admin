import { useEffect } from 'react'
import { useRoutes, useNavigate, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import 'nprogress/nprogress.css'
import { configure, start, done } from 'nprogress'
import Layout from '@/layout'
import { appStoreSelector } from '@/store'
import Login from '@/views/login/index'
// nprogress进度环显示隐藏
configure({ showSpinner: false })

// //自动加载 modules 文件夹下所有的异步路由
const moduleFiles: RecordType = import.meta.glob('./modules/*.tsx', { eager: true })

// 异步路由
export const dynamicRouter = Object.values(moduleFiles)
  .reduce((pre: any, item) => [...pre, ...item.default], [])
  .sort((a: any, b: any) => (a.sort || 0) - (b.sort || 0)) as IRoute[]

const loginPath = '/login'
const homePath = '/home'

export const router: IRoute[] = [
  {
    path: '/',
    element: <Layout />,
    children: [...dynamicRouter]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '*',
    element: 404
  }
]

const RenderRouter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [{ isLogin }] = useRecoilState(appStoreSelector)

  useEffect(() => {
    done()
    // 未登录，访问的是/，跳转到登录页面
    if (!isLogin && location.pathname !== loginPath) {
      navigate(`/login?redirect=${encodeURIComponent(location.pathname)}`, { replace: true })
    }
    // 已经登录，访问的是/，跳转到首页
    if (isLogin && location.pathname === '/') {
      navigate(homePath)
    }
    return () => {
      start()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return useRoutes(router)
}

export default RenderRouter
