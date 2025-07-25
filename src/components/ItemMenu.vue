<script setup>
defineProps({
  imageSrc: String,
});
</script>

<template>
  <div class="template-container">
    <!-- Overlay Title -->
    <div class="overlay-title">
      <slot name="title">Title Here</slot>
    </div>

<div class="top-container">
<!-- Top Section -->
    <div class="top-section">
      <!-- Left: Image that stretches to match height -->
      <div class="photo-container">
        <img class="photo" :src="imageSrc" alt="Photo" />
      </div>

      <!-- Right: Text block with top gap -->
      <div class="top-text">
        <div class="spacer"></div>
        <div class="text-inner">
          <slot name="top-text">Top Text Here</slot>
        </div>
      </div>
    </div>
</div>
    

    <!-- Bottom Section -->
    <div class="bottom-text">
      <slot name="bottom-text">Bottom Text Here</slot>
    </div>
  </div>
</template>

<style scoped>
.top-container{
  display: flex;
  align-items: stretch;
}

.template-container {
  padding: 20px;
  color: white;
  position: relative;
}

/* Overlay title centered in top section */
.overlay-title :deep(*) {
  position: absolute;
  top: 2.5em;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-align: center;
  z-index: 10;
  pointer-events: none;
  box-shadow: 0px 13px 19px 11px rgba(0, 0, 0, 0.2);
}

/* Top section */
.top-section {
  display: flex;
  gap: 20px;
  align-items: stretch;
  margin-top: 20px;
}

/* Left photo */
.photo-container {
  width: 50%;
  border-radius: 0px 45px 45px 0px;
  overflow: hidden;
  height: auto;
  max-height: 350px;
}

.photo  {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Right text */
.top-text {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.top-text :deep(*) {
  background-color: #072e33;
}

/* spacer overlay */
.spacer {
  height: 10em;
  flex-shrink: 0;
  border-radius: 45px 0px 0px 0px;
}

/* Real text content */
.text-inner {
  padding: 20px;
  flex-grow: 1;
  border-radius: 0px 0px 0px 45px;
}

/* Bottom block follows entire top section */
.bottom-text {
  background-color: #072e33;
  padding: 20px;
  border-radius: 0px 0px 25px 25px;
  margin-top: 20px;
}

.bottom-text :deep(*) {
  background-color: #072e33;
}
</style>
