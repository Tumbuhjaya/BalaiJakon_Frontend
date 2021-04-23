<template>
  <div>
    <div class="abc">
      <router-link
        to="/ProposalMitra"
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
                  PENDAFTARAN PESERTA
                </b-card-title>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-group label="Email">
                    <b-form-input
                      type="email"
                      placeholder="Masukkan Email"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group label="Password">
                    <b-form-input
                      type="password"
                      placeholder="Masukkan Password"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-group label="Nama Depan">
                    <b-form-input
                      type="text"
                      placeholder="Nama Depan"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group label="Nama Belakang">
                    <b-form-input
                      type="email"
                      placeholder="Nama Belakang"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-group label="Alamat">
                    <b-form-input
                      type="email"
                      placeholder="Masukkan Alamat"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-group label="No Kontak">
                    <b-form-input
                      type="email"
                      placeholder="Masukkan No Kontak"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-group label="Kelurahan">
                    <b-form-select
                      v-model="selected1"
                      :options="kelur"
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group label="Kecamatan">
                    <b-form-select
                      v-model="selected2"
                      :options="keca"
                    ></b-form-select>
                  </b-form-group>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-group label="Kota/Kabupaten">
                    <b-form-select
                      v-model="selected3"
                      :options="kota"
                    ></b-form-select>
                  </b-form-group>
                </div>
                <div class="box2 px-3 md-4 mb-4">
                  <b-form-group label="Propinsi">
                    <b-form-select
                      v-model="selected4"
                      :options="prov"
                    ></b-form-select>
                  </b-form-group>
                </div>
                <div class="mb-12">
                  <center>
                    <b-button
                      variant="primary"
                      class="text-uppercase mr-2 mb-4"
                    >
                      RESET</b-button
                    >
                    <b-button
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected1: null,
      selected2: null,
      selected3: null,
      selected4: null,
      kelur: [
        { value: null, text: " Pilih Kelurahan" },
        { value: "Jateng", text: " Jawa Tengah" },
        { value: "Jabar", text: " Jawa Barat" },
        { value: "Jatim", text: " jawa Timur" },
        { value: "Jakarta", text: "Jakarta" },
      ],
      keca: [
        { value: null, text: " Pilih Kecamatan" },
        { value: "Jateng", text: " Jawa Tengah" },
        { value: "Jabar", text: " Jawa Barat" },
        { value: "Jatim", text: " jawa Timur" },
        { value: "Jakarta", text: "Jakarta" },
      ],
      kota: [
        { value: null, text: " Pilih Kota/Kabupaten" },
        { value: "Jateng", text: " Jawa Tengah" },
        { value: "Jabar", text: " Jawa Barat" },
        { value: "Jatim", text: " jawa Timur" },
        { value: "Jakarta", text: "Jakarta" },
      ],
      prov: [
        { value: null, text: " Pilih Propinsi" },
        { value: "Jateng", text: " Jawa Tengah" },
        { value: "Jabar", text: " Jawa Barat" },
        { value: "Jatim", text: " jawa Timur" },
        { value: "Jakarta", text: "Jakarta" },
      ],
    };
  },
};
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
  text-align: start;
  position: relative;
  justify-self: unset;
  letter-spacing: 1px;
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
  letter-spacing: 1px;
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
