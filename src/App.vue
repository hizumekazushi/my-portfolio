<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  background-color: #f4f4f5;
  color: #18181b;
  min-height: 100vh;
}

main {
  /* z-indexを正しく機能させるため */
  position: relative;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
}

a:hover {
  color: #52525b;
}
</style>
