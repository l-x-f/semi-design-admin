/* eslint-disable indent */
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Nav, Layout, Button } from '@douyinfe/semi-ui'
import type { NavProps } from 'semi-ui/lib/es/navigation'
import { useNavigate, useLocation } from 'react-router-dom'
import { dynamicRouter } from '@/router'
import { dynamicRouterMap } from './utils'
import style from './index.module.scss'

const SiderBar: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState(pathname)

  useEffect(() => {
    setSelectedKeys(pathname)
  }, [pathname])

  const onClick: NavProps['onClick'] = data => {
    setSelectedKeys(data.itemKey as string)
    navigate(data.itemKey as string)
  }

  const items: NavProps['items'] = dynamicRouterMap(dynamicRouter, onClick)

  return (
    <Layout.Sider className={style['layout-sider']}>
      <Nav
        defaultSelectedKeys={[selectedKeys]}
        style={{ maxWidth: 160, height: '100%' }}
        items={items}
        header={
          <div className={style['layout-sider-header']}>
            <Button className={style['layout-sider-header-button']} theme="solid" type="primary">
              发布
            </Button>
          </div>
        }
        footer={{
          collapseButton: false
        }}
      />
    </Layout.Sider>
  )
}

export default SiderBar
