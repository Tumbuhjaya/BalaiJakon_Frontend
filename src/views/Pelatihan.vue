<template>
  <div class="content">
    <b-card-group deck class="boxinfo">
      <router-link
        to="/tampilan"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-card
          overlay
          img-src="https://placekitten.com/380/200"
          img-alt="Card Image"
          text-variant="white"
          title="Pengajuan Pelatihan"
          sub-title="Subtitle"
          class="infocard"
        >
          <b-card-text> </b-card-text>
        </b-card>
      </router-link>
      <router-link
        to="/tampilan2"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-card
          overlay
          img-src="https://placekitten.com/380/200"
          img-alt="Card Image"
          text-variant="white"
          title="Pelatihan Berjalan"
          sub-title="Subtitle"
          class="infocard"
        >
          <b-card-text> </b-card-text>
        </b-card>
      </router-link>
      <router-link
        to="/tampilan3"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-card
          overlay
          img-src="https://placekitten.com/380/200"
          img-alt="Card Image"
          text-variant="white"
          title="Pelatihan Selesai"
          sub-title="Subtitle"
          class="infocard"
        >
          <b-card-text> </b-card-text>
        </b-card>
      </router-link>
    </b-card-group>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.content {
  width: 100%;
  font-size: 50px;
  background-color: transparent;
  font-weight: 500;
  margin-top: 50px;
  height: fit-content;
}
.boxinfo {
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
}
.infocard {
  border-radius: 45%;
  box-shadow: 1px 1px;
}
.side-btn {
  border: none;
}
</style>
