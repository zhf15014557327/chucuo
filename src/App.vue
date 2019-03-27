<template>
  <div id="app">
    <div class="nav-box">
      <ul>
        <li  v-for="(item, index) in List"  :class="{'active':ind === index}" @click="changeBgc(index)">
          <router-link :to="item.href">{{item.info}}</router-link>
          </li>
      </ul>
    </div>
    <!-- 路由出口 -->
   <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
     ind:0,
      isstate:true,
      List:[
        {
          href:"/",
          info:'首页',
        },
        {
          href:"/jishuqi",
          info:'计数器',
        },
        {
          href:"/echarts",
          info:'数据化图形',
        },
        {
          href:"/lunbotu",
          info:'轮播图',
        },
        {
          href:"/todos",
          info:'记事本',
        },
      ]
    }
  },
  methods: {
    changeBgc(index){
      this.ind=index
    }
  },
  
  
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  width: 100vw;
 .nav-box{
   margin-bottom: 100px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
      background-color: #ccc;
      border: 1px solid #000;
      width: 100%;;
      height: 100%;
       display: flex;
    justify-content: center;
    align-items: center;
    li{
      border: 1px solid #000;
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
    align-items: center;
       list-style: none;
       &.active{
         background-color: pink;
       }
       a{
         display: flex;
         justify-content: center;
         align-items: center;
         width: 100%;
         height: 100%;
         color: black;
         text-decoration: none;
       }
    }
    }
  }
}
 
</style>
