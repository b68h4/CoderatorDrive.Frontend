import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const baseUrl = "http://localhost:3933";
export default new Vuex.Store({
  state: {
    drawer: false,
    searchData: null,
    about: false,
    roots: [],
    menu: [
      {
        title: "Ana Sayfa",
        icon: "mdi-home",
        link: "/",
        target: "_self",
      },
      {
        title: "Coderator",
        icon: "mdi-telegram",
        link: "https://t.me/coderator",
        target: "_blank",
      },
      {
        title: "Coderator | Topluluk",
        icon: "mdi-telegram",
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
      fetch(`${baseUrl}/System/Roots`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.main);
          con.commit("rootsUpdate", data);
        });
    },
  },
  modules: {},
});
