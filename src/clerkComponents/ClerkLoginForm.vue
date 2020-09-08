<template>
  <div class="container" style="max-width: 500px; text-align: left;  margin-top:12%">
    <div class="alert alert-primary" role="alert">
      <h2 class="alert-heading text-center">Clerk Login</h2>
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
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";

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
        required
      }
    }
  },
  methods: {
    handleSubmit() {
      let apiurl = "https://amonmr.herokuapp.com/api/v1/clerks/auth";
      axios
        .post(apiurl, this.userForm)
        .then(response => {
          console.log(response);
          console.log(response.status);
          var token = response.data.clerk.token;
          this.$session.start();
          this.$session.set("Token", token);
          this.$router.push("/home");
        })
        .catch(error => {
          alert(error.status);
          console.log(error);
          alert("Invalid Username/Password");
        });
    }
  }
};
</script>

