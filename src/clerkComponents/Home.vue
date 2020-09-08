<template>
  <div class="container col-md-12" style="margin-left:15%; margin-top:13%">
    <div class="row">
      <!-- Start First Card -->
      <div class="card" style="width: 20rem; height:28rem; margin-right:80px">
        <div class="card-header text-center">
          <h4>Patients</h4>
        </div>
        <img src="../assets/patient2.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Show Your Patients</h5>

          <div style="margin-top:40px; margin-left:80px">
            <router-link
              :to="{name: 'viewPatientsClerk'}"
              class="btn btn-primary btn-lg"
              style="padding-right:30px;padding-left:30px;"
            >View</router-link>
          </div>
        </div>
      </div>
      <!-- End First Card -->

      <!-- Start Second Card -->
      <div class="card" style="width: 20rem; height:28rem; margin-right:20px">
        <div class="card-header text-center">
          <h4>Doctors</h4>
        </div>
        <img src="../assets/doctor1.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Show Your Doctors</h5>

          <div style="margin-top:40px; margin-left:80px">
            <router-link
              :to="{name: 'viewClerkDoctors'}"
              class="btn btn-primary btn-lg"
              style="padding-right:30px;padding-left:30px;"
            >View</router-link>
          </div>
        </div>
      </div>
      <!-- End Second Card -->
    </div>
    <div style="margin-top:40px; margin-left:-15px;">
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
</style>
