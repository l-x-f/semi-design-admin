/**
 * ref 绑定的元素类型
 */
declare type ElementRefType = HTMLElement | null

/**
 * setTimeout 类型
 */
declare type Timeout = ReturnType<typeof setTimeout>

/**
 * 普通的对象的泛型
 */
declare type RecordType = Record<string, any>

/**
 * 允许null的泛型
 */
declare type Nullable<T> = T | null

/**
 * 分页参数
 */
declare interface IPageInfo {
  /**
   * 默认为1
   */
  page: number
  /**
   * 默认为10
   */
  pageSize: number
}

/**
 * 接口数据响应类型
 */
declare interface IResponse extends IPageInfo {
  code: number
  data: {
    data: any
    result: any
    total: number
  }
  msg: string
}
