<template>
  <div>
    <h3>题目描述：</h3>
    <div>将arr数据处理成options所示</div>
    <el-cascader :options="options" :props="props"></el-cascader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { id: 1, name: "部门1", pid: 0 },
        { id: 2, name: "部门2", pid: 1 },
        { id: 3, name: "部门3", pid: 1 },
        { id: 4, name: "部门4", pid: 3 },
        { id: 5, name: "部门5", pid: 4 }
      ],
      props: {
        value: "id",
        label: "name"
      },
      options: []
    };
  },
  mounted() {
    this.changeDepartment();
  },
  methods: {
    changeDepartment() {
      while (this.arr.length > 1) {
        let last = this.arr.pop();
        for (let i = 0; i < this.arr.length; i++) {
          if (last.pid === this.arr[i].id) {
            if (this.arr[i].children) {
              this.arr[i].children.push(last);
            } else {
              this.arr[i].children = [last];
            }
          }
        }
        this.options = this.arr;
      }
    }
  }
};
</script>
