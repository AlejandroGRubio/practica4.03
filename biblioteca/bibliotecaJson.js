"use strict";


var doc = window.document;

//Saca el value del input.
export function sacarTextoInputText(nomId) {
    

    var cont = doc.getElementById(nomId);

    return cont.value;



}

//Crea un div con los diferentes datos del objeto.
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



//Valida los datos del disco según se pedia.
export function validarDatosDisco(datosObj) {
    
    var expNombre = new RegExp("^.{5,}$");
    var expAnyo = new RegExp("^[0-9]{4}$");
    var expLocalizador = new RegExp("^[A-Z]{2}[-]{1}[0-9]{3}[A-Z]{2}$");

    if (expNombre.test(datosObj[`nombreDisco`]) == false) {
        console.log(`errorNombreDisco`);
        return false;
    }
    if (expNombre.test(datosObj[`grupoInterp`]) == false) {
        console.log(`errorGrupo`);
        return false;
    }
    if (expAnyo.test(datosObj[`anyoPubli`]) == false) {
        console.log(`errorAño`);
        return false;
    }
    if (expLocalizador.test(datosObj[`localizacion`]) == false) {
        console.log(`errorLocaliza`);
        return false;
    }


    return true;



}