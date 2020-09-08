<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">AMUN MR</a>
        <ul class="nav navbar-nav flex-row float-right"></ul>
      </div>
    </nav>
    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  methods: {
    logout: function() {
      this.$session.clear();
      this.$session.destroy();
      sessionStorage.clear();
      this.$router.push("/");
      console.log("Session destroyed");
      alert("Logged out successfully");
    },
    checkSession() {
      var token = this.$session.get("Token");
      if (token == null) return true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
