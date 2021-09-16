<template>
  <div class="header-content">
    <div class="left">
      <img
        src=""
        alt=""
      />
      <span>{{ projectName }}</span>
    </div>
    <div class="right">
      <Avatar
        :src="ImgSrc"
        size="small"
      />
      <Dropdown @on-click="onDropClick">
        <a href="javascript:void(0)">
          {{ userName }}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <Dropdown-menu slot="list">
          <Dropdown-item name="updatePwd">修改密码</Dropdown-item>
          <Dropdown-item name="logout">退出登录</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </div>
    <CustomModal
      :title="modalConfig.title"
      :visible="modalConfig.isShow"
      @cancel="onCancelClick"
      @confirm="onConfirmClick"
    >
      <div slot="content">
        <Form
          :model="formData"
          :rules="formRule"
          :inline="true"
          :label-width="80"
          ref="formRef"
        >
          <FormItem
            label="旧密码"
            prop="oldPwd"
          >
            <Input
              v-model="formData.oldPwd"
              type="password"
              password
            ></Input>
          </FormItem>
          <FormItem
            label="新密码"
            prop="newPwd"
          >
            <Input
              v-model="formData.newPwd"
              type="password"
              password
            ></Input>
          </FormItem>
          <FormItem
            label="确认密码"
            prop="confirmPwd"
          >
            <Input
              v-model="formData.confirmPwd"
              type="password"
              password
            ></Input>
          </FormItem>
        </Form>
      </div>
    </CustomModal>
  </div>
</template>

<script>
import API from '@/api/api.js'
import CustomModal from '@/components/modalCom.vue'
import utils from '@/utils/utils.js'
export default {
  components: {
    CustomModal
  },
  data() {
    return {
      modalConfig: {
        title: '修改密码',
        isShow: false
      },
      formData: {
        oldPwd: '',
        newPwd: '',
        confirmPwd: ''
      },
      formRule: {
        oldPwd: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        confirmPwd: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ]
      }
    };
  },
  computed: {
    projectName() {
      return window.$baseConfig.project_name;
    },
    userName() {
      return "zhaojianhua";
    },
    ImgSrc() {
      return JSON.parse(utils.getSessionItem('userInfo')).avatar;
    }
  },
  methods: {
    /**
     * @method: 
     * @param {*}
     * @return {*}
     */
    onCancelClick() {
      this.modalConfig.isShow = false;
    },
    /**
     * @method: 修改密码
     * @param {*}
     * @return {*}
     */
    onConfirmClick() {
      this.$refs['formRef'].validate(value => {
        if (value) {
          this.onChangePwd();
        }
      })
    },
    /**
     * @method: 修改密码
     * @param {*}
     * @return {*}
     */    
    onChangePwd() {
      API.updatePwd({ password: this.formData.newPwd }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    /**
     * @method: 点击下拉菜单
     * @param {*}
     * @return {*}
     */
    onDropClick(name) {
      switch (name) {
        case "logout":
          this.onLogOutFun();
          break;
        case "updatePwd":
          this.onUpdatePwd();
          break;
        default:
          break;
      }
    },
    /**
     * @method: 修改密码
     * @param {*}
     * @return {*}
     */
    onUpdatePwd() {
      this.modalConfig.isShow = true
    },
    /**
     * @method: 退出登录
     * @param {*}
     * @return {*}
     */
    onLogOutFun() {
      API.loginOut().then(res => {
        console.log(res);
        if (res.code === 200 && res.msg === 'success') {
          this.$router.push('/');
          this.$Message.success('退出系统成功');
        } else {
          this.$Message.error('退出系统失败');
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },
};
</script>

<style scoped lang="less">
.header-content {
  height: 64px;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    img {
      width: 16px;
      height: 16px;
    }
    width: 200px;
  }
  .right {
    margin-right: 24px;
  }
}
</style>

<style lang="less">
.ivu-form-item {
  width: 100%;
}
</style>