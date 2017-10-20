var pixel = 9;

var defaultTravelTimes = [900];

var polygonLayer = r360.leafletPolygonLayer().addTo(map);
polygonLayer.setColors([
     // { 'time': 300, 'opacity': 1.0, 'color': '#509373' },
     // { 'time': 600, 'opacity': 1.0, 'color': '#75c380' },
      { 'time': 900, 'opacity': 1.0, 'color': '#C1272D' }
     // { 'time': 1500, 'opacity': 1.0, 'color': '#C1272D' },
     // ["#509373", "#75c380", "#abcf79"]
  ]);
var showPolygons = function() {
    polygonLayer.setStrokeWidth(pixel);

  };
var defaultColors = r360.config.defaultTravelTimeControlOptions.travelTimes.filter(function(t){
  return defaultTravelTimes.indexOf(t.time) > -1;
}).map(function(t){
  return t.color;
});
// group.addTo(map)
function onClick (lata, travelOptions) {
  var { marker_id } = lata
  var marker = group.getLayer(marker_id)
  map.flyTo(marker.getLatLng(), 12);
  var polygonLayer = r360.leafletPolygonLayer()
  polygonLayer.addTo(map);
  var travelOptions = r360.travelOptions();
  travelOptions.setServiceKey('N2T7JHHPOTJAWSFQ7YOMJYH')
  travelOptions.setServiceUrl('https://service.route360.net/na_northeast/')
  travelOptions.addSource(marker);
  travelOptions.setTravelTimes([900])
  travelOptions.setTravelType('car');
  r360.PolygonService.getTravelTimePolygons(travelOptions, function(polygons){
    polygonLayer.setStrokeWidth(10);
    polygonLayer.clearAndAddLayers(polygons, false);
  });
}
