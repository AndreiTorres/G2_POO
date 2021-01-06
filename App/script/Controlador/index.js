/**######################## CONTROLADOR ###################### **/
/*============NAVBAR============*/

var menu = document.getElementById("navMenu");

//Click fuera de navBar button -------------------------------------------------
window.onclick = function(event) {
	if (!(event.target.matches('.icon-bar-button')
	|| event.target.matches('.icon-bar'))
	&& menu.classList.contains("showMenu")) {
		console.log(menu.className);
		menu.classList.toggle("showMenu");
		console.log(menu.className);
	}
}
//Toggle navBar -----------------------------------------------------------------
document.getElementById("btnMenu")
	.addEventListener("click", function(){
		menu.classList.toggle("showMenu");
});

//BOTONES NAVBAR ---------------------------------------------------------------
var sectionInformacion = document.getElementById("informacion");
//EDIFICIOS ___________________________________
document.getElementById("EdificiosBtn")
	.addEventListener("click", function(){
		sectionInformacion.innerHTML
		alert("EDIFICIOS FUNCION");
	})
//SALONES ___________________________________
document.getElementById("SalonesBtn")
	.addEventListener("click", function(){
		alert("SALONES FUNCION");
	})
//PROFESORES ___________________________________
document.getElementById("ProfesoresBtn")
	.addEventListener("click", function(){
		alert("PROFESORES FUNCION");
	})
//ENLINEA ___________________________________
document.getElementById("EnlineaBtn")
	.addEventListener("click", function(){
		alert("ENLINEA2 FUNCION");
	})

/*============MAPA============*/
var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {maxZoom: 20, attribution: osmAttrib});


var southEast = L.latLng(21.04986,-89.64667);
var northWest = L.latLng(21.04718,-89.64226);
var bounds = L.latLngBounds(southEast, northWest);

var map = L.map('map',{maxBounds: bounds, maxZoom: 19, minZoom: 18}).setView([21.04817, -89.64448], 18).addLayer(osm);


var ubicacion1 = new Ubicacion("Cafeteria", 1,21.04986,-89.64667);
console.log("hola")



//var map = L.map('map').setView([21.04817, -89.64448], 18).addLayer(osm);
//	L.marker([21.04817, -89.64448]).addTo(map).bindPopup('FMAT').openPopup();



