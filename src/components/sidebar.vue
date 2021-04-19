<template>
  <b-container fluid class="body">
    <b-row>
      <b-col class="title">
        sidebar
        <b-row class="menuitems">
          <router-link
            to="/profile"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">Profile</div>
          </router-link>
          <router-link
            to="/pelatihan"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">Pelatihan</div>
          </router-link>
          <router-link
            to="/riwayat"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">Riwayat</div>
          </router-link>
          <router-link
            to="/login"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">Keluar</div>
          </router-link>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<style scoped>
.body {
  background: teal;
  height: 100vh;
  width: 100%;
}

.title {
  color: white;
  margin-top: 10px;
  font-size: 24px;
  text-align: center;
}
.menuitems {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.menuitems > * {
  margin-top: 50px;
}
.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: transparent;
}
.side-btn :focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: teal;
  font-weight: 500;
}
.side-btn.active::before {
  position: absolute;
  content: '';
  top: -30px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: white;
}
.side-btn.active::after {
  position: absolute;
  content: '';
  bottom: -30px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: white;
}
.side-btn.active .link-container::before {
  position: absolute;
  top: -60px;
  right: 0;
  content:'';
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
}
.side-btn.active .link-container::after {
  position: absolute;
  bottom: -60px;
  right: 0;
  content:'';
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
  z-index: 99;
}
</style>
