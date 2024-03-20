import request from '@/utils/request'

// 查询反馈意见列表
export function listFeedback (query) {
  return request({
    url: '/system/feedback/list',
    method: 'get',
    params: query
  })
}

// 查询反馈意见详细
export function getFeedback (id) {
  return request({
    url: '/system/feedback/' + id,
    method: 'get'
  })
}

// 新增反馈意见
export function addFeedback (data) {
  return request({
    url: '/system/feedback',
    method: 'post',
    data: data
  })
}

// 修改反馈意见
export function updateFeedback (data) {
  return request({
    url: '/system/feedback',
    method: 'put',
    data: data
  })
}

// 删除反馈意见
export function delFeedback (id) {
  return request({
    url: '/system/feedback/' + id,
    method: 'delete'
  })
}

// 导出反馈意见
export function exportFeedback (query) {
  return request({
    url: '/system/feedback/export',
    method: 'get',
    params: query
  })
}

// 获取初始化数据
export function getInitData (dictTypes) {
  return request({
    url: '/system/feedback/getInitData/' + dictTypes,
    method: 'get'
  })
}
