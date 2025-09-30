<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { projects } from "@/data/projects";
</script>

<template>
  <div class="projects-page-container">
    <h1 class="page-title" data-aos="fade-down">Projects</h1>
    <div class="grid justify-content-center gap-4">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        @click="$emit('project-click', $event, project.id)"
        data-aos="fade-up"
        :data-aos-delay="100 * index"
      />
    </div>
  </div>
</template>

<style scoped>
.projects-page-container {
  max-width: 1200px; /* カードを並べるため少し幅を広げる */
  margin: 0 auto;
  padding: 2rem;
}
.page-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
}
</style>
