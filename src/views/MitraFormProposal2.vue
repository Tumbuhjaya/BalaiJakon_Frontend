<template>
  <div>
    <div class="abc">
      <router-link
        to="/proposalMitra"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <div class="back">KEMBALI</div>
      </router-link>
    </div>
    <div class="form container">
      <b-row class="row px-3">
        <b-card class="form-box col-lg-10 col-xl-9 flex-row mx-auto px-0">
          <b-row no-gutter>
            <!-- <b-col md="6" class="boximages"> </b-col> -->
            <b-col md="" class="boxlogin">
              <b-card-body>
                <b-card-title class="c-title text-center md-4">
                  FORM PROPOSAL SERTIFIKASI
                </b-card-title>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-input
                    type="text"
                    placeholder="Nama Mitra"
                    tabindex="15"
                    class="input"
                  ></b-form-input>
                  <b-form-input
                    type="text"
                    placeholder="Alamat"
                    tabindex="15"
                    class="input"
                  ></b-form-input>
                  <b-form-input
                    type="text"
                    placeholder="Lokasi Sertifikasi"
                    tabindex="15"
                    class="input"
                  ></b-form-input>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-input
                    type="text"
                    placeholder="Jenis Sertifikasi"
                    tabindex="15"
                    class="input"
                  ></b-form-input>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-input
                    type="text"
                    placeholder="Bidang Keahlian"
                    tabindex="15"
                    class="input"
                  ></b-form-input>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-input
                    type="text"
                    placeholder="Jumlah Peserta"
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

                <div class="mb-12">
                  <center>
                    <b-button
                      variant="primary"
                      class="text-uppercase mr-2 mb-4"
                    >
                      SUBMIT</b-button
                    >
                    <b-button
                      variant="primary"
                      class="text-uppercase ml-2 mb-4"
                    >
                      RESET
                    </b-button>
                  </center>
                </div>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-row>
    </div>
  </div>
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
.formcontainer {
  background: rgba(192, 192, 192, 0.2);
  min-height: 100vh;
  width: 17rem;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}
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
  border-radius: 10px;
  outline: none;
  background: transparent;
  letter-spacing: 1px;
}
.side-btn {
  outline: none;
  background-color: transparent;
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
.side-btn {
  border: none;
}
.abc {
  display: flex;
  justify-content: flex-start;
  border: none;
}
.back {
  box-shadow: inset 0px 1px 0px 0px #a4e271;
  background: linear-gradient(to bottom, #89c403 5%, #77a809 100%);
  background-color: #89c403;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528009;
  position: relative;
}
.back:hover {
  background: linear-gradient(to bottom, #77a809 5%, #89c403 100%);
  background-color: #77a809;
}
.back:active {
  position: relative;
  top: 1px;
}
</style>
