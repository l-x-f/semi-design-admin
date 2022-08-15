import type { FC } from 'react'
import { Layout } from '@douyinfe/semi-ui'
import OutletRoute from './OutletRoute'
import SiderBar from './SiderBar'
import Header from './Header'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'
import style from './index.module.scss'

const { Content } = Layout

const LayoutApp: FC = () => {
  return (
    <Layout className={style.layout}>
      {/* 头部组件 */}
      <Header />

      <Layout className={style['layout-layout']}>
        {/* 侧边栏组件 */}
        <SiderBar />

        <Content className={style['layout-content']}>
          {/* 面包屑 */}
          <Breadcrumb />
          <main className={style['layout-main']}>
            <OutletRoute />
          </main>
        </Content>

        {/* 页脚组件 */}
        <Footer />
      </Layout>
    </Layout>
  )
}

export default LayoutApp
