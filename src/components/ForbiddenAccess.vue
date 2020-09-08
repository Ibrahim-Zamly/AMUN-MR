<template>
  <div class="continer">
    <div class="text-div">
      <h2>You Can't Reach Here !</h2>
      <router-link to="/">
        <h3 style="margin-left:80px">Please Login</h3>
      </router-link>
    </div>

    <div class="main-div">
      <img src="../assets/Forbidden.jpg" />
    </div>
  </div>
</template>
<style>
body {
  overflow: hidden;
}
.main-div {
  margin-left: 22%;
}
.text-div {
  margin-left: 30%;
}
</style>