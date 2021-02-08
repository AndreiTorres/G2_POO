/**######################## CONTROLER ###################### **/
/* MAP =============================================================================*/
var southEast = L.latLng(21.04986,-89.64667);
var northWest = L.latLng(21.04718,-89.64226);
var bounds = L.latLngBounds(southEast, northWest);

let mymap = L.map('myMap',{maxBounds: bounds, maxZoom: 18, minZoom: 17}).setView([21.04817, -89.64448], 18);
    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(mymap);
var marca = L.marker([21.04764, -89.644288]).addTo(mymap);
marca.bindPopup("FMAT").openPopup();;

//FUNCTION TO SHOW COORDINATES ON THE MAP;
var popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("Has pulsado en el mapa en la coordenada " + e.latlng.toString())
    .openOn(mymap);
}
mymap.on('click', onMapClick);

//By clicking on BUILDINGS. The same is activated by clicking on the other options: Its negative side
function clickEdificios(e){
    var edificioA = L.polygon([
        [21.04789, -89.644503],[21.04764, -89.644428],[21.047605, -89.644594],[21.047855, -89.64468]
    ]);
    var edificioB = L.polygon([
        [21.048021, -89.64409],[21.047966, -89.644277],[21.047725, -89.644197],[21.047765, -89.644009]
    ]);
    var edificioC = L.polygon([
        [21.048432, -89.644825],[21.048527, -89.644524],[21.048422, -89.644487],[21.048342, -89.644787]
    ]);
    var edificioD = L.polygon([
        [21.048537, -89.644449],[21.048622, -89.644143],[21.048517, -89.644111],[21.048437, -89.644417]
    ]);
    var edificioE = L.polygon([
        [21.048206, -89.644758],[21.047981, -89.644677],[21.048026, -89.644554],[21.048236, -89.644618]
    ]);
    var edificioH = L.polygon([
        [21.048748, -89.644519],[21.048833, -89.644218],[21.048737, -89.644186],[21.048657, -89.644492]
    ]);

    if(e){ //Boolean value
        edificioA.addTo(mymap); edificioA.bindPopup("Edificia A");
        edificioB.addTo(mymap); edificioB.bindPopup("Edificio B");
        edificioC.addTo(mymap); edificioC.bindPopup("Edificio C");
        edificioD.addTo(mymap); edificioD.bindPopup("Edificio D");
        edificioE.addTo(mymap); edificioE.bindPopup("Edificio E");
        edificioH.addTo(mymap); edificioH.bindPopup("Edificio H");
    } else {
        limpiar();
    }
}
//Remove LAYER from the map
function limpiar(){
    for(let i in mymap._layers){
        if(mymap._layers[i]._path != undefined){
            try{
                //console.log(mymap._layers[i]);
                mymap.removeLayer(mymap._layers[i]);
            } catch(e){
                console.log("problem with " + e + mymap._layers[i]);
            }
        }
    }
}

/* DB Definition ===============================================================*/
const db = firebase.firestore();
const informationContainer = document.getElementById('information-container');
//const sectionInformacion = document.getElementById("events-container");

// Get coordinates
const getCoordenadas = (id,option) => db.collection(option).doc(id).get('build');
// Function to request all data from firebase
const getAllInfo = (option) => db.collection(option).get();
// Function that returns us the data of some TYPE / OPTION, not to be confused with the one above
const getInfo = (id, option) => db.collection(option).doc(id).get();
// Export {getCoordenadas,getAllInfo, getInfo};


/* Refresh FUNCTION =================================================================*/
async function refresh(){   //EVENTS-------------------------------------------
    clickEdificios(false);                               //Change table-striped for table format
    informationContainer.innerHTML =
    `<div class="row d-flex justify-content-center">
        <div class="col-lg-12">
            <table id="directorioEventos" class="table table-hover table-striped" style="width:100%">
                <thead>
                    <th colspan="4" class="text-center"><h3>EVENTOS</h3></th>                
                    <th scope="col" >
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle far fa-sun" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        CRUDS
                        </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="Vista/CRUDevents.html">EVENTOS</a></li>
                                <li class="divider"></li>
                                <li><a class="dropdown-item" href="Vista/CRUDpersonal.html">PERSONAL</a></li>
                            </ul>
                        </div>
                    </th>
                </thead>
                <tbody id="CuerpoEventos">
                    
                </tbody>
            </table>
        </div>
    </div>`;
    const cuerpoEvento = document.getElementById("CuerpoEventos");
    const querySnapshot = await getAllInfo('events');
    querySnapshot.forEach(doc =>{
        //To omit doc.data, we use "event" omit
        const event = doc.data();
        event.id = doc.id;
        cuerpoEvento.innerHTML+=
        `<tr>
            <td>${event.title}</td>
            <td>${event.description}</td>
            <td>${event.date}</td>
            <td>${event.place}</td>
            <td><button class="btn btn-secondary btn-show" data-id="${event.id}">Mostar</button></td>
        </tr>`;
    })
    //Shows the coordinates of the building when the Show Map button is pressed ==========
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
}

/* ADMINISTRATIVE FUNCTION =================================================================*/
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
                    <th scope="col" >
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle far fa-sun" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                CRUDS
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="Vista/CRUDevents.html">EVENTOS</a></li>
                                <li class="divider"></li>
                                <li><a class="dropdown-item" href="Vista/CRUDpersonal.html">PERSONAL</a></li>
                            </ul>
                        </div>
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

    //Shows the coordinates of the building when the Show Map button is pressed==========
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
    clickEdificios(false);
}

/* Refresh FUNCTION =================================================================*/
async function refreshEdificios(){   //EVENTS-------------------------------------------
    clickEdificios(true);
    informationContainer.innerHTML =
    `<div class="row d-flex justify-content-center">
        <div class="col-lg-12">
            <table id="directorioEventos" class="table table-hover table-striped" style="width:100%">
                <thead>
                <th colspan="4" class="text-center"><h3>EVENTOS</h3></th>
                <th scope="col">
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle far fa-sun" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    CRUDS
                    </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="Vista/CRUDevents.html">EVENTOS</a></li>
                            <li class="divider"></li>
                            <li><a class="dropdown-item" href="Vista/CRUDpersonal.html">PERSONAL</a></li>
                        </ul>
                    </div>
                </th>
                </thead>
                <tbody id="CuerpoEventos">
                    
                </tbody>
            </table>
        </div>
    </div>`;
    const cuerpoEvento = document.getElementById("CuerpoEventos");
    const querySnapshot = await getAllInfo('events');
    querySnapshot.forEach(doc => {
        //To omit doc.data, we use "event"
        const event = doc.data();
        event.id = doc.id;
        cuerpoEvento.innerHTML+=
        `<tr>
            <td>${event.title}</td>
            <td>${event.description}</td>
            <td>${event.date}</td>
            <td>${event.place}</td>
            <td><button class="btn btn-secondary btn-show" data-id="${event.id}">Mostrar</button></td>
        </tr>`;
    })
    //Shows the coordinates of the building when the Show Map button is pressed ==========
    const btnsShow = document.querySelectorAll('.btn-show');
    btnsShow.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const doc =  await getCoordenadas(e.target.dataset.id,'events');
            const event = doc.data();
            event.id = doc.id;
            var coordenadas = event.build.split(",");
            var latlng = L.latLng(coordenadas[0], coordenadas[1]);
            marca.setLatLng(latlng)
            marca.bindPopup(`<b>${event.title}</b><br>${event.date}`).openPopup();   
/*            //<tr> <td> <button> e.target <\> <\> <\>
            console.log(event.id);
            var tarjeta = e.target.parentNode.parentNode;
            var eventId = await getInfo(event.id, 'events');
            //var boton = e.target.parentNode.sibling;
            
            tarjeta.innerHTML +=
            `<tr>
                <td>${eventId.description}</td>
                <td>${eventId.date}</td>
            </tr>`
            
            console.log(tarjeta);*/
        })
    })
}

/* WHEN LOADING PAGE =================================================================*/
window.addEventListener('DOMContentLoaded', refresh);

/* NAVBAR BUTTONS ===============================================================*/
// BUILDINGS ===================================
document.getElementById("EdificiosBtn")
	.addEventListener("click", refreshEdificios);
//PROFESOR ===================================
document.getElementById("ProfesoresBtn")
	.addEventListener("click", refreshPersonal);
//EVENTS ===================================
document.getElementById("EventosBtn")
	.addEventListener("click", refresh);