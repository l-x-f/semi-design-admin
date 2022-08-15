import type { FC } from 'react'
import { PieChart as EchartsPieChart } from 'echarts/charts'
import ReactEcharts from '../common/render'
import { echarts } from '../common/charts'

echarts.use([EchartsPieChart])

export type PropsType = {
  title?: any
  data?: any
}
// 饼形图
const PinCharts: FC<PropsType> = props => {
  // 获取配置项
  const getOption = () => {
    const { title, data } = props
    // 生成名称
    const names = data.map((item: any) => item.name)
    const option = {
      title: {
        text: title,
        subtext: '',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: [...names]
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          center: ['50%', '60%'],
          data: [...data],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    return option
  }

  return (
    <div className="custom-echarts-container">
      <ReactEcharts option={getOption()} style={{ height: 300 }} />
    </div>
  )
}

PinCharts.defaultProps = {
  // 显示标题
  title: '用户访问来源',
  // 数据
  data: [
    { value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 500, name: '搜索引擎' }
  ]
}

export default PinCharts
