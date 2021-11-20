<!--
 * @Author: mujin
 * @Date: 2021-08-08 21:39:54
 * @LastEditTime: 2021-10-01 13:26:08
 * @Description: 
-->
<template>
  <div class="layout">
    <vHeader />
    <Layout>
      <Sider
        hide-trigger
        :style="{ background: '#fff' }"
      >
        <vSlider />
      </Sider>
      <Layout class="wrap-content">
        <Content class="main-wrap-content">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import vHeader from "./header.vue";
import vSlider from "./slide.vue";
export default {
  components: {
    vHeader,
    vSlider
  }
};
</script>

<style scoped lang="less">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  /deep/ .ivu-layout-has-sider {
    height: calc(100% - 64px);
  }
  .wrap-content {
    padding: 0 24px;
    overflow: auto;
  }
  .main-wrap-content {
    background: #fff;
    margin: 16px 0;
    padding: 16px;
  }
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
