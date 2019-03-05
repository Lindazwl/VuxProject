import request from '@/utils/request'

export function getAllEnumData(data = {}) {
  return request({
    url: '/System/SystemMethod/GetEnums',
    method: 'post',
    data
  })
}
// 根据Code获取ImageList
export function getImageListByCode(data = {}) {
  return request({
    url: '/SystemMethod/FindCodeImageUpload',
    method: 'post',
    data
  })
}

