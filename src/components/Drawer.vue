<template>
  <v-navigation-drawer id="nav" temporary app v-model="drawer">
    <v-list nav rounded dense>
      <v-list-item
        link
        :key="i"
        v-for="(item, i) in menu"
        color="primary"
        v-bind:href="item.link"
        v-bind:target="item.target"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-list-item @click="about = true" link>
        <v-list-item-icon>
          <v-icon>mdi-information</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Hakkında</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list nav dense rounded>
        <v-list-item>
          <v-checkbox
            class="justify-center"
            style="margin-bottom: 4px;"
            v-model="donotshow"
            @click.stop="msgclck"
            label="Hoşgeldin Mesajını Gösterme"
          ></v-checkbox>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      donotshow: false,
    };
  },
  mounted() {
    if (localStorage.donotshow == "true") {
      this.donotshow = true;
    }
  },
  methods: {
    msgclck: function() {
      localStorage.donotshow = this.donotshow;
    },
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("drawerUpdate", val);
      },
    },
    menu: {
      get() {
        return this.$store.state.menu;
      },
    },
    about: {
      get() {
        return this.$store.state.about;
      },
      set(val) {
        this.$store.commit("aboutUpdate", val);
      },
    },
  },
};
</script>
