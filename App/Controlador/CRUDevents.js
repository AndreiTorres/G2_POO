const db = firebase.firestore();
const eventForm = document.getElementById('event-form');
const informationContainer = document.getElementById('information-container');

let editStatus = false;
let id = '';

//Function that saves events
const saveEvent =  (title, description, date, place, build) =>
    db.collection('events').doc().set({
        title: title,
        description: description,
        date: date,
        place: place,
        build: build
    })

//Function to get the coordinates from firebase
const getCoordenadas = (id) => db.collection('events').doc(id).get('build');

//Function to request all data from firebase
const getEvents = () => db.collection('events').get();

//Function that an event returns us, not to be confused with the one above
const getEvent = (id) => db.collection('events').doc(id).get();

//It updates the data every time an action is performed
const onGetEvents = (callback) => db.collection('events').onSnapshot(callback);

//Function that deletes event
const deleteEvent = id => db.collection('events').doc(id).delete();

//Function that updates the event
const updateEvent = (id, updatedEvent) => db.collection('events').doc(id).update(updatedEvent);

//When the browser loads, a function that comes from firebase is added to update the content in real time
window.addEventListener('DOMContentLoaded', async (e) => {
    //Every event that occurs, the following function is executed to update the content
    onGetEvents((querySnapshot) => {

        //To clean the window and not duplicate data
        informationContainer.innerHTML = '';
        //Layout to display the data
        informationContainer.innerHTML +=
        `<div class="row">
            <div class="col-lg-12">
            <table id="directorio" class="table table-hover" style="width:100%">
                <thead>
                    <tr clas="text-center">    
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Place</th>
                    </tr>
                </thead>
                <tbody id="cuerpoEventosCRUD">

                </tbody>
            </table>
            </div>
        </div>`;

        querySnapshot.forEach(doc => {
            //So you don't have to call doc.data all the time
            const event = doc.data();
            event.id = doc.id;
            //Table Design
            document.getElementById("cuerpoEventosCRUD").innerHTML+=
            `<tr>
                <td>${event.title}</td>
                <td>${event.description}</td>
                <td>${event.date}</td>
                <td>${event.place}</td>
                <td><button class="btn btn-primary btn-delete" data-id="${event.id}">Delete</button></td>
                <td><button class="btn btn-secondary btn-edit" data-id="${event.id}">Edit</button></td>
                <!--<td><button class="btn btn-seconday btn-show" data-id="${event.id}">Show</button></td>-->
            </tr>`;

            // Shows the building coordinates when the Show Map button is pressed
            /*const btnsShow = document.querySelectorAll('.btn-show');
            btnsShow.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const doc =  await getCoordenadas(e.target.dataset.id);
                    const event = doc.data();
                    var coordenadas = event.build.split(",");
                    var latlng = L.latLng(coordenadas[0], coordenadas[1]);
                    marca.setLatLng(latlng)
                })
            })*/


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
                    eventForm['event-build'].value = event.build;
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
    const build = eventForm['event-build'];

    if (!editStatus) {
        await saveEvent(title.value, description.value, date.value, place.value, build.value);
    } else {
        await updateEvent(id, {
            title: title.value,
            description: description.value,
            date: date.value,
            place: place.value,
            build: build.value
        })

        //When an event is edited, the save button changes to Update
        //This part returns the button to normal operation.
        editStatus = false;
        id = '';
        eventForm['btn-event-form'].innerText = 'Save';
    }
    
    await getEvents();
    eventForm.reset();
    title.focus();
    
})