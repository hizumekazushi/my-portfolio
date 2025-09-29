// src/components/ProjectCard.vue

<script setup>
import Card from "primevue/card";
import Tag from "primevue/tag";
import Button from "primevue/button";

// definePropsで受け取るデータの型を定義
defineProps({
  image: String,
  title: String,
  description: String,
  tags: Array,
});
</script>

<template>
  <Card class="project-card">
    <template #header>
      <img alt="project image" :src="image" class="project-image" />
    </template>
    <template #title>{{ title }}</template>
    <template #subtitle>{{ description }}</template>
    <template #content>
      <div class="tags-container">
        <Tag
          v-for="tag in tags"
          :key="tag"
          :value="tag.name"
          :severity="tag.severity"
        ></Tag>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button label="Live Demo" class="w-full" />
        <Button label="Code" severity="secondary" outlined class="w-full" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
/* styleの変更はなし */
.project-card {
  width: 350px;
  overflow: hidden;
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
