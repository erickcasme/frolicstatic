// Inicializar el mapa y establecer la vista
var map = L.map('map').setView([32.00059205016604, 36.8705129361099], 6);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordenadas de las ubicaciones
var dia1 = [ 32.07823687588973,  34.76700411288302];
var dia2 = [ 32.06943975735097,  34.76461490912758];
var dia3 = [ 32.06556895480981,  34.77670766864903];
var dia4 = [ 32.8162625184527,  34.99443077418961];
var dia5 = [ 32.70725282771111, 35.301726268679396];
var dia6 = [ 32.88190929265422,  35.57330517443442];
var dia7 = [ 31.874743575747267,  35.43231742297448];
var dia8 = [ 31.451273126411376, 35.38241751939832];
var dia9 = [ 31.776864804365562,  35.23454068212835];
var dia10 = [ 31.778608960647205, 35.22967529747136];
var dia11 = [ 31.70611139612799,  35.202313684761684];
var dia12 = [ 31.767691208459294, 35.21655331666361];
var dia13 = [ 32.00059205016604, 34.8705129361099];



// Añadir marcadores al mapa
L.marker(dia1).addTo(map).bindPopup('Punto de inicio');
L.marker(dia2).addTo(map);
L.marker(dia3).addTo(map);
L.marker(dia4).addTo(map);
L.marker(dia5).addTo(map);
L.marker(dia6).addTo(map);
L.marker(dia7).addTo(map);
L.marker(dia8).addTo(map);
L.marker(dia9).addTo(map);
L.marker(dia10).addTo(map);
L.marker(dia11).addTo(map);
L.marker(dia12).addTo(map);
L.marker(dia13).addTo(map);

// Crear polígono que une las ubicaciones
var polygon = L.polygon([dia1, dia2, dia3,dia4,dia5,dia6,dia7,dia8,dia9,dia10,dia11,dia12,dia13]).addTo(map);

// Añadir popup al polígono
//polygon.bindPopup('Polígono que une las ubicaciones.');