import { DragSource, DropTarget } from 'react-dnd'

let draggingIndex = -1

function BodyRow(props: any) {
  const { isOver, connectDragSource, connectDropTarget, ...restProps } = props
  const style = { ...restProps.style, cursor: 'move' }

  let { className } = restProps
  if (isOver) {
    console.log('true')
    if (restProps.index > draggingIndex) {
      className += ' drop-over-downward'
    }
    if (restProps.index < draggingIndex) {
      className += ' drop-over-upward'
    }
  }

  return connectDragSource(
    connectDropTarget(<tr {...restProps} className={className} style={style} />)
  )
}

const rowSource = {
  beginDrag(props: any) {
    draggingIndex = props.index
    return {
      index: props.index
    }
  }
}

const rowTarget = {
  drop(props: any, monitor: any) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index
    if (dragIndex === hoverIndex) {
      return
    }
    props.moveRow(dragIndex, hoverIndex)

    monitor.getItem().index = hoverIndex
  }
}

export const DraggableBodyRow = DropTarget('row', rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))(
  DragSource('row', rowSource, connect => ({
    connectDragSource: connect.dragSource()
  }))(BodyRow)
)
