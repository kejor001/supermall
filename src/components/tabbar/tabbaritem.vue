<template>
    <div class="item" @click="itemclick">
        <slot v-if="!isactive" name="img"></slot>
        <slot v-else name="imgactive"></slot>
        <div :style="activestyle"><slot name="wenzi"></slot></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        itemclick() {
            this.$router.push(this.path).catch(err=>err);
        }
    },
    props:{
        path:String,
        activecolor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        isactive() {
            return  this.$route.path.indexOf(this.path) !== -1 ;
        },
        activestyle() {
            return this.isactive ? {color: this.activecolor} : {};
        }
    }
}
</script>

<style>
  .item {
    flex: 1;
    height: 3.0625rem;
    text-align: center;
    font-size: .875rem;
    margin-top: .1875rem;
    margin-bottom: .125rem;
  }
  .item img {
    width:1.5rem ;
    height: 1.5rem;
    vertical-align: middle;
  }
</style>