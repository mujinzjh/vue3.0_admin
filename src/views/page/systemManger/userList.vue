<!--
 * @Author: mujin
 * @Date: 2021-11-13 16:30:14
 * @LastEditTime: 2021-12-19 22:46:32
 * @Description: 
-->
<template>
  <div class="role-manager">
    <div class="header">
      <Button
        type="info"
        @click="onAddClick"
      >添加</Button>
    </div>
    <Table
      highlight-row
      :columns="columns"
      :data="tableData"
    ></Table>
    <Page
      class="page-c"
      :total="pageObj.total"
      show-total
      show-sizer
      @on-change="onPageChange"
      @on-page-size-change="onPageSizeChange"
      :page-size-opts="pageSizeOpt"
    ></Page>

  </div>
</template>

<script>
import * as API from '@/api/api.js';
import Constants from '@/config/constants';
export default {
  data() {
    return {
      modal1: false,
      name: '',
      pageSizeOpt: Constants.pageSizeOpt,
      pageObj: {
        pageNo: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [],
      menuData: [],
      columns: [
        {
          type: 'index',
          width: 80,
          title: '序号',
          align: 'center'
        },
        {
          title: '姓名',
          key: 'username'
        },
        {
          title: '角色名称',
          key: 'roleName'
        },
        {
          title: '创建时间',
          key: 'createTime',
          render: (h, params) => {
            var text = params.row.createTime && Constants.setFormatterText(params.row.createTime) || '--';
            return h('span', {}, text)
          },
        },
        {
          title: '操作',
          key: 'operation',
          render: (h, params) => {
            return h('div', [
              h('a', {
                style: {
                  marginRight: '16px'
                },
                on: {
                  click: () => {
                    this.onEditClick(params.row);
                  }
                }
              }, '编辑'),
              h('a', {
                style: {
                  marginRight: '16px'
                },
                on: {
                  click: () => {
                    this.onDelClick(params.row);
                  }
                }
              }, '删除')
            ])
          },
        },
      ]
    }
  },
  mounted() {
    this.getUserList(1);
  },
  methods: {
    getUserList(index) {
      const param = {
        pageNo: index || this.pageObj.pageNo,
        pageSize: this.pageObj.pageSize,
        search: {
          name: ''
        }
      }
      API.getUserList(param).then(res => {
        if (res.code == '200') {
          this.tableData = res.result;
          this.pageObj.total = res.ext.totalRecord
        } else {
          this.tableData = []
        }
      }).catch(err => {
        console.log(err);
      })
    },
    onPageChange() { },
    onPageSizeChange() { },
    onAddClick() { }
  },
}
</script>

<style>
</style>