import type { TableProps } from 'semi-ui/lib/es/table'
/**
 * props 类型
 */
export type AppTablePropTypes = Partial<{
  /*
   * 操作栏宽度
   */
  operationWidth: number
  /*
   * 数据
   */
  data: RecordType[]
  /*
   * 配置
   */
  columns: TableProps['columns']
  /*
   * 是否需要操作栏
   */
  hasOperation: boolean
  /*
   * 是否需要索引
   */
  hasIndex: boolean
  /*
   * 是否需要选择
   */
  hasSelect: boolean
  /*
   * 是否需要拖动
   */
  hasDraggable: boolean
  /**
   * 分页
   */
  pagination: {
    page: number
    pageSize: number
  }
  /**
   * 加载
   */
  loading: boolean
  /**
   * 数据总数
   */
  total: number
  /*
   * 监听分页改变
   */
  handlePageChange: Nullable<(page: number, pageSize: number) => void>
  /*
   * 监听选择表格
   */
  handleSelect: Nullable<
    (selectedRowKeys?: (string | number)[], selectedRows?: RecordType[]) => void
  >
  /*
   * 监听操作栏
   */
  handleTableOption: Nullable<
    (record: RecordType, option: Record<string, any>, index: number) => void
  >
  /*
   * 点击表格单元格
   */
  handleClickCell: Nullable<(text: string, record: RecordType, index: number) => void>
}>
