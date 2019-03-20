import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入抽取的路由
import router from "./ilb/router";
new Vue({
  // 挂载路由实例
router,
  render: h => h(App),
}).$mount('#app')
