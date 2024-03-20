<template>
  <div class="typical-home" ref="portaletDiv">
    <a-row :gutter="[24,24]" class="module-list">
      <!-- 待办事项 -->
      <a-col :span="24" >
        <div class="module-in module-in01 modlule-show" style="height: 360px;">
          <a-page-header :ghost="false" title="平台简介">
            <template slot="extra">
              <a-icon type="more" />
            </template>
          </a-page-header>
          <p>
            <a-alert v-if="isBuy" message="2小时免费体验【易递助手】" type="info" show-icon />
          </p>
          <p style="text-indent: 30px;">
            一、功能说明:
            <br/>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1、菜单功能名称:四段查询;
            <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2、价值:提升您的分拣效率
            <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;3、使用场景[快递面单没有四段码， e递助手，微信小程序扫描快递单号为您播报提醒] 操作步骤
            <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;(1)点击许可用户，添加允许扫描的手机号
            <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;(2)导入快递单号和四段码两列数据
            <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;(3)允许扫描的用户，用许可手机号登录微信，搜索e递助手]微信小程序-点击扫码按钮-设置您要播报展示第几段
            码-扫码分拣
            <br/>
          </p>
          <p style="text-indent: 30px;">
            二、付费说明:
            <br/>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;您可以免费使用2小时;绑定手机号后即可通过手机号登录1.2、超过2小时后，您可以根据进港(导入)件量和使用月数继续付费使用
          </p>
          <p style="text-indent: 30px;">
            三、二十四小时客服热线: 13482179350
          </p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    data () {
    },
    props: {
      isBuy: {
        type: Boolean,
        default: true
      }
    },
    computed: {
    },
    created () {
    },
    methods: {
      goTarget (url) {
        window.open(url)
      },
      caseDisplay (url) {
        this.$message.success(
          '案例正在研发中，目前尚未实现，敬请期待！',
          3
         )
      }
    }
  }
</script>
