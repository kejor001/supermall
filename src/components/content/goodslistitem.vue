<template>
  <div class="itemgoods" @click="itemClick">
    <img :src="showImage" alt="">
    <p>{{goodsitem.title}}</p>
    <span class="price">{{goodsitem.price}}</span>
    <span class="collect">{{goodsitem.collect}}</span>
  </div>
</template>

<script>
export default {
  props:{
    goodsitem: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/detail/'+this.goodsitem.iid);
    }
  },
  computed:{
    showImage() {
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
}
</script>

<style>
  .itemgoods {
      display: flex;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  }
 .itemgoods img {
  width: 100%;
  border-radius: 8px;
  flex:50%
 }
  .itemgoods p {
      white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 6px 4px;
  }
   .itemgoods span {
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 4px 20px;
   }
</style>