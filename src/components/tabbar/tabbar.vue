<template>
  <div>
     <div id="tabbar">
        <slot></slot>
     </div>
        
  </div>
</template>

<script>
export default {
    name:'tabbar'
}
</script>

<style>
  #tabbar {
    display: flex;
    background-color: #f6f6f6;
    position:fixed;
    /* width: 100%; */
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow:0 -1px 1px rgba(0,0,0,0.1);
  }
</style>