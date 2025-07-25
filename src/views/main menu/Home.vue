<template>
  <div
    class="scroll-wrapper"
    @wheel="onScroll"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="scroll-container" :style="containerStyle">
      <!-- 4 ЭКРАНА -->
      <section
        v-for="(screen, i) in screens"
        :key="i"
        :class="['screen', screen.class]"
      >
        <div v-if="i === 0" class="container">
          <!-- Первый экран -->
          <header class="header">
            <h1 class="first-header">MEMS</h1>
            <h1 class="sec-header">KNOWLEDGE</h1>
          </header>
         
        </div>

        <!-- Контент экранов 2–4 -->
        <div v-else class="center-text">
          <h2>{{ screen.label }}</h2>
          <div class="screen-links">
            <router-link
              v-for="(link, index) in screen.content"
              :key="index"
              :to="link.route"
              class="screen-link"
            >
              {{ link.text }}
            </router-link>
          </div>
        </div>

        <!-- Стрелка вниз (только на 1, 2, 3) -->
        <div
          v-if="i < totalScreens - 1"
          class="scroll-arrow down"
          @click="scrollTo(i + 1)"
        >
          <span></span><span></span>
        </div>

        <!-- Стрелка вверх (только на 2, 3, 4) -->
        <div v-if="i > 0" class="scroll-arrow up" @click="scrollTo(i - 1)">
          <span></span><span></span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currentScreen = ref(0);
const totalScreens = 4;
const touchStartY = ref(0);

const screens = [
  {
    label: "",
    class: "home-screen",
  },
  {
    label: "Apple",
    class: "apple-screen",
    content: [{ text: "ссылка", route: "/Apple" }],
  },
  {
    label: "Android",
    class: "android-screen",
    content: [{ text: "Устройства Android", route: "/Android" }],
  },
  {
    label: "Other",
    class: "other-screen",
    content: [{ text: "Прочие бренды", route: "/OtherBrends" }],
  },
];

// Скроллинг колесом мыши
let isScrolling = false;
function onScroll(event) {
  if (isScrolling) return;
  isScrolling = true;

  if (event.deltaY > 0 && currentScreen.value < totalScreens - 1) {
    currentScreen.value++;
  } else if (event.deltaY < 0 && currentScreen.value > 0) {
    currentScreen.value--;
  }

  setTimeout(() => (isScrolling = false), 700);
}

// Свайп на телефоне
function onTouchStart(event) {
  touchStartY.value = event.touches[0].clientY;
}
function onTouchEnd(event) {
  const deltaY = event.changedTouches[0].clientY - touchStartY.value;
  if (Math.abs(deltaY) > 50) {
    if (deltaY < 0 && currentScreen.value < totalScreens - 1) {
      currentScreen.value++;
    } else if (deltaY > 0 && currentScreen.value > 0) {
      currentScreen.value--;
    }
  }
}

// Скролл по клику на стрелку
function scrollTo(index) {
  if (index >= 0 && index < totalScreens) {
    currentScreen.value = index;
  }
}

const containerStyle = computed(() => ({
  transform: `translateY(-${currentScreen.value * 100}vh)`,
  transition: "transform 0.7s ease-in-out",
}));
</script>

<style scoped>
/* стили главного текста */
.header{
  display: flex;
  flex-direction: column;
}

.first-header{
font-family: 'MEMS', normal;
font-size: 168px;
}

.sec-header{
font-size: 68px;
font-family: 'MEMS', normal;
}

/* Контейнер и общий блок */
.scroll-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.scroll-container {
  width: 100%;
  height: 400vh;
  /* 4 экрана по 100vh */
}

/* Каждый экран */
.screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Первый экран */
.home-screen {
  background-image: url(../../assets/img/homeBg.jpg);
  background-size: cover;
  background-position: center;
}

/* Остальные экраны */
.apple-screen {
  background-color: #304a55;
}

.android-screen {
  background-color: #312a3b;
}

.other-screen {
  background-color: #2d3b35;
}

/* Текст по центру */
.center-text {
  font-size: 3rem;
  font-weight: bold;
  color: white;
}

/* Стили оригинального блока */
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
}

.header {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  font-weight: 600;
  font-size: 2.5rem;
}

.menu {
  position: absolute;
  bottom: 40px;
  width: 100%;
}

.menu-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.menu-row {
  display: flex;
  gap: 20px;
}

.menu-item {
  transition: 0.8s;
  padding: 10px 20px;
  background-color: #294d61;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  font-weight: 500;
}

.menu-item:hover {
  box-shadow: 0px 0px 66px 12px rgba(109, 165, 192, 0.4);
  transform: scale(1.05);
  cursor: pointer;
  background-color: #6da5c0;
}

/* Стили на ссылки в блоках */
.screen-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.screen-link {
  color: #ffd700;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.screen-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.scroll-arrow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 10;
}

.scroll-arrow.down {
  bottom: 20px;
}

.scroll-arrow.up {
  top: 20px;
}

.scroll-arrow span {
  width: 25px;
  height: 4px;
  background: white;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}

.scroll-arrow span:nth-child(2) {
  animation-delay: 0.3s;
}

@keyframes pulse {
  0%,
  100% {
    transform: scaleX(1);
    opacity: 0.7;
  }

  50% {
    transform: scaleX(1.5);
    opacity: 1;
  }
}

.screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* для абсолютного позиционирования стрелок */
}

/* стилизация экрана 2-4 */
.center-text {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.screen-content {
  font-size: 1.2rem;
  color: white;
}

.screen-content a {
  display: inline-block;
  margin-top: 10px;
  color: #ffd700;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.screen-content a:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
