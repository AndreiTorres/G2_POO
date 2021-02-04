/* var southEast = L.latLng(21.04986,-89.64667);
var northWest = L.latLng(21.04718,-89.64226);
var bounds = L.latLngBounds(southEast, northWest);

let mymap = L.map('myMap',{maxBounds: bounds, maxZoom: 18, minZoom: 17}).setView([21.04817, -89.64448], 18);
L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(mymap);
var marca = L.marker([21.04798,-89.64426]).addTo(mymap);
marca.bindPopup("FMAT");
var marca2 = L.marker([21.04850,-89.64426]).addTo(mymap);
marca2.bindPopup("FMAT2");

var popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("Has pulsado en el mapa en la coordenada " + e.latlng.toString())
    .openOn(mymap);
}
mymap.on('click', onMapClick);
/* var edificios = [[],[]]
edificios[0].push = [
    [21.047981, -89.644677],
    [21.048026, -89.644554],
    [21.048206, -89.644758],
    [21.048236, -89.644618]
    ] *

var edificioA = L.polygon([
    [21.04789, -89.644503],
    [21.04764, -89.644428],
    [21.047605, -89.644594],
    [21.047855, -89.64468]
]).addTo(mymap);
edificioA.bindPopup("Edificia A")

var edificioC = L.polygon([
    [21.048432, -89.644825],
    [21.048527, -89.644524],
    [21.048422, -89.644487],
    [21.048342, -89.644787]
]).addTo(mymap);
edificioC.bindPopup("Edificio C");

var edificioD = L.polygon([
    [21.048537, -89.644449],
    [21.048622, -89.644143],
    [21.048517, -89.644111],
    [21.048437, -89.644417]
]).addTo(mymap);
edificioD.bindPopup("Edificio D");

var edificioE = L.polygon([
    [21.048206, -89.644758],
    [21.047981, -89.644677],
    [21.048026, -89.644554],
    [21.048236, -89.644618]
]).addTo(mymap);
edificioE.bindPopup("Edificio E");

var edificioH = L.polygon([
    [21.048748, -89.644519],
    [21.048833, -89.644218],
    [21.048737, -89.644186],
    [21.048657, -89.644492]
]).addTo(mymap);
edificioH.bindPopup("Edificio H");
 */


/* 
var edificios = [
    [[21.04789, -89.644503],[21.04764, -89.644428],[21.047605, -89.644594],[21.047855, -89.64468]],     //A = 0
    [[21.048021, -89.64409],[21.047966, -89.644277],[21.047725, -89.644197],[21.047765, -89.644009]],   //B = 1
    [[21.048432, -89.644825],[21.048527, -89.644524],[21.048422, -89.644487],[21.048342, -89.644787]],  //C = 2
    [[21.048537, -89.644449],[21.048622, -89.644143],[21.048517, -89.644111],[21.048437, -89.644417]],  //D = 3
    [[21.048206, -89.644758],[21.047981, -89.644677],[21.048026, -89.644554],[21.048236, -89.644618]],  //E = 4
    [[21.048748, -89.644519],[21.048833, -89.644218],[21.048737, -89.644186],[21.048657, -89.644492]]   //H = 5
];
var edificiosEnMapa = [[],[],[],[],[],[]];

function clickEdificios(e){

    if(e){ //Valor booleano
        for(let i=0; i< edificios.length; i++ ){
            edificiosEnMapa[i] = L.polygon([edificios[i]]);
            edificiosEnMapa[i].addTo(mymap);
            edificiosEnMapa[i].bindPopup("Edificio "+ (i+1));
        }
        /* edificioA.addTo(mymap); edificioA.bindPopup("Edificia A");
        edificioB.addTo(mymap); edificioB.bindPopup("Edificio B");
        edificioC.addTo(mymap); edificioC.bindPopup("Edificio C");
        edificioD.addTo(mymap); edificioD.bindPopup("Edificio D");
        edificioE.addTo(mymap); edificioE.bindPopup("Edificio E");
        edificioH.addTo(mymap); edificioH.bindPopup("Edificio H"); */

//    } else {
        /* limpiar(edificioA);
        limpiar(edificioB)
        limpiar(edificioC);
        limpiar(edificioD);
        limpiar(edificioE);
        limpiar(edificioH); */
/*        limpiarMapa();
    }
}

//Remover LAYER del mapa
function limpiarMapa(){
    mymap.removeLayer(edificios);
}
 */