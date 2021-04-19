<template>
  <b-container fluid class="body">
    <b-row>
      <b-col class="title" cols="2">
        sidebar
        <b-row class="menuitems">
          <router-link to="/" active-class="active" tag="button" class="side-btn">
            <div class="link-container">Profile</div>
          </router-link>
          <router-link to="/" active-class="active" tag="button" class="side-btn">
            <div class="link-container">Pelatihan</div>
          </router-link>
          <router-link to="/" active-class="active" tag="button" class="side-btn">
            <div class="link-container">Riwayat</div>
          </router-link>
          <router-link to="/" active-class="active" tag="button" class="side-btn">
            <div class="link-container">Keluar</div>
          </router-link>
        </b-row>
      </b-col>
      <b-col class="content" cols="8">
        INI CONTENT
      </b-col>
      <b-col cols="2" class="profilebar">
        profile
      </b-col>
    </b-row>
  </b-container>
</template>
<style scoped>
.body {
  background:teal;
  height: 100vh;
  width: 100%
}
.profilebar{
  background: chartreuse;
  height:100vh;
}
.content{
  background-color: white;
  border-radius: 15px;
  margin: 6px 6px 6px 0px;
}
.title{
  color: white;
  margin-top: 10px;
  font-size: 24px;
}
.menuitems{
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.menuitems > *{
  margin-top: 50px;
}
.side-btn{
  border:none;
  padding: 16px 0px;
  cursor:pointer;
  font-size: 16px;
  color: white;
}
.side-btn :focus {
  outline:none;
}
.side-btn.active{
  background-color: white;
  color: teal;
  font-weight: bold;

}
</style>