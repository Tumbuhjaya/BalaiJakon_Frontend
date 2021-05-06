import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouterBackButton from "vue-router-back-button";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueRouterBackButton, { router });

new Vue({
  router,
  store,
  BootstrapVue,
  IconsPlugin,
  VueRouter,
  VueRouterBackButton,

  render: (h) => h(App),
}).$mount("#app");
