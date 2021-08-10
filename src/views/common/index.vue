<template>
  <div class="layout">
    <Layout class="home-content">
       <vHeader/> 
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <vSlider/>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Content :style="{marginTop:'24px', background: '#fff' }">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import vHeader from "./header.vue";
import vSlider from "./slide.vue";
export default {
  components:{
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
  .home-content {
    height: inherit;
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
