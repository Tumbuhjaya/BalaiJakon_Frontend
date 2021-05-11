<template>
  <div>
    <div class="topengine">
      <div class="abc">
        <div class="abc">
          <div @click="$router.go(-1)" class="back">KEMBALI</div>
        </div>
      </div>
      <div>
        <router-link
          to="/formPeserta"
          active-class="active"
          exact
          tag="button"
          class="side-btn"
        >
          <b-button class="back">TAMBAH PESERTA</b-button>
        </router-link>
      </div>
    </div>
    <b-row class="row px-3">
      <b-card class="form-box col-lg-10 col-xl-9 flex-row mx-auto px-0">
        <b-row no-gutter>
          <!-- <b-col md="6" class="boximages"> </b-col> -->
          <b-col md="" class="boxlogin">
            <b-card-body>
              <b-card-title class="c-title text-center md-4">
                DETAIL PELATIHAN
              </b-card-title>
              <div class="box2 px-3 md-4 mb-4">
                <b-form-group label="Mitra">
                  <b-form-input
                    type="email"
                    placeholder="SMK Pembangunan"
                    required
                    disabled: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Lokasi Pelatihan">
                  <b-form-input
                    type="text"
                    placeholder="Jakarta"
                    required
                    disabled: true
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
                    disabled: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="No Kontak">
                  <b-form-input
                    type="email"
                    placeholder="+62 0810000078 "
                    required
                    disabled: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="box2 px-3 md-4 mb-4">
                <b-form-group label="Jenis Sertifikasi">
                  <b-form-input
                    type="email"
                    placeholder="Operator Alat Berat"
                    required
                    disabled: true
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
              <!-- <div class="box2 px-3 md-4 mb-4">
                <b-form-group label="Kelurahan">
                  <b-form-input
                    type="email"
                    placeholder="Sukorejo"
                    required
                    disabled: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Kecamatan">
                  <b-form-input
                    type="email"
                    placeholder="Gunungpati"
                    required
                    disabled: true
                    class="input"
                  ></b-form-input>
                </b-form-group>
              </div> -->
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
                ></b-table>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </div>
</template>

<script>
// import router from "../router"
export default {
  name: "profil",
  data() {
    return {
      items: [],
      pageId: 0,
      fields: [
        {
          key: "no",
          label: "no",
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
          key: "jenisSertifikasi",
          label: "Program Sertifikasi",
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
  created() {
    this.pageId = this.$route.params.id;
    console.log(this.pageId);
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    //   info(item, index, button) {
    //     this.infoModal.title = `Row index: ${index}`
    //     this.infoModal.content = JSON.stringify(item, null, 2)
    //     this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    //   },
    //   resetInfoModal() {
    //     this.infoModal.title = ''
    //     this.infoModal.content = ''
    //   },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
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
.c-title{
  letter-spacing: 1.5px;
  font-size: 200%;
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
  width: 125%;
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
