<template>
  <b-row class="row px-3">
    <b-card class="form-box col-lg-10 col-xl-9 flex-row mx-auto px-0">
      <b-row no-gutter>
        <!-- <b-col md="6" class="boximages"> </b-col> -->
        <b-col md="" class="boxlogin">
          <b-card-body>
            <b-card-title class="c-title text-center md-4">
              FORM REGISTRASI MITRA
            </b-card-title>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                v-model="username"
                placeholder="Username"
                tabindex="15"
                class="input"
              ></b-form-input>
              <b-form-input
                type="password"
                v-model="password"
                placeholder="Password"
                tabindex="15"
                class="input"
              ></b-form-input>
              <b-form-input
                type="text"
                v-model="namaInstansi"
                placeholder="Nama Instansi"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                v-model="nama"
                placeholder="Contact Person"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                v-model="alamat"
                placeholder="Alamat"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                v-model="noHp"
                placeholder="No Kontak"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                v-model="noKTP"
                placeholder="Spesialisasi"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                v-model="email"
                placeholder="No Kontak Darurat"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>

            <div class="mb-12">
              <center>
                <b-button
                  variant="primary"
                  class="text-uppercase mr-2 mb-4"
                  @click="register()"
                >
                  DAFTAR</b-button
                >
                <b-button variant="primary" class="text-uppercase ml-2 mb-4">
                  RESET
                </b-button>
              </center>
            </div>
            <!-- <div class="text-center md-4 mt-4">
                Lupa Password?
                <a href="#" class="forget-akun">Klaim disini</a>
              </div>
              <div class="text-center mb-4 mt-4">
                Belum memiliki akun?
                <a href="#" class="register-akun">Daftar disini</a>
              </div> -->
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-row>
</template>

<script>
import axios from "axios";
import ipBackEnd from "../config";
export default {
  methods: {
    register() {
      let vm = this;
      axios
        .post(ipBackEnd + "users/register", {
          username: vm.username,
          password: vm.password,
          nama: vm.nama,
          alamat: vm.alamat,
          noHP: vm.noHp,
          tempatlahir: vm.tempatlahir,
          noKTP: vm.noKTP,
          email: vm.email,
          role: "mitra",
          tanggal: vm.date,
          approval: 0,
        })
        .then(function (response) {
          // console.log(response);
          // if(response.data.message){
          console.log(vm);
          vm.notif = response.data.message;
          vm.$router.push("/login");
          // }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.box2 {
  position: relative;
  justify-self: unset;
}
.input {
  width: 100%;
  height: 45px;
  padding-left: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: turquoise;
  border: 1px solid #00000020;
  border-radius: 50px;
  outline: none;
  background: transparent;
}

.input::placeholder {
  color: black;
  padding-left: 0px;
  /* text-align: center; */
}

.input:focus,
.input input:valid {
  border: 2px solid black;
}
</style>
