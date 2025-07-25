<!-- src/components/BackButton.vue -->
<template>
  <button v-if="showButton" class="back-button" @click="goBack" aria-label="Назад">
    ←
  </button>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const goBack = () => {
  router.back()
}

// Не показывать на главной
const showButton = computed(() => route.path !== '/')
</script>

<style scoped>
.back-button {
  position: fixed;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s ease;
}

.back-button:hover {
  transform: scale(1.2);
  color: #45c5ce;
}
</style>