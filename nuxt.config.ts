import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["@/assets/css/normalize.css", "@/assets/css/main.css"],
  publicRuntimeConfig: {
    gomailerApiKey: process.env.GOMAILER_API_KEY,
    gomailerBaseURL: process.env.GOMAILER_BASE_URL,
    toContactEmail: process.env.TO_CONTACT_EMAIL,
    fromSenderEmail: process.env.FROM_SENDER_EMAIL,
  },
  buildModules: ["@pinia/nuxt"],
});
