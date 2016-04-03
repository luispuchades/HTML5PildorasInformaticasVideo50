/*global window */
/*global alert */
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - Web Storage III
 * Origin: Capitulo50.html ==> Local Storage. Información casi permanente
 */

// "use strict";


//1. Definición de Objetos y Variables
var botonGrabar;
var zonaDatos;



//1.1 Extracción de elementos desde HTML
botonGrabar = document.getElementById("grabar");
zonaDatos = document.getElementById("zona-datos");



//2. Definición de Funciones

function eliminarTodo() {
    'use strict';

    if (confirm("¿Estás seguro?")) {
//        sessionStorage.clear();
        localStorage.clear();
        itemMostrar();
    }
}

function eliminarItem(itemClavePosicion) {
    'use strict';

    if (confirm("Estás seguro?")) {
//        sessionStorage.removeItem(itemClavePosicion);
        localStorage.removeItem(itemClavePosicion);
        itemMostrar();
    }
}



function itemMostrar() {
    'use strict';

    var itemValorMostrar;
    var i;
    var itemClavePosicion;

//    itemValorMostrar = sessionStorage.getItem(itemClave);

//    itemValorMostrar = sessionStorage[itemClave];

    zonaDatos.innerHTML = "";

// Introducimos un botón que borrará el contenido
    zonaDatos.innerHTML = '<div><button onclick = "eliminarTodo()">Eliminar todo</button></div>';


//    for (i = 0; i < sessionStorage.length; i = i + 1) {
    for (i = 0; i < localStorage.length; i = i + 1) {

//        itemClavePosicion = sessionStorage.key(i);
        itemClavePosicion = localStorage.key(i);
//        itemValorMostrar = sessionStorage.getItem(itemClavePosicion);
        itemValorMostrar = localStorage.getItem(itemClavePosicion);
        zonaDatos.innerHTML += '<div>Clave: ' + itemClavePosicion + '--' + 'Valor: ' + itemValorMostrar + '<br />' + '<button onclick ="eliminarItem(\'' + itemClavePosicion + '\') ">Eliminar Item </button></div>';
    }
}


function itemNuevo() {
    'use strict';

    var itemClave;
    var itemValor;


//OJO DEFINIMOS itemClave e itemValor como variables locales. Si las
// definimos como variables generales, no funciona
    itemClave = document.getElementById("clave").value;
    itemValor = document.getElementById("valor").value;


//    sessionStorage.setItem(itemClave, itemValor);
    localStorage.setItem(itemClave, itemValor);

//El métodx sessionStorage.setItem(itemClave, itemValor) puede ser sustituido por
// la expresión sessionStorage[itemClave] = itemValor;
//    sessionStorage[itemClave] = itemValor;

    itemMostrar(itemClave);


    document.getElementById("clave").value = "";
    document.getElementById("valor").value = "";

}




function comenzar() {
    'use strict';

    botonGrabar.addEventListener("click", itemNuevo, false);

}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
