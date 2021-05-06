<template>
  <b-container fluid class="dashboard">
    <sidebarAdmin v-if="this.role == `admin`"></sidebarAdmin>
    <sidebarMitra v-if="this.role == `mitra`"></sidebarMitra>
    <sidebarPeserta v-if="this.role == `guest`"></sidebarPeserta>
    <div class="content">
      <router-view />
    </div>
  </b-container>
</template>

<script>
import sidebarAdmin from "../components/sidebarAdmin";
import sidebarMitra from "../components/sidebarMitra";
import sidebarPeserta from "../components/sidebarPeserta";
export default {
  name: "Dashboard",
  data() {
    return {
      role: ``,
    };
  },
  components: {
    sidebarAdmin,
    sidebarMitra,
    sidebarPeserta,
  },
  created() {
    this.role = localStorage.getItem("role");
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
