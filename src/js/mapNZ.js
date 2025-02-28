// Inicializar el mapa y establecer la vista
var map = L.map('map').setView([-40.03316794833932, 184.66157823682576], 5);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordenadas de las ubicaciones
var dia1 = [-36.84093400478991, 174.75710886888783];
var dia2 = [-36.8477860923995, 174.83441884122132];
var dia3 = [-37.87190312337597, 175.68290800942142];
var dia4 = [-40.221160641702255, 176.35728795092083];
var dia5 = [-45.02980975127507, 168.65842397265263];
var dia6 = [-44.67002599274044, 167.9223465987204];
var dia7 = [-45.03316794833932, 168.66157823682576];



// Añadir marcadores al mapa
L.marker(dia1).addTo(map).bindPopup('Punto de inicio');
L.marker(dia2).addTo(map);
L.marker(dia3).addTo(map);
L.marker(dia4).addTo(map);
L.marker(dia5).addTo(map);
L.marker(dia6).addTo(map);
L.marker(dia7).addTo(map);

// Crear polígono que une las ubicaciones
var polygon = L.polygon([dia1, dia2, dia3,dia4,dia5,dia6,dia7]).addTo(map);

// Añadir popup al polígono
//polygon.bindPopup('Polígono que une las ubicaciones.');