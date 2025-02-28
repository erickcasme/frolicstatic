// Inicializar el mapa y establecer la vista
var map = L.map('map').setView([-13.359108778963062, -68.92280298801296], 6);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordenadas de las ubicaciones
var dia1 = [ -12.0219, -77.1143];
var dia2 = [ -11.954692905426247, -77.02635952377466];
var dia3 = [ -13.850080479569113, -76.25731662441424];
var dia4 = [ -13.53185734874885, -71.98516894771473];
var dia5 = [ -13.38694766047935, -71.8231207416938];
var dia6 = [ -13.365571082958118, -72.207642191374];
var dia7 = [ -12.969765527719435, -72.51525935111816];
var dia8 = [ -13.359108778963062, -71.92280298801296];



// Añadir marcadores al mapa
L.marker(dia1).addTo(map).bindPopup('Punto de inicio');
L.marker(dia2).addTo(map);
L.marker(dia3).addTo(map);
L.marker(dia4).addTo(map);
L.marker(dia5).addTo(map);
L.marker(dia6).addTo(map);
L.marker(dia7).addTo(map);
L.marker(dia8).addTo(map);

// Crear polígono que une las ubicaciones
var polygon = L.polygon([dia1, dia2, dia3,dia4,dia5,dia6,dia7,dia8]).addTo(map);

// Añadir popup al polígono
//polygon.bindPopup('Polígono que une las ubicaciones.');