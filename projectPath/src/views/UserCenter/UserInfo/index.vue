<template>
    <div class="user-info">
      <div class="userinfo-back">
        <div class="back-top"></div>
        <div class="back-bottom"></div>
        <!--<img src="../../../assets/image/usercenter-userinfo.jpg" height="421" width="750"/>-->
      </div>
      <div class="login-info">
        <p class="user-name">{{ UserInfo.UserName}}</p>
        <p class="user-tel">{{UserInfo.Tel}}</p>
      </div>
      <div class="setting-icon">
        <i class="iconfont icon-setting icon-setting"></i>
      </div>
      <div class="userinfo-list">
        <group class="userinfo-item-box">
          <cell class="userinfo-item" title="我的收藏" link="/component/radio"></cell>
          <cell class="userinfo-item" title="我的消息" link="/component/radio" ></cell>
          <cell class="userinfo-item" title="我的待办" link="/component/radio" ></cell>
          <cell class="userinfo-item" title="我的抄表" link="/component/radio"></cell>
          <cell class="userinfo-item" title="关于我们" link="/UserCenter/AboutMe" ></cell>
          <cell class="userinfo-item" title="意见反馈" link="/component/radio" ></cell>
        </group>
        </div>
    </div>
</template>

<script>
  // import { IconFont } from '@/components'
  // import { FindReadCount } from '../../../api/usercenter'
  // import { localStorage } from '@/utils/storage'
  // import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

  export default {
    name: 'UserInfo',
    components: {
      // Cell, CellBox, CellFormPreview, Group, Badge
    },
    data() {
      return {
        UserInfo: {
          UserName: '飒飒从事',
          Tel: '13578784545'
        },
        msgNumber: 0
        // cellStyle: {
        //   height: '100px',
        //   paddingLeft: '36px',
        //   paddingRight: '30px'
        // },
        // btnStyle: {
        //   backgroundColor: 'white',
        //   width: '100px',
        //   borderRadius: '30px'
        // },
        // textStyle: {
        //   color: 'rgb(56,158,242)',
        //   fontSize: '24px'
        // }
      }
    },
    created() {
      this.loadUserInfo()
      this.updateMsgNumber()
    },
    methods: {
      onPageActive(){
        this.getMsgNumber()
      },
      loadUserInfo() {
        // localStorage.get('userinfo').then(res => {
        //   if (res) {
        //     this.UserInfo = {
        //       UserName: res.UserName,
        //       Tel: res.LoginCode
        //     }
        //   }
        // })
      },
      getMsgNumber() {
        // FindReadCount().then(res => {
        //   this.msgNumber = res.Data
        // })
      },
      updateMsgNumber() {
        // const Stark = new BroadcastChannel('MsgNumberUpdate')
        // Stark.onmessage = (event) => {
        //   if(typeof event.data==='object') {
        //     if(!event.data.Status) {
        //       this.msgNumber--
        //     }
        //   }
        // }
      },
      toSystemset() {
        this.$router.push('/UserCenter/SystemSet')
      },
      toMyCollectHouse() {
        this.$router.push('/UserCenter/CollectedHouse')
      },
      toMyMessage() {
        this.$router.push('/UserCenter/MsgCenter')
      },
      toWaterAndelectricityReading() {
        this.$router.push('/Service/WaterAndelectricityReading')
      },
      toAboutMe() {
        this.$router.push('/UserCenter/AboutMe')
      },
      toAdviceFeedback() {
        this.$router.push('/UserCenter/AdviceFeedback')
      },
      toMySchedule() {
        this.$router.push('/UserCenter/MySchedule')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./style";
</style>
