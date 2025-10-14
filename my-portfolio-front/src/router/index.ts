import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import HobbiesView from "../views/HobbiesView.vue"; // HobbiesViewをインポート
import ProjectDetailView from "../views/ProjectDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    // ↓↓ Hobbiesページ用のルートを追加 ↓↓
    {
      path: "/hobbies",
      name: "hobbies",
      component: HobbiesView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/project/:id",
      name: "project-detail",
      component: ProjectDetailView,
    },
  ],
});

export default router;
