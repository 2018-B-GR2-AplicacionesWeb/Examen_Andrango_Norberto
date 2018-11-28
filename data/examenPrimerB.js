const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;






function inicialiarBDD() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'people.json',
                'utf-8',
                (error, contenidoArchivo) => { // CALLBACK
                    if (error) {

                        reject(error);

                    } else {
                        resolve(JSON.parse(contenidoArchivo))
                    }
                }
            )
        }
    );

}


async function main() {

    const respuestaBDD$ = rxjs.from(inicialiarBDD());

    respuestaBDD$
        .pipe(
            buscarTiposGender(),
            buscarTiposEyeColor(),
            buscarTiposSkinColor(),
            buscarTiposHairColor()

        )
        .subscribe(
            (data) => {
                //
                console.log(data);
            },
            (error) => {
                //
                console.log(error);
            },
            () => {
                main();
                console.log('Complete');
            }
        )

}


function buscarTiposGender() {
return mergeMap((respuesta)=>{
    var arregloActores=respuesta;
    arregloActores.forEach((elemento)=>{
        console.log(elemento['gender']);
    })


})

}


function buscarTiposEyeColor() {
    return mergeMap((respuesta)=>{
        var arregloActores=respuesta;
        arregloActores.forEach((elemento)=>{

            console.log(elemento['eye_color']);
        })


    })

}


function buscarTiposSkinColor() {
    return mergeMap((respuesta)=>{
        var arregloActores=respuesta;
        arregloActores.forEach((elemento)=>{
            console.log(elemento['skin_color']);
        })


    })

}

function buscarTiposHairColor() {
    return mergeMap((respuesta)=>{
        var arregloActores=respuesta;
        arregloActores.forEach((elemento)=>{
            console.log(elemento['hair_color']);
        })


    })

}

function clasificarPersonajesgenero() {


}





main();

