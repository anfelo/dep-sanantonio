<script setup lang="ts">
import { useApi } from "~~/composables/useApi";

const { sendEmail } = useApi();

let contactForm = {
  email: "",
  name: "",
  message: "",
};
let emailInvalid = ref(false);
let nameInvalid = ref(false);
let messageInvalid = ref(false);

const handleSendEmail = async () => {
  if (isValidForm()) {
    await sendEmail({ ...contactForm });
    resetForm();
    emit("close");
  }
};

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

const handleClose = () => {
  emit("close");
  resetForm();
};

defineProps<{
  isActive: boolean;
  item?: { name: string; img: string; imgAlt: string };
}>();
const emit = defineEmits(["close"]);
</script>

<template>
  <transition name="fade">
    <div v-if="isActive" class="subastas-modal">
      <span class="modal-close" @click="handleClose()"></span>
      <div class="subastas-form-container">
        <form v-if="item" class="subastas-form">
          <div class="subastas-form-img">
            <img :alt="item.imgAlt" :src="`/img/${item.img}`" />
            <span>{{ item.name }}</span>
          </div>
          <label for="nombre" :class="{ invalid: nameInvalid }"
            >Nombre o Empresa</label
          >
          <input
            type="text"
            id="nombre"
            name="user_nombre"
            :class="{ invalid: nameInvalid }"
            @input="
                  (e: any) => handleContactFormChange('name', e.target.value)
                "
          />
          <label for="precio" :class="{ invalid: messageInvalid }"
            >Oferte</label
          >
          <input
            type="text"
            id="precio"
            name="user_precio"
            :class="{ invalid: messageInvalid }"
            @input="
                  (e: any) => handleContactFormChange('message', e.target.value)
                "
          />
          <label for="email" :class="{ invalid: emailInvalid }">Correo</label>
          <input
            type="email"
            id="email"
            name="user_email"
            :class="{ invalid: emailInvalid }"
            @input="
                  (e: any) => handleContactFormChange('email', e.target.value)
                "
          />
          <button type="button" @click="handleSendEmail">Enviar</button>
        </form>
      </div>
      <div class="modal-overlay" @click="handleClose"></div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
