"use strict";

import { insertarEtiquetaById } from "./biblioteca/bibliotecaEj.js";

window.onload = () => {


    var doc = window.document;

    //Mira y va cambiando las poblaciones según las provincias.
    doc.getElementById(`provinciaSelect`).addEventListener(`click`, () => {

        if (doc.getElementById(`provincia`).value == `alicante`) {

            if (doc.getElementById(`poblacionCas`) != undefined) {
                doc.getElementById(`poblacionCas`).id = `poblacionCasOculto`;
            }

            if (doc.getElementById(`poblacionVal`) != undefined) {
                doc.getElementById(`poblacionVal`).id = `poblacionValOculto`;
            }

            if (doc.getElementById(`poblacionAliOculto`) == undefined) {
                
            }
            else{
                doc.getElementById(`poblacionAliOculto`).id = `poblacionAli`; 
            }     

        }
        else if (doc.getElementById(`provincia`).value == `castellon`) {
            
            if (doc.getElementById(`poblacionAli`) != undefined) {
                doc.getElementById(`poblacionAli`).id = `poblacionAliOculto`;
            }

            if (doc.getElementById(`poblacionVal`) != undefined) {
                doc.getElementById(`poblacionVal`).id = `poblacionValOculto`;
            }

            if (doc.getElementById(`poblacionCasOculto`) == undefined) {
                
            }
            else{
                doc.getElementById(`poblacionCasOculto`).id = `poblacionCas`;
            }

        }
        else if (doc.getElementById(`provincia`).value == `valencia`) {

            if (doc.getElementById(`poblacionAli`) != undefined) {
                doc.getElementById(`poblacionAli`).id = `poblacionAliOculto`;
            }

            if (doc.getElementById(`poblacionCas`) != undefined) {
                doc.getElementById(`poblacionCas`).id = `poblacionCasOculto`;
            }


            if (doc.getElementById(`poblacionValOculto`) == undefined) {
                
            }
            else{
                doc.getElementById(`poblacionValOculto`).id = `poblacionVal`;
            }         

        }
        else if (doc.getElementById(`provincia`).value == `nada`) {
            
            if (doc.getElementById(`poblacionAli`) != undefined) {
                doc.getElementById(`poblacionAli`).id = `poblacionAliOculto`;
            }

            if (doc.getElementById(`poblacionVal`) != undefined) {
                doc.getElementById(`poblacionVal`).id = `poblacionValOculto`;
            }

            if (doc.getElementById(`poblacionCas`) != undefined) {
                doc.getElementById(`poblacionCas`).id = `poblacionCasOculto`;
            }

        }

    });

    //Añade una linea diciendo si es correcta la selección de provincias y poblaciones.
    doc.getElementById(`submit`).addEventListener(`click`, () => {

       
        if (doc.getElementById(`provincia`).value == `alicante`) {
            
            if (doc.getElementById(`poblacionAli`) == undefined || doc.getElementById(`poblacionAliDato`).value == `nada`) {
                insertarEtiquetaById(`p`, `Seleccione una población correcta.`, `si`, `texto`);
            }
            else if (doc.getElementById(`poblacionAliDato`).value == `alicante`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Alicante y la población de Alicante es correcta.`, `feo`, `texto`);
            }
            else if (doc.getElementById(`poblacionAliDato`).value == `elche`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Alicante y la población de Elche es correcta.`, `feo`, `texto`);
            }
            else if (doc.getElementById(`poblacionAliDato`).value == `petrer`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Alicante y la población de Petrer es correcta.`, `feo`, `texto`);
            }

        }
        else if (doc.getElementById(`provincia`).value == `castellon`) {
            
            if (doc.getElementById(`poblacionCas`) == undefined || doc.getElementById(`poblacionCasDato`).value == `nada`) {
                insertarEtiquetaById(`p`, `Seleccione una población correcta.`, `si`, `texto`);
            }
            else if (doc.getElementById(`poblacionCasDato`).value == `castellon`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Castellón y la población de Castellón es correcta.`, `feo`, `texto`);
            }
            else if (doc.getElementById(`poblacionCasDato`).value == `oropesa`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Castellón y la población de Oropesa es correcta.`, `feo`, `texto`);
            }
            else if (doc.getElementById(`poblacionCasDato`).value == `vinaroz`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Castellón y la población de Vinaroz es correcta.`, `feo`, `texto`);
            }

        }
        else if (doc.getElementById(`provincia`).value == `valencia`) {
            
            if (doc.getElementById(`poblacionVal`) == undefined || doc.getElementById(`poblacionValDato`).value == `nada`) {
                insertarEtiquetaById(`p`, `Seleccione una población correcta.`, `si`, `texto`);
            }
            else if (doc.getElementById(`poblacionValDato`).value == `valencia`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Valencia y la población de Valencia es correcta.`, `feo`, `texto`);
            }
            else if (doc.getElementById(`poblacionValDato`).value == `xativa`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Valencia y la población de Xàtiva es correcta.`, `feo`, `texto`);
            }
            else if (doc.getElementById(`poblacionValDato`).value == `torrent`) {
                insertarEtiquetaById(`p`, `La selección de la provincia de Valencia y la población de Torrent es correcta.`, `feo`, `texto`);
            }

        }
        else if (doc.getElementById(`provincia`).value == `nada`) {
            
            insertarEtiquetaById(`p`, `Seleccione una provincia correcta.`, `si`, `texto`);

        }
  

    });

} //Fin del código onload.