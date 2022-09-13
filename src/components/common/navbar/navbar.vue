<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navbar {
      position:relative;
        display: flex;
        height: 44px;
        line-height: 44px;
        z-index: 99999;
        text-align: center;
        border-bottom: 1px solid #eee;
        /* box-shadow: 0 1px 1px rgba(100, 100, 100, 0.8); */
    }
    .left,
    .right {
        width: 60px;
        /* background-color: red; */
    }
    .center {
        flex: 1;
        /* background-color: pink; */
        /* text-align: center; */
    }
</style>