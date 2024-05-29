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


// Siguiente ejercicio:

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

// ejemplo basico de un login

/* let usuario = prompt("Ingrese su nombre: ").toLowerCase();

while(usuario != "julian"){
    alert("Usuario incorreto")
    // colocamos nuevamente la salida devuelta dentro del bucle, porque sino lo hacemos se crea un bucle infinito, ya que la entrada del usurio seguira siendo la misma sin ninguna cambio y al ser verdadera ya que el nombre del usuario no es igual a la condicion que pusimos se vuelve a repetir indefinidamente. Por esta razon colocamos nuevamente la entrada hasta que escriba el nombre correcto.
    usuario = prompt("Ingrese su nombre: ").toLowerCase();
}

alert(`Bienvenido ${usuario}.`) */

// Estrutura del ciclo switch

/* 
    switch(valor){
        case (valor1):
        codigo a ejecutar cuando el valor es === valor1
        break;
        defaut: 
        codigo a ejecutar cuando ninguno de los valores coincide con el valor
        break;
    }
*/

// let moneda = prompt("ingrese el codigo de su moneda local:");

// switch(moneda){
//     case("ars"):
//         console.log("moneda de argentina");
//         break;
//     case("vef"):
//         console.log("moneda de venezuela");
//         break;
//     case("usd"):
//         console.log("moneda de estados unidos");
//         break;
//     default:
//         console.log("moneda no reconocida");    
// }

/* Ejercicios de practica */

// 1) Fácil (for): Escribe un programa que imprima los números del 1 al 10 utilizando un bucle for.

/* for(let i = 1; i <= 10; i++){
    console.log(i);
} */

// 2) Fácil (while): Crea un programa que solicite al usuario un número y luego imprima los números desde 1 hasta ese número utilizando un bucle while.

/* let solicitarNumero = Number(prompt("ingrese su numero favorito:"));

while(solicitarNumero){
    alert(`Vamos a imprimir los numeros del 1 hasta el numero que solicitaste`);
    for(let i= 1; i <= solicitarNumero; i++){
        console.log(i);
    }

    // Agregamos una condición para salir del bucle while
    let continuar = prompt("¿Desea ingresar otro número? (si/No)").toLowerCase();
    if (continuar !== "si") {
        break; // Sale del bucle while si la respuesta no es "sí"
    }
    solicitarNumero = Number(prompt("Ingrese otro número favorito:"));
} */

// 3) Fácil (switch): Haz un programa que solicite al usuario que ingrese un día de la semana y luego imprima un mensaje dependiendo del día utilizando un bloque switch. Por ejemplo, si el usuario ingresa "Lunes", el programa debe imprimir "Hoy es el primer día laboral de la semana".

/* const solicitarDiaDeLaSemana = prompt("Ingrese su dia favorito: ").toLowerCase();

switch(solicitarDiaDeLaSemana){
    case("lunes"):
        console.log("Hoy es el primer dia de la semana");
        break;
    case("martes"):
        console.log("Hoy es el segundo dia de la semana");
        break;
    case("miercoles"):
        console.log("Hoy es el tercer dia de la semana");
        break;
    case("jueves"):
        console.log("Hoy es el cuarto dia de la semana");
        break;
    case("viernes"):
        console.log("Hoy es el quinto dia de la semana");
        break;
    case("sabado"):
        console.log("Hoy es el sexto dia de la semana");
        break;
    case("domingo"):
        console.log("Hoy es el septimo  dia de la semana");
        break;
    default:
        console.log("Ingresaste un valor equivocado")
        break;    
} */

// 4) Fácil (for): Escribe un programa que calcule e imprima la tabla de multiplicar del 5 utilizando un bucle for.


/* let numero = 5;

for(let i= 0; i <=10; i++){
    resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
} */

// 5) Intermedio (while): Crea un programa que simule un juego de adivinanzas. El programa debe generar un número aleatorio entre 1 y 100. Luego, solicita al usuario que adivine el número. Si el usuario adivina correctamente, el programa debe imprimir "¡Felicitaciones! ¡Adivinaste el número!". Si la suposición es incorrecta, el programa debe indicar si el número es mayor o menor que el número generado y permitir al usuario intentarlo nuevamente. Utiliza un bucle while para esto.

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let numeroDeUsuario = Number(prompt("Ingrese un numero: "));

while(true){
    if(numeroDeUsuario === numeroAleatorio){
        alert("¡Felicitaciones! ¡Adivinaste el número!");
        break;
    } else if (numeroDeUsuario > numeroAleatorio){
        alert(`El ${numeroDeUsuario} es mayor que el numero aleatorio`);} 
        else if (numeroDeUsuario < numeroAleatorio){
        alert(`El ${numeroDeUsuario} es menor que el numero aleatorio`);};
        
    numeroDeUsuario = Number(prompt("Ingrese un numero: "))
};