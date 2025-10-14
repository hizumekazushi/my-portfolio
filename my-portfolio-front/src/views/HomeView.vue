<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
import { computed } from "vue";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const featuredProjects = computed(() => {
  return projects.value.slice(0, 3);
});

const goToProjects = () => {
  router.push("/projects");
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
            @click="goToProjects"
          />
        </div>
      </div>
    </div>

    <div class="link-cards-section">
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3" data-aos="fade-up">
          <RouterLink to="/projects" class="card-link">
            <Card class="link-card">
              <template #title>Projects</template>
              <template #content
                ><p>これまでの制作物をまとめています。</p></template
              >
            </Card>
          </RouterLink>
        </div>

        <div
          class="col-12 md:col-6 lg:col-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <RouterLink to="/about" class="card-link">
            <Card class="link-card">
              <template #title>About Me</template>
              <template #content
                ><p>私の経歴やスキルを紹介しています。</p></template
              >
            </Card>
          </RouterLink>
        </div>

        <div
          class="col-12 md:col-6 lg:col-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <RouterLink to="/hobbies" class="card-link">
            <Card class="link-card">
              <template #title>Hobbies</template>
              <template #content
                ><p>私の趣味や好きなことを紹介しています。</p></template
              >
            </Card>
          </RouterLink>
        </div>

        <div
          class="col-12 md:col-6 lg:col-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <RouterLink to="/contact" class="card-link">
            <Card class="link-card">
              <template #title>Contact</template>
              <template #content
                ><p>お仕事の依頼などはこちらからお願いします。</p></template
              >
            </Card>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="featured-projects-section">
      <h2 class="section-title" data-aos="fade-up">Featured Projects</h2>
      <div class="grid justify-content-center gap-4">
        <ProjectCard
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          :project="project"
          data-aos="fade-up"
          :data-aos-delay="100 * index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
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
  padding: 1rem;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}
.hero-subtitle {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
}

/* Link Cards Section */
.link-cards-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
}
.card-link {
  text-decoration: none;
}
.link-card {
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #e5e7eb;
}
.link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

/* Featured Projects Section */
.featured-projects-section {
  padding: 4rem 1rem;
  background-color: #fafafa;
}
.section-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4.5rem;
  }
  .hero-subtitle {
    font-size: 1.5rem;
  }
  .link-cards-section {
    padding: 6rem 2rem;
  }
  .featured-projects-section {
    padding: 6rem 2rem;
  }
  .section-title {
    font-size: 2.5rem;
  }
}
</style>
