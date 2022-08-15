import type { FC } from 'react'
import { createRef } from 'react'
import { LineChart as EchartsLineChart } from 'echarts/charts'
import type { LineSeriesOption } from 'echarts/charts'
import type { ECOption } from '../common/charts'
import type { ForwardRefProps } from '../common/render'
import { echarts } from '../common/charts'
import ReactEcharts from '../common/render'

echarts.use([EchartsLineChart])

type LineOption = ECOption<LineSeriesOption>

export type PropsType = {
  title?: any
  xAxis?: any
  data?: any
}
// 折线趋势图
const LineChart: FC<PropsType> = props => {
  const { xAxis, data } = props
  const option: LineOption = {
    title: {
      text: ''
    },
    legend: {
      data: ['订单数量', '订单金额']
    },
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      padding: [5, 10]
    },

    grid: {
      top: 60,
      left: 20,
      right: 60,
      bottom: 20,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        name: '星期',
        boundaryGap: false,
        data: [...xAxis]
      }
    ],
    yAxis: [
      {
        name: '订单量',
        type: 'value'
      }
    ],
    series: [
      {
        name: '订单数量',
        type: 'line',
        lineStyle: {
          color: '#1890ff',
          width: 2
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(24,144,255,1)'
              },
              {
                offset: 1,
                color: 'rgba(24,144,255,0.5)'
              }
            ],
            globalCoord: false // 缺省为 false
          }
        },
        data: [...data],
        smooth: true
      },
      {
        name: '订单金额',
        type: 'line',
        lineStyle: {
          color: 'rgba(255,163,96,1)',
          width: 2
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255,163,96,1)'
              },
              {
                offset: 1,
                color: 'rgba(255,163,96,0.5)'
              }
            ],
            globalCoord: false // 缺省为 false
          }
        },
        data: [...data].map(i => i * Math.random()),
        smooth: true
      }
    ]
  }
  const ref = createRef<ForwardRefProps>()
  const onClick = (data: any) => {
    console.log(data, 'onClick')
  }

  const onInt = () => {
    ref.current?.getInstance()
  }

  return (
    <div className="custom-echarts-container">
      <ReactEcharts option={option} clickChart={onClick} ref={ref} onInt={onInt} />
    </div>
  )
}

// 默认的props
LineChart.defaultProps = {
  // 显示
  title: '订单总量',
  // x轴坐标
  xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  // y轴数据
  data: [120, 132, 101, 134, 90, 230, 210]
}

export default LineChart
