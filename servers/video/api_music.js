import JARequest from '../JARequest'

export async function getBanner() {
  const res = await JARequest.get(
    '/banner?type=2'
  )
  return res.banners
}

export async function getHotMusic() {
  const res = await JARequest.get(
    '/top/list?idx=1'
  )
  console.log('res: ', res)
  return res.playlist.tracks.slice(0, 9)
}