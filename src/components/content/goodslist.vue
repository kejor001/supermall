<template>
  <div class="goodslist">
    <goodslistitem v-for="item in goods" :goodsitem="item" class="item1"></goodslistitem>
  </div>
</template>

<script>
import goodslistitem from './goodslistitem.vue'
export default {
    components:{
        goodslistitem
    },
    props:{
        goods:{
            type:Array,
            default() {
                return [];
            }
        }
    }
}
</script>

<style>
    .goodslist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .item1 {
        flex: 50%;
        padding: 2px;
    }
</style>