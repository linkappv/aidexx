import request from '@/utils/request'

// 查询快递信息与四段码表列表
export function listLogistic (query) {
  return request({
    url: '/system/logistic/list',
    method: 'get',
    params: query
  })
}

// 查询快递信息与四段码表详细
export function getLogistic (id) {
  return request({
    url: '/system/logistic/' + id,
    method: 'get'
  })
}

// 新增快递信息与四段码表
export function addLogistic (data) {
  return request({
    url: '/system/logistic',
    method: 'post',
    data: data
  })
}

// 修改快递信息与四段码表
export function updateLogistic (data) {
  return request({
    url: '/system/logistic',
    method: 'put',
    data: data
  })
}

// 删除快递信息与四段码表
export function delLogistic (id) {
  return request({
    url: '/system/logistic/' + id,
    method: 'delete'
  })
}

// 导出快递信息与四段码表
export function exportLogistic (query) {
  return request({
    url: '/system/logistic/export',
    method: 'get',
    params: query
  })
}

// 获取初始化数据
export function getInitData (dictTypes) {
  return request({
    url: '/system/logistic/getInitData/' + dictTypes,
    method: 'get'
  })
}
export function del () {
  return request({
    url: '/system/logistic/del',
    method: 'delete'
  })
}
