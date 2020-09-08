<template>
  <div class="container col-md-12 main-div">
    <div
      class="alert alert-primary"
      role="alert"
      style="max-width:500px; margin-left:20%; margin-bottom:40px"
    >
      <router-link to="viewProfileMF" class="text-center">
        <h3>Check Your Profile</h3>
      </router-link>
    </div>
    <div class="row">
      <!-- Start First Card -->
      <div class="card" style="width: 20rem; height:28rem; margin-right:20px">
        <div class="card-header text-center">
          <h4>Doctors</h4>
        </div>
        <img src="../assets/doctor1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">Show Or Add Your Doctors</h5>
          <div style="margin-top:50px; margin-left:40px">
            <router-link
              :to="{name: 'add'}"
              class="btn btn-success btn-lg"
              style="padding-right:20px;padding-left:20px"
            >Add</router-link>
            <router-link
              :to="{name: 'view'}"
              class="btn btn-primary btn-lg"
              style="margin-left:25px;padding-right:20px;padding-left:20px;"
            >View</router-link>
          </div>
        </div>
      </div>
      <!-- End First Card -->

      <!-- Start Second Card -->
      <div class="card" style="width: 20rem; height:28rem; margin-right:20px">
        <div class="card-header text-center">
          <h4>Clerks</h4>
        </div>
        <img src="../assets/ClerkMF.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">Show Or Add Your Clerks</h5>
          <div style="margin-top:50px; margin-left:40px">
            <router-link
              :to="{name: 'register'}"
              class="btn btn-success btn-lg"
              style="padding-right:20px;padding-left:20px"
            >Add</router-link>
            <router-link
              :to="{name: 'viewClerks'}"
              class="btn btn-primary btn-lg"
              style="margin-left:25px;padding-right:20px;padding-left:20px"
            >View</router-link>
          </div>
        </div>
      </div>
      <!-- End Second Card -->

      <!-- Start Third Card -->
      <div class="card" style="width: 20rem; height:28rem; margin-right:20px">
        <div class="card-header text-center">
          <h4>Patients</h4>
        </div>
        <img src="../assets/patient2.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">Show Your Patients</h5>

          <div style="margin-top:50px; margin-left:50px">
            <router-link
              :to="{name: 'viewPatientsMF'}"
              class="btn btn-primary btn-lg"
              style="padding-left:30px; padding-right:30px; margin-left:40px"
            >View</router-link>
          </div>
        </div>
      </div>
      <!-- End Third Card -->
    </div>
    <div style="margin-top:30px; margin-left:-15px;">
      <button class="btn btn-danger" style="padding:5px" href="#" @click="logout">Logout</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    logout: function() {
      this.$session.clear();
      this.$session.destroy();
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
.btn-success {
  margin-right: 10px;
}
h1 {
  padding-bottom: 20px;
  padding-left: 300px;
  margin-top: 20px;
}
.main-list {
  border: 5px solid #ccc;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 25px;
}
.main-div {
  margin-left: 50px;
  margin-top: 5%;
}
</style>
