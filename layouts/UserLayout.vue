<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
<!--      <div class="loginbox">
        <div class="top">
          <div class="header">
            <a href="/">
              <img src="~@/assets/logo.svg" class="logo" alt="logo">
              <span class="title">易递助手</span><br>
              <span class="title">快1速开发平台</span>
            </a>
          </div>
        </div>
        <router-view />
      </div>-->

      <!-- <div class="footer">
        <div class="links">
          <a href="https://github.com/fuzui/AiDex-Antdv" target="_blank">帮助</a>
          <a href="https://github.com/fuzui/AiDex-Antdv" target="_blank">隐私</a>
          <a href="https://github.com/fuzui/AiDex-Antdv" target="_blank">条款</a>
        </div>
        <div class="copyright">
          Copyright &copy; 2021 <a target="_blank"></a>
        </div>
      </div> -->
      <div class="sidebg">
        <h4 class="side-text">欢迎使用-易递助手管理系统</h4>
      </div>
      <div class='loginmain'>
        <div style="margin: auto;text-align:center;line-height:100px">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'

export default {
  name: 'UserLayout',
  mixins: [deviceMixin],
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
    height: 100%;

    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }
    .sidebg {
      width: 600px;
      min-width: 600px;
      min-height: 100%;
      background: url(~@/assets/side-bg.png) no-repeat center top;
      .side-text {
        font-size: 30px;
        color: #fff;
        margin-top: 150px;
        font-weight: 700;
        display: block;
        text-align: center;
      }
    }
    .loginmain {
      margin: 0 auto;
      width: 100%;
      min-width: 750px;
      min-height: 100%;
      background-color: #ffffff;
      display: flex;
    }
    .container {
      width: 100%;
      min-height: 100%;
      background: #ffffff; //url(~@/assets/wrapper.jpg) no-repeat center top;
      background-size: 100%;
      vertical-align: middle;
      display: flex;

      a {
        text-decoration: none;
      }
      .loginbox{
        width: 800px;
        height:500px;
        margin:auto;
        background: #ffffff;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        border-radius: 8px;
      }
      .top {
        text-align: center;
        width: 355px;
        height: 500px;
        background: url(~@/assets/login-bg.png) no-repeat center top;
        float:left;

        .header {
          height: 44px;
          line-height: 44px;

          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            height: 60px;
            width: 100%;
            vertical-align: top;
            margin-top: 110px;
            margin-bottom: 10px;
            border-style: none;
          }

          .title {
            font-size: 24px;
            color: #ffffff;
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        width: 445px;
        height:500px;
        margin: 0 auto;
        display: block;
        padding: 0 30px;
        position: relative;
      }
      .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
    }
  }
</style>
