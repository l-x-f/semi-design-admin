import type { AppTablePropTypes } from './type'
/**
 * 默认的props
 */
export const defaultProps: AppTablePropTypes = {
  data: [],
  columns: [],
  operationWidth: 140,
  pagination: {
    page: 1,
    pageSize: 10
  },
  total: 0,
  loading: false,
  hasOperation: true,
  hasIndex: true,
  hasSelect: false,
  hasDraggable: false,
  handlePageChange: null,
  handleSelect: null,
  handleTableOption: null,
  handleClickCell: null
}

export const defaultPageSizeList = [10, 20, 30, 40, 50, 100, 200, 300, 400, 500]

export const defaultPageInfo: IPageInfo = {
  page: 1,
  pageSize: 20
}
