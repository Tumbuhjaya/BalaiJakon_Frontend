<template>
  <div id="apps">
    <div class="header" :class="{ 'hidden-header': !showHeader }">
      <b-container fluid class="box col-lg-12 col-md-12">
        <b-row class="box col-xl-12 col-lg-12">
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
      showHeader: true,
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
      this.showHeader = window.pageYOffset < this.lastScrollPosition;
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
.box {
  display: flex;
  margin: 0px;
  padding: 0px;
}
.header {
  height: 60px;
  width: 100vw;
  background: white;
  position: fixed;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transition: 0.1s all ease-out;
}

.header.hidden-header {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.logo {
  margin-right: 0px;
  justify-content: end;
  /* max-width: 60px; */
}
.img {
  max-width: 3.6rem;
  height: auto;
}
.headtextbox {
  padding-top: 3px;
  margin-top: 3px;
  justify-content: center;
}
.headtext {
  color: black;
  text-align: start;
  font-size: 100%;
  line-height: 11px;
  letter-spacing: 1px;
}
.headtext .PU {
  font-weight: bolder;
}

@media (max-width: 900px) {
}

@media (max-width: 600px) {
}
</style>
