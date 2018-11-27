$(document).ready(function(){
  var cors = 'https://cors-anywhere.herokuapp.com/';
  var core = 'https://api.darksky.net/forecast/'
  var key = '14ec81354f09385efad26a6fcbf109fe';
  var url = cors + core + key;
  var coords = {
    scl: '-33.4377968,-70.6504451',
    val: '-33.0458456,-71.6196749'
}

var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]','lang=es', 'units=auto']

$('#selector').on('change', function(){
  $.ajax({
    url: url + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
    method:'GET'
  }).then(function(data) {
    console.log(data);
    $('#resumen').text(parseInt(data.currently.temperature) + 'º ' + data.currently.summary)
  }).catch(function(e) {
    console.log('error', e);

  });
 })
});









    /*var cors = 'https://cors-anywhere.herokuapp.com/';
    var core = 'https://api.darksky.net/forecast/';
    var key = '14ec81354f09385efad26a6fcbf109fe/';
    var url = cors + core + key;

    var cities = [
      { name: 'Santiago', coords: { lat: -33.4377968 ,lng: -70.6504451 }},
      { name: 'Valparaiso', coords: { lat: -33.0458456 ,lng: -71.6196749 }},
    ]

$('#selector').on('change', function(){
    $.ajax({
      url: url + '',
      method:'GET',
    }).then(function(data) {
      console.log(data);
    }).catch(function(e) {
      console.log('error', e);
    });

  })
});*/
