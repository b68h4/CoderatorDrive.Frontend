<template>
  <div>
    <div align="center">
      <InFeedAdsense
        data-ad-format="fluid"
        data-ad-layout-key="-fa+3t+b1-cd-c6"
        data-ad-client="ca-pub-4894867893560937"
        data-ad-slot="9393876079"
        data-full-width-responsive="yes"
      >
      </InFeedAdsense>
    </div>

    <div align="center" style="margin-top: 3px;">
      <Adsense
        data-ad-client="ca-pub-4894867893560937"
        data-ad-slot="3710287017"
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
          <div v-if="items == null" style="height: 80px" class="text-center">
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
              v-else-if="item.MimeType == 'application/pdf'"
              class="table-item"
              @click="() => reader(item)"
              style="border-bottom: none"
              onselectstart="return false"
              onpaste="return false;"
              onCopy="return false"
            >
              <v-icon size="28px" color="primary" class="table-icon">
                fas fa-file-pdf
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
      {{ filteredItems.length }} öge gösteriliyor.
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "@/design/main.css";

export default {
  name: "Depo",
  data() {
    return {
      items: null,
      plyr: null,
      meta: null,
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
    ...mapState(["roots", "baseUrl"]),
  },
  mounted() {
    this.processUrl();
    // window.onpopstate = () => {
    //   console.log("onpopstate run");

    //   this.processUrl();
    // };
    this.$router.afterEach(() => {
      this.$store.state.searchData = null;
      this.processUrl();
    });
  },

  methods: {
    open: function(item) {
      this.$store.state.searchData = null;
      this.$router.push({
        path: this.$route.path,
        query: { ...this.$route.query, folder: item.Id },
      });

      this.fetchItems(item.Id);
    },
    download: function(item) {
      this.$gtag.event("download_file", {
        event_category: "download_file",
        event_label: item.Name,
        value: "Download",
      });
      fetch(`${this.baseUrl}/System/CreateToken?id=${item.Id}`)
        .then((resp) => resp.text())
        .then((data) => {
          document.location.href = `${this.baseUrl}/System/Download?token=${data}`;
        });
    },
    reader: function(item) {
      this.$gtag.event("read_pdf", {
        event_category: "read_pdf",
        event_label: item.Name,
        value: "PDF",
      });
      this.$router.push({ path: "/Reader", query: { file: item.Id } });
    },
    play: function(item) {
      this.$gtag.event("play_video", {
        event_category: "play_video",
        event_label: item.Name,
        value: "Play",
      });
      //   this.$router.push({
      //     name: "Player",
      //     mode: "normal",
      //     query: { file: item.Id },
      //   });
      document.location.href = `/Player?file=${item.Id}`;
    },
    processUrl() {
      const folder = this.$route.query.folder;

      if (folder != null) {
        this.fetchItems(folder);
      } else {
        this.fetchItems(this.roots.main);
      }
    },
    fill(id) {
      fetch(`${this.baseUrl}/System/Query?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          document.title = data.Name;
          this.meta = data;
        });
    },

    fetchItems(id) {
      this.fill(id);
      if (this.items != null) {
        this.items = null;
      }
      fetch(`${this.baseUrl}/System/List?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.items = data.Items;
        });
    },
  },
};
</script>
