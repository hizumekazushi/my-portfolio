<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import ProjectCard from "@/components/ProjectCard.vue";

const projects = ref([
  {
    image: "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
    title: "私のポートフォリオサイト",
    description: "Vue.jsとPrimeVueで作成したサイトです。",
    tags: [
      { name: "Vue.js", severity: "success" },
      { name: "PrimeVue", severity: "info" },
    ],
  },
  {
    image: "https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg",
    title: "予約管理システム",
    description: "飲食店向けの予約管理アプリ。",
    tags: [
      { name: "TypeScript", severity: "warning" },
      { name: "Node.js", severity: "danger" },
    ],
  },
]);

const scrollToProjects = () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<template>
  <div>
    <div class="hero-container">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <h1 class="hero-title" data-aos="fade-down">
          welcome my portfolio site
        </h1>
        <p class="hero-subtitle" data-aos="fade-down" data-aos-delay="200">
          Server Side Engineer
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <Button
            label="View My Work"
            icon="pi pi-arrow-right"
            iconPos="right"
            size="large"
            @click="scrollToProjects"
          />
        </div>
      </div>
    </div>

    <div id="projects" class="projects-section">
      <div class="grid justify-content-center">
        <div class="col-12 md:col-10 lg:col-8">
          <h2 class="section-title" data-aos="fade-up">Projects</h2>
          <div class="grid justify-content-center gap-4">
            <ProjectCard
              v-for="(project, index) in projects"
              :key="project.title"
              :image="project.image"
              :title="project.title"
              :description="project.description"
              :tags="project.tags"
              data-aos="fade-up"
              :data-aos-delay="100 * index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://pbs.twimg.com/media/GulPdhbWkAApQNg?format=jpg&name=large");
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.hero-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #e0e0e0;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
}

.projects-section {
  padding: 6rem 1rem;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
}
</style>
