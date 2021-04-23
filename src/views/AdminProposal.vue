<template>
  <div class="content">
    <b-card-group deck class="boxinfo">
      <router-link
        to="/AdminProposalMitra"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-card
          overlay
          img-alt="Card Image"
          text-variant="white"
          class="infocard"
          ><b-card-text> PROPOSAL MITRA </b-card-text>
        </b-card>
      </router-link>
      <router-link
        to="/AdminProposalPelatihan"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-card
          overlay
          img-alt="Card Image"
          text-variant="white"
          class="infocard"
          ><b-card-text> PROPOSAL PELATIHAN </b-card-text>
        </b-card>
      </router-link>
      <router-link
        to="/AdminProposalSertifikasi"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-card
          overlay
          img-alt="Card Image"
          text-variant="white"
          class="infocard"
          ><b-card-text> PROPOSAL SERTIFIKASI </b-card-text>
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
  font-size: 50px;
  background: transparent;
  font-weight: 500;
  margin-top: 50px;
  height: fit-content;
}
.boxinfo {
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}
.infocard {
  border-radius: 45%;
  box-shadow: 1px 1px;
}
.side-btn {
  height: 200px;
  width: 27%;
  border: none;
  background: black;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: inset 0px 1px 0px 0px #bbdaf7;
  background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
  background-color: #79bbff;
  border-radius: 6px;
}
</style>
