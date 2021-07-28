<template>
  <v-dialog v-model="about" persistent max-width="700">
    <v-card>
      <v-toolbar> Hakkında </v-toolbar>
      <div class="pa-12 text-center">
        <p>Kullanılan Teknolojiler:</p>

        <v-icon
          color="green"
          class="click-cursor"
          size="28px"
          title="Vue.js"
          @click="toLink('https://vuejs.org')"
        >
          mdi-vuejs</v-icon
        >
        <v-icon
          color="green"
          class="click-cursor"
          title="Vuetify.js"
          size="28px"
          @click="toLink('https://vuetifyjs.com')"
          >mdi-vuetify</v-icon
        >
        <v-icon
          color="purple"
          class="click-cursor"
          title=".NET / C#"
          size="28px"
          @click="toLink('https://dotnet.microsoft.com/')"
          >mdi-dot-net</v-icon
        >
      </div>
      <div class="pa-4 text-center">
        <p>Geliştirici:</p>
        <a href="https://t.me/bsggr78" target="_blank">@bsggr78</a>
      </div>
      <div class="pa-4 text-center">
        <a href="https://t.me/coderator" target="_blank">Coderator</a>
        <span> Adına Geliştirilmiştir.</span>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="about = false"> TAMAM </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "About",
  computed: {
    about: {
      get() {
        return this.$store.state.about;
      },
      set(val) {
        this.$store.commit("aboutUpdate", val);
      },
    },
  },
  methods: {
    toLink: function(link) {
      window.open(link, "newtab");
    },
  },
};
</script>
