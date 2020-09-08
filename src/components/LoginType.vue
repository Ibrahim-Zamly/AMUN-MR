<template>
  <div class="container main-div">
    <div
      class="alert alert-secondary"
      role="alert"
      style="max-width:500px; margin-left:25% ; background-color:#f4f4f4;border: 1.4px solid;
  padding: 15px;
  box-shadow: 5px 10px #888888;"
    >
      <h2 class="alert-heading text-center">Welcome To AMUN MR</h2>
    </div>

    <div class="row container float-left main-div">
      <div class="fac text-right">
        <div>
          <img class="fac-img" src="../assets/HomeMF.jpg" />
        </div>
        <router-link :to="{name: 'login'}" class="btn btn-success btn-lg fac-btn">Facility Login</router-link>
      </div>
      <div class="clrk">
        <div>
          <img class="clrk-img" src="../assets/HomeClrk.jpg" />
        </div>
        <router-link :to="{name: 'clerkLogin'}" class="btn btn-primary btn-lg clrk-btn">Clerk Login</router-link>
      </div>
    </div>
  </div>
</template>
<style>
body {
  background-color: #f4f4f4;
}

.fac-img {
  border-radius: 50%;
}
.clrk-img {
  border-radius: 50%;
}
.main-div {
  margin-top: 5%;
}
.clrk {
  margin-left: 300px;
}
.clrk-btn {
  padding-left: 20px;
  margin-left: 100px;
  margin-top: 20px;
  margin-left: 60px;
}
.fac {
  margin-left: 130px;
}
.fac-btn {
  margin-top: 20px;
  margin-right: 60px;
}
h1 {
  padding-left: 29%;
}
</style>