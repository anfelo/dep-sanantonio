import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["@/assets/css/normalize.css", "@/assets/css/main.css"],
  publicRuntimeConfig: {
    gomailerApiKey: process.env.GOMAILER_API_KEY,
    gomailerBaseURL: process.env.GOMAILER_BASE_URL,
  },
  buildModules: ["@pinia/nuxt"],
});
