import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import Aura from "@primevue/themes/aura"; // ← 1. PrimeVueのテーマをインポート

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  // css: { // ← 2. このcssブロックを追加
  //   postcss: {
  //     plugins: [Aura],
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
