$(document).ready(function () {
  // Массив областей:
  const regions = [
    { region_name: 'Волынь', region_code: 'volyn', population: 1039000 },
    { region_name: 'Ровно', region_code: 'rivne', population: 1162000 },
    { region_name: 'Житомир', region_code: 'zhytomyr', population: 1236000 },
    { region_name: 'Киев', region_code: 'kiev', population: 2928000 },
    {
      region_name: 'Город Киев',
      region_code: 'kiev-city',
      population: 1742000,
    },
    { region_name: 'Сумы', region_code: 'sumy', population: 1099000 },
    { region_name: 'Полтава', region_code: 'poltava', population: 1420000 },
    { region_name: 'Харьков', region_code: 'kharkiv', population: 2700000 },
    { region_name: 'Луганск', region_code: 'luhansk', population: 2177000 },
    { region_name: 'Донецк', region_code: 'donetsk', population: 4218000 },
    {
      region_name: 'Днепропетровск',
      region_code: 'dnipropetrovsk',
      population: 3242000,
    },
    {
      region_name: 'Запорожье',
      region_code: 'zaporizhzhya',
      population: 1731000,
    },
    { region_name: 'Херсон', region_code: 'kherson', population: 1052000 },
    { region_name: 'Николаев', region_code: 'mykolayiv', population: 1145000 },
    {
      region_name: 'Кировоград',
      region_code: 'kirovohrad',
      population: 0962000,
    },
    { region_name: 'Черкасы', region_code: 'cherkasy', population: 1226000 },
    { region_name: 'Одесса', region_code: 'odessa', population: 2383000 },
    { region_name: 'Винница', region_code: 'vinnytsya', population: 1584000 },
    {
      region_name: 'Хмельницкий',
      region_code: 'khmelnytskyy',
      population: 1280000,
    },
    { region_name: 'Тернополь', region_code: 'ternopil', population: 1056000 },
    { region_name: 'Чернигов', region_code: 'chernihiv', population: 1027000 },
    { region_name: 'Чернивцы', region_code: 'chernivtsi', population: 0907000 },
    {
      region_name: 'Ивано-Франковск',
      region_code: 'ivano-frankivsk',
      population: 1378000,
    },
    {
      region_name: 'Закарпатье',
      region_code: 'transcarppathia',
      population: 1258000,
    },
    { region_name: 'Львов', region_code: 'lviv', population: 2531000 },
    {
      region_name: 'Город Севастополь',
      region_code: 'sevastpol-city',
      population: null,
    },
    { region_name: 'Крым', region_code: 'crimea', population: null },
  ];

  // Нахождение максимального значения населения:
  const tempArray = regions.map(item => item.population);
  const highestValue = Math.max.apply(Math, tempArray);

  // Добавление цвета и информации об обасти:
  regions.map(item => {
    $(`#${item.region_code}`)
      .css({
        fill: `rgba(11, 104, 170, ${item.population / highestValue}`,
      })
      .data('region', item);
  });

  // Показывание popup'a:
  $('.area')
    .mouseover(function (e) {
      const regionData = $(this).data('region');
      const population = regionData.population
        ? regionData.population.toLocaleString('en-UK')
        : 'no-data';

      // создаем поп-ап:
      $(
        '<div class="info-panel">' +
          regionData.region_name +
          '<br>' +
          'Population: ' +
          population +
          '</div>'
      ).appendTo('body');
    })
    .mouseleave(function () {
      // удаляем поп-ап:
      $('.info-panel').remove();
    })
    .mousemove(function (e) {
      let mouseX = e.pageX, // X coordinates of mouse
        mouseY = e.pageY; // Y coordinates of mouse

      // перемещаем поп-ап:
      $('.info-panel').css({
        top: mouseY - 50,
        left: mouseX - $('.info-panel').width() / 2,
      });
    });
});
