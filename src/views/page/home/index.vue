<!--
 * @Author: mujin
 * @Date: 2021-08-10 21:13:04
 * @LastEditTime: 2021-12-19 21:45:22
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
import * as API from '../../../api/api';
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const param = {
        pageNo: 1,
        pageSize: 10,
        search: {
          operation_time: null,
          status: 1
        }
      };
      API.getSysLogData(param).then(res => {
        // console.log(res);
      }).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style>
</style>
