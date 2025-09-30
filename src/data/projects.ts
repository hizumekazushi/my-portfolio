import { ref } from "vue";

export const projects = ref([
  {
    id: "portfolio-site",
    image: "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
    title: "Portfolio Site",
    description: "Vue.js,Primevueで作成した、このサイトです",
    tags: [
      { name: "Vue.js", severity: "success" },
      { name: "Primevue", severity: "info" },
    ],
    githuburi: "https://github.com/hizumekazushi/my-portfolio",
    demoUrl: "https://your-portfolio.netlify.app",
  },
]);
