import type { FC } from 'react'
import { Spin } from '@douyinfe/semi-ui'
import { IconLoading } from '@douyinfe/semi-icons'

const Loading: FC = () => (
  <div
    style={{
      marginLeft: 30,
      width: '100%',
      textAlign: 'center'
    }}
  >
    <Spin style={{ width: '100%', height: 120 }} indicator={<IconLoading />} tip="加载中..." />
  </div>
)

export default Loading
