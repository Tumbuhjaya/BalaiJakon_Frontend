<template>
  <header class="content">
  <b-container fluid>
  <b-row class="justify-content-md-start">
    <b-col cols="1" class="logo">
      <img class="img" src="../assets/logoPU.png" alt="logo PU" />
    </b-col>
    <b-col cols="10" class="headtextbox">
      <H5 class="headtext PU">DIREKTORAT JENDERAL BINA KONSTRUKSI</H5>
      <H6 class="headtext kemen">
        Kementrian Pekerjaan Umum dan Perumahan Rakyat</H6
      >
      <H6 class="headtext RI"> Republik Indonesia</H6></b-col>
    <b-col cols="1">3 of 3</b-col>
  </b-row>
</b-container>
  </header>
</template>

<script>
export default {
  name: "header",
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: row;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 500;
  font-size: 20px;
  height: 100%;
  width: 100%;
  background:rgba(192, 192, 192, 0.1);
  margin: " 0px 0px 0px 0px";
}
.logo {
  margin-right: 0px;
}
.img {
  max-width: 4.5rem;
  height: auto;
}
.headtext {
  color:black;
  text-align: start;
  font-size:15px;
}
.headtext .PU {
  font-weight: bolder;
}
</style>
