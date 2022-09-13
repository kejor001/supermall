<template>
  <div class="cart">
    <!-- 购物车导航 -->
    <nav-bar class="cartnav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品的列表 -->
    <cart-list></cart-list>
    <!-- 底部的汇总 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/navbar.vue'
import CartList from  './CartList.vue'
import BottomBar from './BottomBar.vue'

export default {
  name:'cart',
  components:{
    NavBar,
    CartList,
    BottomBar
  },
  computed:{
    cartLength() {
      return this.$store.getters.cartLength;
    }
  }
}
</script>

<style>
  .cartnav {
    background-color:var(--color-tint);
    color: white;
    /* font-weight: 700; */
  }
</style>