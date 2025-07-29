// src/data/displayBack.js

const imageModules = import.meta.glob(
  '@/assets/img/back of display/**/**/*.{jpg,png}',
  { eager: true, import: 'default' }
);

// Группируем изображения по моделям (по папке)
const displayBackData = {

  // 5s
  "Задняя часть дисплея 5s": {
    images: [
      imageModules['/src/assets/img/back of display/5s/5s.jpg'],
      imageModules['/src/assets/img/back of display/5s/5s2.jpg'],
    ],
    description: `
       Итак, начнем с 5s, не думаю, что тут надо что то расписывать, самая
          маленькая модель, темная подсветка и шлейф сверху
          <br />
          Еще к особенностям этой модели добавлю - что шлейф очень хрупкий и
          загибать его нежелательно
    `,
  },

  // 6
  "Задняя часть дисплея 6": {
    images: [
      imageModules['/src/assets/img/back of display/6/6.jpg'],
      imageModules['/src/assets/img/back of display/6/6-2.jpg'],
    ],
    description: `
       Продолжаем, 6. Можно сказать, что это та же 5, но больших размеров,
          такая же темная подсветка и шлейф по прежнему находится сверху
    `,
  },


  // 6+
  "Задняя часть дисплея 6 plus": {
    images: [
      imageModules['/src/assets/img/back of display/6+/6+.jpg'],
      imageModules['/src/assets/img/back of display/6+/6+2.jpg'],
    ],
    description: `
        Продолжая традицию с 6 моделью - 6 plus - это та же 6 только больших
          размеров. Но все же одно отличие у них есть - уши крепления к корпусу
          шире, чем на 6
    `,
  },

};

export { displayBackData };