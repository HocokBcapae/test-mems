<script>
import Button from "../../components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>

<template>
  <div class="page">
    <div class="content-wrapper">
      <h2 class="title">Заголовок</h2>
      <p class="description">это описание к первой странице.</p>
    </div>
  </div>

  <!-- nav menu -->
  <div class="nav-menu">
    <Button
      ><router-link to="/DisplayApple" class="menu-item">дисп эпл</router-link>
    </Button>

    <Button
      ><router-link to="/BatteryApple" class="menu-item"> АКБ эпл</router-link>
    </Button>

    <Button
      ><router-link to="/CableApple" class="menu-item"> кабеля эпл</router-link>
    </Button>

    <Button
      ><router-link to="/PowerSupply" class="menu-item"> блоки эпл</router-link>
    </Button>
  </div>
</template>

<style scoped>
.page {
  padding: 2rem;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  width: 100%;
}

.title {
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 2rem;
}

.description {
  color: white;
  margin-bottom: 2rem;
  font-weight: 400;
}

.nav-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.back-button {
  padding: 10px 20px;
  background-color: #294d61;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  font-weight: 500;
}
</style>
