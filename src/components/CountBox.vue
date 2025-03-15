<template>
  <div class="count-box">
    <button @click="handleSub" class="minus">-</button>
    <input :value="value" @change="handleChange" class="inp" type="text">
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'CountBox',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleSub () {
      if (this.value <= 1) {
        return
      }
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleChange (e) {
    //   console.log(e.target.value)
      const num = +e.target.value // 转数字处理，将输入的值转化为数字
      //   遇到不合法的数字，退回到原来的值
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input')
    }
  }

}
</script>

<style lang="less" scoped>
.count-box{
    width: 110px;
    display: flex;
    .add,.minus{
        width: 30px;
        height: 30px;
        outline: none;
        border: none;
        background-color: #efefef;
    }
    .inp{
        width: 40px;
        height: 30px;
        outline: none;
        border: none;
        margin: 0 5px;
        text-align: center;
        background-color: #efefef;
    }
}
</style>
