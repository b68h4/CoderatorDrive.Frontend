<template>
  <v-container>
    <iframe class="reader" v-bind:src="url"></iframe>

    <!-- <div class="reader" v-if="support" id="pdf"></div> -->
    <!-- <v-container v-else>
      <v-spacer></v-spacer>
      <v-card align="center" class="text-center">
        <div style="padding: 25px;" class="text-center">
          <h1>Tarayıcınız PDF görüntüleme özelliğini desteklemiyor.</h1>
          <h4>
            Görünüşe göre mobil tarayıcı kullanıyorsunuz. Mobil tarayıcılar
            pdf-viewer özelliğini desteklemez. Bilgisayarınızdan pdfleri
            okuyabilir veya mobil cihazınıza dosyayı indirip 3.parti programlar
            ile okuyabilirsiniz.
          </h4>
          <v-btn color="green" style="margin-top: 10px;" @click="download"
            >Bu PDF'yi İndir</v-btn
          >
        </div>
      </v-card>
    </v-container> -->
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
