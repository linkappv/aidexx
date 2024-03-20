import request from '@/utils/request'

// 查询小程序用户列表
export function listAppUser (query) {
  return request({
    url: '/system/appUser/list',
    method: 'get',
    params: query
  })
}

// 查询小程序用户详细
export function getAppUser (id) {
  return request({
    url: '/system/appUser/' + id,
    method: 'get'
  })
}

// 新增小程序用户
export function addAppUser (data) {
  return request({
    url: '/system/appUser',
    method: 'post',
    data: data
  })
}

// 修改小程序用户
export function updateAppUser (data) {
  return request({
    url: '/system/appUser',
    method: 'put',
    data: data
  })
}

// 删除小程序用户
export function delAppUser (id) {
  return request({
    url: '/system/appUser/' + id,
    method: 'delete'
  })
}

// 导出小程序用户
export function exportAppUser (query) {
  return request({
    url: '/system/appUser/export',
    method: 'get',
    params: query
  })
}

// 获取初始化数据
export function getInitData (dictTypes) {
  return request({
    url: '/system/appUser/getInitData/' + dictTypes,
    method: 'get'
  })
}
