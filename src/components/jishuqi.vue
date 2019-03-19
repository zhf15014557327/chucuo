<template>
     <div class="conten-jishu">
      <h1>我的计数器</h1>
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
      num:15,
      dfumax:35,
      dfumin:1,
      dfbushu:2
    }
  },
  
  // 方法
  methods:{
      jia(){
        // this.num++
          this.num +=this.dfbushu
          if(this.num>this.dfumax){
              this.num=this.dfumax
          };
        
      },
      jian(){
        // this.num--
            this.num-=this.dfbushu
            if(this.num<this.dfumin){
                this.num=this.dfumin
            };
          this.$emit("num-change",this.num)
      }
  },
}
</script>
<style lang="scss">
.conten-jishu{
  text-align: center;
  margin: 300px auto;
  width: 150px;
  h1{
        text-align: center;
  }
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
