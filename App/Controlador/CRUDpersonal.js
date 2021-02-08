const db = firebase.firestore();
const personalForm = document.getElementById('personal-form');
const personalContainer = document.getElementById('personals-container');

let editStatus = false;
let id = '';

//Academic staff saving function
const savePersonal =  (name, email, extension, place) =>
    db.collection('personal').doc().set({
        name: name,
        email: email,
        extension: extension,
        place: place,
    })

//Function to request all data from firebase
const getAllPersonal = () => db.collection('personal').get();

//Function that returns the data of some personnel, not to be confused with the one above
const getPersonal = (id) => db.collection('personal').doc(id).get();

//It works that updates the data every time an action is performed
const onGetPersonal = (callback) => db.collection('personal').onSnapshot(callback);

//Personal deleting function
const deletePersonal = id => db.collection('personal').doc(id).delete();

//Function that updates the person's data
const updatePersonal = (id, updatedPersonal) => db.collection('personal').doc(id).update(updatedPersonal);

//When the browser loads a function that comes from firebase is added
//to update content in real time
window.addEventListener('DOMContentLoaded', async (e) => {
    //Every event that occurs, the following function is executed to update the content
    onGetPersonal((querySnapshot) => {

        //To clean the window and not duplicate data
        personalContainer.innerHTML = '';
        //Layout to display the data
        personalContainer.innerHTML +=
        `<div class="row">
            <table id="directorio" class="table table-hover" style="width:100%">
                <thead>
                    <tr class="text-center">
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Extension</th>
                        <th scope="col">Cubiculo</th>
                    </tr>
                </thead>
                <tbody class="text-center" id="cuerpoPersonalCRUD"> 
                
                </tbody>
            </table>
        </div>`
        querySnapshot.forEach(doc => {
    
            //So you don't have to call doc.data all the time
            const personal = doc.data();
            personal.id = doc.id;
            //Internal DESIGN BOARD BODY
            document.getElementById("cuerpoPersonalCRUD").innerHTML+=
            `<tr>
                <td>${personal.name}</td>
                <td><a href="mailto:email@foo.com">${personal.email}</a></td>
                <td>${personal.extension}</td>
                <td>${personal.place}</td>
                <td><button class="btn btn-primary btn-delete" data-id="${personal.id}">Delete</button></td>
                <td><button class="btn btn-secondary btn-edit" data-id="${personal.id}">Edit</button></td>
            </tr>`          

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

        //When the data is edited, the save button changes to Update
        //This part returns the button to normal operation.
        editStatus = false;
        id = '';
        personalForm['btn-personal-form'].innerText = 'Save';
    }
    
    await getAllPersonal();
    personalForm.reset();
    name.focus();
    
})