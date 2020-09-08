<template>
  <div class="row table-responsive">
    <div class="alert main-class" role="alert">
      <h2 class="alert-heading text-center">Doctors</h2>
    </div>
    <div class="col-md-12" style="margin-top:4%;">
      <table class="table table-hover table-bordered">
        <thead class="thead-dark text-center">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Specialization</th>
            <th>Doctor ID</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="doctor in Doctors" :key="doctor._id">
            <td>{{doctor.doctor.firstName}}</td>
            <td>{{doctor.doctor.lastName}}</td>
            <td>{{doctor.doctor.specialization}}</td>
            <td>{{doctor.doctor._id}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="margin-top:40px; margin-left:15px">
      <button class="btn btn-danger" style="padding:5px" href="#" @click="logout">Logout</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      Doctors: []
    };
  },
  created() {
    let apiURL = "https://amonmr.herokuapp.com/api/v1/facilities-doctors";
    var Token = this.$session.get("Token");
    const headers = { authorization: Token };
    axios
      .get(apiURL, { headers })
      .then(res => {
        this.Doctors = res.data.facilitiesDoctors;
      })
      .catch(error => {
        console.log(error);
      });
  },
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
.main-class {
  max-width: 200px;
  margin-left: 37%;
  background-color: #f4f4f4;
  border: 1px solid;
  padding: 5px;
  box-shadow: 5px 5px #888888;
}
</style>