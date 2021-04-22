<template>
  <div id="app">
    <headers />
    <div id="nav">
      <router-view />
    </div>
    <footers />
  </div>
</template>

<script>
import footers from "./components/footer";
import headers from "./components/header";
export default {
  name: "App",
  components: {
    footers,
    headers,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
}
</style>
