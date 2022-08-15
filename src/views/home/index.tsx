import type { FC } from 'react'
import { useState } from 'react'
import { Button } from '@douyinfe/semi-ui'
import { IconCoinMoneyStroked, IconBell } from '@douyinfe/semi-icons'
import AppCard from '@/components/AppCard'
import type { PropsType as AppCardPropsType } from '@/components/AppCard'
import { LineChart } from '@/components/ECharts'
import style from './index.module.scss'

const Index: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const data: AppCardPropsType['list'] = [
    {
      title: '累计总收益',
      color: '#4e70f3',
      getIcon: item => <IconCoinMoneyStroked style={{ color: item.color }} />,
      content: '0.00',
      isGoUp: true,
      withdrawalBalance: '0.00'
    },
    {
      title: '今日收入',
      color: '#ffa360',
      getIcon: item => <IconCoinMoneyStroked style={{ color: item.color }} />,
      content: '0.00',
      isGoUp: true,
      withdrawalBalance: '0.00'
    },
    {
      title: '今日订单',
      color: '#67d0af',
      getIcon: item => <IconCoinMoneyStroked style={{ color: item.color }} />,
      content: '0.00',
      isGoUp: true,
      withdrawalBalance: '0.00'
    },
    {
      title: '今日评价',
      color: '#40aefe',
      getIcon: item => <IconCoinMoneyStroked style={{ color: item.color }} />,
      content: '0.00',
      isGoUp: true,
      withdrawalBalance: '0.00'
    }
  ]

  const buttons = [
    {
      id: 0,
      title: '7天'
    },
    {
      id: 1,
      title: '15天'
    },
    {
      id: 2,
      title: '30天'
    }
  ]

  const handleClickTab = ({ id }: any) => {
    setCurrentIndex(id)
  }

  return (
    <div className={style.home}>
      <div className={style.notify}>
        <IconBell className={style.color} />
        <span className={style.color}> 【平台公告】</span>
        《管理规范》上线通知：请务必尽快完成资质认证！
      </div>

      <div className={style.card}>
        <AppCard list={data} />
      </div>

      <div className={style.chart}>
        <div className={style.tab}>
          {buttons.map(item => (
            <Button
              className={style['tab-item']}
              theme="solid"
              type={currentIndex === item.id ? 'primary' : 'tertiary'}
              key={item.id}
              onClick={() => handleClickTab(item)}
            >
              {item.title}
            </Button>
          ))}
        </div>

        <LineChart />
      </div>
    </div>
  )
}

export default Index
