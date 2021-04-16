<template>
  <div class="home">
    <div class="home-menus">
      <div class="catalog" @click="goTodo()">ToDo</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
  },
  methods: {
    goTodo() {
      this.$router.push('/todo');
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
      color: #FFFFFF;
      cursor: pointer;
      width: 100px;
    }
  }
}
</style>
