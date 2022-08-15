/* eslint-disable no-useless-catch */
import { ElMessage } from 'element-plus'
import request from '@/utils/request'
import i18n from '@/locales'

/**
 * 上传
 * @param file
 * @returns
 */
async function upload(file: File, uploadUrl?: string): Promise<any> {
  try {
    // 创建formData
    const formData = new FormData()
    // 文件名
    const filename = `${+new Date()}${file.name.slice(file.name.lastIndexOf('.'))}`
    // 需要上传的文件file
    formData.append('file', file, filename)
    const url = uploadUrl || '/upload'
    const res = await request({
      url,
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
    // 返回一个Promise
    ElMessage.success(i18n.global.t('app.uploadSuccess'))
    return { ...res.data, name: filename }
  } catch (err: any) {
    return Promise.reject(new Error(err?.message || err?.msg || 'Error'))
  }
}

export default upload
