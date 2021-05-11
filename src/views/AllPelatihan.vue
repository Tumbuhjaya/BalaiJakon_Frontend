<template>
  <div>
    <div class="topengine">
      <div class="abc">
        <div class="abc">
          <div @click="$router.go(-1)" class="back">KEMBALI</div>
        </div>
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
        <template #cell(nomor)="data">
          {{ data.index + 1 }}
        </template>
        <template #cell(status)="data">
          {{ getStatus(data.value) }}
        </template>
        <template #cell(actions)="{ item }" >
          <b-button
            size="sm"
            variant="secondary"
            class="mr-1"
            @click="details(item.id)"
          >
            Detail
          </b-button>
          <b-button
            size="sm"
            variant="success"
            class="mr-1"
            @click="terima(item.id)"
          >
            Terima
          </b-button>
          <b-button
            size="sm"
            variant="danger"
            class="mr-1"
            @click="revisi(item.id)"
          >
            Revisi
          </b-button>
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
import axios from "axios";
import ipBackEnd from "../config";
import router from "../router";
export default {
  data() {
    return {
      items: [],
      fields: [
        {
          key: "nomor",
          label: "nomor",
          sortable: true,
          class: "text-center",
        },
        {
          key: "namaPelatihan",
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
          key: "status",
          label: "Status",
          sortable: true,
          class: "text-center",
        },
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
  created() {
    this.getPelatihan();
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
      console.log(this.totalRows, "cihuy");
    },
    async getPelatihan() {
      let pels = await axios
        .get(ipBackEnd + `masterPelatihan/listPelatihan23`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .catch(function (error) {
          console.log(error);
        });
      this.items = pels.data;
      this.totalRows = this.items.length;
      console.log(this.items);
    },
    revisi(idp) {
      console.log(idp);
      axios
        .post(
          ipBackEnd + `masterPelatihan/changeStatus/${idp}`,
          {
            status: 1,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then(function (response) {
          console.log(response);
          // if(response.data.message){
          // console.log(vm);
          // vm.notif = response.data.message;
          // }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    terima(idp) {
      console.log(idp);
      axios
        .post(
          ipBackEnd + `masterPelatihan/changeStatus/${idp}`,
          {
            status: 2,
          },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then(function (response) {
          console.log(response);
          // if(response.data.message){
          // console.log(vm);
          // vm.notif = response.data.message;
          // }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    details(idm) {
      router.push({ path: `/details/${idm}` });
    },
    getStatus(value) {
      if (value == 0) return "menunggu Verifikasi";
      else if (value == 1) return "Revisi";
      else if (value == 2) return "Pengajuan Diterima";
      else if (value == 3) return "Pengajuan Disetujui";
    },
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
  // onFiltered(filteredItems) {
  //   // Trigger pagination to update the number of buttons/pages due to filtering
  //   this.totalRows = filteredItems.length
  //   this.currentPage = 1
  // }
  //   }
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
