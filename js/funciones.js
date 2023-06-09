const inputRegister = document.querySelector('#nuevaTarea');
const selectPrioridad = document.querySelector('.prioridad');
const btn = document.querySelector('#boton')
const realizarTareas = document.querySelector('#sectionTareas')
const searchPrioridad = document.querySelector('.search')
const inputTitulo = document.querySelector('#buscarTarea');
const inputSearch = document.querySelector('#buscarTarea');


let idTarea = 3;
btn.addEventListener('click', getData)



function getData(event) {

    event.preventDefault();


    if (inputRegister.value === "" && selectPrioridad.value === "") {
        alert('No se puede encontrar vacio')
    }
    const newTarea = {
        id: idTarea,
        titulo: inputRegister.value,
        prioridad: selectPrioridad.value,
    }


    let guardado = saveTarea(tareas, newTarea)

    if (guardado === 'tarea guardada') {
        printOneTarea(newTarea, realizarTareas)
        idTarea++;
    } else {
        alert(guardado);

    }
    inputRegister.value = "";


}

function saveTarea(pList, pTarea) {
    let duplicado = pList.findIndex(tarea => tarea.titulo === pTarea.titulo)
    if (duplicado === -1) {
        pList.push(pTarea);
        return 'tarea guardada'

    }
    return 'tarea duplicada'
}

function printOneTarea(pTarea, pDom) {

    const article = document.createElement('article');
    const ul = document.createElement('ul');
    const a = document.createElement('a');
    const li = document.createElement('li')

    ul.innerHTML = `<li> ${pTarea.titulo}</li>`;
    article.classList.add(pTarea.prioridad)


    a.dataset.id = pTarea.id;
    a.addEventListener('click', deleteItem)
    a.href = "#";
    a.classList.add('boton');
    a.textContent = 'Borrar';

    article.append(ul, li, a);
    pDom.append(article);

}


function printAllTareas(pList, realizarTareas) {
    pList.forEach(tarea => printOneTarea(tarea, realizarTareas));
    realizarTareas.innerHTML = "";
    if (pList.length !== 0) {
        pList.forEach(tarea => printOneTarea(tarea, realizarTareas));
    }
}



printAllTareas(tareas, realizarTareas);



function getPrioridad(event) {

    let listaFiltrada = filterTareaByPrioridad(tareas, event.target.value);
    printAllTareas(listaFiltrada, realizarTareas);

}


searchPrioridad.addEventListener('change', getPrioridad);

function filterTareaByPrioridad(pTareasList, pPrioridad) {
    const filterList = [];

    for (let tarea of pTareasList) {
        if (tarea.prioridad.toLowerCase().includes(pPrioridad.toLowerCase())) {
            filterList[filterList.length] = tarea;
        }
    }
    return filterList;
}


inputSearch.addEventListener('keypress', getSearch);

function getSearch(event) {


    let word = "";
    if (event.target.id === 'buscarTarea') {

        if (event.key === 'Enter') {
            word = event.target.value;
        }
    }
}
function filterByWord(pList, pWord) {
    return pList.filter(tareas => tareas.titulo.toLowerCase().includes(pWord.toLowerCase()))

}



function getName(event) {
    let palabraBuscar = event.target.value;
    let listaFiltrada = filterByWord(tareas, palabraBuscar);
    printAllTareas(listaFiltrada, sectionTareas);
}

inputTitulo.addEventListener('keypress', getName);

function deleteItemArray(pId, pList) {

    let posicionBorrar = pList.findIndex(item => item.idTarea === pId);
    if (posicionBorrar !== -1) {
        pList.splice(posicionBorrar, 1);
    }

}

function deleteItem(event) {
    event.preventDefault()

    let id = parseInt(event.target.dataset.id)


    const articleDelete = event.target.parentNode;
    articleDelete.parentNode.removeChild(articleDelete);

    deleteItemArray(id, tareas);
}






