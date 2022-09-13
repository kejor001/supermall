<template>
  <div class="cart-list">
    <!-- <li v-for="item in $store.state.cartList">{{item}}</li> -->
    <cart-list-item v-for="(item,index) in $store.state.cartList"
     :item-info='item' 
     :key="index"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

export default {
    components:{
        CartListItem
    }
}
</script>

<style>
    .cart-list {
        table-layout: fixed;
        word-wrap: break-all;
        word-break: normal;
        overflow: hidden;
    }
</style>