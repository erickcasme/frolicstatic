// Inicializar el mapa y establecer la vista
var map = L.map('map').setView([23.204127751993887, -80.03686992098234], 8); // Coordenadas del Aeropuerto Internacional Jorge Chávez

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordenadas de las ubicaciones
var ubicacion1 = [ 22.997886253481948, -82.40744701822837];
var ubicacion2 = [ 23.110487220670297, -82.44156171588462];
var ubicacion3 = [ 23.140325120452896, -82.35765292562428];
var ubicacion4 = [ 23.204127751993887, -81.03686992098234];


var c1 = L.icon({
    iconUrl: 'images/circulos/1.png', 
    iconSize: [28, 28], // Tamaño del icono
    iconAnchor: [0, 10], // Punto de anclaje del icono (la base del icono)
    popupAnchor: [0, -38] // Punto donde se abrirá el popup relativo al icono
});

var c2 = L.icon({
    iconUrl: 'images/circulos/2.png', 
    iconSize: [38, 38], // Tamaño del icono
    iconAnchor: [0, 0], // Punto de anclaje del icono (la base del icono)
    popupAnchor: [0, -38] // Punto donde se abrirá el popup relativo al icono
});

var c3 = L.icon({
    iconUrl: 'images/circulos/3.png', 
    iconSize: [38, 38], // Tamaño del icono
    iconAnchor: [0, 0], // Punto de anclaje del icono (la base del icono)
    popupAnchor: [0, -38] // Punto donde se abrirá el popup relativo al icono
});

var c4 = L.icon({
    iconUrl: 'images/circulos/4.png', 
    iconSize: [38, 38], // Tamaño del icono
    iconAnchor: [0, 0], // Punto de anclaje del icono (la base del icono)
    popupAnchor: [0, -38] // Punto donde se abrirá el popup relativo al icono
});


// Añadir marcadores al mapa
L.marker(ubicacion1, {icon: c1}).addTo(map).bindPopup('Punto de inicio');
L.marker(ubicacion2).addTo(map);
L.marker(ubicacion3).addTo(map);
L.marker(ubicacion4).addTo(map);

// Crear polígono que une las ubicaciones
var polygon = L.polygon([ubicacion1, ubicacion2, ubicacion3,ubicacion4]).addTo(map);

// Añadir popup al polígono
//polygon.bindPopup('Polígono que une las ubicaciones.');