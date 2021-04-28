<template>
  <b-container class="body" fluid>
    <b-row></b-row>
  </b-container>
</template>

<script>
import axios from "axios"
import ipBackEnd from "../config"
export default {
  data() {
    return {};
  },
  methods:{
      goo(){
          let vm= this
          axios
        .get(ipBackEnd + "auth/google/callback", {
          username: vm.username,
          password: vm.password,
        })
        .then(function (response) {
          console.log(response);
        //   localStorage.setItem("token", response.data[0].token);
        //   localStorage.setItem("id", response.data[1].id);
        //   localStorage.setItem("role", response.data[2].role);
        //   vm.$router.push({ path: "/dashboardMitra" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted(res) {
      console.log(res.code)
    // localStorage.setItem("token", response.token);
    // this.goo()
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
</style>
