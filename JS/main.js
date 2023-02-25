const divPasos = document.getElementById('newPasos');
const agregarPaso = document.getElementById('addPaso');

const botonVistaPrevia = document.getElementById('btnVistaPrevia');
const modal2 = document.getElementById('modal2Contenido');

let pasos = parseInt(1);
const addStep = ()=>{
    var html = '';
    html += '<div id="inputFormRow">';
    html += '<div class="input-group mb-3">';
    html += '<input type="text" name="Paso'+pasos+'" id="Paso'+pasos+'" class="form-control m-input" placeholder="Paso #'+pasos+'" autocomplete="off">';
    html += '<div class="input-group-append">';
    html += '<button id="removePaso" type="button" class="btn btn-danger">Borrar</button>';
    html += '</div>';
    html += '</div>';

    divPasos.innerHTML+=html;
    pasos=pasos+parseInt(1);
}
const mostrarDatos = ()=>{
    const form = document.getElementById('modal-body');
    var html = '';
    html += '<h3>Titulo</h3>';
    html += '<span>'+form['Titulo'].value+'</span>';
    modal2.innerHTML+=html;
}

$(document).on('click', '#removePaso', function () {
    $(this).closest('#inputFormRow').remove();
});

agregarPaso.addEventListener('click',addStep);
botonVistaPrevia.addEventListener('click',mostrarDatos);

window.addEventListener('DOMContentLoaded', (e)=>{
    location.href ="index2.html";
})