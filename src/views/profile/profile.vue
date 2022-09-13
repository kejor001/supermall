<template>
  <div>
  </div>
</template>

<script>
export default {
  methods:{
    jia(shu) {
      this.$store.commit('change',shu);
    },
    jian(shu) {
      this.$store.commit('dischange',shu)
    }
  }
}
</script>

<style>

</style>