<!--
 * @Author: mujin
 * @Date: 2021-08-08 21:39:54
 * @LastEditTime: 2021-11-13 16:35:28
 * @Description:
-->
<template>
  <div class="slider">
    <Sider
      hide-trigger
      :style="{ background: '#fff' }"
    >
      <Menu
        width="auto"
        accordion
        :open-names="openName"
        @on-select="navigateTo"
        @on-open-change="onOpenChange"
        :active-name="activeName"
      >
        <div
          v-for="(item, index) in menus"
          :key="'item_' + index"
        >
          <Submenu
            :name="item.permission"
            v-if="item.children && item.children.length"
          >
            <template slot="title">
              <Icon :type="item.icon"></Icon>
              {{ item.name }}
            </template>
            <MenuItem
              v-for="(itemChild, index) in item.children"
              :key="'itemChild_' + index"
              :name="itemChild.permission"
            >
            {{ itemChild.name }}
            </MenuItem>
          </Submenu>
          <MenuItem
            v-else
            :name="item.permission"
          >
          <Icon :type="item.icon" />
          {{ item.name}}
          </MenuItem>
        </div>
      </Menu>
    </Sider>
  </div>
</template>

<script>
import { mapGetters } from '_vuex@3.6.2@vuex';
export default {
  data() {
    return {
      openName: [],
    };
  },
  created() {
    // this.isIncludeOpen();
  },
  methods: {
    /**
     * @method:
     * @param {*}
     * @return {*}
     */
    isIncludeOpen() {
      const path = this.$route.path;
      const openName = JSON.parse(sessionStorage.getItem('openName'));
      const openValue = openName && openName[0];
      if (path.includes(openValue)) {
        this.openName.push(openValue);
      } else {
        sessionStorage.removeItem('openName');
      }
    },
    /**
     * @method 菜单路由跳转
     */
    navigateTo(name) {
      this.$router.push({ name });
    },
    onOpenChange(value) {
      this.openName = value;
      sessionStorage.setItem('openName', JSON.stringify(value));
    }
  },
  computed: {
    'menus': function () {
      console.log(this.$store.state.menus);
      return this.$store.state.menus;
    },
    activeName() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped lang="less">
@fontColor: #fff;
@menuBgColor: #0191f6;
.slider {
  width: 200px;
  height: 100%;
  background: #333;
  /deep/ .ivu-layout-sider,
  /deep/ .ivu-menu {
    background: #333 !important;
    color: @fontColor;
    height: 100%;
  }
  /deep/
    .ivu-menu-light.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: @menuBgColor;
    color: @fontColor;
  }
}
</style>
