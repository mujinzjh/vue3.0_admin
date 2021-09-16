<!--
 * @Author: mujin
 * @Date: 2021-09-16 15:18:59
 * @LastEditTime: 2021-09-16 16:11:43
 * @Description: 公共的弹窗组件
-->
<template>
  <Modal
    v-model="visible"
    :title="title"
    :closable="closable"
    :mask-closable="maskClosable"
    :loading="loading"
    :scrollable="scrollable"
    :ok-text="okText"
    :cancel-text="cancelText"
    :width="width"
  >
    <div slot="close">
      <Icon
        class="ivu-icon-ios-close"
        @click="onCancel"
      ></Icon>
    </div>
    <slot name="content">
      这是一段内容
    </slot>
    <div slot="footer">
      <slot name="foot">
        <Button @click="onCancleClick">取消</Button>
        <Button
          type="primary"
          @click="onConfirmClick"
        >确定</Button>
      </slot>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'ModalCom',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "提示"
    },
    closable: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    width: {
      require: true,
      type: [String, Number],
      default: "520"
    },
  },
  methods: {
    /**
     * @method: 关闭弹窗的回调
     * @param {*}
     * @return {*}
     */
    onCancleClick() {
      this.$emit('cancel');
    },
    /**
     * @method: 确定的回调
     * @param {*}
     * @return {*}
     */
    onConfirmClick() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    }
  },
}
</script>

<style>
</style>