import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'
import type { ECharts } from './charts'
import { echarts } from './charts'

export type PropsType = {
  option?: RecordType
  style?: RecordType
  clickChart?: (...arg: any[]) => void
  onInt?: (...arg: any[]) => void
}

export type ForwardRefProps = {
  getInstance: () => ECharts
}

const RenderChart = forwardRef<ForwardRefProps, PropsType>(function Chart(props, ref) {
  const [echartsInstance, setEchartsInstance] = useState<ECharts>()
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const myChart = echarts.init(container.current as HTMLElement)
    setEchartsInstance(myChart)
  }, [])

  useEffect(() => {
    echartsInstance?.setOption(props.option as any)

    echartsInstance?.on('click', data => {
      props.clickChart && props.clickChart(data)
    })

    echartsInstance && props.onInt && props.onInt()
  }, [echartsInstance])

  useEffect(() => {
    echartsInstance?.setOption(props.option as any)
  }, [props.option])

  useImperativeHandle(ref, () => ({
    getInstance: () => {
      return echartsInstance as ECharts
    }
  }))

  return <div ref={container} style={{ width: '100%', height: 400, ...props.style }} />
})

RenderChart.defaultProps = {
  option: {},
  style: {},
  clickChart: (...arg: any[]) => arg,
  onInt: (...arg: any[]) => arg
}

export default RenderChart
