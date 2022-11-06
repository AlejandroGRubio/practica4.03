"use strict";

import { sacarTextoInputText, crearDisco, validarDatosDisco } from "./biblioteca/bibliotecaJson.js";
import { generarTextoError, quitarTextoError } from "./biblioteca/bibliotecaEj.js";

window.onload = () => {


    var doc = window.document;

    let discos = [];



    doc.getElementById(`guardar`).addEventListener(`click`, () => {

        let obj = {};

        obj.nombreDisco = sacarTextoInputText(`nombreDisco`);

        obj.grupoInterp = sacarTextoInputText(`grupoInterp`);

        obj.anyoPubli = sacarTextoInputText(`anyoPubli`);

        obj.tipoMusica = sacarTextoInputText(`tipoMusica`);

        obj.localizacion = sacarTextoInputText(`localizacion`);

        if (doc.getElementById(`false`).checked == true) {
            obj.prestamo = false;
        }
        else{
            obj.prestamo = true;
        }

        if (validarDatosDisco(obj) == true) {
            quitarTextoError(`error`, `oculto`);
            discos.push(obj);
        }
        else{
            generarTextoError(`Datos erroneos, compruebalos`, `error`,`verDiscos`);
        }




        

    });


    doc.getElementById(`mostrar`).addEventListener(`click`, () => {


        for (let i = 0; i < discos.length; i++) {
            doc.getElementById(`verDiscos`).append(crearDisco(discos[i], `discos`));
            
        }


    });







} //Fin del código onload.