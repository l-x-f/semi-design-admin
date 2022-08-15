import { Form, Toast, Button } from '@douyinfe/semi-ui'
import { IconUser, IconLock } from '@douyinfe/semi-icons'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { appStoreState } from '@/store'
import { login } from '@/api/login'
import style from './index.module.scss'

const title = import.meta.env.VITE_APP_DEFAULT_TITLE

const Login = () => {
  const [appState, setAppState] = useRecoilState(appStoreState)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect')

  const initValues = {
    account: 'admin',
    password: 'admin.lixiaofei.site'
  }

  const handleSubmit = (values: Record<string, any>) => {
    login(values).then(({ data }) => {
      console.log(values)
      setAppState({
        ...appState,
        token: data.token,
        userInfo: { ...data }
      })
      Toast.success('登录成功')
      navigate(redirect || '/home')
    })
  }
  return (
    <div className={style.login}>
      <Form
        onSubmit={values => handleSubmit(values)}
        style={{ width: 400 }}
        className={style['login-form']}
        labelPosition="left"
        initValues={initValues}
      >
        {() => (
          <>
            <div className={style['login-title']}>
              <h1>{title}</h1>
            </div>
            <Form.Input
              prefix={<IconUser />}
              field="account"
              label="账号"
              style={{ width: '100%' }}
              placeholder="请输入账号"
              showClear
            />

            <Form.Input
              mode="password"
              prefix={<IconLock />}
              field="password"
              label="密码"
              showClear
              style={{ width: '100%' }}
              placeholder="请输入密码"
            />

            <Button
              htmlType="submit"
              className={style['login-button']}
              theme="solid"
              type="primary"
              size="large"
            >
              登录
            </Button>
          </>
        )}
      </Form>
    </div>
  )
}

export default Login
