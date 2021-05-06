import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Login.vue";
import DashboardMitra from "../views/DashboardMitra.vue";
import DashboardAdmin from "../views/DashboardAdmin.vue";
import DashboardPeserta from "../views/DashboardPeserta.vue";
import Dashboard from "../views/AllDashboard.vue";
import fungsi from "./fungsi";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children:[
      {
        path:"/OverPorposal",
        component:()=>
        import ("../views/AllOverviewProposal.vue")
      },
      {
        path:"/listMitra",
        component:()=>
        import ("../views/AllListMitra.vue")
      },
      {
        path:"/detailPelatihan",
        component:()=>
        import ("../views/AllDetailsPelatihan.vue")
      },
      {
        path:"/profil/:id",
        component:()=>
        import ("../views/AllProfilUser.vue"),
        beforeRouteUpdate(to, from, next){
          if (to.path == "/profil/:id"){
            next({
              path:"/profil"
            })
          }
        }
      },
      {
        path:"/profil",
        componet:() =>
        import("../views/AllProfilUser.vue")
      }
    ]
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
        path: "/listProposal",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraListProposal.vue"
          ),
      },
      {
        path: "/listProposal2",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraListProposal2.vue"
          ),
      },
      {
        path: "/formProposal",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraFormProposal.vue"
          ),
      },
      {
        path: "/formProposal2",
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
        path: "/proposalMitra",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraProposal.vue"
          ),
      },
      {
        path: "/formPeserta",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraFormAddPeserta.vue"
          ),
      },
      {
        path: "/mitraDetailPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraDetailPelatihan.vue"
          ),
      },
      {
        path: "/mitraDetailSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/MitraDetailSertifikasi.vue"
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
        path: "/adminProposalMitra",
        component: () =>
          import(
            /* webpackChunkName: "pelatihan" */ "../views/AdminProposalMitra.vue"
          ),
      },
      {
        path: "/adminProposalPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AllProposalPelatihan.vue"
          ),
      },
      {
        path: "/adminProposalSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminProposalSeritifikasi.vue"
          ),
      },
      {
        path: "/adminProposal",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AllProposalPelatihan.vue"
          ),
      },
      {
        path: "/adminListPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminListPelatihan.vue"
          ),
      },
      {
        path: "/adminListSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminListSertifikasi.vue"
          ),
      },
      {
        path: "/adminDetailSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminDetailSertifikasi.vue"
          ),
      },
      {
        path: "/adminDetailPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/AdminDetailPelatihan.vue"
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
        path: "/profilPeserta",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/PesertaProfil.vue"
          ),
      },
      {
        path: "/pesertaListPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "pelatihan" */ "../views/PersertaListPelatihan.vue"
          ),
      },
      {
        path: "/pelatihanBerjalan",
        component: () =>
          import(
            /* webpackChunkName: "pelatihan" */ "../views/PesertaListPelatihan3.vue"
          ),
      },
      {
        path: "/pelatihanSelesai",
        component: () =>
          import(
            /* webpackChunkName: "pelatihan" */ "../views/PersertaListPelatihan2.vue"
          ),
      },
      {
        path: "/pesertaListSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PersertaListSertifikasi.vue"
          ),
      },
      {
        path: "/sertifikasiBerjalan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PersertaListSertifikasi3.vue"
          ),
      },
      {
        path: "/sertifikasiSelesai",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PesertaListSertifikasi2.vue"
          ),
      },
      {
        path: "/pesertaListLowongan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PesertaListLowongan.vue"
          ),
      },
      {
        path: "/pesertaPelatihan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PesertaPelatihan.vue"
          ),
      },
      {
        path: "/pesertaSertifikasi",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PesertaSerifikasi.vue"
          ),
      },
      {
        path: "/pesertaLowongan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PesertaLowongan.vue"
          ),
      },
      {
        path: "/lowonganBerjalan",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PesertaListLowongan3.vue"
          ),
      },
      {
        path: "/pesertaInterview",
        component: () =>
          import(
            /* webpackChunkName: "riwayat" */ "../views/PesertaListLowongan2.vue"
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
    path: "/sukses",
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

router.beforeEach((to, from, next) => {
  if (to.path == "/sukses") {
    localStorage.setItem("token", to.query.token);
    localStorage.setItem("id", fungsi.getQueryVariable("id"));
    localStorage.setItem("role", fungsi.getQueryVariable("role"));
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("id");
    let role = localStorage.getItem("role");
    console.log(token);
    console.log(id);
    console.log(role);
    next({
      path: "/dashboard",
    });
  } else {
    if (to.matched.some((record) => record.meta.requiredAuth)) {
      if (
        !localStorage.getItem("token") ||
        localStorage.getItem("token") == "undefined" ||
        localStorage.getItem("token") == ""
      ) {
        next({
          path: "/",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    } else {
      next();
    }
  }
});

 


export default router;
