<template>
  <v-dialog v-model="popup" persistent max-width="700">
    <v-card>
      <v-card-title class="justify-center">Telegram Kanallarımız</v-card-title>
      <v-container>
        <v-row>
          <v-col md="6">
            <v-spacer></v-spacer>
            <v-card align="center" elevation="3" width="600" height="200">
              <div style="padding-top:30px;">
                <v-icon elevation="2" size="72">mdi-telegram</v-icon>
                <v-card-subtitle>
                  <h2>Coderator</h2>
                </v-card-subtitle>
                <v-btn href="https://t.me/coderator" target="_blank"
                  >Katıl</v-btn
                >
              </div>
            </v-card>
          </v-col>
          <v-col md="6">
            <v-spacer></v-spacer>
            <v-card align="center" elevation="3" width="600" height="200">
              <div style="padding-top:30px;">
                <v-icon elevation="2" size="72">mdi-telegram</v-icon>
                <v-card-subtitle>
                  <h2>Coderator | Topluluk</h2>
                </v-card-subtitle>
                <v-btn href="https://t.me/coderatorchat" target="_blank"
                  >Katıl</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions>
        <v-checkbox v-model="donotshow" label="Bir Daha Gösterme"> </v-checkbox>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="ok"> Tamam! </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "TgPopup",
  data() {
    return {
      popup: true,
      donotshow: false,
    };
  },
  methods: {
    ok: function() {
      if (this.donotshow) {
        localStorage.donotshow = true;
      }
      this.popup = false;
    },
  },
  mounted() {
    console.log(localStorage.donotshow);
    if (localStorage.donotshow == "true") {
      this.popup = false;
    }
  },
};
</script>
