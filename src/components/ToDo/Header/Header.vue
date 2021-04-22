<template>
  <div class="todo-header">
    <img v-if="seleteStatus" class="todo-select-img" src="../../../assets/downArrow.png" @click="seleteAll(1)" />
    <img v-else class="todo-select-img" src="../../../assets/downArrow-select.png" @click="seleteAll(2)" />
    <input class="todo-inputBox" v-model="needTodo" placeholder="What needs to be done?" @keyup.enter="addTodo()" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seleteStatus: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      needTodo: '',
    }
  },
  methods: {
    seleteAll(e) {
      this.$emit('seleteAll', e);
    },
    addTodo() {
      this.$emit('addTodo', this.needTodo);
      this.needTodo = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-header {
  border-radius: 5px 5px 0 0;
  border: 1px solid #f0f0f0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  .todo-select-img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 6px;
  }
  .todo-inputBox {
    width: 100%;
    height: 40px;
    font-size: 35px;
    color: #797878;
    &::-webkit-input-placeholder{
      color:#dbdbdb;
    }
  }
}
</style>