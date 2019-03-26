import Vue from 'vue';
// 导入vue-router路由
import VueRouter from 'vue-router'
// 因为是vue的插件所以要use
Vue.use(VueRouter)
// 导入组件
import jishuqi from "../components/jishuqi.vue"
import echarts from "../components/echarts.vue"
import lunbotu from "../components/lunbotu.vue"
import todos from "../components/todos.vue"
// 创建路由实例
let router= new VueRouter({
    // 写路由规则
    routes:[ 
        // { path: '/a', redirect: '/b' }路由重定向
        {
            path:'/',
            redirect:"jishuqi"
        },
        {
            path:'/jishuqi',
            component:jishuqi
        },
        {
            path:'/echarts',
            component:echarts
        },
        {
            path:'/lunbotu',
            component:lunbotu
        },
        {
            path:'/todos',
            component:todos
        },
    ]
});
// 暴露出去
export default router;
