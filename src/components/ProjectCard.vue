<script setup>
import Card from "primevue/card";
import Tag from "primevue/tag";

const props = defineProps({
  project: Object,
});
</script>

<template>
  <div class="project-card-link">
    <Card class="project-card glass-effect">
      <template #header>
        <img alt="project image" :src="project.image" class="project-image" />
      </template>
      <template #title>
        {{ project.title }}
      </template>
      <template #subtitle>
        {{ project.description }}
      </template>
      <template #content>
        <div class="tags-container">
          <Tag
            v-for="tag in project.tags"
            :key="tag.name"
            :value="tag.name"
            :severity="tag.severity"
          ></Tag>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.project-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.project-card-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
.project-card {
  width: 350px;
  overflow: hidden;
  height: 100%;
}
.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.tags-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
</style>
