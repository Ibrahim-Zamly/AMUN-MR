<template>
  <div class="container" style="max-width: 500px; text-align: left; margin-top:12%">
    <div class="alert alert-success" role="alert">
      <h2 class="alert-heading text-center">Login</h2>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          v-model="userForm.email"
          id="email"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.email.$error }"
        />
        <div v-if="isSubmitted && $v.userForm.email.$error" class="invalid-feedback">
          <span v-if="!$v.userForm.email.required">Email field is required</span>
          <span v-if="!$v.userForm.email.email">Please provide valid email</span>
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="userForm.password"
          id="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.password.$error }"
        />
        <div v-if="isSubmitted && $v.userForm.password.$error" class="invalid-feedback">
          <span v-if="!$v.userForm.password.required">Password field is required</span>
          <span v-if="!$v.userForm.password.minLength">Password should be at least 8 characters long</span>
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-success btn-block">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

import axios from "axios";

export default {
  data() {
    return {
      userForm: {
        email: "",
        password: ""
      },
      isSubmitted: false
    };
  },
  validations: {
    userForm: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    handleSubmit() {
      let apiurl =
        "https://amonmr.herokuapp.com/api/v1/medical-facilities/auth";
      axios
        .post(apiurl, this.userForm)
        .then(response => {
          console.log(response);
          console.log(response.status);
          var profileData = response.data.medicalFacility;
          console.log(profileData);
          this.$session.start();
          this.$session.set("Token", profileData.token);
          this.$session.set("email", profileData.email);
          this.$session.set("name", profileData.name);
          this.$session.set("address", profileData.address);
          this.$session.set("medicalFacilityID", profileData._id);
          this.$session.set("type", profileData.type);
          this.$session.set("maxNum", profileData.MaxNumberOfClerks);
          this.$router.push("/homeMF");
        })
        .catch(error => {
          console.log(error);
          alert("Invalid Username/Password");
        });
    }
  }
};
</script>

