import type { FC } from 'react'
import { Nav, Button, Dropdown, Layout, Avatar } from '@douyinfe/semi-ui'
import { IconBell, IconSetting, IconExit, IconCaretdown } from '@douyinfe/semi-icons'
import { useNavigate } from 'react-router-dom'
import style from './index.module.scss'

const title = import.meta.env.VITE_APP_DEFAULT_TITLE

const Header: FC = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.clear()
    navigate('/login')
  }
  const handleToSetting = () => {
    navigate('/setting/index')
  }

  return (
    <Layout.Header className={style.header}>
      <Nav
        className={style.nav}
        mode="horizontal"
        header={{
          logo: (
            <img src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/webcast_logo.svg" />
          ),
          text: title
        }}
        footer={
          <>
            <Button
              theme="borderless"
              icon={<IconBell size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px'
              }}
            />

            <Dropdown
              trigger={'click'}
              position={'bottomRight'}
              clickToHide={true}
              render={
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogin}>
                    <IconExit />
                    退出
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleToSetting}>
                    <IconSetting />
                    设置
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <div style={{ cursor: 'pointer' }}>
                <Avatar color="red" size="small" style={{ marginRight: '6px' }}>
                  Adm
                </Avatar>
                <IconCaretdown />
              </div>
            </Dropdown>
          </>
        }
      />
    </Layout.Header>
  )
}

export default Header
