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

  <ItemMenu imageSrc="../../src/assets/img/12.jpg">
    <template #title>
      <p class="basic-header">заголовок</p>
    </template>

    <template #top-text class="top-text">
      <p>
        -side content block with blue background Right-side content block with
        blue backgroundRight-side content block with blue backgroundRight-side
        conteontent block with blue backgroundRight-side content block with blue
        backgroundRight-side content block with blue backgroundRight-side
        content block with blue backgroundRight-side content block with blue
        backgroundRight-side content block with blue backgroundRight-side
        content block with blue backgroundRight-side content block with blue
        background
      </p>
    </template>

    <template #bottom-text>
      <p>Bottom section text also on a blue background</p>
    </template>
  </ItemMenu>

  <div class="menu-list">
    <!-- верхняя часть -->
    <div v-for="(block, index) in preContentBlocks" :key="'pre-' + index">
      <template v-if="block.type === 'item' && displayBackData[block.key]">
        <FancyListItem :number="block.number" />
        <ImageTextBlock :images="displayBackData[block.key].images">
          <p v-html="displayBackData[block.key].description"></p>
        </ImageTextBlock>
      </template>
      <div v-else-if="block.type === 'text'">
        <p v-html="block.html"></p>
      </div>
    </div>

    <!-- заголовок на качества по задней крышке -->
    <div class="summary-section">
      <ItemMenu :imageSrc="img12">
        <template #title>
          <p class="basic-header">заголовок</p>
        </template>

        <template #top-text class="top-text">
          <p>
            -side content block with blue background Right-side content block
            with blue backgroundRight-side content block with blue
            backgroundRight-side conteontent block with blue
            backgroundRight-side content block with blue backgroundRight-side
            content block with blue backgroundRight-side content block with blue
            backgroundRight-side content block with blue backgroundRight-side
            content block with blue backgroundRight-side content block with blue
            backgroundRight-side content block with blue background
          </p>
        </template>

        <template #bottom-text>
          <p>Bottom section text also on a blue background</p>
        </template>
      </ItemMenu>
    </div>

    <!-- нижняя часть -->
    <div v-for="(block, index) in postContentBlocks" :key="'post-' + index">
      <template v-if="block.type === 'item' && displayBackData[block.key]">
        <FancyListItem :number="block.number" />
        <ImageTextBlock :images="displayBackData[block.key].images">
          <p v-html="displayBackData[block.key].description"></p>
        </ImageTextBlock>
      </template>
      <div v-else-if="block.type === 'text'">
        <p v-html="block.html"></p>
      </div>
    </div>
  </div>

  <!-- заголовок на качества по задней крышке -->
  <div class="summary-section">
    <ItemMenu :imageSrc="img12">
      <template #title>
        <p class="basic-header">Различия качеств дисплеев</p>
      </template>

      <template #top-text class="top-text">
        <p>
          Здесь собрана вся информация по качествам дисплеев в подробном и
          развернутом виде. для ее понимания не обязательно перечитывать весь
          вышерасположенный контент, но он очень поможет в понимании.
        </p>
      </template>

      <template #bottom-text>
        <p>
          Здесь я дам общую информацию по всем моделям, а ниже разберу каждые
          подробно. <br /><br />
          Начнем с самого простого - дисплей, он бывает как олед, так и тфт(то
          есть дисп с подсветкой, у оледа подсветки соответственно нет). Немного
          исторической справки - первый олед пошел с Х модели, но у 11 и XR -
          оледа не было (у se20 и se22 - тоже), полноценный переход произошел с
          12 серии, когда полностью вся линейка уже стала использовать матрицу
          олед. О самих типах матрицы ничего говорить не буду тк скорее всего
          уже все из нас давно знают и понимают отличия. Упомянуты типы матриц
          не случайно, тк в нашей линейке представлены различне виды дисплеев в
          том числе и на высокие модели 12+ серии(серия incell). ТФТ матрицы
          дешевле в производстве поэтому их можно часто увидеть на дешевых
          копиях. Что же касается самих копий и не только, их отличий и
          характерных особенностей - разберем ниже.
          <br /><br />
          На данный момент здесь не вся информация, тк добавились новые качества
          и они еще не были разобраны, в последствии добавятся и они.
        </p>
      </template>
    </ItemMenu>
  </div>

  <div v-for="(block, index) in lastContentBlocks" :key="'post-' + index">
    <template v-if="block.type === 'item' && displayBackData[block.key]">
      <FancyListItem :number="block.number" />
      <ImageTextBlock :images="displayBackData[block.key].images">
        <p v-html="displayBackData[block.key].description"></p>
      </ImageTextBlock>
    </template>
    <div v-else-if="block.type === 'text'">
      <p v-html="block.html"></p>
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
import img12 from "@/assets/img/123.jpg";

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
      img12,
      preContentBlocks: [
        {
          type: "item",
          key: "Задняя часть дисплея 5s",
          number: "Задняя часть дисплея 5s",
        },

        // 6
        { type: "item", key: "6", number: "Задняя часть дисплея 6" },

        // 6+
        {
          type: "item",
          key: "Задняя часть дисплея 6 plus",
          number: "Задняя часть дисплея 6 plus",
        },

        // 6s
        { type: "item", key: "6s", number: "Задняя часть дисплея 6s" },

        // 6s+
        {
          type: "item",
          key: "Задняя часть дисплея 6s plus",
          number: "Задняя часть дисплея 6s plus",
        },

        // 6s+
        {
          type: "item",
          key: "Задняя часть дисплея 6s plus",
          number: "Задняя часть дисплея 6s plus",
        },
        {
          type: "text",
          html: `Резюмируем по 6 серии: <br /><br />
        Шлейф сверху, уши креплений сверху пластиковые и немного отличаются от
        модели, подсветка как темная так и светлая.
        <br />
        Один из вариантов как можно запомнить - 6s и 6s+ подсветкая светлая, s -
        светлый. Ну и соответсвенно на 6 и 6+ - темная<br />
        Также на 6 и 6+ отсутвует шлейф крепления кнопки home`,
        },

        // 7
        {
          type: "item",
          key: "Задняя часть дисплея 7",
          number: "Задняя часть дисплея 7",
        },

        // 7+
        {
          type: "item",
          key: "Задняя часть дисплея 7 plus",
          number: "Задняя часть дисплея 7 plus",
        },

        // 8
        {
          type: "item",
          key: "Задняя часть дисплея 8",
          number: "Задняя часть дисплея 8",
        },

        // 8+
        {
          type: "item",
          key: "Задняя часть дисплея 8 plus",
          number: "Задняя часть дисплея 8 plus",
        },
        {
          type: "text",
          html: `Хочу подвести итог по всем моделям до Х. Пройдусь по основным критериям и
        отличиям от 5 до 8.
      <br /><br />
      Шлейф до 7 находится сверху и только на 7-8 модели он нахоится снизу.
      <br />
      Уши креплений тоже отличаются от модели к модели, но что можно сразу
      сказать, так это то, что на 8 они металлические, а на всех остальных
      моделях пластиковые.
      <br />
      Обращаем внимание на цвет подсветки.
      <br />
      Шлейф крепления кнопки home тоже иногда может помочь в определении модели.
      <br />
      Но вот на что еще можно обратить внимание и я не указывал это в описаниях
      так это украска, она сильно отличается и, но для этого ее нужно запомнить,
      чтобы определить модель без дополнительных подсказок
      <br /><br />
      Не забывайте, что определить модель только по одному из признаков можно,
      но лучше это делать только в совокупности нескольких факторов, это будет
      работать и дальше с более высокими моделями
    </p>`,
        },

        // X - XS
        {
          type: "item",
          key: "Задняя часть дисплея X - XS",
          number: "Задняя часть дисплея X - XS",
        },

        // XS max
        {
          type: "item",
          key: "Задняя часть дисплея XS max",
          number: "Задняя часть дисплея XS max",
        },

        // XR - 11
        {
          type: "item",
          key: "Задняя часть дисплея XR - 11",
          number: "Задняя часть дисплея XR - 11",
        },

        // 11 pro - 11 pro max
        {
          type: "item",
          key: "Задняя часть дисплея 11 pro - 11 pro max",
          number: "Задняя часть дисплея 11 pro - 11 pro max",
        },

        // 12 серия
        {
          type: "item",
          key: "Задняя часть дисплея 12 серия",
          number: "Задняя часть дисплея 12 серия",
        },

        // 13 серия
        {
          type: "item",
          key: "Задняя часть дисплея 13 серия",
          number: "Задняя часть дисплея 13 серия",
        },

        // 14 серия
        {
          type: "item",
          key: "Задняя часть дисплея 14 серия",
          number: "Задняя часть дисплея 14 серия",
        },

        // 15 серия
        {
          type: "item",
          key: "Задняя часть дисплея 15 серия",
          number: "Задняя часть дисплея 15 серия",
        },

        // 16 серия
        {
          type: "item",
          key: "Задняя часть дисплея 16 серия",
          number: "Задняя часть дисплея 16 серия",
        },

        // preContentBlocks
        //end
      ],

      postContentBlocks: [
        // различия м+ от h-copy
        {
          type: "item",
          key: "Различие m+ от hi-copy на 5-8 сериях",
          number: "Различие m+ от hi-copy на 5-8 сериях",
        },

        // различия incell mems, mems oled, orig tech X-12
        {
          type: "item",
          key: "Различия incell mems, mems oled, orig tech на X-12",
          number: "Различия incell mems, mems oled, orig tech на X-12",
        },

        // incell GX, он же GX oled
        {
          type: "item",
          key: "incell GX, он же GX oled",
          number: "incell GX, он же GX oled",
        },

        // Различия mems+ от OEM
        {
          type: "item",
          key: "Различия mems+ от OEM",
          number: "Различия mems+ от OEM",
        },

        // Различия снятый от сервисный оригинал
        {
          type: "item",
          key: "Различия снятый от сервисный оригинал",
          number: "Различия снятый от сервисный оригинал",
        },

        // различия м+ от mems oled и orig tech
        {
          type: "item",
          key: "Различия mems+ от mems oled и orig tech на 13-16 сериях",
          number: "Различия mems+ от mems oled и orig tech на 13-16 сериях",
        },

        // postContentBlocks
        //end
      ],

      lastContentBlocks: [
        // Hi-copy
        {
          type: "item",
          key: "Hi-copy",
          number: "Hi-copy",
        },

        // Incell JK
        {
          type: "item",
          key: "Incell JK",
          number: "Incell JK",
        },

        // Incell MEMS
        {
          type: "item",
          key: "Incell MEMS",
          number: "Incell MEMS",
        },

        // gx
        {
          type: "item",
          key: "incell/oled GX",
          number: "incell/oled GX",
        },

        // MEMS OLED
        {
          type: "item",
          key: "MEMS OLED",
          number: "MEMS OLED",
        },

        // ORIG TECH
        {
          type: "item",
          key: "ORIG TECH",
          number: "ORIG TECH",
        },

        // MEMS +
        {
          type: "item",
          key: "MEMS +",
          number: "MEMS +",
        },

        // OEM
        {
          type: "item",
          key: "OEM",
          number: "OEM",
        },
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
