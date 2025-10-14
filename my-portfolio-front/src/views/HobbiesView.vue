<script setup>
import { ref } from "vue";

const hobbies = ref([
  {
    title: "Audio",
    image: "https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg",
    description:
      "主にイヤホンとヘッドホンをこだわっています。\n DAPはAstell&KernのSR35を使用し、イヤホンはTanchjimのbunnyを使用しています",
  },
  {
    title: "旅行",
    image: "https://primefaces.org/cdn/primevue/images/galleria/galleria2.jpg",
    description:
      "旅行についての説明文です。これまで訪れた中で印象に残っている場所や、旅先でのエピソード、これから行ってみたい場所などを書きましょう。旅の写真と共に紹介することで、より魅力的なコンテンツになります。",
  },
  {
    title: "音楽鑑賞",
    image: "https://primefaces.org/cdn/primevue/images/galleria/galleria3.jpg",
    description:
      "好きな音楽ジャンルやアーティスト、音楽にまつわる思い出などをここに記述します。お気に入りのアルバムや、ライブに行った経験などを共有するのも良いでしょう。",
  },
]);
</script>

<template>
  <div class="hobbies-container" data-aos="fade-up">
    <div class="page-header">
      <h1 class="page-title">My Hobbies</h1>
      <p class="page-subtitle">私が情熱を注いでいる趣味の一部を紹介します。</p>
    </div>

    <div
      v-for="(hobby, index) in hobbies"
      :key="hobby.title"
      class="hobby-section"
      data-aos="fade-up"
    >
      <div class="grid align-items-center">
        <div
          class="col-12 md:col-6"
          :class="{ 'md:col-order-2': index % 2 !== 0 }"
        >
          <img :src="hobby.image" :alt="hobby.title" class="hobby-image" />
        </div>
        <div class="col-12 md:col-6">
          <div class="hobby-content">
            <h2 class="hobby-title">{{ hobby.title }}</h2>
            <p class="hobby-description">{{ hobby.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hobbies-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 5rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #575757;
}

.hobby-section {
  margin-bottom: 6rem;
}

.hobby-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hobby-content {
  padding: 0 2rem;
}

.hobby-title {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hobby-description {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #3f3f46;
}

/* スマホ用のスタイル */
@media (max-width: 767px) {
  .hobby-content {
    padding: 2rem 0 0 0;
  }
}
</style>
