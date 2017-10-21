var pixel = 9

var defaultTravelTimes = [900]

var polygonLayer = r360.leafletPolygonLayer().addTo(map)
polygonLayer.setColors([
     // { 'time': 300, 'opacity': 1.0, 'color': '#509373' },
     // { 'time': 600, 'opacity': 1.0, 'color': '#75c380' },
      { 'time': 900, 'opacity': 1.0, 'color': '#C1272D' }
     // { 'time': 1500, 'opacity': 1.0, 'color': '#C1272D' },
     // ["#509373", "#75c380", "#abcf79"]
])

$('#map').on('click', '.trigger', function onClick (marker, travelOptions) {
  polygonLayer.setStrokeWidth(pixel)
  var polygonLayer = r360.leafletPolygonLayer()
  polygonLayer.addTo(map)
  var travelOptions = r360.travelOptions()
  travelOptions.setServiceKey('N2T7JHHPOTJAWSFQ7YOMJYH')
  travelOptions.setServiceUrl('https://service.route360.net/na_northeast/')
  travelOptions.addSource(marker)
  travelOptions.setTravelTimes([900])
  travelOptions.setTravelType('car')
  r360.PolygonService.getTravelTimePolygons(travelOptions, function (polygons) {
    polygonLayer.setStrokeWidth(10)
    polygonLayer.clearAndAddLayers(polygons, false)
  })
});
