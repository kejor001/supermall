<template>
  <div class="toast" v-show="show">
    {{message}}
  </div>
</template>

<script>
export default {
    props:{
        message:{
            type:String,
            default:'fucking'
        },
        show:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color:rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 8px 10px;
    }
</style>