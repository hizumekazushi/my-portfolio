<script setup>
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import { ref } from "vue";
import Sidebar from "primevue/sidebar";

const sidebarVisible = ref(false);
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-5">
    <div class="header-inner">
      <div class="grid justify-content-center">
        <div class="col-12 md:col-10 lg:col-8">
          <Toolbar class="p-0 border-none bg-transparent">
            <template #start>
              <RouterLink to="/" class="text-xl font-bold">
                My Portfolio
              </RouterLink>
            </template>

            <template #end>
              <div class="hidden md:flex align-items-center gap-4">
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/projects">Projects</RouterLink>
                <RouterLink to="/hobbies">Hobbies</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
                <a
                  href="https://twitter.com/your_account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button icon="pi pi-twitter" text plain rounded />
                </a>
                <a
                  href="https://github.com/your_account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button icon="pi pi-github" text plain rounded />
                </a>
              </div>
              <div class="md:hidden">
                <Button
                  icon="pi pi-bars"
                  @click="sidebarVisible = true"
                  text
                  plain
                />
              </div>
            </template>
          </Toolbar>
        </div>
      </div>
    </div>
  </header>

  <Sidebar v-model:visible="sidebarVisible" position="right">
    <div class="flex flex-column gap-4 p-4">
      <RouterLink to="/about" @click="sidebarVisible = false">About</RouterLink>
      <RouterLink to="/projects" @click="sidebarVisible = false"
        >Projects</RouterLink
      >
      <RouterLink to="/hobbies" @click="sidebarVisible = false"
        >Hobbies</RouterLink
      >
      <RouterLink to="/contact" @click="sidebarVisible = false"
        >Contact</RouterLink
      >
      <div class="flex gap-3 mt-4">
        <a
          href="https://twitter.com/program_mochi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon="pi pi-twitter" />
        </a>
        <a
          href="https://github.com/hizumekazushi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon="pi pi-github" severity="secondary" />
        </a>
      </div>
    </div>
  </Sidebar>
</template>

<style scoped>
.header-inner {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
}
</style>
