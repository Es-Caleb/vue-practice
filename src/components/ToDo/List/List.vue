<template>
  <div class="todo-lists">
    <div v-for="(item, index) in list" :key="index" class="list-box">
      <div class="list-select" @click="seleteItem(item.id)">
        <img v-if="item.status === 1" src="../../../assets/select.png" />
      </div>
      <input class="list-input" :class="{'input-select': item.status === 1}" v-model="item.thing" @focus="disImg()" @blur="focusNo($event)" @keyup.enter="focusNo($event)" />
      <div class="list-deleteBox" v-show="focusDisplay">
        <img class="list-delete" src="../../../assets/delete.png" @click="deleteTodo(item.id)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array
    },
  },
  data() {
    return {
			focusDisplay: true,
    }
  },
  methods: {
    // 取消焦点
		focusNo(event) {
			event.target.blur();
			this.focusDisplay = true;
		},
		// 获得焦点时隐藏删除图片
		disImg() {
			this.focusDisplay = false;
		},
    // 选择该条
    seleteItem(id) {
      this.$emit('seleteItem', id);
    },
    // 删除该条
    deleteTodo(id) {
			this.$emit('deleteTodo', id);
		},
  }
}
</script>

<style lang="scss" scoped>
.todo-lists {
  max-height: 500px;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .list-box {
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #f0f0f0;
    &:last-of-type {
      border-bottom: 0;
    }
    &:hover {
      .list-deleteBox {
        margin-right: 20px;
        width: 32px;
        height: 32px;
        visibility: visible;
      }
    }
    .list-select {
      border-radius: 50%;
      min-width: 34px;
      height: 34px;
      border: 1px solid #f0f0f0;
      margin-right: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .list-input {
      width: 100%;
      height: 40px;
      font-size: 35px;
      padding: 14px 20px;
      color: #797878;
      line-height: 1;
      &::-webkit-input-placeholder{
        color:#dbdbdb;
      }
      &:focus{
        box-shadow: 2px 0px 5px #797878 inset;
        // border-radius: 3px;
      }
      &.input-select {
        text-decoration: line-through;
        color:#dbdbdb;
      }
    }
    .list-deleteBox {
      width: 32px;
      height: 32px;
      margin-right: 20px;
      visibility: hidden;
        .list-delete {
          width: 32px;
          height: 32px;
          cursor: pointer;
        }
      }
  }
}
</style>