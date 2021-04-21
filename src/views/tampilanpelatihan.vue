<template>
  <div>
    <div class="abc">
      <router-link
        to="/pelatihan"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
      >
        <div class="back">KEMBALI</div>
      </router-link>
    </div>
    <b-col lg="6" class="my-1">
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
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
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
      ></b-table>
    </div>
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
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          no: 1,
          mitra: "Budi",
          jenisPelatihan: "Operator Alat Berat",
          jumlahPeserta: "15",
          status: "70%",
        },
        {
          no: 2,
          mitra: "Budi",
          jenisPelatihan: "Konstruksi",
          jumlahPeserta: "15",
          status: "50%",
        },
        {
          no: 3,
          mitra: "Budi",
          jenisPelatihan: "Pertukangan",
          jumlahPeserta: "15",
          status: "20%",
          _rowVariant: "danger",
        },
        {
          no: 4,
          mitra: "Budi",
          jenisPelatihan: "Operator Alat Berat",
          jumlahPeserta: "15",
          status: "80%",
        },
        {
          no: 5,
          mitra: "Budi",
          jenisPelatihan: "Operator Alat Berat",
          jumlahPeserta: "15",
          status: "90%",
        },
      ],
    };
  },
};
</script>

<style scoped>
.side-btn {
  border: none;
}
.abc {
  display: flex;
  justify-content: flex-start;
  border: none;
}
.back {
  box-shadow: inset 0px 1px 0px 0px #a4e271;
  background: linear-gradient(to bottom, #89c403 5%, #77a809 100%);
  background-color: #89c403;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
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
