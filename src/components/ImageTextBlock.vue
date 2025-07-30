<template>
  <div class="image-text-block">
    <!-- Левая часть с изображениями -->
    <div class="image-text-block">
      <div class="images-column">
        <div
          class="image-wrapper"
          v-for="(img, index) in images"
          :key="index"
          @click="openImage(index)"
        >
          <img :src="img" alt="Image" />
        </div>
      </div>

      <div class="text-content">
        <slot />
      </div>
    </div>

    <!-- Модальное окно с зумом -->
    <div v-if="selectedImage !== null" class="modal" @click.self="closeImage">
      <div
        ref="zoomContainer"
        class="zoom-container"
        @wheel.prevent="handleWheel"
        @mousedown="startPan"
        @mousemove="onPan"
        @mouseup="stopPan"
        @mouseleave="stopPan"
      >
        <img
          ref="zoomImage"
          :src="images[selectedImage]"
          class="modal-image"
          :style="imageStyle"
          draggable="false"
        />
      </div>

      <div class="zoom-controls">
        <button @click="zoomIn">＋</button>
        <button @click="zoomOut">－</button>
        <button @click="resetZoom">⟳</button>
      </div>

      <button class="close-button" @click="closeImage">×</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true,
  },
});

const selectedImage = ref<number | null>(null);

const zoom = ref(1);
const offset = ref({ x: 0, y: 0 });
const isPanning = ref(false);
const panStart = ref({ x: 0, y: 0 });

const zoomContainer = ref<HTMLElement | null>(null);
const zoomImage = ref<HTMLElement | null>(null);

const containerRect = ref({ width: 0, height: 0 });
const imageRect = ref({ width: 0, height: 0 });

const imageStyle = computed(() => ({
  transform: `scale(${zoom.value}) translate(${offset.value.x}px, ${offset.value.y}px)`,
  transition: isPanning.value ? "none" : "transform 0.2s ease",
  cursor: isPanning.value ? "grabbing" : zoom.value > 1 ? "grab" : "default",
  "user-select": "none",
  "pointer-events": "auto",
}));

function updateRects() {
  if (zoomContainer.value) {
    containerRect.value = zoomContainer.value.getBoundingClientRect();
  }
  if (zoomImage.value) {
    imageRect.value = zoomImage.value.getBoundingClientRect();
  }
}

function clampOffset() {
  if (!containerRect.value.width || !containerRect.value.height) return

  const naturalWidth = zoomImage.value?.naturalWidth || 0
  const naturalHeight = zoomImage.value?.naturalHeight || 0

  const scaledWidth = naturalWidth * zoom.value
  const scaledHeight = naturalHeight * zoom.value

  // Ограничиваем смещение по X
  const maxOffsetX = Math.max(0, (scaledWidth - containerRect.value.width) / 2)
  offset.value.x = Math.min(maxOffsetX, Math.max(offset.value.x, -maxOffsetX))

  // По Y
  const maxOffsetY = Math.max(0, (scaledHeight - containerRect.value.height) / 2)
  offset.value.y = Math.min(maxOffsetY, Math.max(offset.value.y, -maxOffsetY))
}

function zoomIn() {
  zoom.value = Math.min(zoom.value + 0.2, 5);
  clampOffset();
}

function zoomOut() {
  zoom.value = Math.max(zoom.value - 0.2, 0.2);
  clampOffset();
}

function resetZoom() {
  zoom.value = 1;
  offset.value = { x: 0, y: 0 };
  nextTick(() => {
    updateRects();
  });
}

function handleWheel(event: WheelEvent) {
  const delta = event.deltaY < 0 ? 0.1 : -0.1;
  zoom.value = Math.min(Math.max(zoom.value + delta, 0.2), 5);
  clampOffset();
}

function startPan(event: MouseEvent) {
  // Разрешаем всегда панить
  isPanning.value = true
  panStart.value = { x: event.clientX, y: event.clientY }
}

function onPan(event: MouseEvent) {
  if (!isPanning.value) return;

  const dx = event.clientX - panStart.value.x;
  const dy = event.clientY - panStart.value.y;

  offset.value.x += dx;
  offset.value.y += dy;

  panStart.value = { x: event.clientX, y: event.clientY };

  clampOffset();
}

function stopPan() {
  isPanning.value = false;
}

function openImage(index: number) {
  selectedImage.value = index;
  zoom.value = 1;
  offset.value = { x: 0, y: 0 };
  nextTick(() => {
    updateRects();
  });
}

function closeImage() {
  selectedImage.value = null;
  zoom.value = 1;
  offset.value = { x: 0, y: 0 };
}

onMounted(() => {
  window.addEventListener("resize", updateRects);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateRects);
});
</script>

<style scoped>
.image-text-block {
  display: flex;

  align-items: flex-start;
  gap: 16px;
}

.images-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Картинки фиксированной высоты */
.image-wrapper {
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
  cursor: pointer;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
}

/* Текст рядом */
.text-content {
  flex: 1;
  /* Можно добавить отступы, шрифты и т.д. */
}

/* Модальное окно */
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

/* Контейнер для изображения с зумом */
.zoom-container {
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  user-select: none;
}

/* Изображение в модалке */
.modal-image {
  max-width: 100%;
  max-height: 100%;
  will-change: transform;
  transition: transform 0.2s ease;
  user-select: none;
  pointer-events: auto;
}

/* Кнопки управления */
.zoom-controls {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
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

/* Кнопка закрытия */
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
  user-select: none;
}
</style>
