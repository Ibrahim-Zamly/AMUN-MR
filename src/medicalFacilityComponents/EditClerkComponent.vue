<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Clerk Data</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="Clerks.email" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="Clerks.password" />
        </div>

        <div class="form-group">
          <label>Role</label>
          <input type="text" class="form-control" v-model="Clerks.role" />
        </div>

        <div class="form-group">
          <label>Mobile</label>
          <input type="text" class="form-control" v-model="Clerks.mobile" required />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Update</button>
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
      Clerks: {
        email: "",
        password: "",
        mobile: "",
        role: ""
      }
    };
  },
  created() {
    let apiURL = `https://amonmr.herokuapp.com/api/v1/clerks/${this.$route.params.id}`;

    axios.get(apiURL).then(res => {
      this.Clerks = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `https://amonmr.herokuapp.com/api/v1/clerks/${this.$route.params.id}`;

      axios
        .post(apiURL, this.Clerks)
        .then(res => {
          console.log(res);
          this.$router.push("/viewClerks");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>