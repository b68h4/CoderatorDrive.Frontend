import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    searchData: null,
    about: false,
    roots: {
      main: "FOLDERID",
      featured: "FOLDERID",
    },
    baseUrl: "",
    menu: [
      {
        title: "Ana Sayfa",
        icon: "mdi-home",
        link: "/",
        target: "_self",
      },
      {
        title: "Coderator",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/coderator",
        target: "_blank",
      },
      {
        title: "Coderator | Topluluk",
        icon: "fa-brands fa-telegram",
        link: "https://t.me/coderatorchat",
        target: "_blank",
      },
    ],
  },
  mutations: {
    drawerUpdate(state, val) {
      state.drawer = val;
    },
    search(state, val) {
      state.searchData = val;
    },
    aboutUpdate(state, val) {
      state.about = val;
    },
    rootsUpdate(state, val) {
      state.roots = val;
    },
  },
  actions: {
    fetchRoots(con) {
      fetch(`${this.baseUrl}/System/Roots`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.main);
          con.commit("rootsUpdate", data);
        });
    },
  },
  modules: {},
});
