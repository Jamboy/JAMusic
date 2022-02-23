/*
 * @Description: 视频相关接口
 * @Author: Jamboy
 * @Date: 2022-02-22 10:01:13
 * @LastEditTime: 2022-02-23 13:52:00
 */

import jaRequest from '../../servers/JARequest'

export function getTopMvs(offset, limit = 10) {
  return jaRequest.get(
    '/top/mv',
    { offset, limit }
  )
}

/**
 * @description: mv播放地址
 * @return {*}
 */
export async function getMvPlayUrl(id) {
  const res = await jaRequest.get(
    `/mv/url?id=${id}`
  )
  return res?.data?.url
}

export async function getRelatedMv(id) {
  const res = await jaRequest.get(
    `/related/allvideo?id=${id}`
  )
  console.log('res.data: ', res.data)
  return res.data

}