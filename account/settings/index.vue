<template>
  <div class="page-header-index-wide page-header-wrapper-grid-content-main padding-card">
    <a-row :gutter="24">
      <a-col :md="24" :lg="7">
        <a-spin :spinning="spinning" :delay="delayTime" tip="玩命加载中...">
          <a-card :bordered="false">
            <div class="account-center-avatarHolder">
              <div class="avatar">
                <img :src="avatar">
              </div>
              <div class="username">{{ user.userName }}</div>
              <div class="bio">{{ roleGroup }}</div>
            </div>
            <a-divider :dashed="true"/>
            <div class="account-center-detail">
              <p>
                <a-icon class="info" type="phone" />{{ user.phonenumber }}
              </p>
              <a-divider :dashed="true"/>
              <p v-if="user.workSpace">
                <a-icon class="info" type="apartment" />{{ user.workSpace }}
              </p>
              <a-divider :dashed="true"/>
              <p>
                <a-icon class="info" type="calendar" />{{ user.createTime }}
              </p>
            </div>

            <!-- <div class="account-center-tags">
              <div class="tagsTitle">标签</div>
              <div>
                <template v-for="(tag, index) in tags">
                  <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                    <a-tag
                      :key="tag"
                      :closable="index !== 0"
                      :close="() => handleTagClose(tag)"
                    >{{ `${tag.slice(0, 20)}...` }}</a-tag>
                  </a-tooltip>
                  <a-tag
                    v-else
                    :key="tag"
                    :closable="index !== 0"
                    :close="() => handleTagClose(tag)"
                  >{{ tag }}</a-tag>
                </template>
                <a-input
                  v-if="tagInputVisible"
                  ref="tagInput"
                  type="text"
                  size="small"
                  :style="{ width: '78px' }"
                  :value="tagInputValue"
                  @change="handleInputChange"
                  @blur="handleTagInputConfirm"
                  @keyup.enter="handleTagInputConfirm"
                />
                <a-tag v-else @click="showTagInput" style="background: #fff; borderStyle: dashed;">
                  <a-icon type="plus"/>New Tag
                </a-tag>
              </div>
            </div> -->
<!--            <div class="account-center-tags">
              <div class="tagsTitle">角色</div>
              <div>
                <template v-for="(tag) in roleGroupList">
                  <a-tooltip :key="tag" :title="tag">
                    <a-tag
                      :key="tag"
                    >{{ tag.length> 20 ? `${tag.slice(0, 20)}...` : tag }}</a-tag>
                  </a-tooltip>
                </template>
              </div>
            </div>
            <div class="account-center-tags">
              <div class="tagsTitle">岗位</div>
              <div>
                <template v-for="(tag) in postGroupList">
                  <a-tooltip :key="tag" :title="tag">
                    <a-tag
                      :key="tag"
                    >{{ tag.length> 20 ? `${tag.slice(0, 20)}...` : tag }}</a-tag>
                  </a-tooltip>
                </template>
              </div>
            </div>-->
            <a-divider :dashed="true"/>
          </a-card>
        </a-spin>
      </a-col>
      <a-col :md="24" :lg="17">
        <a-card
          style="width:100%"
          :bordered="false"
          :tabList="tabListNoTitle"
          :activeTabKey="noTitleKey"
          @tabChange="key => handleTabChange(key, 'noTitleKey')"
        >
          <base-setting ref="baseInfoRef" v-show="noTitleKey === 'baseInfo'"></base-setting>
          <updata-pass v-show="noTitleKey === 'updatePass'"></updata-pass>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import BaseSetting from './BaseSetting'
import UpdataPass from './UpdataPass'
import { getUserProfile } from '@/api/system/user'
import { mapGetters } from 'vuex'

export default {
  components: {
    RouteView,
    PageView,
    BaseSetting,
    UpdataPass
  },
  data () {
    return {
      user: {},
      roleGroup: {},
      postGroup: {},
      roleGroupList: [],
      postGroupList: [],
      spinning: false,
      delayTime: 100,
      tags: ['很有想法的', '专注设计', '辣~', '大长腿', '川妹子', '海纳百川'],

      tagInputVisible: false,
      tagInputValue: '',

      teams: [],
      teamSpinning: true,

      tabListNoTitle: [
        {
          key: 'baseInfo',
          tab: '基本信息'
        },
        {
          key: 'updatePass',
          tab: '修改密码'
        }
      ],
      noTitleKey: 'baseInfo'
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters(['name', 'avatar'])
  },
  created () {
    this.getUser()
  },
  mounted () {

  },
  methods: {
    getUser () {
      this.spinning = true
      getUserProfile().then(response => {
        this.spinning = false
        const dataValue = response.data
        this.$refs.baseInfoRef.setUserInfo(dataValue)
        this.user = dataValue.user
        this.roleGroup = dataValue.roleGroup
        this.postGroup = dataValue.postGroup
        this.roleGroupList = this.roleGroup.split(',')
        this.postGroupList = this.postGroup.split(',')
      })
    },

    handleTabChange (key, type) {
      this[type] = key
    },

    handleTagClose (removeTag) {
      const tags = this.tags.filter(tag => tag !== removeTag)
      this.tags = tags
    },

    showTagInput () {
      this.tagInputVisible = true
      this.$nextTick(() => {
        this.$refs.tagInput.focus()
      })
    },

    handleInputChange (e) {
      this.tagInputValue = e.target.value
    },

    handleTagInputConfirm () {
      const inputValue = this.tagInputValue
      let tags = this.tags
      if (inputValue && !tags.includes(inputValue)) {
        tags = [...tags, inputValue]
      }

      Object.assign(this, {
        tags,
        tagInputVisible: false,
        tagInputValue: ''
      })
    }
  }
}
</script>

<style lang="less" scoped>

.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .account-center-detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }
    .info {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
    }
    .title {
      background-position: 0 0;
    }
    .group {
      background-position: 0 -22px;
    }
    .address {
      background-position: 0 -44px;
    }
  }

  .account-center-tags {
    .ant-tag {
      margin-bottom: 8px;
    }
  }

  .account-center-team {
    .members {
      a {
        display: block;
        margin: 12px 0;
        line-height: 24px;
        height: 24px;
        .member {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          max-width: 100px;
          vertical-align: top;
          margin-left: 12px;
          transition: all 0.3s;
          display: inline-block;
        }
        &:hover {
          span {
            color: #1890ff;
          }
        }
      }
    }
  }

  .tagsTitle,
  .teamTitle {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 12px;
  }
}
</style>
