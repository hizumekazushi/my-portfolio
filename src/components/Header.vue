<script setup>
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
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
              <div class="flex align-items-center gap-4">
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/">Projects</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
                <a
                  href="https://x.com/program_mochi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button icon="pi pi-twitter" text plain rounded />
                </a>
                <a
                  href="https://github.com/hizumekazushi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button icon="pi pi-github" text plain rounded />
                </a>
              </div>
            </template>
          </Toolbar>
        </div>
      </div>
    </div>
  </header>
  <div style="height: 70px"></div>
</template>

<style scoped>
.header-inner {
  background: rgba(244, 244, 245, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
}
</style>
