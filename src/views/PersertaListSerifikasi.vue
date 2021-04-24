<template>
  <div>
    <div class="topengine">
      <div class="abc">
        <!-- <router-link
          to="/pelatihan"
          active-class="active"
          exact
          tag="button"
          class="side-btn"
        >
          <b-button class="back">KEMBALI</b-button>
        </router-link> -->
      </div>
      <b-col lg="6" class="search my-1">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''"
                >Clear</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </div>

    <div>
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
        @filtered="onFiltered"
      >
        <template #cell(actions)>
          <b-button size="sm" variant="primary" class="mr-1"> Daftar </b-button>
          <!-- <b-button size="sm" variant="secondary" class="mr-1">
            Lihat Detail
          </b-button> -->
        </template></b-table
      >
    </div>
    <div class="box3">
      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>
      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          no: 123,
          mitra: "Joko",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "aria",
        },
        {
          no: 34,
          mitra: "Joko",
          jenisPelatihan: "Konstruksi",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "Indra",
        },
        {
          no: 53,
          mitra: "Joko",
          jenisPelatihan: "Pertukangan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "jono",
          _rowVariant: "danger",
        },
        {
          no: 74,
          mitra: "Joko",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "Rini",
        },
        {
          no: 5,
          mitra: "Joko",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "roni",
        },
        {
          no: 6,
          mitra: "Jono",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "aria",
        },
        {
          no: 7,
          mitra: "Jono",
          jenisPelatihan: "Konstruksi",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "Indra",
        },
        {
          no: 13,
          mitra: "Jono",
          jenisPelatihan: "Pertukangan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "jono",
          _rowVariant: "danger",
        },
        {
          no: 8,
          mitra: "Jono",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "Rini",
        },
        {
          no: 9,
          mitra: "Jono",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "roni",
        },
        {
          no: 10,
          mitra: "Rina",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "aria",
        },
        {
          no: 12,
          mitra: "Rina",
          jenisPelatihan: "Konstruksi",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "Indra",
        },
        {
          no: 17,
          mitra: "Rina",
          jenisPelatihan: "Pertukangan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "jono",
          _rowVariant: "danger",
        },
        {
          no: 20,
          mitra: "Rina",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "Rini",
        },
        {
          no: 35,
          mitra: "Rina",
          jenisPelatihan: "Arsitektur Bangunan",
          jumlahPeserta: "15",
          kategori: "umum",
          pelatih: "roni",
        },
      ],
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
          key: "jenisPelatihan",
          label: "Program pelatihan",
          sortable: true,
          class: "text-center",
        },
        {
          key: "jumlahPeserta",
          label: "jumlahPeserta",
          sortable: true,
          class: "text-center",
        },
        {
          key: "kategori",
          label: "Kategori",
          sortable: true,
          class: "text-center",
        },
        {
          key: "pelatih",
          label: "pelatih",
          sortable: true,
          class: "text-center",
        },
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
        { key: "actions", label: "Actions" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
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
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  // methods: {
  //   info(item, index, button) {
  //     this.infoModal.title = `Row index: ${index}`
  //     this.infoModal.content = JSON.stringify(item, null, 2)
  //     this.$root.$emit('bv::show::modal', this.infoModal.id, button)
  //   },
  //   resetInfoModal() {
  //     this.infoModal.title = ''
  //     this.infoModal.content = ''
  //   },
  //   onFiltered(filteredItems) {
  //     // Trigger pagination to update the number of buttons/pages due to filtering
  //     this.totalRows = filteredItems.length
  //     this.currentPage = 1
  //   }
  // }
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
.box3 {
  display: flex;
  justify-content: space-between;
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
