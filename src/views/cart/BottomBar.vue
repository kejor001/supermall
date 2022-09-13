<template>
  <div class="bottom-bar">
    <div class="check-content">
        <check-button class="check-button" :value="selectAll" @click.native="checkClick"></check-button>
        <span>全选</span>
        <div class="price">
            合计:{{totalPrice}}
        </div>
        <div class="calc">
            去计算:({{checkLength}})
        </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton.vue'

export default {
    components:{
        CheckButton
    },
    computed:{
        totalPrice() {
            return '￥' + this.$store.state.cartList.filter(res=>{
                return res.checked;
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkLength() {
            return this.$store.state.cartList.filter(res=>res.checked).length
        },
        selectAll() {
            if (this.$store.state.cartList.length===0) return false
            return !this.$store.state.cartList.find(res=>!res.checked);
        }
    },
    methods:{
        checkClick() {
            // console.log('fuck you');
            if (this.selectAll) {
                this.$store.state.cartList.forEach(res=>res.checked=false);
            } else {
                this.$store.state.cartList.forEach(res=>res.checked=true);
            }
        }
    }
}
</script>

<style>
    .bottom-bar {
        height: 40px;
        background-color: #eee;  
        position:fixed;
        left: 0%;
        right: 0;   
        bottom: 49px;
        line-height: 40px;
        display: flex;
        font-size: 14px;
    }
    .check-content {
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
    .check-button {
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-left: 5px;
    }
    .price {
        margin-left: 30px;
    }
    .calc {
        /* background-color: yellow; */
        padding-left: 4.125rem;
        text-align: center;
    }
</style>