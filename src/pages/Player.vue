<template>
  <v-container id="plyrct">
    <video class="plyr-theme" id="plyr"></video>
    <v-card elevation="2" style="margin-top: 16px" v-if="meta != null">
      <v-card-subtitle>
        <h3>{{ meta.Name }}</h3>
        <h5>{{ meta.ModTime }} Tarihinde Yüklendi</h5>
      </v-card-subtitle>
    </v-card>
    <v-divider style="margin: 15px"></v-divider>
    <div align="center">
      <Adsense
        data-ad-client="ca-pub-4894867893560937"
        data-ad-slot="2208152013"
        data-full-width-responsive="yes"
      >
      </Adsense>
    </div>
    <div align="center" style="margin-top:3px;">
      <InFeedAdsense
        data-ad-format="fluid"
        data-ad-layout-key="-aj+bq-36-7j+pr"
        data-ad-client="ca-pub-4894867893560937"
        data-ad-slot="6100307329"
        data-full-width-responsive="yes"
      ></InFeedAdsense>
    </div>
  </v-container>
</template>
<script>
import Plyr from "plyr";
import "@/design/player.css";
import { mapState } from "vuex";

export default {
  name: "Player",
  data() {
    return {
      plyr: null,
      meta: null,
    };
  },
  computed: {
    ...mapState(["baseUrl"]),
  },
  methods: {
    fill(id) {
      fetch(`${this.baseUrl}/System/Query?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          document.title = data.Name;
          this.meta = data;
        });
    },
  },
  mounted() {
    this.$router.beforeEach(() => {
      this.$store.state.searchData = null;
      this.plyr.stop();
      this.plyr.media.src = "";
    });

    if (this.plyr == null) {
      this.plyr = new Plyr(document.getElementById("plyr"));
    }
    this.fill(this.$route.query.file);
    this.plyr.media.src = `${this.baseUrl}/System/Player?data=${this.$route.query.file}`;
  },
};
</script>
