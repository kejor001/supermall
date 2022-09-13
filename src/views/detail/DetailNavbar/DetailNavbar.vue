<template>
  <div class="detailnav">
    <navbar>
        <div slot="left" class="back" @click="backClick">
            <img src="../../../assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" 
            class="detailitem"
            :class="{active:index===currentIndex}"
            @click='detailClick(index)'
            >{{item}}</div>
        </div>
    </navbar>
  </div>
</template>

<script>
import Navbar from '../../../components/common/navbar/navbar.vue'

export default {
    components:{
        Navbar
    },
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        detailClick(index) {
            this.currentIndex=index;
            this.$emit('titleClick',index)
        },
        backClick() {
            this.$router.back();
        }
    }
}
</script>

<style>
    .title {
        display: flex;
    }

    .detailitem {
        flex: 1;
    }
    .active {
        color: var(--color-high-text);
    }
    .back img {
        padding-top: 12px;
    }
    .detailnav {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            z-index: 99;
            background-color: white;
    }
</style>