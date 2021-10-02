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
      <InFeedAdsense
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
        data-ad-client="ca-pub-4894867893560937"
        data-ad-slot="5459975273"
        data-full-width-responsive="yes"
      >
      </Adsense>
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
    };
  },
  computed: {
    ...mapState(["baseUrl"]),
  },
  mounted() {
    this.$router.beforeEach(() => {
      this.plyr.stop();
      this.plyr.media.src = "";
    });

    if (this.plyr == null) {
      this.plyr = new Plyr(document.getElementById("plyr"));
    }

    this.plyr.media.src = `${this.baseUrl}/System/Player?data=${this.$route.query.file}`;
  },
};
</script>
