<template>
  <v-app app>
    <v-main v-if="ads">
      <v-container>
        <v-spacer></v-spacer>
        <v-card align="center" class="text-center">
          <div style="padding: 25px;" class="text-center">
            <h1>Tarayıcınızda reklam engelleyicisi tespit edildi!</h1>
            <h4>
              Sitemizin masrafları reklam gelirleri üzerinden sağlanmaktadır.
              Lütfen siteye erişmek için reklam engelleyicinizi kapatın.
            </h4>
            <v-btn
              color="red"
              style="margin-top: 10px;"
              onclick="location.reload()"
              >Reklam Engelleyiciyi Kapattım!</v-btn
            >
          </div>
        </v-card>
      </v-container>
    </v-main>

    <v-main v-else>
      <v-container id="container">
        <AppBar></AppBar>
        <Drawer></Drawer>

        <router-view></router-view>
        <About></About>
        <TgPopup></TgPopup>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer.vue";
import AppBar from "./components/AppBar.vue";
import About from "./components/About.vue";
import TgPopup from "./components/TgPopup.vue";

let app = {
  name: "Depo",
  components: { Drawer, AppBar, About, TgPopup },
  data() {
    return {
      items: null,
      plyr: null,
      meta: null,
      player: false,
      ads: false,
    };
  },
  updated() {
    detectV1((res) => {
      if (res == true) {
        this.ads = true;
      }
    });
    detectV2((res) => {
      if (res == true) {
        this.ads = true;
      }
    });
    if (this.ads) {
      this.$gtag.event("adblock_detected", {
        event_category: "adblock_detected",
        event_label: document.title,
        value: 1,
      });
    }
  },
  mounted() {
    detectV1((res) => {
      if (res == true) {
        this.ads = true;
      }
    });
    detectV2((res) => {
      if (res == true) {
        this.ads = true;
      }
    });
    if (!this.ads) {
      // this.processUrl();
      // window.onpopstate = () => {
      //   if (this.plyr != null) {
      //     this.plyr.stop();
      //     this.plyr.media.src = "";
      //   }
      //   this.player = false;
      //   this.searchData = null;
      //   this.search = false;
      // };
    } else {
      this.$gtag.event("adblock_detected", {
        event_category: "adblock_detected",
        event_label: document.title,
        value: 1,
      });
    }
  },
};
// eslint-disable-next-line no-unused-vars
function detectV1(n) {
  var t = "https://adblockanalytics.com";
  if (window.fetch) {
    var e = new Request(t, { method: "HEAD", mode: "no-cors" });
    fetch(e)
      .then(function(t) {
        404 === t.status ? n(!1) : n("unknown (" + t.status + ")");
      })
      // eslint-disable-next-line no-unused-vars
      .catch(function(t) {
        n(!0);
      });
  } else {
    var c = new XMLHttpRequest();
    c.open("HEAD", t, !1);
    try {
      c.send();
    } catch (t) {
      n(!0);
    }
    404 === c.status ? n(!1) : n("unknown (" + c.status + ")");
  }
}
function detectV2(callback) {
  const url = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  const options = {
    method: "HEAD",
    mode: "no-cors",
  };
  const request = new Request(url, options);
  fetch(request)
    .then((res) => {
      return res;
    })
    // eslint-disable-next-line no-unused-vars
    .then((response) => {
      callback(false);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((e) => {
      callback(true);
    });
}
export default app;
</script>
