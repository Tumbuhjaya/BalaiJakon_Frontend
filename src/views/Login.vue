<template>
  <b-container fluid class="body p-4">
    <b-row class="row px-3">
      <b-card class="form-box col-lg-10 col-xl-9 flex-row mx-auto px-0">
        <b-row no-gutter>
          <b-col md="6" class="boximages">
            <b-card-img
              alt="logo jakon"
              fluid
              class="images d-none d-md-flex"
            ></b-card-img>
          </b-col>
          <b-col md="6" class="boxlogin">
            <b-card-body>
              <b-card-title class="c-title text-center md-4">
                LOGIN
              </b-card-title>
              <div class="box2 px-3 md-4 mb-4">
                <b-form-input
                  type="text"
                  v-model="username"
                  placeholder="Username"
                  tabindex="15"
                  class="input"
                ></b-form-input>
              </div>
              <div class="box2 px-3 md-4 mb-4">
                <b-form-input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  tabindex="15"
                  class="input"
                ></b-form-input>
              </div>
              <!-- <div class="boxcheck mb-4">
                <center>
                  <b-form-checkbox value="orange">Ingat saya</b-form-checkbox>
                </center>
              </div> -->
              <div class="box button mb-3">
                <center>
                  <div class="text-center mb-4 mt-4">
                    <b-button
                      variant="primary"
                      class="login-btn text-uppercase mr-2 mb-4"
                      @click="signIn()"
                      >Login</b-button
                    >
                  </div>
                  <p>Atau</p>
                  <GoogleLogin />
                </center>
              </div>
              <div class="text-center md-4 mt-4">
                Lupa Password?
                <a href="#" class="forget-akun">Klaim disini</a>
              </div>
              <div class="text-center mb-4 mt-4">
                Belum memiliki akun?
                <router-link
                  to="/Registrasi"
                  active-class="active"
                  exact
                  tag="button"
                  class="register-akun"
                >
                  <div>Daftar disini</div>
                </router-link>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import ipBackEnd from "../config";
import GoogleLogin from "../components/googleAuth";
// @ is an alias to /src

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      let vm = this;
      console.log(vm.username);
      console.log(vm.password);
      axios
        .post(ipBackEnd + "users/login", {
          username: vm.username,
          password: vm.password,
        })
        .then(function (response) {
          console.log(response);
          localStorage.setItem("token", response.data[0].token);
          localStorage.setItem("id", response.data[1].id);
          localStorage.setItem("role", response.data[2].role);
          vm.$router.push({ path: "/dashboardMitra" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {
    GoogleLogin,
  },
};
</script>

<style scoped>
.body {
  height: 100vh;
  background: turquoise !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.row {
  /* background: red  !important; */
  height: 80%;
  width: 100%;
}
.form-box {
  overflow: hidden;
  border: 0 !important;
  border-radius: 6px;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.boximages {
  justify-content: space-around;
  padding: 0px;
  margin: 0px;
  background-size: cover;
  background-color: teal;
}
.boxlogin {
  justify-self: center;
}
.login-btn {
  width: 50%;
  height: 45px;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: turquoise;
  border: 1px solid #00000020;
  border-radius: 6px;
  outline: none;
  letter-spacing: 1px;
}
.images {
  width: 80%;
  min-height: max-content;
  background-size: cover;
  /* background: url ("https://picsum.photos/600/600/?image=20") center ; */
}
.card-body {
  padding: 2rem;
  max-width: 100%;
}
.c-title {
  margin-bottom: 2rem;
  font-weight: bolder;
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
  border-radius: 6px;
  outline: none;
  background: turquoise;
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
.box .button {
  align-items: center;
}

#b-button {
  margin-top: 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 90%;
  font-weight: bold;
  letter-spacing: 0.1rem;
  transition: 0.5s;
  padding: 6px 26px;
}
.register-akun {
  border: none;
  outline: none;
  background-color: transparent;
}
.register-akun,
.forget-akun {
  color: teal;
  font-weight: bold;
}
.register-akun:hover,
.forget-akun:hover {
  color: black;
  font-weight: bold;
}
</style>
