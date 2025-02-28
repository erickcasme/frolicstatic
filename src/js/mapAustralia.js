// Inicializar el mapa y establecer la vista
var map = L.map('map').setView([-33.948307736246385, 153.18183967646013], 6);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordenadas de las ubicaciones
var dia1 = [ -37.669252103016156, 144.8401662516667];
var dia2 = [ -38.646463881160784, 143.0705093959711];
var dia3 = [ -37.812619759990625, 144.98005716708977];
var dia4 = [ -33.948307736246385, 151.18183967646013];
var dia5 = [ -33.85658836221254, 151.21529669572072];
var dia6 = [ -33.78952687473376, 150.8675958245532];
var dia7 = [ -33.948307736246385, 151.18183967646013];



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