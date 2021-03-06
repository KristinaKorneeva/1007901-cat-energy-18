ymaps.ready(function () {
  var map = new ymaps.Map("map", {
    center: [59.938631, 30.323055],

    zoom: 17
  });

  pointer = new ymaps.Placemark([59.938631, 30.323055], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/map-pin.png',
    iconImageOffset: [-48, -75],
    iconImageSize: [90, 78]
  });

  var geoObjects = map.geoObjects.add(pointer);

  var currentPixelCenter = map.getGlobalPixelCenter();

  function setMapCenterOffset() {
    var offset = [300, 30];

    if (window.matchMedia("(min-width: 1300px)").matches) {
      map.setGlobalPixelCenter([currentPixelCenter[0] - offset[0], currentPixelCenter[1] - offset[1]]);
      pointer.options.set('iconImageOffset', [-20, -80]);
      pointer.options.set('iconImageSize', [120, 100]);
    } else if (window.matchMedia("(max-width: 767px)").matches) {
      pointer.options.set('iconImageOffset', [-30, -40]);
      pointer.options.set('iconImageSize', [61, 51]);
      map.setGlobalPixelCenter(currentPixelCenter);
    } else {
      map.setGlobalPixelCenter(currentPixelCenter);
      pointer.options.set('iconImageOffset', [-60, -50]);
      pointer.options.set('iconImageSize', [120, 100]);
    }
  }

  window.addEventListener('resize', setMapCenterOffset);
  setMapCenterOffset();
});
