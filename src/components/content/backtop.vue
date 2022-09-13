<template>
  <div class="backtop" v-show="isVisable">
    <img src="../../assets/img/home/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'backtop',
    data() {
      return {
        isVisable: false
      }
    },
    methods: {
              windowScrollListener() {
  //获取操作元素最顶端到页面顶端的垂直距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop >= 2000) {
    this.isVisable = true; //大于480时显示元素
  }
  if (scrollTop < 2000) {
    this.isVisable = false; //小于480时隐藏元素
  }
}
    },
    created() {
       window.addEventListener('scroll', this.windowScrollListener);
    },
    destroyed() {
window.removeEventListener('scroll', this.windowScrollListener)
    }

}
</script>

<style>
    .backtop {
        position: fixed;
        right: 10px;
        bottom: 70px;
    }
    .backtop img {
        width: 50px;
    }
</style>