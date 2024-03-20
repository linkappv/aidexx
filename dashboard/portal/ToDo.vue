<template style="background:#f5f6fa;">
  <div ref="aa" class="aa">
    <a-modal
      :getContainer="this.$refs.aa"
      style="min-width: 896px;"
      width="896px"
      h
      v-model="compile"
      @ok="compilehandleOk"
      @cancel="compilehandleCancel"
      centered>
      <template slot="title">
        <img src="~@/assets/header_bg.jpg"></img>
        <div style=" position: absolute;text-align: center;width: 896px;height: 110px;top: 51px;"><h2>作为游客，您可以免费体验 2小时</h2></div>
      </template>
      <template slot="footer">
        <a-spin tip="请求支付订单中..." :spinning="spinning">
          <div style="height: 198px;border:2px solid #ececec;margin-bottom: 40px;">
            <a-row>
              <a-col :span="4"></a-col>
              <a-col :span="6" style="padding-top: 20px;">
                <div id="qrCode" ref="qrCodeDiv"></div>
              </a-col>
              <a-col :span="14">
                <div class="priceTotal">
                <span class="pay_method">
                  <img src="https://vfiles.gtimg.cn/vupload/20201126/9501231606390566007.png"/> 微信支付
                </span> 微信扫码，支付<strong class="strong">{{ money }}</strong>
                  <span class="txt">元</span><!----><!---->
                </div>
              </a-col>
            </a-row>
          </div>
        </a-spin>
      </template>
      <div class="card-container">
        <span>进港件范围</span>
        <a-tabs default-active-key="1" @change="callback">
          <a-tab-pane key="1" tab="0~5000件" >
            <a-row>
              <a-col :span="5">
                <div :class="1==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(1,4788);">
                  <h5 class="payTitle">年付</h5>
                  <div class="price"> <span class="em">￥399</span>/月</div>
                  <h4 class="total">￥4788元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="2==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(2,2574);">
                  <h5 class="payTitle">半年付</h5>
                  <div class="price"> <span class="em">￥429</span>/月</div>
                  <h4 class="total">￥2574元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="3==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(3,1407);">
                  <h5 class="payTitle">季付</h5>
                  <div class="price"> <span class="em">￥469</span>/月</div>
                  <h4 class="total">￥1407元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="4==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(4,499);">
                  <h5 class="payTitle">月付</h5>
                  <div class="price"> <span class="em">￥499</span>/月</div>
                  <h4 class="total">￥499元</h4>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="2" tab="5000~10000件">
            <a-row>
              <a-col :span="5">
                <div :class="5==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(5,9588);">
                  <h5 class="payTitle">年付</h5>
                  <div class="price"> <span class="em">￥799</span>/月</div>
                  <h4 class="total">￥9588元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="6==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(6,5154);">
                  <h5 class="payTitle">半年付</h5>
                  <div class="price"> <span class="em">￥859</span>/月</div>
                  <h4 class="total">￥5154元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="7==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(7,2817);">
                  <h5 class="payTitle">季付</h5>
                  <div class="price"> <span class="em">￥939</span>/月</div>
                  <h4 class="total">￥2817元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="8==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(8,999);">
                  <h5 class="payTitle">月付</h5>
                  <div class="price"> <span class="em">￥999</span>/月</div>
                  <h4 class="total">￥999元</h4>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="3" tab="10000~15000件">
            <a-row>
              <a-col :span="5">
                <div :class="9==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(9,14388);">
                  <h5 class="payTitle">年付</h5>
                  <div class="price"> <span class="em">￥1199</span>/月</div>
                  <h4 class="total">￥14388元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="10==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(10,7734);">
                  <h5 class="payTitle">半年付</h5>
                  <div class="price"> <span class="em">￥1289</span>/月</div>
                  <h4 class="total">￥7734元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="11==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(11,4227);">
                  <h5 class="payTitle">季付</h5>
                  <div class="price"> <span class="em">￥1409</span>/月</div>
                  <h4 class="total">￥4227元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="12==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(12,1499);">
                  <h5 class="payTitle">月付</h5>
                  <div class="price"> <span class="em">￥1499</span>/月</div>
                  <h4 class="total">￥1499元</h4>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="4" tab="15000~20000件">
            <a-row>
              <a-col :span="5">
                <div :class="13==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(13,17988);">
                  <h5 class="payTitle">年付</h5>
                  <div class="price"> <span class="em">1499</span>/月</div>
                  <h4 class="total">￥17988元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="14==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(14,10554);">
                  <h5 class="payTitle">半年付</h5>
                  <div class="price"> <span class="em">￥1759</span>/月</div>
                  <h4 class="total">￥10554元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="15==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(15,5637);">
                  <h5 class="payTitle">季付</h5>
                  <div class="price"> <span class="em">￥1879</span>/月</div>
                  <h4 class="total">￥5637元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="16==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(16,1999);">
                  <h5 class="payTitle">月付</h5>
                  <div class="price"> <span class="em">￥1999</span>/月</div>
                  <h4 class="total">￥1999元</h4>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="5" tab="20000件以上">
            <a-row>
              <a-col :span="5">
                <div :class="17==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(17,23988);">
                  <h5 class="payTitle">年付</h5>
                  <div class="price"> <span class="em">￥1999</span>/月</div>
                  <h4 class="total">￥23988元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="18==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(18,13134);">
                  <h5 class="payTitle">半年付</h5>
                  <div class="price"> <span class="em">￥2189</span>/月</div>
                  <h4 class="total">￥13134元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="19==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(19,7047);">
                  <h5 class="payTitle">季付</h5>
                  <div class="price"> <span class="em">￥2349</span>/月</div>
                  <h4 class="total">￥7047元</h4>
                </div>
              </a-col>
              <a-col :span="5">
                <div :class="20==selectIndex ? 'payItem-active' : 'payItem'" @click="tabChangeEven(20,2499);">
                  <h5 class="payTitle">月付</h5>
                  <div class="price"> <span class="em">￥2499</span>/月</div>
                  <h4 class="total">￥2499元</h4>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </a-modal>
    <a-modal v-model="visible" @ok="handleOk">
      <a-result
        status="success"
        title="支付成功!"
        sub-title="您已经购买成功，请尽情使用！"
      >
<!--        <div class="desc"> 登录账号：<span class="name">{{ account }}</span></div>
        <div class="desc"> <span class="name">登录密码：{{ password }}</span></div>
        <div class="desc" style="text-align: center"><a-button @click='onCopy'>一键复制</a-button></div>-->
        <template slot="footer">
          <p>1</p>
        </template>
      </a-result>
    </a-modal>
  </div>
</template>
<script>
  import lineRadar from '@/views/demo/chart/line-chart'
  import { ref } from 'vue'
  import QRCode from 'qrcodejs2'
  import { pay, payResult } from '@/api/system/payOrder'
  import { getUserProfile } from '@/api/system/user'
  export default {
    data () {
      return {
        visible: false,
        dateFormat: 'YYYY-MM-DD',
        compile: false,
        activeKey: ref('1'),
        selectIndex: 1,
        qrcode: null,
        account: 'XXXXXXXXX',
        password: 'XXXXXXXXX',
        money: '0.00',
        payNo: '',
        spinning: false,
        curPageUrl: '',
        interval: null
      }
    },
    created () {
      this.getUser()
      this.curPageUrl = this.$route.path
      this.$once('hook:beforeDestroy', () => {
        clearInterval(this.interval)
      })
    },
    watch: {
    },
    mounted () {
      this.$emit('setHeight', this.$refs.portaletDiv.offsetHeight)
      this.getUser()
    },
    components: {
      lineRadar
    },
    methods: {
      getHeight () {
        return this.$refs.portaletDiv.offsetHeight
      },
      reloadTab (type) {
      },
      showModal () {
        this.visible = true
      },
      handleOk (e) {
        console.log(e)
        this.visible = false
        this.compile = false
      },
      compileshowModal () {
        this.compile = true
      },
      compilehandleOk (e) {
        console.log(e)
        this.compile = false
      },
      compilehandleCancel (e) {
        console.log(this.interval)
        window.clearInterval(this.interval)
        this.interval = null
        this.compile = false
        this.$forceUpdate()
      },
      callback (key) {
        console.log(key)
      },
      onSearch (value) {
        console.log(value)
      },
      modalcallback (key) {
        console.log(key)
      },
      goTarget (href) {
        window.open(href, '_blank')
      },
      caseDisplay (href) {
        this.$message.success(
          '案例系统正在研发中，敬请期待！',
          3
         )
      },
      myFunction() {
        console.log('Hello World!')
        payResult(this.payNo).then(response => {
          console.log(response)
          const result = response.result
          if (result) {
            clearInterval(this.interval)
            this.visible = true
          }
        })
      },
      tabChangeEven (index, money) {
        this.selectIndex = index
        this.spinning = true
        if (this.interval) {
          window.clearInterval(this.interval)
        }
        pay(index).then(response => {
          this.spinning = false
          this.account = response.data.account
          this.password = response.data.password
          this.money = money
          this.payNo = response.data.payNo
          this.interval = setInterval(this.myFunction, 3000)
          this.$forceUpdate()
          this.bindQRCode(response.data.qrcode)
        })
        this.$forceUpdate()
      },
      bindQRCode (e) {
        const qrc = e + ''
        this.$refs.qrCodeDiv.innerHTML = ''
        this.qrcode = new QRCode(this.$refs.qrCodeDiv, {
          text: qrc,
          width: 150,
          height: 150,
          colorDark: '#333333', // 二维码颜色
          colorLight: '#ffffff', // 二维码背景色
          correctLevel: QRCode.CorrectLevel.L// 容错率，L/M/H
        })
      },
      getUser () {
        getUserProfile().then(response => {
          console.log('5555555555555555555555555555')
          console.log('5555555555555555555555555555')
          console.log(response.data.user.extend.expire)
          if (response.data.user.extend.expire) {
            this.$emit('onBuy', false)
          }
          const dataValue = response.data.user.extend.type
          if (dataValue !== 1) {
            this.compile = true
            this.tabChangeEven(1, 4788)
            this.$forceUpdate()
          }
        })
      },
      showDaiol() {
        this.compile = true
        this.tabChangeEven(1, 4788)
        this.$forceUpdate()
      },
      onCopy() {
        this.$copyText('账户:' + this.account + '密码:' + this.password).then(
          e => {
            console.log('复制成功：', e)
            this.$message.success('复制成功', 3)
          },
          e => {
            console.log('复制失败：', e)
            this.$message.success('复制成功' + e, 3)
          }
        )
      }
    }
  }
</script>
<style lang="less">
  @import '../typical-home.less';
  .aa{
    .ant-modal-header{
      padding: 0px 0px !important;
    }
    .ant-modal-close-x{
      font-size: 18px
    }
    .ant-modal-body{
      padding: 0px 0px;
    }
  }
  .ant-modal-header{
    padding: 0px 0px !important;
  }
  .card-container {
    background: #e7e7e7;
    overflow: hidden;
    padding: 12px;
  }
  .card-container > .ant-tabs-card > .ant-tabs-content {
    height: 120px;
    margin-top: -16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
    background: #fff;
    padding: 16px;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar {
    border-color: #fff;
  }

  .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: transparent;
    background: transparent;
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #fff !important;
    z-index: 2;
    color: #f7830b !important;
  }
  .ant-tabs-nav .ant-tabs-tab{
    padding: 12px 10px;
    font-size: 20px;
  }
  .card-container > .ant-tabs-card > .ant-tabs-content{
    min-height: 219px !important;
  }
  .ant-tabs{
    background-color: #ffffff !important;
  }
  .ant-row {
    padding: 10px !important;
  }
  .payItem{
    border: 2px solid #f8e2b3;
    border-radius: 10px;
    background-color: #ffffff;
    width: 146px;
    height: 187px;
  }
  .payItem-active{
    border: 2px solid #f8e2b3;
    border-radius: 10px;
    background-color: #f8e2b363;
    width: 146px;
    height: 187px;
  }
  .payTitle{
    font-size: 16px;
    margin-top: 14px;
    margin-left: 14px;
  }
  .price{
    font-family: Arial,sans-serif;
    color: #dfb349;
    font-size: 16px;
    font-weight: 700;
    margin-top: 22px;
    text-align: center;
    .em {
      font-size: 30px !important;
      color: #dfb349 !important;
    }
  }
  .priceTotal{
    font-family: Arial,sans-serif;
    color: #dfb349;
    font-size: 16px;
    font-weight: 700;
    margin-top: 52px;
    margin-left: 20px;
    text-align: left;
  }
  .total{
    color: #838383;
    text-align: center;
    margin-top: 25px;
  }
  .desc{
    font-family: Arial,sans-serif;
    color: #3d3d3d;
    font-size: 16px;
    font-weight: 700;
    margin-top: 12px;
    margin-left: 20px;
    text-align: left;
  }
  .ant-tabs-nav-scroll{
    background-color: #e7e7e7 !important;
  }

</style>
