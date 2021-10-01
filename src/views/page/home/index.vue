<!--
 * @Author: mujin
 * @Date: 2021-08-10 21:13:04
 * @LastEditTime: 2021-10-01 14:17:22
 * @Description: 
-->
<template>
  <div class="home-content">
    <div
      v-for="(item,index) in tableData"
      :key="index"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 0; i < 100; i++) {
        this.tableData.push('dadadad' + i);
      }
    }
  },
}
</script>

<style>
</style>