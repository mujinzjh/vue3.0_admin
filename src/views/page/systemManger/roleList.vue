<!--
 * @Author: mujin
 * @Date: 2021-11-13 16:30:14
 * @LastEditTime: 2021-12-19 22:42:20
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

    <Modal
      v-model="modal1"
      title="普通的Modal对话框标题"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <Input v-model="name"></Input>
      <Tree
        :data="menuData"
        ref="treeRef"
        show-checkbox
        @on-check-change="onCheckChange"
      ></Tree>
    </Modal>
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
          key: 'name'
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
    this.getRoleList(1);
    this.getMenuTree();
  },
  methods: {
    dealParam() {
      var menuIds = this.$refs['treeRef'].getCheckedNodes();
      var data = new Set();
      for (let i = 0; i < menuIds.length; i++) {
        if (menuIds[i].pid > 0) {
          data.add(menuIds[i].pid);
        }
        data.add(menuIds[i].id);
      }
      return Array.from(data).join();
    },
    ok() {
      const param = {
        name: this.name,
        menuIds: this.dealParam()
      }
      API.addRole(param).then(res => {
        if (res.code == '200') {
          this.$Message.success("新增用户成功");
          this.getRoleList();
        }
      }).catch(err => {
        console.log(err);
      })

    },
    onEditClick(row) {
      API.getRoleDataInfo({ roleId: row.id }).then(res => {
        if (res.code == '200') {
          this.name = res.result.name;
          this.setTreeData(this.menuData, res.result.menuIds.split(','));
        }
      }).catch(err => {
        console.log(err);
      })
      this.modal1 = true;
    },

    setTreeData(menuList, menuIdList) {
      for (let i = 0; i < menuIdList.length; i++) {
        for (let j = 0; j < menuList.length; j++) {
          if (menuList[j].children) {
            menuList[j].checked = false;
            this.setTreeData(menuList[j].children, menuIdList);
          } else if (menuList[j].id == menuIdList[i]) {
            menuList[j].checked = true;
          }
        }
      }
      // for (let i = 0; i < menuIdList.length; i++) {
      //   this.setTree(this.menuData, menuIdList[i])
      // }
      // console.log(this.menuData);
    },
    setTree(menuList, i) {
      for (let j = 0; j < menuList.length; j++) {
        if (menuList[j].pid == i) {
          menuList.checked = false
        }
        if (menuList[j].id == i) {
          return menuList.checked = true
        } else if (menuList.children) {
          this.setTree(menuList.children, i);
        }

      }
    },
    cancel() {
      this.modal1 = false;
      this.getMenuTree();
    },
    onAddClick() {
      this.modal1 = true;
    },
    getMenuTree() {
      API.getMenuData().then(res => {
        if (res.code == '200') {
          this.menuData = this.setMenuData(res.result);
        }
      }).catch(err => {
        console.log(err)
      })
    },
    setMenuData(data) {
      for (let i = 0; i < data.length; i++) {
        data[i].title = data[i].name;
        data[i].expand = true;
        data[i].checked = false;
        if (data[i].children && data[i].children.length) {
          this.setMenuData(data[i].children);
        }
      }
      return data;
    },
    onCheckChange(data) {
      console.log(data);
    },
    onPageChange(page) {
      this.pageObj.pageNo = page;
      this.getRoleList();
    },
    onPageSizeChange(pageSize) {
      this.pageObj.pageSize = pageSize;
      this.getRoleList(1);
    },
    onDelClick(row) {
      API.delRoleInfo({ id: row.id }).then(res => {
        if (res.code == '200') {
          this.$Message.success("删除角色成功");
          this.getRoleList(1);
        }
      }).catch(err => {
        console.log(err);
      })
    },
    getRoleList(index) {
      const param = {
        pageNo: index || this.pageObj.pageNo,
        pageSize: this.pageObj.pageSize,
        search: {
          name: null
        }
      }
      API.getRoleListData(param).then(res => {
        if (res.code == '200') {
          this.tableData = res.result;
          this.pageObj.total = res.ext.totalRecord
        } else {
          this.tableData = []
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
}
</script>

<style>
</style>