<template>
  <div>
    <b-button v-b-toggle.sidebar-variant>Toggle Sidebar</b-button>
    <b-sidebar
      id="sidebar-variant"
      title="Sidebar"
      bg-variant="dark"
      text-variant="light"
      shadow
    >
      <div class="px-3 py-2">
        <b-row class="sideavatar">
          <b-img
            src="https://placekitten.com/300/300"
            width="80"
            heightt="80"
            class="mr-3 rounded-circle img-thumbnail shadow-sm"
          ></b-img>
          <div class="sideavatar title">
            <h4 class="m-0">Budi</h4>
            <p class="font-weight-normal text-muted mb-0">Mitra Jakon</p>
          </div>
        </b-row>
        <p class="dashboard font-weight-bold px-3 pb-4 mb-0">Dashboard</p>
        <b-row class="menuitems">
          <router-link
            to="/profile"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">
              <b-icon icon="person-fill" font-scale="1"></b-icon> Profil
            </div>
          </router-link>
          <router-link
            to="/pelatihan"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">
              <b-icon
                icon="file-earmark"
                aria-hidden="true"
                font-scale="1"
              ></b-icon>
              Pelatihan
            </div>
          </router-link>
          <router-link
            to="/riwayat"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">
              <b-icon
                icon="clipboard-check"
                aria-hidden="true"
                font-scale="1"
              ></b-icon>
              Sertifikasi
            </div>
          </router-link>
          <router-link
            to="/login"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">
              <b-icon icon="power" aria-hidden="true" font-scale="1"></b-icon>
              Keluar
            </div>
          </router-link>
        </b-row>
      </div>
    </b-sidebar>
  </div>
</template>

<style scoped>
.body {
  background: teal;
  height: 100vh;
  width: 100%;
}

.title {
  color: white;
  margin-top: 20px;
  font-size: 24px;
  text-align: center;
}
.sideavatar {
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 10px;
}
.menuitems {
  display: flex;
  flex-direction: column;
}
.menuitems > * {
  margin-top: 40px;
}
.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 18px;
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
/* .side-btn.active::before {
  position: absolute;
  content: "";
  top: -30px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: white;
}
.side-btn.active::after {
  position: absolute;
  content: "";
  bottom: -30px;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: white;
} */
/* .side-btn.active .link-container::before {
  position: absolute;
  top: -60px;
  right: 0;
  content: "";
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
}
.side-btn.active .link-container::after {
  position: absolute;
  bottom: -60px;
  right: 0;
  content: "";
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: teal;
  z-index: 99;
} */
</style>
