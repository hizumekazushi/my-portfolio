<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { projects } from "@/data/projects"; // 分離したデータをインポート
import Chip from "primevue/chip";
import Button from "primevue/button";

const route = useRoute();
const projectId = route.params.id;

// URLのIDに一致するプロジェクトをデータから探す
const project = computed(() => {
  return projects.value.find((p) => p.id === projectId);
});
</script>

<template>
  <div v-if="project" class="project-detail-container" data-aos="fade-up">
    <h1 class="project-title">{{ project.title }}</h1>

    <div class="flex flex-wrap gap-2 my-4">
      <Chip
        v-for="tag in project.tags"
        :key="tag.name"
        :label="tag.name"
        :severity="tag.severity"
      />
    </div>

    <img :src="project.image" :alt="project.title" class="project-main-image" />

    <div class="project-content">
      <h2>プロジェクト概要</h2>
      <p>{{ project.description }}</p>

      <h2>工夫した点・課題</h2>
      <p>
        ここに、プロジェクトで工夫した点や、直面した課題、そしてそれをどのように解決したかなどを詳しく記述します。
        技術選定の理由や、実装でこだわった部分などを書くと、あなたのスキルをより深くアピールできます。
      </p>
    </div>

    <div class="flex gap-3 mt-5">
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button label="Live Demo" icon="pi pi-external-link" />
      </a>
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button label="GitHub" icon="pi pi-github" severity="secondary" />
      </a>
    </div>
  </div>
  <div v-else>
    <p>プロジェクトが見つかりません。</p>
  </div>
</template>

<style scoped>
.project-detail-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}
.project-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.project-main-image {
  width: 100%;
  border-radius: 8px;
  margin: 2rem 0;
}
.project-content h2 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}
.project-content p {
  font-size: 1.1rem;
  line-height: 1.8;
}
</style>
