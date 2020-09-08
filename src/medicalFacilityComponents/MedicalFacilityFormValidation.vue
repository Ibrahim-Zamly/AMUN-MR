<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Add Medical Facility</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Facility Name</label>
          <input type="text" class="form-control" v-model="medicalFacility.name" required />
        </div>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="medicalFacility.username" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="medicalFacility.password" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="medicalFacility.email" required />
        </div>

        <div class="form-group">
          <label>Mobile</label>
          <input type="text" class="form-control" v-model="medicalFacility.mobile" required />
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label>Address</label>
            <input type="text" class="form-control" v-model="medicalFacility.address" required />
          </div>

          <div class="form-group col-md-6">
            <label>Type</label>
            <input type="text" class="form-control" v-model="medicalFacility.type" required />
          </div>
          <div class="form-group col-md-6">
            <label>Description</label>
            <input type="text" class="form-control" v-model="medicalFacility.description" required />
          </div>
          <div class="form-group col-md-6">
            <label>Maximum Number of Clerks</label>
            <input
              type="number"
              class="form-control"
              v-model="medicalFacility.maxNumberOfClerks"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
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
      medicalFacility: {
        name: "",
        username: "",
        password: "",
        email: "",
        mobile: "",
        address: "",
        type: "",
        description: "",
        maxNumberOfClerks: ""
      }
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "https://amonmr.herokuapp.com/api/v1/medical-facilities";
      axios
        .post(apiURL, this.medicalFacility)
        .then(res => {
          console.log(res.status);
          console.log("Success");
        })
        .catch(error => {
          console.log(error);
          alert("Please, Check your data");
        });
    }
  }
};
</script>