import request from '@/utils/request'

// 查询支付列表
export function listPayOrder (query) {
  return request({
    url: '/system/payOrder/list',
    method: 'get',
    params: query
  })
}

// 查询支付详细
export function getPayOrder (id) {
  return request({
    url: '/system/payOrder/' + id,
    method: 'get'
  })
}

// 新增支付
export function addPayOrder (data) {
  return request({
    url: '/system/payOrder',
    method: 'post',
    data: data
  })
}

// 修改支付
export function updatePayOrder (data) {
  return request({
    url: '/system/payOrder',
    method: 'put',
    data: data
  })
}

// 删除支付
export function delPayOrder (id) {
  return request({
    url: '/system/payOrder/' + id,
    method: 'delete'
  })
}

// 查询最大编号
export function findMaxSort () {
  return request({
    url: '/system/payOrder/findMaxSort',
    method: 'get'
  })
}

// 导出支付
export function exportPayOrder (query) {
  return request({
    url: '/system/payOrder/export',
    method: 'get',
    params: query
  })
}

// 获取初始化数据
export function getInitData (dictTypes) {
  return request({
    url: '/system/payOrder/getInitData/' + dictTypes,
    method: 'get'
  })
}

export function pay (type) {
  return request({
    url: '/system/payOrder/pay/' + type,
    method: 'get'
  })
}

export function payResult (no) {
  return request({
    url: '/system/payOrder/payResult/' + no,
    method: 'get'
  })
}
