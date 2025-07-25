<script setup>
import ItemMenu from '../../components/ItemMenu.vue';
</script>

<template>
  <p>здесь находится инфа по АКБ эпл</p>

  <p class="title-text">На данный момент у нас есть следующие качества АКБ</p>
  <!-- list battery  -->
  <ul class="list">
    <li class="list-el">Оригинал</li>
    <li class="list-el">Премиум</li>
    <li class="list-el">Voltpack</li>
    <li class="list-el">HIB</li>
    <li class="list-el">Снятый</li>
    <li class="list-el">Сервисный</li>

    <li class="list-el">Оригинал clean 100%</li>
    <li class="list-el">Премиум clean 100%</li>
    <li class="list-el">Voltpack clean 100%</li>
  </ul>

  <p class="title-text">так же есть и банки</p>
  <!-- list bank  -->
  <ul class="list">
    <li class="list-el">Банка акб</li>
    <li class="list-el">Банка voltpack</li>
  </ul>

  <!-- battery iph orig  -->
  <ItemMenu imageSrc="../../src/assets/img/123.jpg">
    <template #title>
      <p class="title">Аккумуляторы IPhone оригинал</p>
    </template>

    <template #top-text class="top-text">
      <p>
        -side content block with blue background Right-side content block with
        blue backgroundRight-side content block with blue backgroundRight-side
        content block with blue backgroundRight-side content block with blue
        backgroundRight-side content block with blue backgroundRight-side
        content block with blue backgroundRight-side content block with blue
        backgroundRight-side content block with blue backgroundRight-side
        content block with blue background
      </p>
    </template>

    <template #bottom-text>
      <p>Bottom section text also on a blue background</p>
    </template>
  </ItemMenu>

  <!-- battery bank iph -->
  <ItemMenu imageSrc="../../src/assets/img/battery bank.png">
    <template #title>
      <p class="title">Банки IPhone под восстановление</p>
    </template>

    <template #top-text class="top-text">
      <p>
        Банка — это аккумуляторная батарея без коннектора. Она используется для
        iPhone XS и выше. При замене аккумулятора появляется ошибка. Телефон
        определяет неоригинальную запчасть.
      </p>
    </template>

    <template #bottom-text>
      <p>
        На новой оси начиная с iphone xs и выше при замене аккумулятора телефон
        начал понимать, что это не родной аккумулятор и появилась ошибка о
        замене аккумулятора и телефон больше не показывает емкость аккумулятора
        настройках.
        <br /><br />
        Инженеры разработали метод обхода проблемы. Оригинальный шлейф с
        коннектором переносится. На шлейфе расположена микросхема, отвечающая за
        определение аккумулятора. Информация о емкости сохраняется в памяти
        микросхемы.
      </p>

      <br />

      <h2>Как работает перенос шлейфа?</h2>

      <br />

      <p>
        Ее переносят со старого аккумулятора на новую банку, подключают к
        телефону. В памяти телефона, в памяти этой микросхемы осталась
        информация, что на банке у нас 70% емкости. Но телефон не пишет, что
        есть ошибка. То есть, по сути дела, iPhone думает, что это старая банка,
        держит лучше, работает лучше, но емкость реальную не показывает.
        <br /><br />
        Для переноса используют специальный шлейф обманку. Его подключают к
        плате и к ней уже подключают аккумулятор. В ней пустая микросхема, а ней
        не записано ничего. При помощи специального программатора, называется
        JCID. На эту банку прописывается информация о том, что на ней 100%
        емкость и ноль циклов. То есть таким образом с помощью этого
        программатора и этого шлейфа мы обманываем телефон, меняя банку.
      </p>
      <br />
      <p>
        Начиная с ios 17.4.1, недостаточно просто перепаять шлейф и скинуть
        циклы через программатор. Даже после всех манипуляций, в настройках
        будет отображаться старая информация.
        <br /><br />
        Чтобы этого не происходило, требуется делать сброс устройства до
        заводских настроек (Прошивать его без данных через 3uTools с
        соответствующей галочкой) Ну а если мы говорим про устройства клиентов,
        получается, сначала надо сделать резервную копию, все снести, и потом
        все загрузить обратно(А там еще с банковскими приложениями плясать)
        <br /><br />
        До 17.4.1 было легче - Перепаял , через обманку в JCID подключил, циклы
        до 0 скинул, емкость 110% поставил (да, не 100, так как Китайские
        инженеры посчитали , что в оригинальных с завода тоже стоит 110%) И все
        работает
        <br /><br />
        Кстати о сбросе циклов, еще с 17.4.1 не стоит скидывать их до 0 Надо
        оставить 20 циклов , иначе корректно остаточная емкость не будет
        отображаться, вечные 100% будут в настройках
        <br /><br />
        И по обманке: раньше считалось, что ее необходимо подключать и оставлять
        внутри устройства Но оказалось, что это вообще не обязательно  На
        разных ios требуется сделать пару манипуляций с жесткой перезагрузкой
        (Hard Reset ), после чего можно отключить обманку и собрать готовое
        устройство уже без него, а обманку использовать снова и снова
      </p>
    </template>
  </ItemMenu>
  <!-- item component  -->

  
</template>

<style scoped>
.title {
  font-size: 33px;
}

.title-text {
  margin: 20px;
}

.list {
  margin: 20px;
}

.list-el {
  margin: 10px;
}

.back-button {
  padding: 10px 20px;
  background-color: #0c7075;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  font-weight: 500;
}
</style>

<!-- test component  -->
