import Vue from "vue";
import VueRouter from "vue-router";
import Reader from "../components/Reader.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/reader",
    name: "PDF Reader",
    component: Reader,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
