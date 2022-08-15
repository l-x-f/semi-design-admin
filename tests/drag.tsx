// @ts-nocheck
import { useState, useMemo, FC } from 'react'
import { Table, Avatar } from '@douyinfe/semi-ui'
import { TableProps } from 'semi-ui/lib/es/table'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DraggableBodyRow } from './draggable'
import { defaultProps, defaultPageSizeList, defaultPageInfo } from './const'
import { PropTypes } from './type'

const initData: any[] = []
for (let i = 0; i < 200; i++) {
  const isSemiDesign = i % 2 === 0
  const randomNumber = (i * 1000) % 199
  initData.push({
    key: '' + i,
    name: isSemiDesign ? `Semi Design 设计稿${i}.fig` : `Semi Pro 设计稿${i}.fig`,
    owner: isSemiDesign ? '姜鹏志' : '郝宣',
    size: randomNumber,
    updateTime: new Date().valueOf() + randomNumber * 24 * 60 * 60 * 1000,
    avatarBg: isSemiDesign ? 'grey' : 'red'
  })
}

const AppTable: FC<PropTypes> = _props => {
  console.log('AppTable render', _props)
  const [data, setData] = useState([...initData])
  const [ page, set page] = useState(defaultPageInfo.page)
  const pageSize = defaultPageInfo.pageSize
  const [pageData, setPageData] = useState(data.slice(0, pageSize))

  const components = useMemo(
    () => ({
      body: {
        row: DraggableBodyRow
      }
    }),
    []
  )

  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const totalDragIndex = ( page - 1) * pageSize + dragIndex
    const totalHoverIndex = ( page - 1) * pageSize + hoverIndex
    const dragRow = data[totalDragIndex]
    const newData = [...data]
    newData.splice(totalDragIndex, 1)
    newData.splice(totalHoverIndex, 0, dragRow)
    setData(newData)
    setPageData(newData.slice(( page - 1) * pageSize,  page * pageSize))
  }

  const handlePageChange = (pageNum: number, _pageSize: number) => {
    set page(pageNum)
    setPageData(data.slice((pageNum - 1) * pageSize, pageNum * pageSize))
  }

  const columns: TableProps['columns'] = [
    {
      title: '#',
      fixed: true,
      width: 50,
      render: (text, record, index) => ( page - 1) * pageSize + index + 1
    },
    {
      title: '标题',
      dataIndex: 'name',
      width: 400,
      render: (text, _record, _index) => {
        return (
          <div>
            <Avatar
              size="small"
              shape="square"
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png"
              style={{ marginRight: 12 }}
            />
            {text}
          </div>
        )
      },
      filters: [
        {
          text: 'Semi Design 设计稿',
          value: 'Semi Design 设计稿'
        },
        {
          text: 'Semi Pro 设计稿',
          value: 'Semi Pro 设计稿'
        }
      ],
      onFilter: (value, record) => record.name.includes(value)
    },
    {
      title: '大小',
      dataIndex: 'size',
      width: 200,
      sorter: (a, b) => (a.size - b.size > 0 ? 1 : -1),
      render: text => `${text} KB`
    },
    {
      title: '所有者',
      width: 200,
      dataIndex: 'owner',
      render: (text, record) => {
        return (
          <div>
            <Avatar size="small" color={record.avatarBg} style={{ marginRight: 4 }}>
              {typeof text === 'string' && text.slice(0, 1)}
            </Avatar>
            {text}
          </div>
        )
      }
    },
    {
      title: '更新日期',
      dataIndex: 'updateTime',
      sorter: (a, b) => (a.updateTime - b.updateTime > 0 ? 1 : -1),
      render: value => {
        return new Date(value).toLocaleString()
      }
    }
  ]

  const rowSelection = useMemo(
    () => ({
      onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
      },
      getCheckboxProps: (record: any) => ({
        disabled: record.name === 'Michael James', // Column configuration not to be checked
        name: record.name
      })
    }),
    []
  )

  const scroll = {
    y: 600
  }

  return (
    <div id="components-table-demo-drag-sorting">
      <DndProvider backend={HTML5Backend}>
        <Table
          columns={columns}
          dataSource={pageData}
          rowSelection={rowSelection}
          pagination={{
            pageSize,
            total: data.length,
             page,
            showTotal: true,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOpts: [...defaultPageSizeList],
            onChange: handlePageChange
          }}
          scroll={scroll}
          components={components}
          onRow={(_, index) => ({
            index,
            moveRow
          })}
        />
      </DndProvider>
    </div>
  )
}

// 设置组件默认props值
AppTable.defaultProps = defaultProps

export default AppTable
