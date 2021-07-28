<template>
  <v-main>
    <div style="height: 30rem;" id="pdf"></div>
  </v-main>
</template>

<script>
import PDFObject from "pdfobject";
export default {
  name: "Reader",
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.pdfInit();
  },
  methods: {
    pdfInit() {
      PDFObject.embed("allah.pdf", "#pdf");
    },
  },
};
</script>
