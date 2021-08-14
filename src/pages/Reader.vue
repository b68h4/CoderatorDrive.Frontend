<template>
  <v-container>
    <div class="reader" v-if="support" id="pdf"></div>
    <v-container v-else>
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
    </v-container>
  </v-container>
</template>

<script>
import PDFObject from "pdfobject";
const baseUrl = "http://192.168.1.22:3933";
export default {
  name: "Reader",
  data() {
    return {
      support: true,
    };
  },
  components: {},
  mounted() {
    if (PDFObject.supportsPDFs) {
      let id = this.$route.query.file;
      const url = `${baseUrl}/System/Reader?data=${id}`;

      PDFObject.embed(url, "#pdf");
      //PDFObject.embed("test.pdf", "#pdf");
    } else {
      this.support = false;
    }
  },
  methods: {
    download: function() {
      document.location.href = `${baseUrl}/System/Reader?data=${this.$route.query.file}`;
    },
  },
};
</script>
<style>
.reader {
  height: 70rem;
}
</style>
