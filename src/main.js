import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "@/design/main.css";
import Ads from "vue-google-adsense";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;
Vue.use(require("vue-script2"));
Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);
Vue.use(Ads.AutoAdsense, { adClient: "ca-pub-4894867893560937" });
Sentry.init({
  Vue,
  dsn:
    "SENTRYDSN",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: [
        "localhost",
        "127.0.0.1",
        "alloweddomain2.com",
        "alloweddomain.com",
        /^\//,
      ],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
Vue.use(VueGtag, {
  config: { id: "G-WP7N9TN6JV" },
  appName: "Depo v3",
  pageTrackerScreenviewEnabled: true,
});
new Vue({
  vuetify,
  store,
  async beforeCreate() {
    await this.$store.dispatch("fetchRoots");
  },
  render: (h) => h(App),
}).$mount("#app");
