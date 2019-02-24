<template>
   <div>
     <divider>hajf</divider>
     <scroller lock-x height="200px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
       <div class="box2">
         <p v-for="i in bottomCount">placeholder {{i}}</p>
         <load-more tip="loading"></load-more>
       </div>
     </scroller>
   </div>
</template>

<script>
  import { Scroller, LoadMore, Divider  } from 'vux'
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
      Divider
    },
    methods: {
      onScrollBottom() {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true
          setTimeout(() => {
            this.bottomCount += 10
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
