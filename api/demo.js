import request from '@/plugins/request'


//测试接口
export function getDemoinfo (params) {
  return request({
    url: '/article/today?dev=1',//测试
    method: 'get',
    params: params
  })
}
