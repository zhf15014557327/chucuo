<template>
  <div class="lunbo">
    <h1>轮播图组件</h1>
    <div class="big-box">
      <input type="button" value="←" class="left" @click="prev">
      <div class="min-box">
        <img :src="imgList[index].url" alt>
      </div>
      <input type="button" value="→" class="right" @click="next">
    </div>
  </div>
</template>
<script>
export default {
  name: "lunbotu",
  data() {
    return {
      imgList: [
        { url: require("../assets/img/01.jpg") },
        { url: require("../assets/img/02.jpg") },
        { url: require("../assets/img/03.jpg") },
        { url: require("../assets/img/04.jpg") },
        { url: require("../assets/img/05.jpg") },
        { url: require("../assets/img/06.jpg") },
        { url: require("../assets/img/07.jpg") },
        { url: require("../assets/img/08.jpg") },
        { url: require("../assets/img/09.jpg") },
        { url: require("../assets/img/10.jpg") },
        { url: require("../assets/img/11.jpg") },
        { url: require("../assets/img/12.jpg") }
      ],
      index: 0
    };
  },
  methods: {
    // 上一张图片
    prev(){
      this.index--
        if(this.index<0){
          // 判断边界,
          this.index=this.imgList.length-1
        }
    },
    next(){
       this.index++
       if(this.index>this.imgList.length-1){
         this.index=0;
       }
    }
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

.lunbo{
    width: 100vw;
    height: 400px;
    h1{
      text-align: center;
    }
    .big-box {
  margin: 0 auto;
  border: 1px solid #000;
  width: 800px;
  height: 400px;
  position: relative;
  input {
    font-size: 28px;
    border: 1px solid #000;
    position: absolute;
    width: 80px;
    height: 80px;
    top: 50%;
    transform: translateY(-50%);
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
  .min-box {
    margin: 0 auto;
    border: 1px solid #000;
    width: 640px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
}

</style>

