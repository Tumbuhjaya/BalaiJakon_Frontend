<template>
  <div id="apps">
    <div class="navbar" :class="{ 'hidden-navbar': !showNavbar }">
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
            <H6 class="headtext RI"> Republik Indonesia</H6></b-col
          >
          <b-col cols="1"></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import OFFSET from "../assets/OFFSET";
export default {
  name: "header",
  data() {
    return {
      showNavbar: true,
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
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>

<style scoped>
#apps {
  width: 100vw;
  height: 4rem;
  background: hsl(200, 50%, 90%);
}

.navbar {
  height: 60px;
  width: 100vw;
  background: hsl(200, 50%, 50%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.navbar.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.logo {
  margin-right: 0px;
  justify-content: center;
  max-width: 60px;
}
.img {
  max-width: 3rem;
  height: auto;
}
.headtextbox {
  padding-top: 2px;
  margin: 0px;
  justify-content: center;
}
.headtext {
  color: black;
  text-align: start;
  font-size: 15px;
  line-height: 9px;
  letter-spacing: 1px;
}
.headtext .PU {
  font-weight: bolder;
}

@media (max-width: 900px) {
  .message {
    font-size: 7vw;
  }

  .arrow {
    width: 10vw;
    height: 10vw;
  }
}

@media (max-width: 600px) {
  .message {
    width: 90vw;
    font-size: 10vw;
  }

  .arrow {
    width: 15vw;
    height: 15vw;
  }
}
</style>
