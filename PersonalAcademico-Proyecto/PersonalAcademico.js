const db = firebase.firestore();
const personalForm = document.getElementById('personal-form');
const personalContainer = document.getElementById('personals-container');

let editStatus = false;
let id = '';

//Funcion que guarda personal academico
const savePersonal =  (name, email, extension, place) =>
    db.collection('personal').doc().set({
        name: name,
        email: email,
        extension: extension,
        place: place,
    })


//Funcion para pedir todos los datos desde firebase
const getAllPersonal = () => db.collection('personal').get();

//Funcion que nos regresa los datos de algun personal, no confundir con el de arriba
const getPersonal = (id) => db.collection('personal').doc(id).get();

//Funciona que actualiza los datos cada que se realiza una accion
const onGetPersonal = (callback) => db.collection('personal').onSnapshot(callback);

//Funcion que borra personal
const deletePersonal = id => db.collection('personal').doc(id).delete();

//Funcion que actualiza los datos de la persona
const updatePersonal = (id, updatedPersonal) => db.collection('personal').doc(id).update(updatedPersonal);

//Cuando carga el navegador se agrega una funcion que viene de firebase
//para actualizar el contenido en tiempo real
window.addEventListener('DOMContentLoaded', async (e) => {
    //Cada que ocurre un evento se ejecuta la siguiente funcion para actualizar el contenido
    onGetPersonal((querySnapshot) => {

        //Para limpiar la ventana y no se dupliquen los datos
        personalContainer.innerHTML = '';
        querySnapshot.forEach(doc => {
    
            //Para no tener que llamar doc.data todo el tiempo
            const personal = doc.data();
            personal.id = doc.id;

            //Diseño para mostrar los datos
            personalContainer.innerHTML += `<div class="text-center">
                     <tbody>
                         <tr>
                             <td>${personal.name}</td>
                             <td><a href="mailto:email@foo.com">${personal.email}</a></td>
                             <td>${personal.extension}</td>
                             <td>${personal.place}</td>
                             <td><button class="btn btn-primary btn-delete" data-id="${personal.id}">Delete</button></td>
                             <td><button class="btn btn-secondary btn-edit" data-id="${personal.id}">Edit</button></td>
                         </tr>
                     </tbody>
                </div>`
          

            const btnsDelete = document.querySelectorAll('.btn-delete');
            btnsDelete.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                  await deletePersonal(e.target.dataset.id);  
                })
            })

            const btnsEdit = document.querySelectorAll('.btn-edit');
            btnsEdit.forEach(btn => {
                btn.addEventListener('click', async (e) => {
                   const doc =  await getPersonal(e.target.dataset.id);
                    const personal = doc.data();
                    editStatus = true;
                    id = doc.id;

                    personalForm['personal-name'].value = personal.name;
                    personalForm['personal-email'].value = personal.email;
                    personalForm['personal-extension'].value = personal.extension;
                    personalForm['personal-place'].value = personal.place;
                    personalForm['btn-personal-form'].innerText = 'Update';
                })
            })
        })
    })
    
})

personalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = personalForm['personal-name'];
    const email = personalForm['personal-email'];
    const extension = personalForm['personal-extension'];
    const place = personalForm['personal-place'];

    if (!editStatus) {
        await savePersonal(name.value, email.value, extension.value, place.value);
    } else {
        await updatePersonal(id, {
            name: name.value,
            email: email.value,
            extension: extension.value,
            place: place.value
        })

        //Cuando se edita los datos, el boton de save cambia a Update
        //Esta parte regresa el boton a su funcionamiento normal
        editStatus = false;
        id = '';
        personalForm['btn-personal-form'].innerText = 'Save';
    }
    
    await getAllPersonal();
    personalForm.reset();
    name.focus();
    
})