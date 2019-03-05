<template>
    <div style="height: 100%">
      <view-box body-padding-top="60px" body-padding-bottom="50px">
        <x-header slot="header" :left-options="{showBack: false}" style="width:100%;position:fixed;left:0;top:0;z-index:100;">首页</x-header>
         <!--<div>-->
       <!--<group label-width="4.5em" label-margin-right="2em" label-align="right">-->
        <!--<cell title="Cell" value="value" is-link></cell>-->
        <!--<cell title="Cell" value="value" is-link value-align="left"></cell>-->
        <!--<x-input title="上报人" v-model="value1"></x-input>-->
        <!--<x-input placeholder="I'm placeholder">-->
          <!--<img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">-->
        <!--</x-input>-->
        <!--<x-input title="上<i class='vux-blank-half'></i>报<i class='vux-blank-half'></i>人" v-model="value1"></x-input>-->
        <!--<x-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>-->
        <!--<datetime title="时&emsp;&emsp;&nbsp;间" v-model="time1" value-text-align="left"></datetime>-->
        <!--<selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></selector>-->
        <!--<selector title="隐患类别" placeholder="Placeholder" :options="['工艺技术', '其他']" v-model="value7"></selector>-->
        <!--<selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value8"></selector>-->
        <!--<x-input title="隐患部位" placeholder="必填" v-model="value3"></x-input>-->
        <!--<x-input title="密码" type="password" placeholder="必填" v-model="value4"></x-input>-->
        <!--<popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>-->
        <!--<popup-picker title="请选择" placeholder="Required" :data="list" v-model="value6" value-text-align="left"></popup-picker>-->
        <!--<x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>-->
        <!--<x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>-->
        <!--<x-textarea placeholder="请填写详细信息" :show-counter="false" :rows="3">-->
          <!--<img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">-->
        <!--</x-textarea>-->
      <!--</group>-->
        <!--<br>-->
           <!--<x-button type="warn" @click.native="dd">Delete</x-button>-->
        <!--&lt;!&ndash;<group>&ndash;&gt;-->
          <!--&lt;!&ndash;<group-title slot="title">I'm a title<span style="float:right;">right</span></group-title>&ndash;&gt;-->
          <!--&lt;!&ndash;<cell title="cell"></cell>&ndash;&gt;-->
        <!--&lt;!&ndash;</group>&ndash;&gt;-->
        <!--<br>-->
        <!--<group title="justify" label-width="5.5em" label-margin-right="2em" label-align="justify">-->
          <!--<cell title="哈哈" value="value" is-link></cell>-->
          <!--<cell title="哈哈哈哈哈" value="value" is-link value-align="left"></cell>-->
          <!--<x-input title="上报人" v-model="value1"></x-input>-->
          <!--<x-number title="Quantity" align="left" v-model="numberValue" button-style="round" :min="0" :max="5"></x-number>-->
          <!--<datetime title="时间" v-model="time1" value-text-align="left"></datetime>-->
          <!--<selector title="隐患类别" :options="['工艺技术', '其他']" v-model="value2"></selector>-->
          <!--<popup-picker title="请选择" :data="list" v-model="value5" value-text-align="left"></popup-picker>-->
          <!--<x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left" label-align="justify"></x-address>-->
          <!--<x-switch title="选择"></x-switch>-->
          <!--<x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>-->
        <!--</group>-->
      <!--</div>-->
        <vuxrootbar slot="bottom" :selected=0></vuxrootbar>
      </view-box>
    </div>
</template>

<script>
// import { GroupTitle, XHeader, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch } from 'vux'
import Vuxrootbar from '@/components/Vuxrootbar'
import ViewBox from "vux/src/components/view-box/index";
import { GetOderList } from '@/api/tenant'
export default {
  name: 'homePage',
  components: {
    // ViewBox,
     Vuxrootbar,
    // XHeader,
    //   Group,
    //   GroupTitle,
    //   Cell,
    //   XInput,
    //   Selector,
    //   PopupPicker,
    //   XAddress,
    //   Datetime,
    //   XNumber,
    //   XTextarea,
    //   XSwitch
  },
  data () {
    return {
      message: '',
      addressData: ChinaAddressData,
      addressValue: ['广东省', '深圳市', '南山区'],
      value1: '张三',
      value2: '工艺技术',
      value3: '',
      value7: '',
      value8: '',
      value4: '',
      time1: '2017-06-01',
      value5: ['A'],
      value6: [],
      list: [['A', 'B', 'C']],
      numberValue: 0,
      OrderDatalist: [], //预订列表
      form: {
        parm: {
          page: 1,
          size: 5
        },
        StartTime: '', // 开始时间
        EndTime: '', // 结束时间
        AuditStatus: 0, // 审核状态
        OrderStatus: 0, // 预订状态
        HouseName: '' // 房源名称
      }
    }
  },
  created() {
    this.GetTableData()
  },
  methods: {
    GetTableData() {
      GetOderList(this.form).then(({Data,BusCode, Msg}) => {
        console.log(Data)
        this.OrderDatalist = Data.rows
      })
    },
    dd() {
      this.toast.show({
        text: 'Loading'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  .header{
    position: fixed;
    top: 0;
  }
</style>
