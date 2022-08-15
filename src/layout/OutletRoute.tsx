import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '@/components/Loading'

/**
 * 路由容器组件
 * @returns
 */
const OutletRoute = () => (
  <Suspense fallback={<Loading />}>
    <Outlet />
  </Suspense>
)

export default OutletRoute
