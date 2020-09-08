<template>
  <div class="row justify-content-center" style="margin-top:9%">
    <div class="col-md-6">
      <div class="alert alert-success" role="alert">
        <h2 class="alert-heading text-center">Add Doctor</h2>
      </div>

      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Doctor ID</label>
          <input type="text" class="form-control" v-model="facilityDoctor.doctor" required />
        </div>

        <div class="form-group">
          <label>Medical Facility ID</label>
          <input type="text" class="form-control" v-model="facilityDoctor.medicalFacility" required />
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      facilityDoctor: {
        doctor: "",
        medicalFacility: ""
      }
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "https://amonmr.herokuapp.com/api/v1/facilities-doctors";
      var Token = this.$session.get("Token");
      const headers = { authorization: Token };
      axios
        .post(apiURL, this.facilityDoctor, { headers })
        .then(res => {
          alert(res.status);
          alert("Success");
        })
        .catch(error => {
          alert(error.status);
          alert("Failed");
        });
    }
  }
};
</script>