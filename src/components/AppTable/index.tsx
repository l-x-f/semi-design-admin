import type { FC } from 'react'
import { useMemo } from 'react'
import { Table, Button } from '@douyinfe/semi-ui'
import type { TableProps, ColumnProps } from 'semi-ui/lib/es/table'
import { cloneDeep } from 'lodash-es'
import { defaultProps, defaultPageSizeList, defaultPageInfo } from './const'
import type { AppTablePropTypes } from './type'

export * from './const'
export * from './type'

export type { TableProps }

const AppTable: FC<AppTablePropTypes> = props => {
  const { hasOperation, data, total, hasIndex, operationWidth, loading, pagination } = props
  const { pageSize, page } = pagination || defaultPageInfo

  // 监听分页
  const handlePageChange = (page: number, pageSize: number) => {
    props.handlePageChange && props.handlePageChange(page, pageSize)
  }

  // 拷贝配置
  const columns: TableProps['columns'] = cloneDeep(props.columns) || []

  // 特殊表格行处理
  columns.forEach(item => {
    if (item.format) {
      switch (item.format) {
        case 'image':
          item.render = (value, row) => <img key={row.key} width={30} src={value} alt="图片损坏" />
          break
        case 'money':
          item.render = value => '￥' + value / 100
          break
        default:
      }
    }
  })

  // 默认添加索引
  if (hasIndex && columns.length) {
    const Index = columns[0]
    const indexItem = {
      title: '#',
      fixed: true,
      width: 80,
      render: (_text, _record, index) => (page - 1) * pageSize + index + 1
    } as ColumnProps<RecordType>
    if (Index?.title !== '#') {
      columns.unshift(indexItem)
    } else {
      columns[0] = indexItem
    }
  }

  // 默认添加操作列
  const getButtons = (buttons: any, record: any) =>
    buttons.map((option: Record<string, any>, index: number) => (
      <Button
        theme="borderless"
        size="small"
        key={index}
        style={{ padding: index + 1 === buttons.length ? 0 : `0 10px 0 0` }}
        onClick={() => {
          props.handleTableOption && props.handleTableOption(record, option, index)
        }}
      >
        {option.name}
      </Button>
    ))
  const operation = columns[columns.length - 1]
  if (columns.length && hasOperation && operation.title !== '操作') {
    columns.push({
      title: '操作',
      dataIndex: 'operation',
      width: operationWidth,
      format: 'operation',
      key: 'operation',
      fixed: 'right',
      render: (_text, record) => {
        const buttons = record.buttonList ? record.buttonList : []
        return <div>{getButtons(buttons, record)}</div>
      }
    })
  }

  // 添加选择
  const rowSelection = useMemo(
    () => ({
      onChange: (selectedRowKeys?: (string | number)[], selectedRows?: RecordType[]) => {
        props.handleSelect && props.handleSelect(selectedRowKeys, selectedRows)
      }
    }),
    []
  )

  // 分页配置
  const paginationProps = {
    pageSize,
    total,
    currentPage: page,
    showTotal: true,
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOpts: [...defaultPageSizeList],
    onChange: handlePageChange
  }

  return (
    <div id="components-table">
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={props.hasSelect ? rowSelection : undefined}
        loading={loading}
        pagination={props.total ? paginationProps : undefined}
      />
    </div>
  )
}

// 设置组件默认props值
AppTable.defaultProps = defaultProps

export default AppTable
