<script>
import ItemMenu from "../../components/ItemMenu.vue";
import ImageTextBlock from "../../components/ImageTextBlock.vue";
import FancyList from "../../components/FancyList.vue";
import FancyListItem from "../../components/FancyListItem.vue";

export default {
  components: {
    ItemMenu,
    ImageTextBlock,
    FancyList,
    FancyListItem,
  },
};
</script>

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
    <!-- различия дисп по задним крышкам  -->
    <ItemMenu imageSrc="../../src/assets/img/12.jpg">
      <template #title>
        <p class="basic-header">заголовок</p>
      </template>

      <template #top-text class="top-text">
        <p>
          -side content block with blue background Right-side content block with
          blue backgroundRight-side content block with blue backgroundRight-side
          conteontent block with blue backgroundRight-side content block with
          blue backgroundRight-side content block with blue backgroundRight-side
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
  </div>

  <!-- весь блок с задней стороной дисп -->
  <div class="wrapper-back-disp">
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 5s"
      ></FancyListItem>
    </FancyList>

    <!-- задняя сторона 5s -->
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/5s/5s.jpg',
          '../../src/assets/img/back of display/5s/5s2.jpg',
        ]"
      >
        <p>
          Итак, начнем с 5s, не думаю, что тут надо что то расписывать, самая
          маленькая модель, темная подсветка и шлейф сверху
          <br />
          Еще к особенностям этой модели добавлю - что шлейф очень хрупкий и
          загибать его нежелательно
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 6 -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 6"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/6/6.jpg',
          '../../src/assets/img/back of display/6/6-2.jpg',
        ]"
      >
        <p>
          Продолжаем, 6. Можно сказать, что это та же 5, но больших размеров,
          такая же темная подсветка и шлейф по прежнему находится сверху
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 6 plus -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 6 plus"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/6+/6+.jpg',
          '../../src/assets/img/back of display/6+/6+2.jpg',
        ]"
      >
        <p>
          Продолжая традицию с 6 моделью - 6 plus - это та же 6 только больших
          размеров. Но все же одно отличие у них есть - уши крепления к корпусу
          шире, чем на 6
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 6s -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 6s"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/6s/6s.jpg',
          '../../src/assets/img/back of display/6s/6s2.jpg',
        ]"
      >
        <p>
          А вот задняя часть 6s уже существенно отличается от 6.
          <br />
          Подсветка стала светлой, слева внизу появился шлейф кнопки home (на 6
          и 6+ он устанавливается под щиток, который ставится сверху, поэтому
          его нет на самом дисплее).
          <br />
          Шлейф все также находится сверху, но визуально отличается, так же как
          и уши креплений
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 6s plus -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 6s plus"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/6s+/6s+.jpg',
          '../../src/assets/img/back of display/6s+/6s+2.jpg',
        ]"
      >
        <p>
          6s plus это тот же 6s с таким же верхним шлейфом и нижним шлейфом под
          кнопку, но верхнее ухо под крепление шире, чем на 6s
        </p>
      </ImageTextBlock>
    </div>

    <!-- резюме по 6 серии -->
    <p class="result">
      Резюмируем по 6 серии: <br /><br />
      Шлейф сверху, уши креплений сверху пластиковые и немного отличаются от
      модели, подсветка как темная так и светлая.
      <br />
      Один из вариантов как можно запомнить - 6s и 6s+ подсветкая светлая, s -
      светлый. Ну и соответсвенно на 6 и 6+ - темная<br />
      Также на 6 и 6+ отсутвует шлейф крепления кнопки home
    </p>

    <!-- задняя сторона 7 -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 7"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/7/7.jpg',
          '../../src/assets/img/back of display/7/7-2.jpg',
          '../../src/assets/img/back of display/7/7hc.jpg',
        ]"
      >
        <p>
          Переходим к 7.
          <br />
          Здесь уже есть существенные отличия, шлейф теперь расположен внизу. В
          зависимости от качества шлейф кнопки home может быть, а может не быть,
          специально для этого прикрепляю туже модель, но качетсва Hi copy на
          которые не ставится защитка
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 7+ -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 7 plus"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/7+/7+.jpg',
          '../../src/assets/img/back of display/7+/7+2.jpg',
          '../../src/assets/img/back of display/7+/7+hc.jpg',
        ]"
      >
        <p>
          7 plus больше по размерам, чем 7 и уши креплений у него шире, чем на 7
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 8 -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 8"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/8/8.jpg',
          '../../src/assets/img/back of display/8/8-2.jpg',
          '../../src/assets/img/back of display/8/8hc.jpg',
        ]"
      >
        <p>
          8 визуально не много схожа с 7, но все же у нее есть пару
          отличительных черт, которые очень легко заметить. Во первых это
          металлические уши и совершенно другая украска.
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 8+ -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 8 plus"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/8+/8+.jpg',
          '../../src/assets/img/back of display/8+/8+2.jpg',
        ]"
      >
        <p>
          Тот же 8 только больше и вверху уже не два, а три металлических уха.
        </p>
      </ImageTextBlock>
    </div>

    <!-- резюме по всей низкой серии -->
    <p class="result">
      Хочу подвести итог по всем моделям до Х. Пройдусь по основным критериям и
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
    </p>

    <!-- задняя сторона x-xs -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея X - XS"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/X-XS/x.jpg',
          '../../src/assets/img/back of display/X-XS/xs.jpg',
          '../../src/assets/img/back of display/X-XS/x-xs frame.jpg',
        ]"
      >
        <p>
          Переходим к X серии, здесь шлейф уже переехал и находится слева (этот
          шлейф также может быть и одинарным). На X и XS он идентичен, имеет x
          или z-образную форму, кому как больше нравится. Нижняя часть может
          иметь некоторые различие небольшие, но что нас интересует больше всего
          это рамка справа от камер. Если там есть квадрат из точек - это XS.
          <br /><br />
          Как было замечено методом наблюдения - не всегда этот квадрат из точек
          есть на рамке. В целом это два абсолютно идентичных дисплея за
          исключением рамки, она отличается и распознать ее довольно просто.
          Разные уши креплений, можно также ориентироваться на заклепки в той же
          правой части, они отличаются. У xs на левой стороне крепежный уголок.
          Этот шлейф также может быть и одинарным.
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона xs max -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея XS max"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="['../../src/assets/img/back of display/xs max/xs max.jpg']"
      >
        <p>
          Самая легкоузнаваемая задн часть, раздвоенный шлейф, расположенный на
          расстоянии друг от друга
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона xr-11 -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея XR - 11"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="['../../src/assets/img/back of display/xr-11/xr-11.jpg']"
      >
        <p>
          А это два самых перепутываемых дисплея. Они практически идентичны, за
          исключением шлейфа - на 11 он короче, на xr соответственно длиннее. Ну
          и еще у них отличается украска, там тоже верхняя планка на 11 чуть
          короче чем на xr, но самый простой способ определения - шлейф. Еще
          защитка отличается, но бывали случаи, когда путали защитку и ставили
          наоборот.
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 11про 11 про макс -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 11 pro - 11 pro max"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="['../../src/assets/img/back of display/11pro/11pro.jpg']"
      >
        <p>
          Тоже два идентичных дисплея. Из очевидных признаков - pro max версия
          больше. Из не очевидных - рамка имеет некоторые отличия. От других
          дисплеев отличить тоже довольно просто - шлейф справа и очень тонкий,
          двойной, прямой.
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 12 -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 12 серия"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/12/12-13mini.jpg',
          '../../src/assets/img/back of display/12/12-12pro.jpg',
          '../../src/assets/img/back of display/12/12pm.jpg',
        ]"
      >
        <p>
          Переходим к 12 серии, здесь шлейф снова поменял свое местоположение и
          теперь он справа, где находится и по сей день на 16 сериях.
          <br />
          <br />
          Сразу же для сравнения поставлю 12 и 13 мини вместе, чтобы наглядно
          показать их отличия. Их два и они легко отличимы.
          <br />
          1 - шлейф у 12 изогнут, а у 13 прямой,
          <br />
          2 - ураска сильно отличается. На 13 появляется окно для датчика света,
          характерное только для 13 серии дисплеев.
          <br />
          Ну а отличие от других дисплеев в том, что они гораздо меньше и это
          прям сразу видно.
          <br /><br />
          12/12 pro - главное его отличие - двойной шлейф, нигде в более высоких
          моделях он больше не появится.
          <br /><br />
          12pm - одинарный шлейф, который находится справа и украска,
          характерная 12 модели.
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 13 -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 13 серия"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/12/12-13mini.jpg',
          '../../src/assets/img/back of display/13/13.jpg',
          '../../src/assets/img/back of display/13/13pro.jpg',
          '../../src/assets/img/back of display/13/13pm.jpg',
        ]"
      >
        <p>
          На 13 серии появляется то самое характерное для этой модели окно для
          датчика света, вместе с украской.
          <br />
          Отличить эти дисплеии друг от друга тоже достаточно просто, шлейф от
          низкой к более высокой версии будто растет. На 13 он внизу, на 13 pro
          выше и на 13pm еще выше. Также, конечно pm версия больше чем 13 и
          13pro.
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 14  -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 14 серия"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/14/14.jpg',
          '../../src/assets/img/back of display/14/14pro.jpg',
          '../../src/assets/img/back of display/14/14pm.jpg',
          '../../src/assets/img/back of display/14/14+.jpg',
        ]"
      >
        <p>
          Можно сказать, что 14 и 14 plus похожи на 13 серию, но это не так.
          Украска имеет общие черты, особенно если обратить внимание на датчик
          света. Но при детальном рассмотрении можно найти отличия - на 13 она
          более выпуклая с пластиковыми элементами под камеры, на 14 же она
          практически плоская с металлическими элементами. Еще одно изменение,
          которое сразу же бросается в глаза - отсутсвие графитовой пленки. Ну и
          внешнее отличие 14 от 14 plus в размерах, где plus естественно больше.
          <br /><br />
          С pro и pro max версией еще проще - появляется треугольник на украске
          характерный только для этой модели. Отличить же 14 pro от 14 pro max
          тоже довольно легко, prj max версия конечно же больше и шлейф у этой
          версии толще чем у pro.
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 15 -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 15 серия"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/15/15-+.jpg',
          '../../src/assets/img/back of display/15/15pro.jpg',
          '../../src/assets/img/back of display/15/15pm.jpg',
        ]"
      >
        <p>
          15 и 15 plus продолжает традицию отсутвия графитовой пленки. Также
          снова меняется украска, с помощью нее можно легко узнать что этот дисп
          принадлежит 15 серии.
          <br /><br />
          15 pro и 15 pro max версии отличить тоже довольно легко, во первых по
          размерам, во вторых - датчик света у pro max версии отделился от блока
          камер и находится теперь немного ниже.
          <br />
          Также именно на pro и pro max версиях появляется прозрачная рамка.
        </p>
      </ImageTextBlock>
    </div>

    <!-- задняя сторона 16 -->
    <FancyList>
      <FancyListItem
        class="tittle-back-display"
        number="Задняя часть дисплея 16 серия"
      ></FancyListItem>
    </FancyList>
    <div class="back-of-display">
      <ImageTextBlock
        :images="[
          '../../src/assets/img/back of display/16/16.jpg',
          '../../src/assets/img/back of display/16/16-.jpg',
          '../../src/assets/img/back of display/16/16pro.jpg',
          '../../src/assets/img/back of display/16/16pm.jpg',
        ]"
      >
        <p>
          16 версия полностью лишилась графитовой пленки, украска же осталась
          прежней, но, самое главное отличие у этой модели - коннектор шлейфа,
          он совершенно другой и отличается от всех моделей ниже.
          <br />
          16 и 16 plus версию все также легко отличить по размерам (пока на
          складе отсутвует plus версия, как приедет сразу добавлю фото)
          <br />
          А pro и pro max во первых легко узнать по украске (датчик света справа
          от блока камер) и прозрачной рамке. Отличия же в размерах и в толщине
          рамке, на pro версии она толще, особенно в углах.
        </p>
      </ImageTextBlock>
    </div>
  </div>

  <div class="menu-list">
    <!-- различия качеств дисп  -->
    <ItemMenu imageSrc="../../src/assets/img/12.jpg">
      <template #title>
        <p class="basic-header">Различия качеств дисплеев</p>
      </template>

      <template #top-text class="top-text">
        <p>
          В данной теме разберем чем отличаются дисплеи в зависимости от их
          качества, лучше всего это делать вживую, но я попробую дать
          исчерпывающую визуальную информацию
        </p>
      </template>

      <template #bottom-text>
        <p>
          Здесь разберем визуальные отличия различных моделий и их
          разновидностей
        </p>
        <br />
        <p>
          Сейчас я сделаю небольшое обобщение куда нужно будет смотреть и на что
          обращать внимание, далее же подробно остановлюсь на некоторых моделях.
          Смотрим примерно на тоже самое, что и при определении модели: украска,
          шлейф, но добавляем еще сюда и визуальное отличие самого шлейфа,
          качество печати, качество пайки, начинаем смотреть на матрицу и на
          качество картинки. Ни один из этих методов не работает на 100% и как и
          в случае с определением модели, нужно брать совокупность факторов т.к.
          качество шлефа, плотность и внешний вид может незначительно, но
          колебаться в зависимости от поставщика и партии.
        </p>
        <br />
        <p>
          По итогу в данной теме будет скорее общая информация с небольшими
          элементами конкретики, если они есть и их можно использовать как 100%
          аргумент.
        </p>
      </template>
    </ItemMenu>
  </div>

  <!-- различия м+ от h-copy -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="Различие m+ от hi-copy на 5-8 сериях"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock
      :images="[
        '../../src/assets/img/difference/m+ h-copy.jpg',
        '../../src/assets/img/difference/m+ h-copy2.jpg',
      ]"
    >
      <p>
        С низкими моделями все очень просто, есть всего два качества: копия и
        переклей, они же hi-copy и mems+ соответственно.
        <br /><br />
        Тут все очень просто - на m+ украска идет отдельно от рамки, в правом
        окошке присутствует печать и яблоко, в h-copy же украска это часть рамки
        и окошко просто пустое. На наличие щитка не смотрим, он может быть, а
        может и не быть, его также могут случайно прикрепить на h-copy.
        <br />
        Еще можно обратить внимание на шлейф, у h-copy он будет более ватный и
        пустой, цветопередача и качество картинки тоже будет сильно отличаться в
        пользу переклея естественно.
      </p>
    </ImageTextBlock>
  </div>

  <!-- различия incell mems, mems oled, orig tech X-12 -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="Различия incell mems, mems oled, orig tech на X-12"
    >
    </FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock
      :images="[
        '../../src/assets/img/difference/jk.jpg',
        '../../src/assets/img/difference/jk1.jpg',
        '../../src/assets/img/difference/x-12.jpg',
        '../../src/assets/img/difference/x-12a.jpg',
      ]"
    >
      <p>
        Данные качества - копия завод, поэтому, с большей долей вероятности,
        задняя часть должна быть практически идеальной, никаких следов
        пайки/перепайки, порванной графитки и тд быть тут не может.
        <br /><br />
        Это довольно сложная группа и некоторые так сразу определить не
        получится. Я пойду по пути исключения и начну с самого простого: incell
        jk - у него на шлейфе и/или на рамке есть печать jk. Дополнительно сюда
        можно добавить - довольно хлипкий и тонкий шлейф, тусклая картинка тк
        это tft матрица.
        <br /><br />
        Далее довольно легко можно будет определить incell mems - он точная
        копия incell jk, только естественно без печати jk, шлейф тонкий,
        картинка тусклая, можно добавить еще отсутвие антистатики на рамке, но
        от партии к партии ситуация может меняться.
        <br />
        И наконец остались orig tech и mems oled, найти в них точные отличия
        довольно сложно тк в целом они идентичны как по картинке (она лучше
        предыдущих дисплеев тк здесь матрица oled), так и по внешнему виду,
        единственное мое наблюдение - шлейф на mems oled слегка лучше качеством
        и плотнее orig tech.
        <br /><br />
        Пока что мы не смотрим на матрицу, тк в копиях она может легко
        отличаться друг от друга даже в одном качетсве, но все они будут
        светлые, того самого идельно черного здесь не будет.
      </p>
    </ImageTextBlock>
  </div>

  <!-- GX -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="incell GX, он же GX oled"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="['../../src/assets/img/difference/gx.jpg']">
      <p>
        Самое простое качество, его невозможно спустать ни с чем другим, матрица
        олед, а значит картинка будет яркой, шлейф достаточно тонкий,
        характерный для копий.
      </p>
    </ImageTextBlock>
  </div>

  <!-- различия м+ от OEM -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="Различия mems+ от OEM"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock
      :images="[
        '../../src/assets/img/difference/m+.jpg',
        '../../src/assets/img/difference/m+2.jpg',
        '../../src/assets/img/difference/m+3.jpg',
        '../../src/assets/img/difference/m+4.jpg',
      ]"
    >
      <p>
        Тоже довольно неоднозначная группа, где при равных исходных довольно
        сложно определить кто есть кто. Здесь уже придется смотреть и на матрицу
        и на пайку и сравнивать множество других переменных. Тк это уже
        переклей, где mems+ глубокий, с заменой тача, а OEM без замены тача и в
        обоих случаях стекло срезается, то наличие волн и вмятин - обычное
        явление. Так же порванная графитка тоже встречается довольно часто.
        <br />
        <br />
        Ключевое и самое простое отличие м+ от оем - двойной нижний шлейф на м+.
        Но м+ может быть и с одинарным шлейфом. Еще одно важное отличие: OEM -
        черная матрица, тот самый идеально черный. Для примера я добавил
        различие оем и копии, которое очень сильно заметно, при таком же
        сравнении м+ и оем разница будет, но не настолько очевидная. В данном
        случае матрицы тоже могут отдавать различными оттенками,
        <u><i>НО оем никогда не должен быть синим</i></u
        >. <br /><br />
        м+ 11серии же в свою очередь делится на 2 качества с11 и dtp, это
        ревизия, различие на самом шлейфе, квадратный штрихкод - dtp,
        прямоугольный - c11.
        <br /><br />
        Отличить переклеи от копий довольно просто: шлейф у них всегда лучшего
        качества, он более плотный и упругий в отличие от переклеев, который в
        основнм ощущается пустым и ватным, матрица, качество пайки микросхем и
        сами надписи(они должны быть четкие и хорошо читаем, на копиях они
        мутные и неровные)
      </p>
    </ImageTextBlock>
  </div>

  <!-- различия м+ от OEM -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="Различия снятый от сервисный оригинал"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock
      :images="[
        '../../src/assets/img/difference/orig.jpg',
        '../../src/assets/img/difference/orig2.jpg',
        '../../src/assets/img/difference/orig3.jpg',
      ]"
    >
      <p>
        Оба этих дисплея внешне очень похожи, разница лишь в том, что сервисный
        это прям ориг, с ориг компонентами, который по тем или иным причинам не
        попал в финальную установку на смартфон, снятый же это, очевидно, снятый
        с телефона дисп, поэтому следы установки, грязная сетка динамика для
        него норма. Они оба должны быть с идеальным нижним шлейфом, надписи
        также четкие и легко читаемые, микросхема идеально ровная, компаунд
        может быть как глянцевый, так и матовый, это разница в производителе.
        Снятый может быть слегка изогнут, не более пары мм.. Шлейф на этих
        дисплеях тугой и достаточно упругий, матрица чистая, без волн, вмятин и
        прочего. Волны - признак переклея.
        <br /><br />
        Определить прям на 100%, при отсутствии признаков снятого, невозможно.
        Естественно если сервисный со шлейфом ставился, то он автоматически
        переходит в номенклатуру снятый, в любых других случаях определить
        качество будет практически невозможно.
      </p>
    </ImageTextBlock>
  </div>

  <!-- различия м+ от mems oled и orig tech -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="Различия mems+ от mems oled и orig tech на 13-16 сериях"
    >
    </FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock
      :images="[
        '../../src/assets/img/difference/m-mo-ot.jpg',
        '../../src/assets/img/difference/m-mo-ot2.jpg',
        '../../src/assets/img/difference/m-mo-ot3.jpg',
        '../../src/assets/img/difference/m-mo-ot4.jpg',
      ]"
    >
      <p>
        Внешне эти модели довольно похожи, за исключением mems oled, его шлейф
        достаточно легко узнать, на нем дорожки довольно сильно отличаются от
        других, микросхемы либо нет, либо стоит пустышка. Что же касется м+ и
        ориг теч - они довольно похожи. Шлейф на м+ чуть более гибкий, тогда как
        на ориг теч он тверже. Надписи на шлейфе на м+ зачастую качественнее,
        без размытия, но все перечисленое можно заметить только если их
        сравнивать лоб в лоб, тк эти различия очень незначительны. С
        уверенностью можно сказать, что на м+ на микросхеме есть яблоко, а на
        ориг течах его замазывают.
        <br /><br />
        Гораздо большее различие можно заметить если подкинуть этот дисплей,
        особенно на трубке, м+ дает более глубокий цвет (за счет большего
        цветового охвата sRGB) и не сыпется на артефакты в градиентах, тогда как
        мемс олед и ориг теч будут давать чуть более тусклую картинку, по
        сравнению с ним. Мемс олед - имеет более глубокий черный и серый цвет,
        ориг теч этим похвастаться не сможет и темные тона будут уходить в
        серый.
      </p>
    </ImageTextBlock>
  </div>

  <div class="menu-list">
    <!-- итого по качествам дисп  -->
    <ItemMenu imageSrc="../../src/assets/img/12.jpg">
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
          подробно.
          <br /><br />
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

  <!-- хай копи -->
  <FancyList>
    <FancyListItem class="tittle-back-display" number="Hi-copy"></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="[]">
      <p>
        Начнем с самого дешевого представителя копий, на текущий момент
        представлены они в сериях от 5 до 8. Говорить тут особо нечего, дешевые
        компоненты, матрица, шлейф и тд.
      </p>
    </ImageTextBlock>
  </div>

  <!-- incell jk -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="Incell JK"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="[]">
      <p>
        Серию incell открывает JK - как и все incell'ы JK имеет тфт матрицу с
        подсветкой, а значит, что он будет толще своих олед аналогов,
        цветопередача анлогично будет отличаться и не в его пользу. Эта копия
        собрана из довольно дешевых матриалов, что можно легко определить как
        визуально, так и тактильно. Шлейф либо тонкий и хлипкий, либо слишком
        тугой и "деревяный"
        <br />
        Что касается сравнения картинки с другим incell собратом - incell mems,
        у jk картинка гораздо лучше, у мемс же в свою очередб она более мутная и
        зернистая.
      </p>
    </ImageTextBlock>
  </div>

  <!-- incell mems -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="Incell MEMS"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="[]">
      <p>
        Далее идет incell mems - также с подсветкой на высоких моделях, тоже
        собранный на дешевых материалах, но по качеству проигрывает incell jk, в
        картинке уж точно, она более мутная и зернистая.
      </p>
    </ImageTextBlock>
  </div>

  <!-- gx -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="incell/oled GX"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="[]">
      <p>
        Данная модель полностью повторяет ориг дисплеи и соответсвенно на 11 и
        XR они представлены в виде incell - то есть тфт с подсветкой. Это китай
        завод, который делает матрицы на заказ, на данный момент очень хороший
        по качеству олед дисплей. Но тесты показали, что на некотрых моделях
        картинка на gx была чуть хуже чем на mems oled, она была более
        зернистая, но качество сборки у gx будет явно лучше.
      </p>
    </ImageTextBlock>
  </div>

  <!-- mems oled -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="MEMS OLED"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="[]">
      <p>
        Идеальный дисп для перепайки микросхемы, но - он хуже в сборке чем
        аналог в виде gx, но картинку на некоторых моделях выдает лучше, меньше
        зернит и сохраняет белый оттенок, не уходит в желтизну.
      </p>
    </ImageTextBlock>
  </div>

  <!-- orig tech -->
  <FancyList>
    <FancyListItem
      class="tittle-back-display"
      number="ORIG TECH"
    ></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="[]">
      <p>
        Orig tech - это технология, по которой произведен дисплей, то есть по
        оригинальной технологии. Самый близкий к ориг дисплею. Качество очень
        похоже на мемс олед, но цветопередача и картинка вцелом выглядит чуть
        лучше. На нем также же можно переносить микру, но делать это могут
        только опытные пайщики, тк шанс ошибки очень высок.
      </p>
    </ImageTextBlock>
  </div>

  <!-- mems+ -->
  <FancyList>
    <FancyListItem class="tittle-back-display" number="MEMS +"></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="[]">
      <p>
        Переходим от копий к переклеям в этой категории все дисплеи имеют
        оригинальную матрицу, но они все восстановленные
        <br />
        МЕМС+ до 12пм включительно и 13,14 базовые версии - это ориг матрица с
        меняным тачом (то есть шлейфом дисплея) и 50/50 поляриком. Оригинальная
        только матрица - это 100% МЕМС+. На 13про, 13пм, 14про и все дисплеи
        выше - это идеал восстановленный. Из меняного только стекло и рамка
      </p>
    </ImageTextBlock>
  </div>

  <!-- OEM -->
  <FancyList>
    <FancyListItem class="tittle-back-display" number="OEM"></FancyListItem>
  </FancyList>
  <div class="back-of-display">
    <ImageTextBlock :images="[]">
      <p>
        ОЕМ - это всегда восстановленный дисплей. На ОЕМ всегда ориг шлейф изо и
        матрица. На 12пм,12мини,13 и выше идет один шлейф на дисплей, то есть
        при замене тача всегда меняется шлейф. А на оем шлейф не меняный. На,
        например, айфоне 11 два шлейфа. Один на тач, другой на изо. Оем это тот,
        где шлейф изо не тронутый.
      </p>
    </ImageTextBlock>
  </div>
  <!-- канэц -->
</template>

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
