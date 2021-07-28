<template>
  <v-app app>
    <v-main v-if="!ads">
      <AppBar></AppBar>
      <Drawer></Drawer>
      <v-container v-show="!player" id="container">
        <div align="center">
          <InFeedAdsense
            v-if="!player"
            data-ad-format="fluid"
            data-ad-layout-key="-fa+3t+b1-cd-c6"
            data-ad-client="ca-pub-4894867893560937"
            data-ad-slot="9393876079"
            data-full-width-responsive="yes"
          >
          </InFeedAdsense>
        </div>
        <v-divider style="margin: 15px"></v-divider>
        <div align="center">
          <Adsense
            v-if="!player"
            data-ad-client="ca-pub-4894867893560937"
            data-ad-slot="6581485251"
            data-full-width-responsive="yes"
          >
          </Adsense>
        </div>
        <h2
          style="margin-top: 3px;"
          v-if="meta != null"
          class="d-flex justify-center mb-6"
        >
          {{ meta.Name }}
        </h2>
        <div
          class="d-flex justify-center mb-6"
          style="flex-wrap: nowrap; padding-top: 32px"
        >
          <v-simple-table
            expand
            class="flex-grow-1 table-width"
            flat
            style="border-radius: 10px"
          >
            <thead>
              <tr>
                <th class="text-left" v-show="items != null">Dosya</th>
                <th class="text-left modtime" v-show="items != null">
                  Değiştirme Zamanı
                </th>
                <th class="text-left" v-show="items != null">Boyut</th>
              </tr>
            </thead>
            <tbody>
              <div
                v-if="items == null"
                style="height: 80px"
                class="text-center"
              >
                <v-progress-circular
                  style="margin-top: 20px"
                  indeterminate
                  color="primary"
                >
                </v-progress-circular>
              </div>

              <tr
                v-ripple
                class="table-row"
                v-else
                style="border-bottom: none"
                v-for="(item, i) in filteredItems"
                :key="i"
              >
                <td
                  v-if="item.MimeType == 'application/vnd.google-apps.folder'"
                  class="table-item"
                  @click="() => open(item)"
                  style="border-bottom: none"
                  onselectstart="return false"
                  onpaste="return false;"
                  onCopy="return false"
                >
                  <v-icon size="28px" color="primary" class="table-icon"
                    >fas fa-folder-blank</v-icon
                  >

                  {{ item.Name }}
                </td>
                <td
                  v-else-if="
                    item.MimeType.includes('video') ||
                      item.MimeType.includes('audio')
                  "
                  class="table-item"
                  @click="() => play(item)"
                  style="border-bottom: none"
                  onselectstart="return false"
                  onpaste="return false;"
                  onCopy="return false"
                >
                  <v-icon size="28px" color="primary" class="table-icon">
                    fas fa-file-video
                  </v-icon>
                  {{ item.Name }}
                </td>
                <td
                  v-else
                  class="table-item"
                  @click="() => download(item)"
                  style="border-bottom: none"
                  onselectstart="return false"
                  onpaste="return false;"
                  onCopy="return false"
                >
                  <v-icon size="28px" color="primary" class="table-icon"
                    >fas fa-file</v-icon
                  >
                  {{ item.Name }}
                </td>
                <td
                  class="table-item modtime"
                  style="border-bottom: none"
                  onselectstart="return false"
                  onpaste="return false;"
                  onCopy="return false"
                >
                  {{ item.ModTime }}
                </td>
                <td
                  v-if="item.Size != ' B'"
                  class="table-item"
                  style="border-bottom: none"
                  onselectstart="return false"
                  onpaste="return false;"
                  onCopy="return false"
                >
                  {{ item.Size }}
                </td>
                <td v-else class="table-item" style="border-bottom: none"></td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>

        <p v-if="items != null" style="text-align: center; margin-top: 6px">
          {{ filteredItems.length }} Öğe Gösteriliyor.
        </p>
      </v-container>
      <v-container id="plyrct" v-show="player">
        <video class="plyr-theme" id="plyr"></video>
        <v-card elevation="2" style="margin-top: 16px" v-if="meta != null">
          <v-card-subtitle>
            <h3>{{ meta.Name }}</h3>
            <h5>{{ meta.ModTime }} Tarihinde Yüklendi</h5>
          </v-card-subtitle>
        </v-card>
        <v-divider style="margin: 15px"></v-divider>
        <div align="center">
          <InFeedAdsense
            v-if="player"
            data-ad-format="fluid"
            data-ad-layout-key="-ak+bq-2w-7v+p8"
            data-ad-client="ca-pub-4894867893560937"
            data-ad-slot="3080583317"
            data-full-width-responsive="yes"
          ></InFeedAdsense>
        </div>
        <v-divider style="margin: 15px"></v-divider>
        <div align="center">
          <Adsense
            v-if="player"
            data-ad-client="ca-pub-4894867893560937"
            data-ad-slot="5459975273"
            data-full-width-responsive="yes"
          >
          </Adsense>
        </div>
      </v-container>
      <About></About>
      <TgPopup></TgPopup>
    </v-main>
    <v-main v-else>
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
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer.vue";
import AppBar from "./components/AppBar.vue";
import About from "./components/About.vue";
import TgPopup from "./components/TgPopup.vue";
import { mapState } from "vuex";

import Plyr from "plyr";

const baseUrl = "";
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
  computed: {
    filteredItems() {
      if (this.$store.state.searchData != null && this.items != null) {
        let find = this.items.filter((item) =>
          item.Name.toLowerCase().includes(
            this.$store.state.searchData.toLowerCase()
          )
        );
        console.log(find);
        return find;
      } else {
        return this.items;
      }
    },
    ...mapState(["roots"]),
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
      this.processUrl();

      window.onpopstate = () => {
        if (this.plyr != null) {
          this.plyr.stop();
          this.plyr.media.src = "";
        }

        this.player = false;

        this.searchData = null;
        this.search = false;
        this.processUrl();
      };
    } else {
      this.$gtag.event("adblock_detected", {
        event_category: "adblock_detected",
        event_label: document.title,
        value: 1,
      });
    }
  },

  methods: {
    open: function(item) {
      history.pushState({}, null, `/?folder=${item.Id}`);
      this.fetchItems(item.Id);
    },
    download: function(item) {
      this.$gtag.event("download_file", {
        event_category: "download_file",
        event_label: item.Name,
        value: "Download",
      });
      fetch(`${baseUrl}/System/CreateToken?id=${item.Id}`)
        .then((resp) => resp.text())
        .then((data) => {
          document.location.href = `${baseUrl}/System/Download?token=${data}`;
        });
    },
    refLink(link) {
      document.referrer = link;
    },
    toLink(link) {
      window.open(link, "newtab");
    },
    play: function(item) {
      this.$gtag.event("play_video", {
        event_category: "play_video",
        event_label: item.Name,
        value: "Play",
      });

      history.pushState({}, null, `/?player=${item.Id}`);
      this.initPlayer(item.Id);
    },
    processUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      const folder = urlParams.get("folder");
      const player = urlParams.get("player");
      if (folder != null) {
        this.fetchItems(folder);
      } else if (player != null) {
        this.initPlayer(player);
      } else {
        this.fetchItems(this.roots.main);
      }
    },
    fill(id) {
      fetch(`${baseUrl}/System/Query?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          document.title = data.Name;
          this.meta = data;
        });
    },
    initPlayer(id) {
      this.player = true;
      this.fill(id);

      if (this.plyr == null) {
        this.plyr = new Plyr(document.getElementById("plyr"));
      }

      this.plyr.media.src = `${baseUrl}/System/Player?data=${id}`;
    },
    fetchItems(id) {
      this.fill(id);
      if (this.items != null) {
        this.items = null;
      }
      fetch(`${baseUrl}/System/List?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.items = data.Items;
        });
    },
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
