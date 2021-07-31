<template>
  <div class="todo-index">
    <div class="todo-title">todos</div>
    <div class="todo-content">
      <Header :seleteStatus="seleteStatus" @seleteAll="seleteAll" @addTodo="addTodo" />
      <List v-if="list.length > 0" :list="list" @seleteItem="seleteItem" @deleteTodo="deleteTodo" />
      <Footer
        :itemNum="itemNum"
        :clearDisplay="clearDisplay"
        :type="type"
        @clearLists="clearLists"
        @changetype="changetype"
      />
    </div>
  </div>
</template>

<script>
import Header from "./Header/Header";
import List from "./List/List";
import Footer from "./Footer/Footer";
export default {
  components: {
    Header,
    List,
    Footer
  },
  data() {
    return {
      type: 0,
      allList: [
        {
          id: 1,
          thing: "学习ES6",
          status: 0
        }
      ],
      needTodo: ""
    };
  },
  computed: {
    // Clear Completed 是否显示
    clearDisplay() {
      let todos = this.allList.filter(e => e.status === 1);
      if (todos.length > 0) {
        return true;
      }
      return false;
    },
    // 显示的内容
    list() {
      if (this.type === 0) {
        return this.allList;
      } else if (this.type === 1) {
        return this.allList.filter(e => e.status === 0);
      } else {
        return this.allList.filter(e => e.status === 1);
      }
    },
    // 未完成数量
    itemNum() {
      let todos = this.allList.filter(e => e.status === 0);
      return todos.length;
    },
    seleteStatus() {
      // 如果没值 默认true
      if (this.allList.length === 0) {
        return true;
      }
      let todos = this.allList.filter(e => e.status === 0);
      if (todos.length === 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    changetype(num) {
      this.type = num;
    },
    // 全选
    seleteAll(i) {
      this.allList.forEach(item => {
        if (i === 1) {
          item.status = 1;
        } else {
          item.status = 0;
        }
      });
    },
    // 选择一个
    seleteItem(id) {
      let index = this.allList.findIndex(item => {
        return item.id == id;
      });
      this.allList[index].status = this.allList[index].status === 1 ? 0 : 1;
    },
    // 删除
    deleteTodo(id) {
      let index = this.allList.findIndex(item => {
        return item.id == id;
      });
      this.allList.splice(index, 1);
    },
    // 添加
    addTodo(needTodo) {
      let id = this.allList.length ? this.allList[this.allList.length - 1].id + 1 : 1;
      let data = {
        id,
        thing: needTodo,
        status: 0
      };
      this.allList.push(data);
    },
    clearLists() {
      this.allList = this.allList.filter(e => e.status === 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-index {
  padding: 0 360px;
  .todo-title {
    text-align: center;
    font-size: 80px;
  }
  .todo-content {
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: -2px 0px 10px #333333;
  }
}
</style>
