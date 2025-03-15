import request from '@/utils/request'
// 加入购物车接口
// goodsId  =>商品id
// goodsSkuId =>商品规格    商品颜色(红色的衬衫、绿色的衬衫)
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
// 获取购物车列表
export const getCartList = () => {
  return request.get('/cart/list', {

  })
}
// 更新购物车商品的数量
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId, goodsNum, goodsSkuId
  })
}
