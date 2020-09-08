<template>
  <div class="row table-responsive">
    <div class="alert main-class" role="alert">
      <h2 class="alert-heading text-center">Clerks</h2>
    </div>
    <div class="col-md-12" style="margin-top:3%;">
      <table class="table table-hover table-bordered">
        <thead class="thead-dark text-center">
          <tr>
            <th>Clerk ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="clerk in Clerks" :key="clerk._id">
            <td>{{ clerk._id }}</td>
            <td>{{ clerk.firstName }}</td>
            <td>{{ clerk.lastName }}</td>
            <td>{{ clerk.mobile }}</td>
            <td>{{ clerk.role }}</td>
            <td>
              <button
                @click.prevent="deleteClerk(clerk._id)"
                class="btn btn-danger"
                style="margin-left:5px"
              >Delete</button>
            </td>
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
      Clerks: []
    };
  },
  created() {
    let apiURL = "https://amonmr.herokuapp.com/api/v1/clerks";
    var Token = this.$session.get("Token");
    const headers = { authorization: Token };
    axios
      .get(apiURL, { headers })
      .then(res => {
        this.Clerks = res.data.clerks;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    deleteClerk(id) {
      let apiURL = `https://amonmr.herokuapp.com/api/v1/clerks/${id}`;
      let indexOfArrayItem = this.Clerks.findIndex(i => i._id === id);
      var Token = this.$session.get("Token");
      const headers = { authorization: Token };
      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL, { headers }, id)
          .then(() => {
            this.Clerks.splice(indexOfArrayItem, 1);
          })
          .catch(error => {
            console.log(error);
            alert("Error happened successfully");
          });
      }
    },
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