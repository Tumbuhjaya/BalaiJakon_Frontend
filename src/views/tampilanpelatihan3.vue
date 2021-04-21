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
        <div class="back">
          <b-icon
            icon="caret-left-fill"
            aria-hidden="true"
            font-scale="3"
            variant="success"
          ></b-icon>
          KEMBALI
        </div>
      </router-link>
    </div>
    <div>
      <b-table hover :items="items"></b-table>
    </div>
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
.abc {
  display: flex;
  justify-content: flex-start;
}
.back {
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
