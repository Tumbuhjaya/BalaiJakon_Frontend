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
                placeholder="Username"
                tabindex="15"
                class="input"
              ></b-form-input>
              <b-form-input
                type="password"
                placeholder="Password"
                tabindex="15"
                class="input"
              ></b-form-input>
              <b-form-input
                type="text"
                placeholder="Nama"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                placeholder="Jenis Kelamin"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                placeholder="Alamat"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                placeholder="No Kontak"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                placeholder="Spesialisasi"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-input
                type="text"
                placeholder="No Kontak Darurat"
                tabindex="15"
                class="input"
              ></b-form-input>
            </div>

            <div class="mb-12">
              <center>
                <b-button variant="primary" class="text-uppercase mr-2 mb-4">
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
// export default {
//   name: "register",
//   data() {
//     return {
//       nama: "",
//       kelamin: "",
//       alamat: "",
//       tanggalLahir:"",
//       golonganDarah:"",
//       Spesialisasi: "",
//       noHp: "",
//       noDarurat:"",
//       alamat2:"",
//       valid: true,
//       radioGroup: null,
//       date: null,
//       menu: false,
//     };
//   },
//   components:{
//     navbar,
//   },

//   methods: {
//     save(date) {
//       this.$refs.menu.save(date);
//     },
//     register() {
//       let vm = this;
//       axios
//         .post(ipBackEnd + "user/register", {
//           nama: vm.nama,
//           alamat: vm.alamat,
//           kelamin: vm.kelamin,
//           golonganDarah: vm.golonganDarah,
//           role: dokter,
//           tanggal: vm.date,
//         })
//         .then(function(response) {
//           // console.log(response);
//           // if(response.data.message){
//           console.log(vm);
//           vm.notif = response.data.message;
//           vm.$router.push("/dashboard");
//           // }
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     },
//   },
//   watch: {
//     menu(val) {
//       val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
//     },
//   },
// };
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
