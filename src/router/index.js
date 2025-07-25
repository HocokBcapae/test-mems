import { createRouter, createWebHistory } from 'vue-router';
// main page
import Home from '../views/main menu/Home.vue';
import Apple from '../views/main menu/Apple.vue';
import Android from '../views/main menu/Android.vue';
import OtherBrends from '../views/main menu/OtherBrends.vue';
// menu apple page
import DisplayApple from '../views/apple/DisplayApple.vue';
import CableApple from '../views/apple/CableApple.vue';
import BatteryApple from '../views/apple/BatteryApple.vue';
import PowerSupply from '../views/apple/PowerSupply.vue';

const routes = [
  //main page
  { path: '/', component: Home },
  { path: '/Apple', component: Apple },
  { path: '/Android', component: Android },
  { path: '/OtherBrends', component: OtherBrends },
  // menu apple page
  { path: '/DisplayApple', component: DisplayApple },
  { path: '/CableApple', component: CableApple },
  { path: '/BatteryApple', component: BatteryApple },
  { path: '/PowerSupply', component: PowerSupply },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
