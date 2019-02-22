<template>
  <div>
    <!--<div class="vux-demo">-->
      <!--<img class="logo" src="../assets/vux_logo.png">-->
      <!--<h1> </h1>-->
    <!--</div>-->
    <x-header :right-options="{showMore: true}"  @on-click-more="showMenus = true">with more menu</x-header>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <!--<cell title="Cell" value="value" is-link></cell>-->
      <!--<cell title="Cell" value="value" is-link value-align="left"></cell>-->
      <x-input title="用户名" required type="text" ref="refcode" placeholder="请输入用户名"
               :should-toast-error=true
               :is-type = "codeValue"
               v-model="TestFrom.username"
               @on-change="keyDown"
      >
      </x-input>
      <x-input title="邮箱" type="email" is-type="email" placeholder="请输入邮箱" v-model="TestFrom.email"></x-input>
      <x-input title="密码" type="password"  placeholder="请输入密码" v-model="TestFrom.password"></x-input>
      <x-input title="手机号" type="tel" is-type="china-mobile" placeholder="请输入手机号" v-model="TestFrom.phone"></x-input>
      <x-input title="网站"  placeholder="请输入网站" v-model="TestFrom.website"></x-input>
      <x-input title="数字" type="number" placeholder="请输入数字" v-model="TestFrom.number"></x-input>
      <datetime title="生&emsp;&emsp;&nbsp;日" v-model="TestFrom.birthday" value-text-align="left"></datetime>
      <x-textarea title="自我介绍" placeholder="自我介绍" v-model="TestFrom.introduction" :show-counter="false" :rows="3"></x-textarea>
    </group>
    <x-button type="primary" style="border-radius:99px;margin-top:30px" :disabled="disabled" @click.native="SubmitForm">primary</x-button>
    <tabbar>
      <tabbar-item @on-item-click="ToBaidu">
        <img slot="icon" src="../assets/image/1.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/image/2.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../assets/image/3.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/image/4.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Group,Tabbar, AlertModule, TabbarItem, Cell, XHeader, XButton, XInput,Datetime,XTextarea} from 'vux'

export default {
  components: {
    Group,
    Cell,
    XHeader,
    XInput,
    Datetime,
    XTextarea,
    XButton,
    Tabbar,
    TabbarItem,
    AlertModule
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      disabled: false, // 需要在所有信息填写正确无误之后按钮才能被触发
      TestFrom: {
        username: '',
        email: '',
        password: '',
        phone: '',
        website: '',
        number: '',
        birthday: '',
        introduction: ''
      },
      codeValue: function (value) {
        return {
          valid: value === "张三",
          msg: "输入名字有误!"
        }
      }
    }
  },
  methods: {
    ToBaidu () {
      AlertModule.show({
        title: 'VUX is Cool',
        content: 'akdhajssjkdh',
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
    },
    // 当输入框的值随时变换正确时候
    keyDown() {
      debugger
      if(this.$refs.refcode.valid === true && this.TestFrom.username != ''){
        this.disabled = false;
      }else{
        this.disabled = true;
      }
    },
    SubmitForm() {
           AlertModule.show({
          title: '请正确填写信息',
          content: 'akdhajssjkdh',
          onShow () {
            console.log('Module: I\'m showing')
          },
          onHide () {
            console.log('Module: I\'m hiding now')
          }
        })
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
