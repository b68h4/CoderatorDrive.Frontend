import Vue from "vue";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";

import Ads from "vue-google-adsense";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import VueGtag from "vue-gtag";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(require("vue-script2"));
Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);
Vue.use(Ads.AutoAdsense, {
  adClient: "ca-pub-4894867893560937",
  isNewAdsCode: false,
});
Sentry.init({
  Vue,
  dsn:
    "SENTRYDSN",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: [
        "localhost",
        "127.0.0.1",
        "alloweddomain2.com",
        "alloweddomain.com",
        /^\//,
      ],
    }),
  ],
  tracesSampleRate: 1.0,
});
Vue.use(
  VueGtag,
  {
    config: { id: "G-WP7N9TN6JV" },
    appName: "Depo v3",
    pageTrackerScreenviewEnabled: true,
  },
  router
);
new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
