"use strict";


var doc = window.document;


export function sacarTextoInputText(nomId) {
    

    var cont = doc.getElementById(nomId);

    return cont.value;



}


export function crearDisco(datosObj, nomId) {
    

    var cont = doc.createElement(`div`);

    var text;

    console.log(cont);

    for (const key in datosObj) {
        

        text = doc.createElement(`p`);
        text.innerHTML = `<p>${key}: ${datosObj[key]}</p>`;
        cont.appendChild(text);

    }

    cont.setAttribute(`class`, nomId);

    return cont;

}