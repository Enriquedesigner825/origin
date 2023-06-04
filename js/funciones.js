const inputRegister = document.querySelector('#nuevaTarea');
const selectPrioridad = document.querySelector('.prioridad');
const btn = document.querySelector('#boton')
const realizarTareas = document.querySelector('#realizarTareas')
let idTarea = 3;
btn.addEventListener('click', getDataForm)

function saveTarea(pList, pTarea) {
    let duplicado = pList.findIndex(tarea => tarea.titulo === pTarea.titulo)
    if (duplicado === -1) {
        pList.push(pTarea);
        return 'tarea guardada'

    }
    return 'tarea duplicada'
}

function printOneTarea(pTarea, pDom) {
    /* const div = document.createElement('div') */
    const article = document.createElement('article'); //<article></article>
    const ul = document.createElement('ul'); // <ul></ul>

    ul.innerHTML = `<li>Titulo: ${pTarea.titulo}</li>
                    <li>Prioridad: ${pTarea.prioridad}</li>`;


    article.append(ul);
    pDom.append(article);
}



function getDataForm(event) {
    //para prevenir la accion por defecto tanto form como de enlaces, debo hacerlos lo primero de todo.
    event.preventDefault();

    //para capturar los campos de un formulario nos valemos de su name para recoger value.
    if (inputRegister.value === "" || selectPrioridad.value === "") {
        alert('No se puede encontrar vacio')
    }
    const newTarea = {
        id: idTarea,
        titulo: inputRegister.value,
        prioridad: selectPrioridad.value,
    }


    //guardar el empleado en el array
    let guardado = saveTarea(tareas, newTarea)
    //imprimirlo
    if (guardado === 'tarea guardada') {
        printOneTarea(newTarea, realizarTareas)
        idTarea++;

    } else {
        alert(guardado);

    }
}

function printAllTareas(pList, realizarTareas) {
    pList.forEach(tarea => printOneTarea(tarea, realizarTareas));
}

printAllTareas(tareas, realizarTareas);


function filterTareasByPriority(pList, pPrioridad) {
    const filterList = [];

    for (let tarea of pList) {
        if (tarea.prioridad.toLowerCase().includes(pPrioridad.toLowerCase())) {
            filterList[filterList.length] = tarea;
        }
    }
    return filterList;
}