<template>
  <div>
  <tabbar v-model="selected1">
    <tabbar-item link="/">
      <img slot="icon" src="../assets/image/1.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item show-dot link="/HelloBox">
      <img slot="icon" src="../assets/image/2.png">
      <span slot="label">消息</span>
    </tabbar-item>
    <tabbar-item link="/HelloFromVux">
      <img slot="icon" src="../assets/image/3.png">
      <span slot="label">活动</span>
    </tabbar-item>
    <tabbar-item badge="2" link="/personlInfo">
      <img slot="icon" src="../assets/image/4.png" >
      <span slot="label">个人中心</span>
    </tabbar-item>
  </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: "vux-rootbar",
    props: {
      selected: Number
    },
    components: {
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        selected1:this.selected,
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
