<template>
  <div class="row">
    <div class="alert main-class" role="alert">
      <h2 class="alert-heading text-center">Patients</h2>
    </div>
    <div class="col-md-12" style="margin-top:3%;">
      <table class="table table-hover table-bordered">
        <thead class="thead-dark text-center">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Patient ID</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="patient in Patients" :key="patient._id">
            <td>{{ patient.patient.firstName }}</td>
            <td>{{ patient.patient.lastName }}</td>
            <td>{{ patient.patient._id}}</td>
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
      Patients: []
    };
  },
  created() {
    let apiURL =
      "https://amonmr.herokuapp.com/api/v1/facilities-patients/patient";
    var Token = this.$session.get("Token");
    const headers = { authorization: Token };
    axios
      .get(apiURL, { headers })
      .then(res => {
        this.Patients = res.data.facilitiesPatients;
        console.log(this.Patients);
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
  margin-left: 38%;
  background-color: #f4f4f4;
  border: 1px solid;
  padding: 8px;
  box-shadow: 5px 5px #888888;
}
</style>