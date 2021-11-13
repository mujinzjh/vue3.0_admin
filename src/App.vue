<!--
 * @Author: mujin
 * @Date: 2021-10-01 12:59:14
 * @LastEditTime: 2021-11-13 16:17:45
 * @Description: 
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {

    this.dealDataRefresh(this.$store.getters);
  },
  methods: {
    dealDataRefresh(gettersObj) {
      for (const key in gettersObj) {
        const item = this.$utils.getSessionItem(key);
        if (item != null) {
          var _key = 'SET_' + key.toUpperCase();
          this.$store.commit(_key, item);
        }
      }
    },
  },
};
</script>

<style></style>
