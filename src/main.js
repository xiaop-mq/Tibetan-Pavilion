import Vue from 'vue'
import App from './App'
// 导入封装好的函数
import request from "./utils/request";
Vue.config.productionTip = false
// 挂载到vue上
Vue.prototype.request=request;
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
