<template>
  <b-row class="row px-3">
    <b-card class="form-box col-lg-10 col-xl-9 flex-row mx-auto px-0">
      <b-row no-gutter>
        <!-- <b-col md="6" class="boximages"> </b-col> -->
        <b-col md="" class="boxlogin">
          <b-card-body>
            <b-card-title class="c-title text-center md-4">
              PROFIL MITRA
            </b-card-title>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-group label="Email">
                <b-form-input
                  type="email"
                  placeholder="Budi@BUDIBUDI.COM"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Password">
                <b-form-input
                  type="password"
                  placeholder="**********"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-group label="Nama Depan">
                <b-form-input
                  type="text"
                  placeholder="Budi"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Nama Belakang">
                <b-form-input
                  type="email"
                  placeholder="Budi"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-group label="Alamat">
                <b-form-input
                  type="email"
                  placeholder="jl.Budi Budi"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="box2 px-3 md-4 mb-4">
              <b-form-group label="Kelurahan">
                <b-form-input
                  type="email"
                  placeholder="Gunungpati"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Kecamatan">
                <b-form-input
                  type="email"
                  placeholder="Gunungpati"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="box2 px-3 md-4 mb-4">
              <b-form-group label="Kota/Kabupaten">
                <b-form-input
                  type="email"
                  placeholder=" Kota Semarang"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Propinsi">
                <b-form-input
                  type="email"
                  placeholder="Jawa Tengah"
                  required
                  disabled="true"
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="mb-12">
              <center>
                <b-button variant="primary" class="text-uppercase mr-2 mb-4">
                  UBAH</b-button
                >
                <b-button
                  disabled="true"
                  variant="primary"
                  class="text-uppercase ml-2 mb-4"
                >
                  SIMPAN
                </b-button>
              </center>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-row>
</template>
<script>
export default {
  //  data() {
  //     return {
  //       form: {
  //         email: '',
  //         nama: '',
  //         food: null,
  //         checked: []
  //       },
  //       foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
  //       show: true
  //     }
  //   },
  //   methods: {
  //     onSubmit(event) {
  //       event.preventDefault()
  //       alert(JSON.stringify(this.form))
  //     },
  //     onReset(event) {
  //       event.preventDefault()
  //       // Reset our form values
  //       this.form.email = ''
  //       this.form.name = ''
  //       this.form.food = null
  //       this.form.checked = []
  //       // Trick to reset/clear native browser form validation state
  //       this.show = false
  //       this.$nextTick(() => {
  //         this.show = true
  //       })
  //     }
  //   }
};
</script>

<style scoped>
b-form-input {
  width: 100%;
  height: 55px;
  padding-left: 40px;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: turquoise;
  border: 1px solid #00000020;
  border-radius: 50px;
  outline: none;
  background: transparent;
}
.content {
  margin-top: 250px;
  padding-top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 50px;
  color: darkgray;
  font-weight: 500;
}
.box2 {
  position: relative;
  justify-self: unset;
  text-align: start;
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
