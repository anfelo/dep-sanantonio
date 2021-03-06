import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/normalize.css", "@/assets/css/main.css"],
  publicRuntimeConfig: {
    sendGridApiKey: process.env.SENDGRID_API_KEY,
  },
});
