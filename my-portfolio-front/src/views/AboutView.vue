<script setup>
import Avatar from "primevue/avatar";
import Chip from "primevue/chip";
import Timeline from "primevue/timeline";
import { ref } from "vue";

const skills = ref({
  frontend: ["Vue.js", "TypeScript", "PrimeVue"],
  backend: ["Node.js", "Go", "Docker"],
  tools: ["Git", "VSCode"],
});

const events = ref([
  { status: "舞鶴高専入学", date: "2023年4月", icon: "pi pi-graduation-cap" },
  {
    status: "HACK U KOSEN優秀賞",
    date: "2024年12月",
    icon: "pi pi-building",
  },
  { status: "DCON参加", date: "2025年9月", icon: "pi pi-star" },
]);
</script>

<template>
  <div class="about-page-container" data-aos="fade-up">
    <div class="flex align-items-center mb-6">
      <Avatar
        image="https://pbs.twimg.com/media/G12xytbb0As7uTN?format=jpg&name=900x900"
        class="mr-5 flex-shrink-0"
        size="xlarge"
        shape="circle"
      />
      <div>
        <h2 class="page-title">About Me</h2>
        <p class="intro-text">
          初めまして、mochiと申します。現在舞鶴工業高等専門学校の電子制御工学科に在籍しています。　　
          主にバックエンド開発をしており、Goを用いたAPIサーバーの構築などを行っています。
        </p>
      </div>
    </div>

    <div class="mb-6" data-aos="fade-up" data-aos-delay="100">
      <h2 class="section-title">Skills</h2>
      <div class="grid text-center">
        <div class="col-12 md:col-4">
          <h3 class="skill-category">Frontend</h3>
          <div class="flex flex-wrap gap-2 justify-content-center">
            <Chip
              v-for="skill in skills.frontend"
              :key="skill"
              :label="skill"
            />
          </div>
        </div>
        <div class="col-12 md:col-4">
          <h3 class="skill-category">Backend</h3>
          <div class="flex flex-wrap gap-2 justify-content-center">
            <Chip v-for="skill in skills.backend" :key="skill" :label="skill" />
          </div>
        </div>
        <div class="col-12 md:col-4">
          <h3 class="skill-category">Tools</h3>
          <div class="flex flex-wrap gap-2 justify-content-center">
            <Chip v-for="skill in skills.tools" :key="skill" :label="skill" />
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-up" data-aos-delay="200">
      <h2 class="section-title">Career</h2>
      <Timeline :value="events" align="alternate">
        <template #marker="slotProps">
          <span
            class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2"
            :style="{ backgroundColor: 'var(--primary-color)' }"
          >
            <i :class="slotProps.item.icon"></i>
          </span>
        </template>
        <template #content="slotProps">
          {{ slotProps.item.status }}
        </template>
        <template #opposite="slotProps">
          <small class="p-text-secondary">{{ slotProps.item.date }}</small>
        </template>
      </Timeline>
    </div>
  </div>
</template>

<style scoped>
/* このページのコンテンツ全体の幅と中央揃えを定義 */
.about-page-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #575757;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
}

.skill-category {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.mb-6 {
  margin-bottom: 6rem;
}
</style>
