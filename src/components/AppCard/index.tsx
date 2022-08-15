import type { FC, ReactNode } from 'react'
import { Card, CardGroup, Divider } from '@douyinfe/semi-ui'
import { IconArrowUp, IconArrowDown } from '@douyinfe/semi-icons'
import style from './index.module.scss'

interface CardRow {
  title: string
  color: string
  getIcon: (item: CardRow) => ReactNode
  content: string
  isGoUp: boolean
  withdrawalBalance: string
}

export type PropsType = {
  list: CardRow[]
  spacing?: number
}

const defaultProps: PropsType = {
  list: [],
  spacing: 12
}

const AppCard: FC<PropsType> = props => {
  const { list, spacing } = props
  return (
    <CardGroup className={style['card-container']} spacing={spacing}>
      {list.map(item => (
        <Card
          className={style.card}
          key={item.title}
          style={{
            borderTopColor: item.color
          }}
        >
          <div className={style.title}>
            {item.getIcon(item)}
            <h3 style={{ marginLeft: 5 }}>{item.title}</h3>
          </div>

          <div className={style.content}>{item.content}</div>
          <Divider
            style={{
              marginTop: 20,
              marginBottom: 10
            }}
          />
          <div className={style.footer}>
            <span style={{ paddingRight: 5 }}>可提现余额</span>
            {item.withdrawalBalance}
            <span style={{ color: item.color, paddingLeft: 5 }}>
              {item.isGoUp ? <IconArrowUp size="small" /> : <IconArrowDown size="small" />}
            </span>
          </div>
        </Card>
      ))}
    </CardGroup>
  )
}

AppCard.defaultProps = defaultProps

export default AppCard
