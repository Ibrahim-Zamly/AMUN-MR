<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Add Medical Record</h3>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" v-model="medicalRecord.title" required />
        </div>
        <div class="form-group">
          <div class="form-group">
            <label for="medical Record Types">Type</label>
            <br />
            <select name="medicalRecordType" v-model="medicalRecord.type">
              <option value="Prescription">Prescription</option>
              <option value="Radiograph">Radiograph</option>
              <option value="labTest">Lab Test</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Doctor ID</label>
          <input type="text" class="form-control" v-model="medicalRecord.doctor" optional />
        </div>
        <div class="form-group">
          <label>Patient ID</label>
          <input type="text" class="form-control" v-model="medicalRecord.patient" optional />
        </div>
        <div class="form-group">
          <label>Notes</label>
          <input type="text" class="form-control" v-model="medicalRecord.notes" optional />
        </div>
        <div class="form-group">
          <div class="col-md-6">
            <label>Report</label>
            <br />
            <input type="file" @change="onFileSelcted" required />
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-success btn-block">Add Medical Record</button>
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
      medicalRecord: {
        title: "",
        date: "2020-08-04T01:36:10+0000",
        type: "",
        notes: "",
        patient: "",
        doctor: "",
        enteredBy: "CLERK"
      },
      radiograph: null
    };
  },
  methods: {
    onSubmit() {
      let apiURL = "https://amonmr.herokuapp.com/api/v1/medical-records";
      var Token = this.$session.get("Token");
      const headers = { authorization: Token };
      const formData = new FormData();
      var img = this.radiograph;
      formData.append("title", this.medicalRecord.title);
      formData.append("date", this.medicalRecord.date);
      formData.append("type", this.medicalRecord.type);
      formData.append("notes", this.medicalRecord.notes);
      formData.append("patient", this.medicalRecord.patient);
      formData.append("doctor", this.medicalRecord.doctor);
      formData.append("enteredBy", this.medicalRecord.enteredBy);
      formData.append("report", img);
      axios
        .post(apiURL, formData, { headers })
        .then(res => {
          console.log(res.status);
        })
        .catch(error => {
          console.log(error.status);
        });
    },
    onFileSelcted(event) {
      this.radiograph = event.target.files[0];
      console.log(this.radiograph);
    }
  }
};
</script>