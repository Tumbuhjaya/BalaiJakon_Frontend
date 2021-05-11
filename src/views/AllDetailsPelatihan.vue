<template>
  <div>
    <div class="topengine">
      <div class="abc">
        <div @click="$router.go(-1)" class="back">KEMBALI</div>
      </div>
    </div>
    <b-row class="row px-3">
      <b-card class="form-box col-lg-10 col-xl-9 flex-row mx-auto px-0">
        <b-row no-gutter>
          <!-- <b-col md="6" class="boximages"> </b-col> -->
          <b-col md="" class="boxlogin">
            <b-card-body>
              <b-card-title class="c-title text-center md-4">
                DETAIL PELATIHAN A
              </b-card-title>
              <div class="box2 px-3 md-4 mb-4">
                <b-form-group label="Mitra">
                  <b-form-input
                    type="email"
                    placeholder="SMK Pembangunan"
                    required
                    disable: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Lokasi Pelatihan">
                  <b-form-input
                    type="text"
                    placeholder="Jakarta"
                    required
                    disable: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="box2 px-3 md-4 mb-4">
                <b-form-group label="Nama Instansi">
                  <b-form-input
                    type="text"
                    placeholder="SMK Pembangunan"
                    required
                    disable: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="No Kontak">
                  <b-form-input
                    type="email"
                    placeholder="+62 0810000078 "
                    required
                    disable: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="box2 px-3 md-4 mb-4">
                <b-form-group label="Jenis Pelatihan">
                  <b-form-input
                    type="email"
                    placeholder="Operator Alat Berat"
                    required
                    disable: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Kategori">
                  <b-form-input
                    type="email"
                    placeholder="Pemula"
                    required
                    disabled: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-form-select v-model="selected" :options="pesertaO" @input="move()"></b-form-select>
                 <div class="mt-3" v-for="(n,i) in item2" :key="i">Selected: <strong>{{ n.username }}</strong></div>
              </div>
              <div class="box2 px-3 md-4 mb-4">
                <b-table
                  hover
                  :items="items"
                  :fields="fields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  :filter="filter"
                  :filter-included-fields="filterOn"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  stacked="md"
                  show-empty
                  small
                  v-if="items.length !== 0"
                >
                  <template #cell(nomor)="data">
                   {{ data.index + 1 }}
                  </template>
                </b-table>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import ipBackEnd from "../config"
import axios from "axios"
export default {
  data() {
    return {
      items: [],
      pesertaO:[],
      selected:"",
      item2:[],
      fields: [
        {
          key: "nomor",
          label: "nomor",
          sortable: true,
          class: "text-center",
        },
        {
          key: "mitra",
          label: "Nama Mitra",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "programPelatihan",
          label: "Program Pelatihan",
          sortable: true,
          class: "text-center",
        },
        {
          key: "namaPeserta",
          label: "Nama Peserta",
          sortable: true,
          class: "text-center",
        },
        {
          key: "kategori",
          label: "Kategori",
          sortable: true,
          class: "text-center",
        },
        // {
        //   key:"pelatih",
        //   label:"pelatih",
        //   sortable:true,
        //   class:"text-center"
        // },
        // {
        //   key: 'isActive',
        //   label: 'Is Active',
        //   formatter: (value, key, item) => {
        //     return value ? 'Yes' : 'No'
        //   },
        //   sortable: true,
        //   sortByFormatted: true,
        //   filterByFormatted: true
        // },
        // { key: "actions", label: "Actions" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 15,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  created(){
  this.getPeserta()
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    async getPeserta(){
      let peser = await axios
        .get(ipBackEnd + `users/listPeserta`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        }).then(response =>{
          console.log(response.data)
          let yy = response.data
          yy.forEach((y) =>{
            this.ubahValue(y)
          })
        })
        .catch(function (error) {
          console.log(error);
        });
      // this.pesertaO = peser.data;
      console.log(peser);
      console.log(this.pesertaO)
    },
    ubahValue(y){
      this.pesertaO.push({value: y, text:y.username})
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
};
</script>

<style scoped>
.topengine {
  display: flex;
  justify-content: space-between;
  letter-spacing: 1px;
}
.side-btn {
  border: none;
}
.abc {
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0%;
}
.box2 {
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  text-align: start;
  letter-spacing: 1px;
}
.box3 {
  display: flex;
  justify-content: space-between;
}
.input {
  width: 50vh;
  height: 50px;
  padding-left: 30px;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: turquoise;
  border: 3px solid #00000020;
  outline: none;
  background: transparent;
}
.back {
  box-shadow: inset 0px 1px 0px 0px #a4e271;
  background: linear-gradient(to bottom, #89c403 5%, #77a809 100%);
  background-color: #89c403;
  border-radius: 6px;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 26px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528009;
  position: relative;
}
.back:hover {
  background: linear-gradient(to bottom, #77a809 5%, #89c403 100%);
  background-color: #77a809;
}
.back:active {
  position: relative;
  top: 1px;
}
</style>
