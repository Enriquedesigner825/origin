/* const inputSearch = document.querySelector('#search');
const priority = document.querySelector('#priority');
const btn = document.querySelector('#btn')
let id = 3;
btn.addEventListener('submit', getDataForm);

function saveTarea(pList, pTarea) {
    //antes de hacer push del nuevo empleado debo comprobar si existe en la base de datos. tengo que buscar un empleado con el mismo correo si lo encuentro return KO y si no OK
    let duplicado = pList.findIndex(tarea => tarea.titulo === pTarea.titulo)
    if (duplicado === -1) {
        //puedo hacer push
        pList.push(pTarea);
        return 'usuario guardado';
    }
    //no puedo hacer push
    return 'usuario duplicado'

} console.log(tareas)

function printOneTarea(pTarea, pDom) {
    const article = document.createElement('article'); //<article></article>
    const p = document.createElement('p'); // <h3></h3>



    article.append(p);
    pDom.appendChild(article);



}
function comprobarForm(pForm) {
    return titulo.value !== "" && prioridad.value !== ""
}




function getDataForm(event) {
    //para prevenir la accion por defecto tanto form como de enlaces, debo hacerlos lo primero de todo.
    event.preventDefault();

    //para capturar los campos de un formulario nos valemos de su name para recoger value.
    if (comprobarForm(event.target)) {
        const newTarea = {
            idTarea: id,
            titulo: event.target.titulo.value,
            prioridad: event.target.prioridad.value,

        }


        //guardar el empleado en el array
        let guardado = saveTarea(tareas, newTarea)
        //imprimirlo
        if (guardado === 'usuario guardado') {
            printOneTarea(newTarea, sectionTareas)
            id++;
            //reseteo el form
            event.target.reset();
        } else {
            alert(guardado);
            event.target.titulo.style.border = '3px solid tomato';
        }
    } else {
        alert('Este campo no puede estar vacio')
    }
}

function printAllTareas(pList, pDom) {
    pList.forEach(tarea => printOneTarea(tarea, pDom));
}

printAllTareas(tareas, sectionTareas) */