<template>
  <div class="todo-footer">
    <div class="todo-sums">{{ itemNum }} items left</div>
    <div class="todo-label">
      <div class="label-option" :class="{ select: type === 0 }" @click="changetype(0)">All</div>
      <div class="label-option" :class="{ select: type === 1 }" @click="changetype(1)">Active</div>
      <div class="label-option" :class="{ select: type === 2 }" @click="changetype(2)">Completed</div>
    </div>
    <div class="todo-clear">
      <span v-if="clearDisplay" @click="clearLists()">Clear Completed</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    itemNum: {
      type: Number,
      default: 0
    },
    clearDisplay: {
      type: Boolean,
      default: false
    },
    type: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    changetype(e) {
      this.$emit("changetype", e);
    },
    clearLists() {
      this.$emit("clearLists");
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-footer {
  border-radius: 0 0 5px 5px;
  border: 1px solid #f0f0f0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .todo-sums {
  }
  .todo-label {
    display: flex;
    .label-option {
      margin-right: 20px;
      padding: 5px 6px;
      line-height: 1;
      border: 1px solid #fff;
      border-radius: 3px;
      cursor: pointer;
      &:last-of-type {
        margin-right: 0;
      }
      &.select {
        border: 1px solid #ccc;
      }
    }
  }
  .todo-clear {
    width: 124px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
