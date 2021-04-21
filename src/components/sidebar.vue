<template>
  <b-container fluid class="body">
    <b-row class="sidebar-wrapper">
      <b-col class="title">
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
        
        <b-row class="menuitems">
          <p class="dashboard font-weight-bold px-3 pb-4 mb-0">Dashboard</p>
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
      </b-col>
    </b-row>
  </b-container>
</template>
<style scoped>
.body {
  /* background: #599fd9;
  background-image: linear-gradient(
    135.9deg,
    rgba(109, 25, 252, 1) 16.4%,
    rgba(125, 31, 165, 1) 56.1%
  ); */
  min-height: 100vh;
  overflow-x: hidden;
}
.sidebar-wrapper {
  background: rgba(192, 192, 192, 0.2);
  min-height: 100vh;
  width: 17rem;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}
.sideavatar {
  margin-bottom: 1rem;
  background-size: cover;
  display: flex;
  flex-direction: row;
  padding-left: 15px;
}
.sideavatar .title {
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.dashboard {
  text-transform: uppercase;
  background: rgba(192, 192, 192, 0.4);
  text-align: center;
  padding-top: 20px;
  width: 100%;
}
.menuitems {
  border: none;
  color: #aaa;
  align-items: flex-start;
}
  .side-btn {
    display: flex;
    justify-content: flex-start;
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 18px;
    color: grey;
    background-color: transparent;
    width:100%;
    margin-left: 20px;
  }
.side-btn :focus{
  outline: none;
}
.side-btn:hover{
  background:rgba(192, 192, 192, 0.4);
}
.side-btn.active {
  position:relative;
  outline: none;
  background-color: rgba(192, 192, 192, 0.4);
  font-weight:500;
}
.b-icon{
  margin-right: 30px;
}


</style>
