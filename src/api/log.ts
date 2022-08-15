import request from '@/utils/request'

/**
 *  日志接口
 */
class LogServe {
  /**
   * 前缀
   */
  suffix = '/log'

  /**
   * 获取列表
   */
  public getList(params = {}): IApiResponse {
    return request({
      url: `${this.suffix}/list`,
      method: 'get',
      params
    })
  }
}

export default new LogServe()
