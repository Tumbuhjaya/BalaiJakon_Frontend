<template>
  <div class="content">
    <b-card-group deck class="boxinfo">
      <router-link
        to="/FormProposal"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-avatar size="5rem" class="total"></b-avatar>
        <div>PENGAJUAN PROPOSAL PELATIHAN</div> 
      </router-link>
      <router-link
        to="/ListProposal"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-avatar size="5rem" class="total">{{ countPelatihan }}</b-avatar>
        <div>LIST PROPOSAL PELATIHAN</div>
      </router-link>
    </b-card-group>
    <b-card-group deck class="boxinfo">
      <router-link
        to="/FormProposal2"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-avatar size="5rem" class="total">{{ countSertifikasi }}</b-avatar>
        <div>PENGAJUAN PROPOSAL SERTIFIKASI</div>
      </router-link>
      <router-link
        to="/ListProposal2"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <b-avatar size="5rem" class="total">{{ countSertifikasi2 }}</b-avatar>
        <div>LIST PROPOSAL PELATIHAN</div>
      </router-link>
    </b-card-group>
  </div>
</template>
<script>
import axios from "axios";
import ipBackEnd from "../config";
export default {
  name:"overProp",
  data() {
    return {
      countPelatihan: 0,
      countPelatihan2: 0,
      countSertifikasi: 0,
      countSertifikasi2: 0,
    };
  },
  created() {
    this.getcount();
  },
  methods: {
    getcount() {
      let vm = this;
      let idm = localStorage.getItem("id");
      axios
        .get(ipBackEnd + `masterPelatihan/listByUserId/${idm}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then(function (response) {
          let data = response.data;
          for (let i = 0; i < data.length; i++) {
            if (data[i].status == 0 || data[i].status == 1) {
              vm.countPelatihan++;
            }
            // else if (data[i].status == 2 || data[i].status == 3){
            //   vm.countPelatihan2 ++
            // }
          }
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  font-size: 50px;
  background: transparent;
  font-weight: 500;
  margin-top: 50px;
  height: fit-content;
}
.boxinfo {
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  padding-left: 20px;
  padding-right: 20px;
}
.infocard {
  border-radius: 45%;
  box-shadow: 1px 1px;
}
.total {
  height: 45%;
  margin-bottom: 10px;
}
.side-btn {
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 27%;
  border: none;
  color: white;
  text-transform: uppercase;
  background: black;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  padding: 5%;
  font-size: 18px;
  box-shadow: inset 0px 1px 0px 0px #bbdaf7;
  background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
  background-color: #79bbff;
  border-radius: 6px;
  letter-spacing: 0.7px;
}
</style>
