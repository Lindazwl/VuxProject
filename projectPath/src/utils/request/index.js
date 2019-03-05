import axios from 'axios'
import store from '../../store/index'
import { baseURL } from '../../config/index'
import Vue from 'vue'

// 创建axios实例
console.log(process)
const service = axios.create({
  baseURL: baseURL, // api的base_url
  timeout: 100000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.url += `?Token=${store.getters.token}` // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    // if (store.getters.token) {
    //   config.headers['Token'] = store.getters.token// 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非0是抛错
     */
    const res = response.data
    if (res.Code !== 0) {
      // 0:正确; 1:出现错误;  2:Token 过期了;
      if (res.Code === 2) {
        if (store.getters.logOutAlerted) {
          Vue.$vux.toast.show({
            text:'登录已过期，请重新登录 ',
            showClose: false,
            position: 'middle'
          }).then(() => {
            store.dispatch('FedLogOut').then(() => {
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
          })
          store.commit('SET_LOGOUTALERTED', false)
        }
      } else {
        Vue.$vux.toast.show({
          text: res.Msg,
          type: 'warn',
          time: 3 * 1000,
          position: 'middle'
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Vue.$vux.toast.show({
      text: error.message,
      type: 'warn',
      time: 3 * 1000,
      position: 'middle'
    })
    return Promise.reject(error)
  }
)

export default service
