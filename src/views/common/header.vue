<template>
  <div class="header-content">
    <div class="left">
      <img src="" alt="" />
      <span>{{ projectName }}</span>
    </div>
    <div class="right">
      <Dropdown>
        <a href="javascript:void(0)">
          {{ userName }}
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>修改密码</DropdownItem>
          <DropdownItem>退出登录</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    projectName() {
      return window.$baseConfig.project_name;
    },
    userName() {
      return "zhaojianhua";
    },
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