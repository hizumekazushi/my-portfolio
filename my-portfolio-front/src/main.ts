// src/main.ts

import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
// ↓↓↓ これが最終的で正しいパスです ↓↓↓
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// app.use(PrimeVue) を以下のように変更
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount("#app");
AOS.init();
