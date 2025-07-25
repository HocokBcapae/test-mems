<template>
  <li class="fancy-list-item">
    <span class="custom-number">{{ number }}</span>
    <div class="item-content">
      <slot />
    </div>
  </li>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.fancy-list-item {
  display: flex;
  align-items: flex-start;
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.custom-number {
  font-size: 1.5rem;
  font-weight: bold;
  min-width: 50px;
  padding-right: 12px;
  background-image: linear-gradient(to bottom, aquamarine, rgb(130, 22, 156));
  background-attachment: fixed;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-variant-numeric: tabular-nums;
}

.item-content {
  flex: 1;
}
</style>