<template>
  <div class="container" style="max-width: 500px; text-align: left">
    <div class="alert alert-success" role="alert">
      <h2 class="alert-heading text-center">Create Clerk</h2>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="firstName">First Name</label>
          <input
            type="text"
            v-model="userForm.firstName"
            id="firstName"
            name="firstName"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.firstName.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.firstName.required"
            class="invalid-feedback"
          >First Name field is required</div>
        </div>
        <div class="form-group col-md-6">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            v-model="userForm.lastName"
            id="lastName"
            name="lastName"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.lastName.$error }"
          />
          <div
            v-if="isSubmitted && !$v.userForm.lastName.required"
            class="invalid-feedback"
          >Last Name field is required</div>
        </div>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="userForm.username"
          id="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': isSubmitted && $v.userForm.username.$error }"
        />
        <div
          v-if="isSubmitted && !$v.userForm.username.required"
          class="invalid-feedback"
        >Username field is required</div>
      </div>
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
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="mobile">Mobile</label>
          <input
            type="text"
            v-model="userForm.mobile"
            id="mobile"
            name="mobile"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.mobile.$error }"
          />
          <div v-if="isSubmitted && $v.userForm.mobile.$error" class="invalid-feedback">
            <span v-if="!$v.userForm.mobile.required">Mobile field is required</span>
          </div>
        </div>

        <div class="form-group col-md-6">
          <label for="role">Role</label>
          <input
            type="text"
            v-model="userForm.role"
            id="role"
            name="role"
            class="form-control"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.role.$error }"
          />
          <div v-if="isSubmitted && $v.userForm.role.$error" class="invalid-feedback">
            <span v-if="!$v.userForm.role.required">role field is required</span>
          </div>
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <div
            class="form-group"
            :class="{ 'is-invalid': isSubmitted && $v.userForm.gender.$error }"
          >
            <div
              class="form-check form-check-inline"
              :class="{ 'is-invalid': isSubmitted && $v.userForm.gender.$error }"
            >
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                v-model="userForm.gender"
                id="gender1"
                value="male"
              />
              <label class="form-check-label" for="gender1">Male</label>
            </div>
            <div
              class="form-check form-check-inline"
              :class="{ 'is-invalid': isSubmitted && $v.userForm.gender.$error }"
            >
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                v-model="userForm.gender"
                id="gender2"
                value="female"
              />
              <label class="form-check-label" for="gender2">Female</label>
            </div>

            <div v-if="isSubmitted && $v.userForm.gender.$error" class="invalid-feedback">
              <span v-if="!$v.userForm.gender.required">This field is required</span>
            </div>
          </div>
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
        <button class="btn btn-success btn-block">Create</button>
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
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
        mobile: "",
        role: "",
        gender: ""
      },
      isSubmitted: false
    };
  },
  validations: {
    userForm: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      username: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(8)
      },
      email: {
        required,
        email
      },
      mobile: {
        required,
        minLength: minLength(10)
      },
      role: {
        required
      },
      gender: {
        required
      }
    }
  },
  methods: {
    handleSubmit() {
      let apiURL = "https://amonmr.herokuapp.com/api/v1/clerks";
      var Token = this.$session.get("Token");
      const headers = { authorization: Token };
      axios
        .post(apiURL, this.userForm, { headers })
        .then(res => {
          console.log(res.data);
          if (
            res.status == 400 &&
            res.data.error == "MAXIMUM NUMBER OF CLERKS EXCEEDED "
          ) {
            alert(
              "Maximum number of clerks achieved, Please upgrade to a higher plan."
            );
          }
        })
        .catch(error => {
          if (error.status == 400) {
            alert(
              "Maximum number of clerks achieved, Please upgrade to a higher plan."
            );
          }
        });
    }
  }
};
</script>