import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueQriously from 'vue-qriously'
import Vuex from 'vuex'
import state from './store'
Vue.use(VueQriously)
Vue.use(ElementUI)
Vue.use(Vuex)
const store = new Vuex.Store(state)
Vue.config.productionTip = false
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'api' : 'proApi' // (根据开发环境和生产环境使用不同的请求地址)
Vue.prototype.$axios = axios

// -----------------------屏幕自适应
window.onload = function(){
  getRem(750,10)
};
window.onresize = function(){
  getRem(750,10)
  
};
function getRem(pwidth,prem){
  var html = document.getElementsByTagName("html")[0];
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = oWidth/pwidth*prem + "px";
}
// -----------------------屏幕自适应

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
