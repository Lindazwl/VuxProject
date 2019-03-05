<template>
   <div>
     <divider>下拉加载</divider>
     <scroller lock-x height="200px"
               @on-scroll-bottom="onScrollBottom"
               ref="scrollerBottom"
               :scroll-bottom-offst="200">
       <div class="box2">
         <p v-for="i in bottomCount">placeholder {{i}}</p>
         <load-more tip="loading"></load-more>
       </div>
     </scroller>
     <vuxrootbar :selected=1></vuxrootbar>
   </div>
</template>

<script>
  import { Scroller, LoadMore, Divider  } from 'vux'
  import Vuxrootbar from '@/components/Vuxrootbar'
  export default {
    name: "hello-box",
    data() {
      return {
        loading: false,
        onFetching: false,
        bottomCount: 20
      }
    },
    components: {
      Scroller,
      LoadMore,
      Divider,
      Vuxrootbar
    },
    methods: {
      onScrollBottom() {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true
          setTimeout(() => {
            this.bottomCount += 5
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
          }, 2000)
        }
      }
    }
  }
</script>

<style scoped>

</style>
