<template>
        <swiper class="swiperrr">
            <swiper-item v-for="item in topimages">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../components/swiper'

export default {
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topimages:{
            type:Array,
            default () {
                return [];
            }
        }
    }
}
</script>

<style>
 .swiperrr {
    height: 300px;  
    overflow: hidden;
    padding-top: 44px;
 }
</style>