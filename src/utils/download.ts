import type { FileSaverOptions } from 'file-saver'
import { readFileText } from './upload'

interface IDownload<T = Blob | string> {
  (data: T, filename?: string, options?: FileSaverOptions): Promise<T>
}

const getFileName = (path: string) => path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
const getFileType = (path: string) => path.slice(path.lastIndexOf('.'))

/**
 * @description 下载文件
 * @param data
 * @param filename
 * @param options
 */
const download: IDownload = async (data, filename = '', options) => {
  // 处理没有数据的情况
  if (!data) {
    return Promise.reject(new Error(''))
  }

  // 处理二进制数据接口异常
  try {
    const text = await readFileText(data as Blob)
    const res = JSON.parse(text)
    if (res?.code === 500) {
      return Promise.reject(new Error(''))
    }
  } catch (error) {}

  // 处理文件名
  let type = ''
  let name = ''
  // const date = dateFormatMinute(new Date())
  if (filename) {
    name = getFileName(filename)
    type = getFileType(filename)
  } else {
    name = data instanceof Blob ? getFileName(data.type) : getFileName(data)
    type = data instanceof Blob ? getFileType(data.type) : getFileType(data)
  }

  // 下载文件
  try {
    const { default: FileSaver } = await import('file-saver')
    FileSaver.saveAs(data, `${name}${type}`, options)
    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(new Error(''))
  }
}

export default download
