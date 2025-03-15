import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
// 1、创建axios实例，将来对创建出来的axios实例，进行自定义配置
// 不会污染原始的axios实例
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 15000,
  headers: {
    platform: 'H5'
  }
})
// 2、自定义配置——请求/响应拦截器
// 添加请求拦截器，此时最开始是给原本的axios添加配置，不是给现有的添加配置，需要将axios改为现有的axios名字
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启loading,禁止背景点击（节流处理，防止多次无效触发）
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  // 只要有token，就在请求时携带，便于请求时需要授权的接口
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么(默认axios会多包装一层data，需要相应拦截器出来)
  const res = response.data
  if (!res.state === 200) {
    // 给提示
    // Toast默认是单例子模式，后面的Toast调用了，会将前一个覆盖，同时只能出现一个
    Toast('res.message')
    // 抛出错误的promise
    return Promise.reject(res.message)
  } else {
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 3、导出配置好的实例
export default instance
