<template>
  <div class="image-text-wrapper">
    <!-- Левый блок с картинками -->
    <div class="image-floated">
      <img v-for="(image, index) in images" :key="index" :src="image" class="preview-image" @click="openImage(index)"
        alt="Preview" />
    </div>

    <!-- Основной текст -->
    <div class="text-content">
      <slot>
        <p>Это пример текста. Добавьте сюда большой текст, чтобы у</p>
        <p>Ещё абзац. Ещё больше текста. Ещё текст. Ещё текст. Ещё текст. Ещё текст.</p>
      </slot>
    </div>

    <!-- Модалка -->
    <div v-if="selectedImage !== null" class="modal" @click.self="closeImage">
      <div class="zoom-container" @wheel.prevent="handleWheel" @mousedown="startPan" @mousemove="onPan"
        @mouseup="stopPan" @mouseleave="stopPan">
        <img :src="images[selectedImage]" class="modal-image" :style="imageStyle" />
      </div>

      <!-- Кнопки управления -->
      <div class="zoom-controls">
        <button @click="zoomIn">＋</button>
        <button @click="zoomOut">－</button>
        <button @click="resetZoom">⟳</button>
      </div>

      <!-- 👇 Закрыть отдельно -->
      <button class="close-button" @click="closeImage">×</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
})

const selectedImage = ref(null)

const zoom = ref(1)
const offset = ref({ x: 0, y: 0 })
const isPanning = ref(false)
const panStart = ref({ x: 0, y: 0 })

const imageStyle = computed(() => ({
  transform: `scale(${zoom.value}) translate(${offset.value.x}px, ${offset.value.y}px)`,
  transition: isPanning.value ? 'none' : 'transform 0.2s ease',
  cursor: isPanning.value ? 'grabbing' : zoom.value > 1 ? 'grab' : 'default'
}))

function zoomIn() {
  zoom.value = Math.min(zoom.value + 0.2, 5)
}

function zoomOut() {
  zoom.value = Math.max(zoom.value - 0.2, 0.2)
}

function resetZoom() {
  zoom.value = 1
  offset.value = { x: 0, y: 0 }
}

function handleWheel(event) {
  const delta = event.deltaY < 0 ? 0.1 : -0.1
  zoom.value = Math.min(Math.max(zoom.value + delta, 0.2), 5)
}

function startPan(event) {
  if (zoom.value <= 1) return
  isPanning.value = true
  panStart.value = { x: event.clientX, y: event.clientY }
}

function onPan(event) {
  if (!isPanning.value) return
  const dx = event.clientX - panStart.value.x
  const dy = event.clientY - panStart.value.y
  offset.value.x += dx
  offset.value.y += dy
  panStart.value = { x: event.clientX, y: event.clientY }
}

function stopPan() {
  isPanning.value = false
}

function openImage(index) {
  selectedImage.value = index
}

function closeImage() {
  selectedImage.value = null
}
</script>

<style scoped>
.image-text-wrapper {
  margin: 2em 0em;
  line-height: 1.6;
  max-width: 100%;
  overflow: hidden;
  /* важно для float-корректного обтекания */
}

.image-floated {
  float: left;
  width: 250px;
  max-height: 800px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.preview-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  border-radius: 4px;
  flex: 1;
  max-height: calc((800px - 30px) / 4);
  /* если 4 фото */
}

/* Модалка */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}

.close-button {
  position: fixed;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

/* zoom img */

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  overflow: hidden;
}

.zoom-container {
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  position: relative;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  user-select: none;
  pointer-events: auto;
  will-change: transform;
  transition: transform 0.2s ease;
}

.zoom-controls {
  position: fixed;
  bottom: 30px;
  /* 👉 отступ снизу */
  left: 50%;
  transform: translateX(-50%);
  /* 👉 центрирование по горизонтали */
  display: flex;
  gap: 12px;
  z-index: 1000;
}

.zoom-controls button {
  font-size: 1.5rem;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  backdrop-filter: blur(6px);
  transition: background 0.2s ease;
}

.zoom-controls button:hover {
  background: rgba(255, 255, 255, 0.25);
}
.close-button {
  position: fixed;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1001;
}
</style>