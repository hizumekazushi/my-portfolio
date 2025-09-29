// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue"; // AboutViewをインポート
import ContactView from "../views/ContactView.vue"; // ContactViewをインポート

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView, // /aboutパスにAboutViewを割り当て
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView, // /contactパスにContactViewを割り当て
    },
  ],
});

export default router;
