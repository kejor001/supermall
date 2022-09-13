<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles"  class="tabcontrolitem" @click="itemclick(index)" :key='item'>
            <span :class="{active:index===currentindex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
 props:{
    titles:{
        type:Array,
        default() {
            return []
        }
    }
 },
 methods:{
    itemclick(index) {
        this.currentindex=index;
        this.$emit('tabClick',index)
    }
 },
 data() {
    return {
        currentindex:0
    }
 }
}
</script>

<style>
    .tabcontrol {
        display: flex;
        text-align: center;
        /* width: 100%; */
        justify-content: space-around;
        font-size: .9375rem;
        /* position:sticky; */
        /* top: 44px; */
        background-color: white;
    }
    .tabcontrolitem {
        flex: 1;
        height: 2.5rem;
        width: 2.5rem;
        line-height: 2.5rem;
    }
    .tabcontrolitem span {
        padding: .3125rem;
    }
    .tabcontrolitem:hover {
        color: var(--color-high-text);
    }
    .tabcontrolitem:hover span {
                border-bottom: .1875rem solid var(--color-high-text);
    }
</style>