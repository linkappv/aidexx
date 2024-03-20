<template>
  <div class="main">
    <a-icon class="QRcodeIcon" :component="allIcon.QRcodeIcon"/>
    <a-form-model
      v-show="isLogin"
      id="formLogin"
      ref="form"
      class="user-layout-login"
      :model="form"
      :rules="rules">
      <a-page-header title="用户登录" />
      <a-form-model-item prop="username">
        <a-input v-model="form.username" size="large" placeholder="请输入您的账户" >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)'}"/>
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input-password v-model="form.password" size="large" placeholder="请输入您的密码">
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input-password>
      </a-form-model-item>
      <a-row :gutter="16" v-if="captchaOnOff">
        <a-col class="gutter-row" :span="16">
          <a-form-model-item prop="code">
            <a-input v-model="form.code" size="large" type="text" autocomplete="off" placeholder="验证码">
              <a-icon slot="prefix" type="security-scan" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-model-item>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <img class="getCaptcha" :src="codeUrl" @click="getCode">
        </a-col>
      </a-row>
      <a-form-item>
      </a-form-item>
      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="logining"
          :disabled="logining"
          @click="handleSubmit"
        >登录</a-button>
      </a-form-item>
      <a-form-item >
        <a-button
          size="large"
          type="primary"
          class="login-button"
          @click="show"
        >注册账户</a-button>
      </a-form-item>
    </a-form-model>
    <a-form-model
      v-show="!isLogin"
      id="formRegister"
      ref="form1"
      class="user-layout-login"
      :model="registerdata"
      :rules="rules">
      <a-page-header title="用户注册" />
      <a-form-model-item prop="phone">
        <a-input v-model="registerdata.phone" size="large" placeholder="登录账户：请输入您的手机号" autocomplete="new-password" >
          <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)'}"/>
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="password">
        <a-input-password v-model="registerdata.password" size="large" placeholder="请输入您的密码" autocomplete="new-password">
          <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
        </a-input-password>
      </a-form-model-item>
      <a-form-model-item prop="email">
        <a-input v-model="registerdata.email" size="large" placeholder="请输入您的邮箱">
          <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)'}"/>
        </a-input>
      </a-form-model-item>
      <a-row :gutter="16" v-if="captchaOnOff">
        <a-col class="gutter-row" :span="16">
          <a-form-model-item prop="code">
            <a-input v-model="registerdata.code" size="large" type="text" autocomplete="off" placeholder="验证码">
              <a-icon slot="prefix" type="security-scan" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-model-item>
        </a-col>
        <a-col class="gutter-row" :span="8">
          <img class="getCaptcha" :src="codeUrl" @click="getCode">
        </a-col>
      </a-row>
      <a-form-item>
      </a-form-item>
      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="logining"
          :disabled="logining"
          @click="handleRegistSubmit"
        >注册</a-button>
      </a-form-item>
      <a-form-item >
        <a-button
          size="large"
          type="primary"
          class="login-button"
          @click="backLogin"
        >返回登录</a-button>
      </a-form-item>
    </a-form-model>
  </div>
</template>

<script>

// import md5 from 'md5'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import { anonymityLogin, getCodeImg, register } from '@/api/login'
import allIcon from '@/core/icons'
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'

export default {
  components: {
    allIcon
  },
  data () {
    var checkEmail = (rule, value, callback) => {
      if (value && value !== '') {
        if (
          // eslint-disable-next-line no-useless-escape
          !/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
            value
          )
        ) {
          callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      } else {
        callback(new Error('邮箱不能为空'))
      }
    }
    const checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'))
        } else {
          // 获取工具类中的手机号正则表达式
          const phoneReg =
            /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
          if (phoneReg.test(value)) {
            callback()
          } else {
            // 如果验证输入错误就清空
            this.form.phone = ''
            return callback(new Error('请输入正确的手机号'))
          }
        }
    }
    return {
      isLogin: true,
      allIcon,
      codeUrl: '',
      form: {
        username: '',
        phone: '',
        password: '',
        code: undefined,
        uuid: ''
      },
      registerdata: {
        username: undefined,
        phone: '',
        password: undefined,
        code: undefined,
        uuid: ''
      },
      // 验证码开关
      captchaOnOff: true,
      rules: {
        username: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
        phone: [{ required: true, validator: checkPhone, trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        email: [{ required: true, validator: checkEmail, trigger: 'blur' }]
      },
      logining: false
    }
  },
  created () {
    this.getCode()
  },
  methods: {
    getCode () {
      getCodeImg().then(res => {
        this.captchaOnOff = res.captchaOnOff === undefined ? true : res.captchaOnOff
        if (this.captchaOnOff) {
          this.codeUrl = 'data:image/gif;base64,' + res.img
          this.form.uuid = res.uuid
          this.registerdata.uuid = res.uuid
        }
      })
    },
    applyLicense () {
         window.open('/applyLicense', '_blank')
    },
    ...mapActions(['Login', 'Logout']),
    handleSubmit () {
      // 关闭登录过期的提示框
      this.$notification.close('loginExpireTip')
      this.logining = true
      this.$refs.form.validate(valid => {
        if (valid) {
          this.Login(this.form)
            .then((res) => this.loginSuccess(res))
            .catch(err => this.requestFailed(err))
            .finally(() => {
              this.logining = false
            })
        } else {
          setTimeout(() => {
            this.logining = false
          }, 600)
          if (this.captchaOnOff) {
            this.getCode()
          }
        }
      })
    },
    handleRegistSubmit () {
      // 关闭登录过期的提示框
      this.$notification.close('loginExpireTip')
      this.logining = true
      this.registerdata.username = this.registerdata.phone
      this.$refs.form1.validate(valid => {
        if (valid) {
          register(this.registerdata)
            .then((res) => {
              storage.set(ACCESS_TOKEN, res.token, 7 * 24 * 60 * 60 * 1000)
              this.loginSuccess(res)
            })
            .catch(err => this.requestFailed(err))
            .finally(() => {
              this.logining = false
            })
        } else {
          setTimeout(() => {
            this.logining = false
          }, 600)
          if (this.captchaOnOff) {
            this.getCode()
          }
        }
      })
    },
    loginSuccess (res) {
      this.$router.push({ path: '/' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
    },
    requestFailed (err) {
      // this.isLoginError = true
      // this.loginErrorInfo = err
      this.form.code = undefined
      this.getCode()
      this.$message.error(err)
    },
    handleCloseLoginError () {
      // this.isLoginError = false
      // this.loginErrorInfo = ''
    },
    anonymityLoginq() {
      anonymityLogin()
        .then((res) => {
          storage.set(ACCESS_TOKEN, res.token, 7 * 24 * 60 * 60 * 1000)
          this.loginSuccess(res)
        })
        .catch(err => this.requestFailed(err))
        .finally(() => {
          this.logining = false
        })
    },
    show() {
      this.isLogin = false
    },
    backLogin() {
      this.isLogin = true
    }
  }
}
</script>

<style lang="less" scoped>
  .QRcodeIcon{
    position: absolute;
    right:0;
    font-size: 32px;
    color: #1890ff;
    margin-top:5px;
    margin-right:5px;
  }
  .ant-space-align-center{
    color:#8f959e;
    line-height: 30px;
    height: 30px;
  }
  .user-layout-login label{
    font-size: 12px!important;
  }
.user-layout-login {
  label {
    font-size: 14px;
  }
  .ant-page-header{
    padding:60px 0 45px 0;
  }
  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
    border-radius: 4px;
  }
  .icons-list{
    .anticon {
      font-size: 30px;
      width: 40px;
    }
    .dingtalk{
      color: #0089FF;
    }
    .WeChat{
      color: #51C332;
    }
    .Alipay{
      color: #06B4FD;
    }
    .Sina{
      color: #D81E06;
    }
  }
}

</style>
