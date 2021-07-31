<template>
  <div class="home">
    <div class="home-menus">
      <div class="catalog" @click="goRouter('/todo')">ToDo</div>
      <el-button @click="goRouter('/test')">题目</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  methods: {
    goRouter(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 100px;
  .home-menus {
    .catalog {
      margin: auto;
      padding: 10px 20px;
      background: #0bf8b1;
      border-radius: 5px;
      text-align: center;
      color: #ffffff;
      cursor: pointer;
      width: 100px;
    }
  }
}
</style>
