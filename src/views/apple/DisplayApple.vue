<template>
  <p class="second-header">
    на данный момент в нашем ассортименте представлены следующие качества
    дисплеев
  </p>

  <p class="second-header">- Копии</p>
  <ul class="list">
    <li class="list-el">hi-copy</li>
    <li class="list-el">jk</li>
    <li class="list-el">incell jk</li>
    <li class="list-el">incell mems</li>
    <li class="list-el">gx</li>
    <li class="list-el">orig tech</li>
    <li class="list-el">mems oled</li>
    <li class="list-el">tw oled</li>
  </ul>

  <p class="second-header">- Переклеи</p>
  <ul class="list">
    <li class="list-el">mems+</li>
    <li class="list-el">oem</li>
  </ul>

  <p class="second-header">- Оригиналы</p>
  <ul class="list">
    <li class="list-el">снятый</li>
    <li class="list-el">сервисный</li>
  </ul>

  <div class="menu-list">
  <div v-for="(item, index) in keysToShow" :key="'section-' + index">
    <FancyList>
      <FancyListItem :number="item.number">
        {{ item.title }}
      </FancyListItem>
    </FancyList>

    <ImageTextBlock :images="displayBackData[item.number].images">
      <p v-html="displayBackData[item.number].description"></p>
    </ImageTextBlock>
  </div>
</div>
  <!-- канэц -->
</template>

<!-- script -->
<script>
import ItemMenu from "@/components/ItemMenu.vue";
import ImageTextBlock from "@/components/ImageTextBlock.vue";
import FancyList from "@/components/FancyList.vue";
import FancyListItem from "@/components/FancyListItem.vue";
import { displayBackData } from "@/data/displayBack/displayBack.js";

export default {
  components: {
    ItemMenu,
    ImageTextBlock,
    FancyList,
    FancyListItem,
  },
  data() {
    return {
      displayBackData,
      keysToShow: [
        { number: "Задняя часть дисплея 5s", title: "" },
        { number: "Задняя часть дисплея 6", title: "" },
        { number: "Задняя часть дисплея 6 plus", title: "" },
      ],
    };
  },
};
</script>
<!-- script -->

<!-- style -->
<style scoped>
body {
  padding: 100px;
}

.text-bot {
  display: none;
  visibility: hidden;
}

.list {
  margin: 20px;
}

.list-el {
  margin: 20px;
}

.basic-header {
  font-size: 33px;
}

.second-header {
  margin: 2.5em 1em 1em 2em;
  font-size: 18px;
}

.result {
  margin: 2em;
}

.tittle-back-display {
}

.back-of-display {
  margin: 0em 1em 4em 1em;
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
