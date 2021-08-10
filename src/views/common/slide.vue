<template>
  <div class="slider">
    <Sider hide-trigger :style="{ background: '#fff' }">
      <Menu theme="light" width="auto" accordion @on-select="navigateTo">
        <div v-for="(item, index) in menus" :key="'item_' + index">
          <Submenu
            :name="item.name"
            v-if="item.children && item.children.length"
          >
            <template slot="title">
              <Icon :type="item.meta.icon"></Icon>
              {{ item.meta.title }}
            </template>
            <MenuItem
              v-for="(itemChild, index) in item.children"
              :key="'itemChild_' + index"
              :name="itemChild.name"
            >
              {{ itemChild.meta.title }}
            </MenuItem>
          </Submenu>
          <MenuItem v-else :name="item.name">
            <Icon :type="item.meta.icon" />
            {{ item.meta.title }}
          </MenuItem>
        </div>
      </Menu>
    </Sider>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    /**
     * @method 菜单路由跳转
     */
    navigateTo(name){
      this.$router.push({name});
    },
  },
  computed: {
    menus() {
      return this.$router.options.routes[1].children;
    },
  },
};
</script>

<style scoped lang="less">
.slider {
  width: 200px;
  height: 100%;
}
</style>