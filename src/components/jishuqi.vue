<template>
     <div class="conten-jishu">
      <h3>我的计数器</h3>
      <input type="button" value="+" @click="jia" >
      <span>{{num}}</span>
      <input type="button" value="-" @click="jian">
    </div>
</template>
<script>
export default {
      name: "jishu",
     data(){
    return{
      num:10,
      dfumax:35,
      dfumin:0,
      dfbushu:1
    }
  },
  
  // 方法
  methods:{
      jia(){
          this.num +=this.dfbushu
          if(this.num>this.dfumax){
              this.num=this.dfumax
          };
       
      },
      jian(){
            this.num-=this.dfbushu
            if(this.num<this.dfumin){
                this.num=this.dfumin
            };
        
      }
  },
}
</script>
<style lang="scss">
.conten-jishu{
  text-align: center;
  margin: 300px auto;
  width: 150px;
  input{
    width: 50px;
    height: 100%;
  }
  span{
    display: inline-block;
    width: 50px;
    height: 100%;
  }
}
</style>
