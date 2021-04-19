<template>
<b-container fluid class="dashboard">
<sidebar/>
<div class="content">
  <router-view/>
</div>
</b-container>
  

</template>

<script>

import sidebar from "../components/sidebar";
export default {
  name: 'Dashboard',


  components:{
    sidebar
  }
  
}
</script>
<style scoped>
.dashboard{
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: teal;
  height: 100vh;
  width: 100%;
}

.content{
  background-color: white;
  border-radius: 15px;
  margin: 6px 6px 6px 0px;
}

</style>
