/* 
    Estructura del bucle for

    for(desde; hasta; actualizacion){
        codigo a repetir
    }
*/

// i++ quiere decir esto => i = i + 1

// for(let i = 0; i < 100; i++){
//     console.log(i);
// }

// Crearemos un programa que me de la respesta de alguna tabla de multiplicacion

// let numero = Number(prompt("Ingrese el numero: "))

// for(let i=0; i <=10; i++){
//     let resultado = i * numero;
//     console.log(resultado);
// }


/* Suma de números pares: Escribe un programa que sume todos los números pares del 1 al 100 e imprima el resultado.
 */
/* for(let i = 0; i <= 100; i= i+2){
    console.log(i);
} */


/* Imprimir números pares del 1 al 20: Escribe un programa que imprima los números pares del 1 al 20 en la consola. */


// for(let i=0; i <=20; i= i+2){
//     console.log(i);
// }

/* Suma de los primeros N números naturales: Escribe un programa que calcule la suma de los primeros N números naturales, donde N es un número dado por el usuario.
 */
// po

/* Contar vocales en una cadena: Escribe un programa que cuente y muestre la cantidad de vocales (a, e, i, o, u) en una cadena dada por el usuario.
 */

/* let cadena = prompt("Ingrese una cadena de texto:").toLowerCase(); // Convertimos la cadena a minúsculas para hacer la comparación de manera no sensible a mayúsculas/minúsculas
let conteoVocales = 0;

for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        conteoVocales++;
    }
}

console.log(`La cantidad de vocales en la cadena "${cadena}" es: ${conteoVocales}`);
 */

/* Estructura del bucle while
    while(codicion){
        codigo a repetir siempre que que la codicion sea verdadera
    }
*/


