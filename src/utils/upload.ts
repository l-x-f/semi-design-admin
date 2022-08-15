/* eslint-disable no-useless-catch */

import { Toast } from '@douyinfe/semi-ui'

const getFileType = (path: string) => path.slice(path.lastIndexOf('.'))
/**
 *
 * @param {file} file 源文件
 * @desc 限制文件，默认限制图片
 * @return 合法文件返回true否则返回false
 */
export const isLegalFile = (file: File, types: string[]): boolean => {
  const type = getFileType(file.name)
  const isLegal = types.includes(type)
  if (!isLegal) {
    // 上传文件格式有误!
    Toast.error('上传文件格式有误!')
    return false
  }
  return true
}

/**
 *
 * @param {file} file 源文件
 * @param {number} fileMaxSize  图片限制大小单位（MB）
 * @desc 限制为文件上传大小
 * @return 在限制内返回true否则返回false
 */
export const isMaxFileSize = (file: File | Blob, fileMaxSize?: number): boolean => {
  if (!fileMaxSize) {
    return true
  }
  const isMaxSize = file.size / 1024 / 1024 < fileMaxSize
  if (!isMaxSize) {
    // 上传文件大小不能超过 {size} MB!
    Toast.error(`上传文件大小不能超过', ${fileMaxSize}`)
    return false
  }
  return true
}

/**
 *
 * @param {file} file 源文件
 * @desc 读取图片文件为base64文件格式
 * @return 返回base64文件
 */
export const readFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = (e.target as any).result
      resolve(data)
    }
    reader.onerror = () => {
      // 读取文件失败
      const err = new Error('读取文件失败')
      reject(err.message)
    }
    reader.readAsDataURL(file)
  })
}

/**
 *
 * @param {file} file 源文件
 * @desc 读取图片文件为text文件格式
 * @return 返回text文件
 */
export const readFileText = (file: File | Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = (e.target as any).result
      resolve(data)
    }
    reader.onerror = () => {
      // 读取文件失败
      const err = new Error('读取文件失败')
      reject(err.message)
    }
    reader.readAsText(file, 'utf-8')
  })
}

/**
 *
 * @param {string} src  图片地址
 * @desc 加载真实图片
 * @return 读取成功返回图片真实宽高对象 ag: {width:100,height:100}
 */
export const loadImage = (
  src: string
): Promise<{
  width: number
  height: number
}> => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      const data = {
        width: image.width,
        height: image.height
      }
      resolve(data)
    }
    image.onerror = () => {
      // 加载文件失败
      const err = new Error('加载文件失败')
      reject(err)
    }
  })
}

/**
 *
 * @param {file} file 源文件
 * @param {object} props   文件分辨率的宽和高   ag: props={width:100, height :100}
 * @desc  判断图片文件的分辨率是否在限定范围之内
 * @throw  分辨率不在限定范围之内则抛出异常
 *
 */
export const isAppropriateResolution = async (
  file: File,
  props: { width: number; height: number }
): Promise<boolean> => {
  try {
    const { width, height } = props
    const base64 = await readFile(file)
    const image = await loadImage(base64)
    if (image.width !== width || image.height !== height) {
      // 上传图片的分辨率必须为
      throw new Error('上传图片的分辨率必须为' + width + '*' + height)
    }
    return true
  } catch (error) {
    throw error
  }
}
