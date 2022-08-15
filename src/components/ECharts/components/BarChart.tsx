import type { FC } from 'react'
import { BarChart as EchartsBarChart } from 'echarts/charts'
import ReactEcharts from '../common/render'
import { echarts } from '../common/charts'

export type PropsType = {
  title?: any
  xAxis?: any
  data?: any
}
echarts.use([EchartsBarChart])

// 柱状图
const BarChart: FC<PropsType> = props => {
  const { title, xAxis, data } = props
  //   生成随机
  // const randomColor = () => '#' + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)

  const option = {
    title: {
      text: '柱状图'
    },
    legend: {
      data: [title]
    },
    toolbox: {
      show: false,
      feature: {
        dataView: { readOnly: false },
        restore: {},
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
      left: 30,
      right: 60,
      bottom: 30
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        name: '星期',
        boundaryGap: true,
        data: [...xAxis]
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: '价格',
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: title,
        type: 'bar',
        // color: 'red',

        itemStyle: {
          normal: {
            barBorderRadius: 4
          }
        },
        data: [...data]
      }
    ]
  }

  return (
    <div className="custom-echarts-container">
      <ReactEcharts option={option} style={{ height: 400 }} />
    </div>
  )
}

// 默认的props
BarChart.defaultProps = {
  // 显示
  title: '订单总量',
  // x轴坐标
  xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  // y轴数据
  data: [120, 132, 101, 134, 90, 230, 210]
}

export default BarChart
