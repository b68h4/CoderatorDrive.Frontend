import Vue from "vue";
import VueRouter from "vue-router";
import Reader from "../pages/Reader.vue";
import Player from "../pages/Player.vue";
import Main from "../pages/Main.vue";
import Mobile from "../pages/Mobile";
import NotFound from "../components/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Depo", component: Main },
  { path: "/Player", name: "Player", component: Player },
  { path: "/Reader", name: "PDF Reader", component: Reader },
  { path: "/Mobil", name: "Coderator Mobil", component: Mobile },
  { path: "*", name: "Page not found", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
