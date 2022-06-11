<script setup lang="ts">
defineProps<{
  isActive: boolean;
  item?: { name: string; img: string; imgAlt: string };
}>();
</script>

<template>
  <div class="subastas-modal" :class="{ 'is-active': isActive }">
    <span class="modal-close" @click="$emit('close')"></span>
    <div class="subastas-form-container">
      <form v-if="item" class="subastas-form">
        <div class="subastas-form-img">
          <img :alt="item.imgAlt" :src="`/img/${item.img}`" />
          <span>{{ item.name }}</span>
        </div>
        <label for="cantidad">Cantidad</label>
        <input type="text" id="cantidad" name="user_cantidad" />
        <label for="precio">Precio</label>
        <input id="precio" name="user_precio" />
        <label for="email">Correo</label>
        <input type="email" id="email" name="user_email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
