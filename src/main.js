import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// // 导入vue-router路由
// import VueRouter from 'vue-router'
// // 因为是vue的插件所以要use
// Vue.use(VueRouter)
// // 导入组件
// import jishuqi from "./components/jishuqi.vue"
// import echarts from "./components/echarts.vue"
// import lunbotu from "./components/lunbotu.vue"

// 导入抽取的路由
import router from "./ilb/router";
new Vue({
// // 挂载实例
//    router:new VueRouter({
//     routes:[
//       // {
//       //   path:'/',
//       //   component:jishuqi
//       // },
//       {
//         path:'/jishuqi',
//         component:jishuqi
//       },
//       {
//         path:'/echarts',
//         component:echarts
//       },
//       {
//         path:'/lunbotu',
//         component:lunbotu
//       },
//     ]
//   }),
router,
  render: h => h(App),
}).$mount('#app')
