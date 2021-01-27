const db = firebase.firestore();
const eventForm = document.getElementById('event-form');
const eventContainer = document.getElementById('events-container');

let editStatus = false;
let id = '';

//Funcion que guarda eventos
const saveEvent =  (title, description, date, place) =>
    db.collection('events').doc().set({
        title: title,
        description: description,
        date: date,
        place: place
    })

//Funcion para pedir todos los datos desde firebase
const getEvents = () => db.collection('events').get();

//Funcion que nos regrese un evento, no confundir con el de arriba
const getEvent = (id) => db.collection('events').doc(id).get();

//Funciona que actualiza los datos cada que se realiza una accion
const onGetEvents = (callback) => db.collection('events').onSnapshot(callback);

//Funcion que borra evento
const deleteEvent = id => db.collection('events').doc(id).delete();

//Funcion que actualiza el evento
const updateEvent = (id, updatedEvent) => db.collection('events').doc(id).update(updatedEvent);

//Cuando carga el navegador se agrega una funcion que viene de firebase
//para actualizar el contenido en tiempo real
window.addEventListener('DOMContentLoaded', async (e) => {
    //Cada que ocurre un evento se ejecuta la siguiente funcion para actualizar el contenido
    onGetEvents((querySnapshot) => {

        //Para limpiar la ventana y no se dupliquen los datos
        eventContainer.innerHTML = '';
        querySnapshot.forEach(doc => {
    
            //Para no tener que llamar doc.data todo el tiempo
            const event = doc.data();
            event.id = doc.id;

            //Diseño para mostrar los datos
            eventContainer.innerHTML += `<div class="card card-body mt-2
            border-primary">
            <h3 class="h5">${event.title}</h3>
            <p>${event.description}<br>
            ${event.date}<br>
            ${event.place}</p>
            <div>
            <button class="btn btn-primary btn-delete" data-id="${event.id}">Delete</button>
            <button class="btn btn-secondary btn-edit" data-id="${event.id}">Edit</button>
            </div>
            </div>`

            const btnsDelete = document.querySelectorAll('.btn-delete');
            btnsDelete.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                  await deleteEvent(e.target.dataset.id);  
                })
            })

            const btnsEdit = document.querySelectorAll('.btn-edit');
            btnsEdit.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                   const doc =  await getEvent(e.target.dataset.id);
                    const event = doc.data();

                    editStatus = true;
                    id = doc.id;

                    eventForm['event-title'].value = event.title;
                    eventForm['event-description'].value = event.description;
                    eventForm['event-date'].value = event.date;
                    eventForm['event-place'].value = event.place;
                    eventForm['btn-event-form'].innerText = 'Update';
                })
            })
        })
    })
    
})

eventForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = eventForm['event-title'];
    const description = eventForm['event-description'];
    const date = eventForm['event-date'];
    const place = eventForm['event-place'];

    if (!editStatus) {
        await saveEvent(title.value, description.value, date.value, place.value);
    } else {
        await updateEvent(id, {
            title: title.value,
            description: description.value,
            date: date.value,
            place: place.value
        })

        //Cuando se edita un evento, el boton de save cambia a Update
        //Esta parte regresa el boton a su funcionamiento normal
        editStatus = false;
        id = '';
        eventForm['btn-event-form'].innerText = 'Save';
    }
    
    await getEvents();
    eventForm.reset();
    title.focus();
    
})