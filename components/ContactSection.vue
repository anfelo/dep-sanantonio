<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~~/stores/app";
import { useApi } from "~~/composables/useApi";

const appStore = useAppStore();
const { visitedSections } = storeToRefs(appStore);
const { addVisitedSection } = appStore;

const { sendEmail } = useApi();

let contactForm = {
  email: "",
  name: "",
  message: "",
};
let emailInvalid = ref(false);
let nameInvalid = ref(false);
let messageInvalid = ref(false);

const isValidForm = (): boolean => {
  let isValid = true;
  if (!contactForm.email.trim()) {
    emailInvalid.value = true;
    isValid = false;
  }

  if (!contactForm.name.trim()) {
    nameInvalid.value = true;
    isValid = false;
  }

  if (!contactForm.message.trim()) {
    messageInvalid.value = true;
    isValid = false;
  }

  return isValid;
};

const handleSendEmail = async () => {
  if (isValidForm()) {
    await sendEmail({ ...contactForm });
    resetForm();
  }
};

const resetForm = () => {
  nameInvalid.value = false;
  emailInvalid.value = false;
  messageInvalid.value = false;

  contactForm = {
    email: "",
    name: "",
    message: "",
  };
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
              <label for="empresa" :class="{ invalid: nameInvalid }"
                >Empresa</label
              >
              <input
                type="text"
                id="empresa"
                name="user_empresa"
                :class="{ invalid: nameInvalid }"
                @input="
                  (e: any) => handleContactFormChange('name', e.target.value)
                "
              />
              <label for="email" :class="{ invalid: emailInvalid }"
                >Correo</label
              >
              <input
                type="email"
                id="email"
                name="user_email"
                :class="{ invalid: emailInvalid }"
                @input="
                  (e: any) => handleContactFormChange('email', e.target.value)
                "
              />
              <label for="asunto" :class="{ invalid: messageInvalid }"
                >Asunto</label
              >
              <textarea
                id="asunto"
                name="user_asunto"
                :class="{ invalid: messageInvalid }"
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
