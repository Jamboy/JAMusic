/*
 * @Description: 视频相关接口
 * @Author: Jamboy
 * @Date: 2022-02-22 10:01:13
 * @LastEditTime: 2022-02-22 10:21:47
 */

import jaRequest from '../../servers/JARequest'

export function getTopMvs(offset, limit = 10) {
  return jaRequest.get(
    '/top/mv',
    { offset, limit }
  )
}