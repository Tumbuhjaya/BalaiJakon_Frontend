import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import ipBackEnd from "../config"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataPelatihan:[],
    dataSertifikasi:[],
    dataProfil:[],
    dataLowongan:[],
    showSpinner:false
  },
  mutations: {

  },
  actions: {
    getProfil(){
      axios
      .get(ipBackEnd + "users/", {

      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getPelatihan(){
    axios
      .get(ipBackEnd + "users/", {

      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getSertifikasi(){
    axios
      .get(ipBackEnd + "users/", {

      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
},
  modules: {},
});
