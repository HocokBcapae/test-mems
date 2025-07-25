<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  font-weight: 500;
  background-color: #294d61;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 10px;
}

.btn :deep(*) {
  background-color: transparent;
  color: white;
  text-decoration: none;
  display: block;
  padding: 20px;
}
</style>