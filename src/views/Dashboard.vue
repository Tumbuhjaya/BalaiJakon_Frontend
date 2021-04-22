<template>
  <b-container fluid class="dashboard">
    <sidebar />
    <div class="content">
      <router-view />
    </div>
  </b-container>
</template>

<script>
import sidebar from "../components/sidebar";
export default {
  name: "Dashboard",

  components: {
    sidebar,
  },
};
</script>
<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.content {
  padding: 0;
}
</style>
