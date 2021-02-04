/**######################## CONTROLADOR ###################### **/
/* MAPA =============================================================================*/
var southEast = L.latLng(21.04986,-89.64667);
var northWest = L.latLng(21.04718,-89.64226);
var bounds = L.latLngBounds(southEast, northWest);

var mymap = L.map('myMap',{maxBounds: bounds, maxZoom: 18, minZoom: 17}).setView([21.04817, -89.64448], 18);
    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(mymap);
var marca = L.marker([21.04764, -89.644288]).addTo(mymap);
marca.bindPopup("FMAT");


/*
//FUNCION PARA MOSTRAR COORDENADAS EN EL MAPA, AL DARLE CLICK();
var popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("Has pulsado en el mapa en la coordenada " + e.latlng.toString())
    .openOn(mymap);
}
mymap.on('click', onMapClick);*/

/* var edificios = [[],[]]
edificios[0].push = [
    [21.047981, -89.644677],
    [21.048026, -89.644554],
    [21.048206, -89.644758],
    [21.048236, -89.644618]
    ] */

function clickEdificios(e){
    if(e===1){
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
    } else {
        clearImages(mymap);
    }
}



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
//export {getCoordenadas,getAllInfo, getInfo};
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
            marca.bindPopup(`<b>${event.title}</b><br>${event.date}`).openPopup();
        })
    })
    clearImages(mymap);
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
    clickEdificios(0);
}

/* Refrescar FUNCTION =================================================================*/
async function refreshEdificios(){   //EVENTOS-------------------------------------------
    clickEdificios(1);
    informationContainer.innerHTML =
    `<div class="row d-flex justify-content-center">
        <div class="col-lg-12">
            <table id="directorioEventos" class="table table-hover table-striped" style="width:100%">
                <thead>
                <th colspan="4" class="text-center"><h3>EVENTOS</h3></th>
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


/* AL CARGAR PÁGINA =================================================================*/
window.addEventListener('DOMContentLoaded', refresh)

/* BOTONES NAVBAR ===============================================================*/
// EDIFICIOS ===================================
document.getElementById("EdificiosBtn")
	.addEventListener("click", refreshEdificios)
//PROFESORES ===================================
document.getElementById("ProfesoresBtn")
	.addEventListener("click", refreshPersonal)
//EVENTOS ===================================
document.getElementById("EventosBtn")
	.addEventListener("click", refresh)