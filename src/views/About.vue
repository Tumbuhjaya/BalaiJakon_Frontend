<template>
  <div class="home">
    <b-container class="body">
      <b-row>
        <h5>about</h5>
        <GoogleLogin
          :params="params"
          :renderParams="renderParams"
          :onSuccess="onSuccess"
          :onFailure="onFailure"
        ></GoogleLogin>
      </b-row>
    </b-container>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js"></script>
<script>
// @ is an alias to /src
import GoogleLogin from "vue-google-login";
export default {
  name: "App",
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "xxxxxx",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    },
  },
};
</script>

<style scoped>
.body {
  height: 200px;
  width: 100vw;
  background-color: red;
}
/* .GoogleLogin{
  display: inline-block;
  height: 100px;
  width: 100vw;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
} */
</style>
