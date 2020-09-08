<template>
  <div class="continer" style="margin-left:28%;">
    <div style="margin-bottom:20px; margin-left:100px; ">
      <img style="border-radius:50%" src="../assets/profileMF.jpg" />
    </div>
    <div class="row">
      <div class="d-flex flex-column">
        <h4 style="padding-bottom:15px">Name:</h4>
        <h4 style="padding-bottom:15px">Email:</h4>
        <h4 style="padding-bottom:15px">Address:</h4>
        <h4 style="padding-bottom:15px">{{this.$session.get('name')}} ID:</h4>
      </div>

      <div style="margin-left:13%">
        <h5 style="padding-bottom:21px">{{ this.$session.get('name') }}</h5>
        <h5 style="padding-bottom:21px">{{ this.$session.get('email')}}</h5>
        <h5 style="padding-bottom:21px">{{ this.$session.get('address')}}</h5>
        <h5 style="padding-bottom:21px">{{ this.$session.get('medicalFacilityID')}}</h5>
      </div>
    </div>
    <div class="row">
      <div style="margin-top:40px">
        <button class="btn btn-primary" v-on:click="createQRcode">Generate QR Code</button>
      </div>
      <div style="margin-left:20%">
        <img class="preview" :src="this.qrImage" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      address: "",
      medicalFacilityID: "",
      qrImage: ""
    };
  },
  methods: {
    createQRcode() {
      var id = this.$session.get("medicalFacilityID");
      this.qrImage =
        "http://api.qrserver.com/v1/create-qr-code/?data=" +
        id +
        "&size=120x120";
      axios
        .get(this.qrImage, { responseType: "arraybuffer" })
        .then(function(response) {
          var headers = response.headers();
          var blob = new Blob([response.data], {
            type: headers["content-type"]
          });
          var link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "Your_file_name";
          link.click();
        });
    }
  }
};
</script>