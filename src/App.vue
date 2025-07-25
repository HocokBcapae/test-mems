<script setup>
import { useRoute } from 'vue-router'
import BackButton from './components/BackButton.vue'

const route = useRoute()
</script>

<template>
  <div id="app">
    <BackButton />

    <!-- Добавляем дополнительный класс ограниченной ширины -->
    <main :class="[
      route.path !== '/' ? 'content-with-padding content-limited' : ''
    ]">
      <router-view v-slot="{ Component }">
        <component :is="Component" :key="route.fullPath" />
      </router-view>
    </main>
  </div>
</template>

<style>
.content-with-padding {
  padding-top: 0px;
  padding-left: 60px;
}

.content-limited {
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 20px;
  box-sizing: border-box;
}
</style>