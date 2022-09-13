<template>
    <div class="recommend">
        <div v-for="item in recommends" class="inrecommend">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type:Array,
            defalut() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }
    .inrecommend {
        flex: 1;
    }
    .inrecommend img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>