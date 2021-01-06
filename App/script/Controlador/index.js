/**######################## CONTOLADOR ###################### **/
/*============NAVBAR============*/
menu = document.getElementById("navMenu");

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
//EDIFICIOS ___________________________________
document.getElementById("EdificiosBtn")
	.addEventListener("click", function(){
		window.alert("EDIFICIOS FUNCION");
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
	var map = L.map('map').setView([21.04817, -89.64448], 18).addLayer(osm);
	L.marker([21.04817, -89.64448])
		.addTo(map).bindPopup('FMAT').openPopup();