<!--
 * @Author: mujin
 * @Date: 2021-08-10 21:13:04
 * @LastEditTime: 2022-02-15 15:06:11
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
      tableData: [],
      info: '{"demandDesc":"2323","demandId":287,"demandVersion":"7.39.30","networkWhile":{"whiteListDomain":["xdja.com"],"whiteListIp":["11.12.112.111","11.12.112.110"]},"projectId":39,"projectName":"需求序号测试","strategyAppinstallsrc":[{"name":"应用商店","packageName":"app.xdja.com"}],"strategyBase":{"handSwitchDomain":0,"id":18,"nfcSwitchDomain":0,"noReset":1,"rebootForceWorkDomain":1,"stopSubUser":1,"strategyId":18,"switchDataCard":1,"updateServer":1},"strategyDesc":"策略拉取测试数据-副本","strategyPeripheral":[{"code":"0","opt":0},{"code":"1","opt":1},{"code":"2","opt":0},{"code":"3","opt":0},{"code":"4","opt":1},{"code":"5","opt":0},{"code":"6","opt":1},{"code":"7","opt":1},{"code":"8","opt":1}],"strategyVersion":"1.39.30.3","workApns":[{"apn":"zyd","apnProtocol":"IP","apnRoaming":"IP","apnStatus":0,"apnType":"","authType":"2","carrier":"中国移动","mcc":"460","mmsAddr":"","mmsPort":"","mmsc":"","mnc":"02","mvnoType":"spn","mvnoValue":"","name":"zyd","proxyAddr":"","proxyPort":"","relySystem":"14","serverAddr":"","userName":"","userPassword":""}]}',
      _insoData: null
    };
  },
  mounted() {
    // this.init();
    this._insoData = JSON.parse(this.info);
    console.log(this._insoData);
    this._insoData = this.dealData(this.info);
  },
  methods: {
    dealData(data) {
      let result = [];
    },
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
