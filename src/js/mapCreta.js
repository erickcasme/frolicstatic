// Inicializar el mapa y establecer la vista
var map = L.map('map').setView([35.539984275945116, 27.140447211148512], 7);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordenadas de las ubicaciones
var dia1 = [35.3397648704152, 25.17606449579512];
var dia2 = [35.29790745144224, 25.738010405585385];
var dia3 = [35.29811448813758, 25.162824411136004];
var dia4 = [35.21646276755512, 24.536387418449245];
var dia5 = [35.372534202986515, 24.474360648411594];
var dia6 = [35.27180983058562, 23.54155332563838];
var dia7 = [35.51823793641299, 24.015281795331656];
var dia8 = [35.539984275945116, 24.140447211148512];



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