import Vue from "vue";
import VueRouter from "vue-router";
import Reader from "../pages/Reader.vue";
import Player from "../pages/Player.vue";
import Main from "../pages/Main.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Depo", component: Main },
  { path: "/Player", name: "Player", component: Player },
  {
    path: "/reader",
    name: "PDF Reader",
    component: Reader,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
