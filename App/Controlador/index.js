/**######################## CONTROLADOR ###################### **/

/* MAPA =============================================================================*/
var southEast = L.latLng(21.04986,-89.64667);
var northWest = L.latLng(21.04718,-89.64226);
var bounds = L.latLngBounds(southEast, northWest);

let mymap = L.map('myMap',{maxBounds: bounds, maxZoom: 18, minZoom: 18}).setView([21.04817, -89.64448], 18);
L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(mymap);
var marca = L.marker([51.505, -0.09]).addTo(mymap);


/* Definición DB ===============================================================*/
const db = firebase.firestore();
const eventContainer = document.getElementById('events-container');
//const sectionInformacion = document.getElementById("events-container");

//
const getEvents = () => db.collection('events').get();
const onGetEvents = (callback) => db.collection('events').onSnapshot(callback);

/* Refrescar FUNCTION =================================================================*/
async function refresh(){
    const querySnapshot = await getEvents();
    
    eventContainer.innerHTML =
    `<div class="container">
        <div class="row">
            <div class="col-lg-12">
                <table id="directorio" class="table table-hover" style="width:100%">
                    <thead class="text-center">
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Place</th>
                    </thead>
                    <tbody id="CuerpoEventos">
                        
                    </tbody>
                </table>
            </div>
        </div> 
    </div>
    `;

    querySnapshot.forEach(doc =>{
        //console.log(doc.data())
        const event = doc.data();
        //eventContainer.innerHTML +=
        document.getElementById("CuerpoEventos").innerHTML+=
        `<tr>
            <td>${event.title}</td>
            <td>${event.description}</td>
            <td>${event.date}</td>
            <td>${event.place}</td>
            <td><button class="btn btn-seconday btn-show" data-id="${event.id}">Show</button></td>
        </tr>`;
    })
}

/* CARGAR PÁGINA =================================================================*/
window.addEventListener('DOMContentLoaded', refresh)

/* BOTONES NAVBAR ===============================================================*/
// EDIFICIOS ===================================
document.getElementById("EdificiosBtn")
	.addEventListener("click", function(){
		eventContainer.innerHTML = `
		<div class="Edificios">
        	<h3 class="subTitle">Ejemplo_1</h3>
			<ul>
				<li>Lorem, ipsum dolor.</li>
				<li>Lorem, ipsum.</li>
				<li>Lorem, ipsum dolor.</li>
				<li>Lorem, ipsum dolor.</li>
			</ul>
    	</div>
		`
		alert("EDIFICIOS FUNCION");
	})
//SALONES ===================================
document.getElementById("SalonesBtn")
	.addEventListener("click", function(){
		alert("SALONES FUNCION");
	})
//PROFESORES ===================================
document.getElementById("ProfesoresBtn")
	.addEventListener("click", function(){
		alert("PROFESORES FUNCION");
	})
//EVENTOS ===================================
document.getElementById("EventosBtn")
	.addEventListener("click", refresh)