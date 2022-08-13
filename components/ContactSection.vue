<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~~/stores/app";
import { useApi } from "~~/composables/useApi";

const appStore = useAppStore();
const { visitedSections } = storeToRefs(appStore);
const { addVisitedSection } = appStore;

const { sendEmail } = useApi();

const contactForm = {
  from: "",
  fromName: "",
  message: "",
};

const handleSendEmail = async () => {
  await sendEmail({ ...contactForm, subject: "Contacto" });
};

const handleContactFormChange = (prop: string, value: string) => {
  contactForm[prop] = value;
};
</script>

<template>
  <section
    id="contact"
    class="contact"
    :class="{ visited: visitedSections.includes('contact') }"
    @mouseenter="() => addVisitedSection('contact')"
  >
    <div class="contact-content">
      <div class="contact_title header-moves"><h2>CONTACTO</h2></div>
      <div class="contact-content-container">
        <div class="contact-content-wrapper">
          <div class="contact-content_info1">
            <img
              class="contact-logo"
              src="~/assets/img/logo_final.png"
              alt="Logo Deposito San Antonio E Hijos"
            />
            <h4>Deposito San Antonio e hijos S.A.S</h4>
            <span>Carrera 28 # 7-76</span>
            <span>Colombia-Bogotá</span>
            <span>Tel. (57) 315 38 30 711</span>
            <span>(57) 2 77 44 03</span>
          </div>
        </div>
        <div class="contact-content-wrapper">
          <div class="contact-content_info2">
            <form class="contact_form">
              <label for="empresa">Empresa</label>
              <input
                type="text"
                id="empresa"
                name="user_empresa"
                @input="
                  (e: any) => handleContactFormChange('fromName', e.target.value)
                "
              />
              <label for="email">Correo</label>
              <input
                type="email"
                id="email"
                name="user_email"
                @input="
                  (e: any) => handleContactFormChange('from', e.target.value)
                "
              />
              <label for="asunto">Asunto</label>
              <textarea
                id="asunto"
                name="user_asunto"
                @input="
                  (e: any) => handleContactFormChange('message', e.target.value)
                "
              ></textarea>
              <button type="button" @click="handleSendEmail">Enviar</button>
            </form>
          </div>
        </div>
        <div class="contact-content-wrapper">
          <div class="contact-content_info3">
            <h4>Escríbenos por whatsapp</h4>
            <img src="~/assets/img/whatsapp.png" alt="whatsapp logo" />
            <span>Tel. (57) 315 38 30 711</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
