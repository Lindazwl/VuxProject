<template>
  <div>
    <div>我是个人中心</div>
    <vuxrootbar :selected=3></vuxrootbar>
  </div>
</template>

<script>
  import Vuxrootbar from '@/components/Vuxrootbar'
  export default {
    name: "personl-info",
    components: {
      Vuxrootbar
    }
  }
</script>

<style scoped>

</style>
