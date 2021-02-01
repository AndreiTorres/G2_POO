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
const informationContainer = document.getElementById('information-container');
//const sectionInformacion = document.getElementById("events-container");

//Obtener coordenadas
const getCoordenadas = (id,option) => db.collection(option).doc(id).get('build');
//Funcion para pedir todos los datos desde firebase
const getAllInfo = (option) => db.collection(option).get();
//Funcion que nos regresa los datos de algun TIPO/OPCION, no confundir con el de arriba
const getInfo = (id, option) => db.collection(option).doc(id).get();

/* Refrescar FUNCTION =================================================================*/
async function refresh(){   //EVENTOS-------------------------------------------
    informationContainer.innerHTML =
    `<div class="row d-flex justify-content-center">
        <div class="col-lg-12">
            <table id="directorioEventos" class="table table-hover" style="width:100%">
                <thead>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Place</th>
                <th scope="col">
                    <a class="btn btn-secondary" id="btnCRUD" href="paginas/CRUDevents.html">
                        <i class="far fa-sun">CRUD</i>
                    </a>
                </th>
                </thead>
                <tbody id="CuerpoEventos">
                    
                </tbody>
            </table>
        </div>
    </div>`;

    const querySnapshot = await getAllInfo('events');
    querySnapshot.forEach(doc =>{
        //Para omitir doc.data, usamos "event"
        const event = doc.data();
        event.id = doc.id;
        const cuerpoEvento = document.getElementById("CuerpoEventos");
        cuerpoEvento.innerHTML+=
        `<tr>
            <td>${event.title}</td>
            <td>${event.description}</td>
            <td>${event.date}</td>
            <td>${event.place}</td>
            <td><button class="btn btn-secondary btn-show" data-id="${event.id}">Show</button></td>
        </tr>`;
    })
    //Muestra las coordenadas del edificio cuando se aprieta el boton Show Map ==========
    const btnsShow = document.querySelectorAll('.btn-show');
    btnsShow.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const doc =  await getCoordenadas(e.target.dataset.id,'events');
            const event = doc.data();
            var coordenadas = event.build.split(",");
            var latlng = L.latLng(coordenadas[0], coordenadas[1]);
            marca.setLatLng(latlng)
        })
    })
}

/* ADMINISTRATIVO FUNCTION =================================================================*/

async function refreshPersonal(){   //PERSONAL --------------------------------
    informationContainer.innerHTML =
    `<div class="row d-flex justify-content-center">
        <div class="col-lg-12">
            <table id="directorioPersonal" class="table table-hover" style="width:100%">
                <thead>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Extension</th>
                    <th scope="col">Cubiculo</th>
                    <th scope="col">
                    <a class="btn btn-secondary" id="btnCRUD" href="paginas/CRUDpersonal.html">
                        <i class="far fa-sun">CRUD</i>
                    </a>
                </th>
                </thead>
                <tbody id="CuerpoPersonal">
                </tbody>
            </table>
        </div>
    </div>`;

    const querySnapshot = await getAllInfo('personal');
    querySnapshot.forEach(doc =>{
        const personal = doc.data();
        personal.id = doc.id;
        const cuerpoPersonal = document.getElementById("CuerpoPersonal");
        cuerpoPersonal.innerHTML+=
        `<tr>
            <td>${personal.name}</td>
            <td><a href="mailto:email@foo.com">${personal.email}</a></td>
            <td>${personal.extension}</td>
            <td>${personal.place}</td>
            <td><button class="btn btn-secondary btn-show" data-id="${personal.id}">Show</button></td>
        </tr>`;
    })

    //Muestra las coordenadas del edificio cuando se aprieta el boton Show Map ==========
    const btnsShow = document.querySelectorAll('.btn-show');
    btnsShow.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const doc =  await getCoordenadas(e.target.dataset.id, 'personal');
            const event = doc.data();
            var coordenadas = event.build.split(",");
            var latlng = L.latLng(coordenadas[0], coordenadas[1]);
            marca.setLatLng(latlng)
        })
    })
}

/* AL CARGAR PÁGINA =================================================================*/
window.addEventListener('DOMContentLoaded', refresh)

/* BOTONES NAVBAR ===============================================================*/
// EDIFICIOS ===================================
document.getElementById("EdificiosBtn")
	.addEventListener("click", function(){
		informationContainer.innerHTML = `
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
	.addEventListener("click", refreshPersonal)
//EVENTOS ===================================
document.getElementById("EventosBtn")
	.addEventListener("click", refresh)