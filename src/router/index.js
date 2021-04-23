import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DashboardMitra from "../views/DashboardMitra.vue";
import DashboardAdmin from "../views/DashboardAdmin.vue";
import DashboardPeserta from "../views/DashboardPeserta.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboardMitra",
    component: DashboardMitra,
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Overview.vue"),
      },
      {
        path: "/ProfilMitra",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/MitraProfile.vue"),
      },
      {
        path: "/pelatihan",
        component: () =>
          import(
            /* webpackChunkName: "pelatihan" */ "../views/MitraPelatihan.vue"
          ),
      },
      {
        path: "/addPeserta",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraAddPeserta.vue"
          ),
      },
      {
        path: "/addPeserta2",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraAddPeserta2.vue"
          ),
      },
      {
        path: "/ListProposal",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraListProposal.vue"
          ),
      },
      {
        path: "/ListProposal2",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraListProposal2.vue"
          ),
      },
      {
        path: "/FormProposal",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraFormProposal.vue"
          ),
      },
      {
        path: "/FormProposal2",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraFormProposal2.vue"
          ),
      },
      {
        path: "/pelatihanMitra",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraPelatihan.vue"
          ),
      },
      {
        path: "/sertifikasiMitra",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraSertifikasi.vue"
          ),
      },
      {
        path: "/ProposalMitra",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraProposal.vue"
          ),
      },
      {
        path: "/FormPeserta",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraFormAddPeserta.vue"
          ),
      },
      {
        path: "/MitraDetailPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraDetailPelatihan.vue"
          ),
      },
    ],
  },
  {
    path: "/dashboardAdmin",
    component: DashboardAdmin,
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Overview.vue"),
      },
      {
        path: "/ListMitra",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/AdminListMitra.vue"
          ),
      },
      {
        path: "/AdminproposalMitra",
        component: () =>
          import(
            /* webpackChunkName: "pelatihan" */ "../views/AdminProposalMitra.vue"
          ),
      },
      {
        path: "/AdminProposalPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminProposalPelatihan.vue"
          ),
      },
      {
        path: "/AdminProposalSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminProposalSeritifikasi.vue"
          ),
      },
      {
        path: "/AdminProposal",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminProposal.vue"
          ),
      },
      {
        path: "/AdminListPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminListPelatihan.vue"
          ),
      },
      {
        path: "/AdminListSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminListSertifikasi.vue"
          ),
      },
    ],
  },
  {
    path: "/dashboardPeserta",
    component: DashboardPeserta,
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/Overview.vue"),
      },
      {
        path: "/ProfilPeserta",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/PesertaProfil.vue"),
      },
      {
        path: "/PesertaPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "pelatihan" */ "../views/PersertaListPelatihan.vue"
          ),
      },
      {
        path: "/PesertaSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PersertaListSerifikasi.vue"
          ),
      },
      {
        path: "/ListProposal",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraListProposal.vue"
          ),
      },
      {
        path: "/FormProposal",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraFormProposal.vue"
          ),
      },
      {
        path: "/pelatihanMitra",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraPelatihan.vue"
          ),
      },
      {
        path: "/ProposalMitra",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraProposal.vue"
          ),
      },
      {
        path: "/FormPeserta",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraFormAddPeserta.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
  },
  {
    path: "/registrasi",
    component: () =>
      import(/* webpackChunkName: "riwayat" */ "../views/Registrasi.vue"),
  },
  {
    path: "/listPelatihan",
    component: () =>
      import(/* webpackChunkName: "riwayat" */ "../views/List.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
