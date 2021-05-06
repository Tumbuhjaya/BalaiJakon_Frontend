import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import ipBackEnd from "../config";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataPelatihan: [],
    dataSertifikasi: [],
    dataProfil: [],
    dataLowongan: [],
    showSpinner: false,
  },
  mutations: {
    SET_PROFIL(state, dataProfil) {
      state.dataProfil = dataProfil;
    },
    SET_DATAPELATIHAN(state, dataPelatihan) {
      state.dataPelatihan = dataPelatihan;
    },
    SET_DATASERTIFIKASI(state, dataSertifikasi) {
      state.dataSertifikasi = dataSertifikasi;
    },
    SET_DATALOWONGAN(state, dataLowongan) {
      state.dataLowongan = dataLowongan;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    },
  },
  actions: {
    getProfil() {
      axios
        .get(ipBackEnd + "users/", {})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getPelatihan() {
      axios
        .get(ipBackEnd + "users/", {})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getSertifikasi() {
      axios
        .get(ipBackEnd + "users/", {})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  modules: {},
});
