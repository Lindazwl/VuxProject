// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index'
// 自适应适配布局
import 'lib-flexible/flexible.js'
import store from './store'
// 注册页面所有的公用样式
import { XButton, ToastPlugin, PopupRadio, PopupPicker,
  Group, Picker, XHeader,Popup, Loading, InlineXSwitch,
  InlineLoading, Calendar, Cell, DatetimeRange, Datetime, XInput,
  XSwitch, XTextarea, Divider, Swiper, Tab, TabItem,
  Alert, Confirm, Marquee, MarqueeItem, ViewBox, Tabbar, TabbarItem } from 'vux'
Vue.use(ToastPlugin)
Vue.component('x-header', XHeader)
Vue.component('popup', Popup)
Vue.component('loading', Loading)
Vue.component('inline-loading', InlineLoading)
Vue.component('calendar', Calendar)
Vue.component('cell', Cell)
Vue.component('datetime-range', DatetimeRange)
Vue.component('datetime', Datetime)
Vue.component('group', Group)
Vue.component('inline-x-switch', InlineXSwitch)
Vue.component('picker', Picker)
Vue.component('popup-picker', PopupPicker)
Vue.component('popup-radio', PopupRadio)
Vue.component('x-input', XInput)
Vue.component('x-switch', XSwitch)
Vue.component('x-textarea', XTextarea)
Vue.component('divider', Divider)
Vue.component('x-button', XButton)
Vue.component('swiper', Swiper)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('alert', Alert)
Vue.component('confirm', Confirm)
Vue.component('marquee', Marquee)
Vue.component('marquee-item', MarqueeItem)
Vue.component('view-box', ViewBox)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
// 导入字体
import './assets/fonts/iconfont.css'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
