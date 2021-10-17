<template>
  <v-container fluid>
    <div align="center">
      <InFeedAdsense
        data-ad-format="fluid"
        data-ad-layout-key="-bc+c9-4n-fp+1a1"
        data-ad-client="ca-pub-4894867893560937"
        data-ad-slot="7858991996"
        data-full-width-responsive="yes"
      >
      </InFeedAdsense>
    </div>
    <iframe class="reader" v-bind:src="url"></iframe>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Reader",
  data() {
    return {
      url: null,
    };
  },
  computed: {
    ...mapState(["baseUrl"]),
  },
  components: {},
  mounted() {
    let id = this.$route.query.file;
    this.url = `/pdfjs/web/viewer.html?file=${id}`;
  },
  methods: {
    download: function() {
      document.location.href = `${this.baseUrl}/System/Reader?data=${this.$route.query.file}`;
    },
  },
};
</script>
<style>
.reader {
  height: 60rem;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
}
</style>
