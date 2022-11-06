"use strict";

import { sacarTextoInputText, crearDisco } from "./biblioteca/bibliotecaJson.js";


window.onload = () => {


    var doc = window.document;

    let discos = [];



    doc.getElementById(`guardar`).addEventListener(`click`, () => {

        let obj = {};


        obj.nombreDisco = sacarTextoInputText(`nombreDisco`);

        obj.grupoInterp = sacarTextoInputText(`grupoInterp`);

        obj.anyoPubli = sacarTextoInputText(`anyoPubli`);

        obj.tipoMusica = sacarTextoInputText(`tipoMusica`);

        if (doc.getElementById(`false`).checked == true) {
            obj.prestamo = false;
        }
        else{
            obj.prestamo = true;
        }

        discos.push(obj);

    });


    doc.getElementById(`mostrar`).addEventListener(`click`, () => {


        for (let i = 0; i < discos.length; i++) {
            doc.getElementById(`verDiscos`).append(crearDisco(discos[i], `discos`));
            
        }


    });







} //Fin del código onload.