import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入抽取的路由
import router from "./ilb/router";
// 全局注册自定义指令
// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   update: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// });
new Vue({
  // 挂载路由实例
router,
  render: h => h(App),
}).$mount('#app')
