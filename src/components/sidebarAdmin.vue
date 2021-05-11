<template>
  <b-container fluid class="apps">
    <b-row class="sidebar-wrapper" :class="{ 'hidden-Sidebar': !showSidebar }">
      <b-col class="title">
        <b-row class="sideavatar">
          <b-img
            src="https://placekitten.com/300/300"
            width="80"
            heightt="80"
            class="mr-3 rounded-circle img-thumbnail shadow-sm"
          ></b-img>
          <div class="sideavatar title">
            <h4 class="m-0">Lisa</h4>
            <p class="font-weight-normal text-muted mb-0">Admin</p>
          </div>
        </b-row>

        <b-row class="menuitems">
          <p class="dashboard font-weight-bold px-3 pb-4 mb-0">Dashboard</p>
          <p class="separator"></p>
          <router-link
            to="/listMitra"
            active-class="active"
            exact
            tag="button"
            class="side-btn"
          >
            <div class="link-container">
              <b-icon icon="person-fill" font-scale="1"></b-icon> Mitra
            </div>
          </router-link>
          <router-link
            to="/viewPorposal"
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
              Proposal
            </div>
          </router-link>
          <router-link
            to="/listPelatihan"
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
              Pelatihan
            </div>
          </router-link>
          <router-link
            to="/AdminListSertifikasi"
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
    <!-- <b-row>
      <b-col class="content">
      <router-view />
      </b-col>
    </b-row> -->
  </b-container>
</template>

<script>
import OFFSET from "../views/offset";
export default {
  name: "sidebar",
  data() {
    return {
      showSidebar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showSidebar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
<style scoped>
.body {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
/* div.content{
  display: flex;
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  width: 100%;
  margin: 0;
  padding: 0;
} */
/* .content {
  position:absolute;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  background-color: chartreuse;
} */
.sidebar-wrapper {
  background: rgba(192, 192, 192, 0.2);
  height: 100%;
  min-height: 100vh;
  width: 17vw;
  top: 4rem;
  left: 0;
  position: fixed;
  padding: 1px 0 0 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 5px;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
/* .sidebar-wrapper {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
} */
.sidebar-wrapper.hidden-Sidebar {
  background: rgba(192, 192, 192, 0.2);
  min-height: 100vh;
  height: 100%;
  width: 17vw;
  padding: 1px 0 0 16px;
  position: fixed;
  top: 0;
  box-shadow: no3px 3px 10px rgba(0, 0, 0, 0.3);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.sideavatar {
  margin-bottom: 1rem;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.sideavatar .title {
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.dashboard {
  text-transform: uppercase;
  background: rgba(192, 192, 192, 0.4);
  text-align: center;
  padding-top: 20px;
  width: 100%;
}
.separator {
  height: 20px;
  background: white;
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
  padding: 16px 20px;
  cursor: pointer;
  font-size: 18px;
  color: grey;
  background-color: transparent;
  width: 100%;
  letter-spacing: 1.2px;
}
.side-btn :focus {
  outline: none;
}
.side-btn:hover {
  background: rgba(192, 192, 192, 0.4);
}
.side-btn.active {
  position: relative;
  outline: none;
  background-color: rgba(192, 192, 192, 0.4);
  font-weight: 500;
}
.b-icon {
  margin-right: 30px;
}

.sidebar-wrapper .side-btn.active {
  background-color: #555;
  color: white;
}

.sidebar-wrapper .side-btn:hover:not(.active) {
  background-color: rgba(192, 192, 192, 0.4);
  color: white;
}

@media screen and (max-width: 700px) {
  .sidebar-wrapper {
    width: 100%;
    height: auto;
    position: fixed;
  }
  .sidebar-wrapper .side-btn {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar-wrapper .side-btn {
    text-align: center;
    float: none;
  }
}
</style>
