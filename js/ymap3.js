ymaps.ready(init);

function init() {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
            center: [48.3206, 40.2611],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Создаем круг.
    var myCircle = new ymaps.Circle([
        // Координаты центра круга.
        [48.3206, 40.2611],
        // Радиус круга в метрах.
        2000
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        balloonContent: "Радиус круга - 10 км",
        // Содержимое хинта.
        hintContent: "Подвинь меня"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: true,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#DB709377",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 5
    });

    // Добавляем круг на карту.
    myMap.geoObjects.add(myCircle);
}