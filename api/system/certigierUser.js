import request from '@/utils/request'

// 查询已授权网点信息表列表
export function listCertigierUser (query) {
  return request({
    url: '/system/certigierUser/list',
    method: 'get',
    params: query
  })
}

// 查询已授权网点信息表详细
export function getCertigierUser (id) {
  return request({
    url: '/system/certigierUser/' + id,
    method: 'get'
  })
}

// 新增已授权网点信息表
export function addCertigierUser (data) {
  return request({
    url: '/system/certigierUser',
    method: 'post',
    data: data
  })
}

// 修改已授权网点信息表
export function updateCertigierUser (data) {
  return request({
    url: '/system/certigierUser',
    method: 'put',
    data: data
  })
}

// 删除已授权网点信息表
export function delCertigierUser (id) {
  return request({
    url: '/system/certigierUser/' + id,
    method: 'delete'
  })
}

// 导出已授权网点信息表
export function exportCertigierUser (query) {
  return request({
    url: '/system/certigierUser/export',
    method: 'get',
    params: query
  })
}

// 获取初始化数据
export function getInitData (dictTypes) {
  return request({
    url: '/system/certigierUser/getInitData/' + dictTypes,
    method: 'get'
  })
}
