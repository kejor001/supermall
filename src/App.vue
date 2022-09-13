<template>
  <div id="app">
    <tabbar1 class="tabbar">
      <tabbaritem path='/home' activecolor="red">
        <img src="./assets/img/tabbar/home.svg" alt="" slot="img">
        <img src="./assets/img/tabbar/home_active.svg" alt="" slot="imgactive">
        <div slot="wenzi">首页</div>
      </tabbaritem>
      <tabbaritem path='/categories' activecolor="red">
        <img src="./assets/img/tabbar/category.svg" alt="" slot="img">
        <img src="./assets/img/tabbar/category_active.svg" alt="" slot="imgactive">
        <div slot="wenzi">分类</div>
      </tabbaritem>
      <tabbaritem path='/cart' activecolor="red">
        <img src="./assets/img/tabbar/cart.svg" alt="" slot="img">
        <img src="./assets/img/tabbar/cart_active.svg" alt="" slot="imgactive">
        <div slot="wenzi">购物车</div>
      </tabbaritem>
      <tabbaritem path='/profile' activecolor="red">
        <img src="./assets/img/tabbar/profile.svg" alt="" slot="img">
        <img src="./assets/img/tabbar/profile_active.svg" alt="" slot="imgactive">
        <div slot="wenzi">我的</div>
      </tabbaritem>
    </tabbar1>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>
  @import url('./assets/css/index.css');
  @import url('./assets/css/base.css');

  .tabbar {
    position:fixed;
    left: 0%;
    right: 0;
    bottom: 0%;
    z-index:9999999;
  }
</style>
<script>
import tabbar1  from './components/tabbar/tabbar.vue'
import tabbaritem from './components/tabbar/tabbaritem.vue'
export default {
  components:{
    tabbar1,
    tabbaritem
  }
}
</script>

