/* const arreglosDeNumeros = [1,2,3,4,5];

console.log(arreglosDeNumeros[0]);

let resultado = arreglosDeNumeros[2] + arreglosDeNumeros[0];

console.log(resultado);

// Recorrer elementos de un array

const lista = ["mate", "pepsi", "coca-cola", "harina-pan"];

lista.push("chocolate");

// Se recorre con un bucle for 

for(let i= 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// el metodo length nos permite ver la cantidad total de elemetos presente en una variable

//agregar elementos al final de un array

arreglosDeNumeros.push(6);
console.log(arreglosDeNumeros);

// unshitf agrega elementos al inicio de un array
arreglosDeNumeros.unshift(0);
console.log(arreglosDeNumeros);

// pop nos eliminia el ultimo elemento de un array
arreglosDeNumeros.pop();
console.log(arreglosDeNumeros);

// shift nos eliminia el primer elemetno de un array
arreglosDeNumeros.shift()
console.log(arreglosDeNumeros);

// splice elimina 1 o varios elementos en cualquier posicion
arreglosDeNumeros.splice(1,3);
console.log(arreglosDeNumeros);

// join une en un solo string todos los elementos del arreglo separados por el parametro

console.log(arreglosDeNumeros.join("===="));

// concat uno dos arrays en uno 

const varios = lista.concat(arreglosDeNumeros);
console.log(varios);

// indexOf buca la posicion de un elemento del arreglo
console.log(arreglosDeNumeros.indexOf(5));

//includes verifica la existencia de un elemento dentro del arreglo
console.log(arreglosDeNumeros.includes(5));

let numero = Number(prompt("Ingrese un numero:"));

if(arreglosDeNumeros.includes(numero)){
    alert("ingresaste el numero 5");
} else {
    alert("No ingresaste el numero 5");
} */


// 1) Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.


/* const numeros = (numero) => {
    let suma = 0;
    for(let i = 0; i < numero.length; i++){
        suma += numero[i];
    }
    return suma;
    
}

const arreglosDeNumeros = [1,2,3,4,5,6,7,8,9];
const resultado = numeros(arreglosDeNumeros);
console.log(resultado); */

// 2) Crea una función que tome un array de calificaciones y calcule el promedio de las mismas.

/* const calcularCalificaciones = (calificaciones) => {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }

    return suma / calificaciones.length;
}

const calificaciones = [10,8,7.5,5];
const resultado = calcularCalificaciones(calificaciones);
console.log(resultado); */

// 3) Implementa una función que tome un array y elimine los elementos duplicados, devolviendo un nuevo array sin duplicados.

/* const eliminarDuplicados = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const elementosDuplicados = ["mate", "cafe", "mate", "pepsi"];
const resultado = eliminarDuplicados(elementosDuplicados);
console.log(resultado);
 */

/* 
Ordenar números:
Escribe una función que tome un array de números y los ordene de menor a mayor.
*/

// function ordenarNumeros(array) {
//     /* Esta función ordenarNumeros toma un array de números como argumento. Primero, hace una copia superficial del array original usando slice() para no modificar el array original. Luego, utiliza el método sort() para ordenar los elementos del array. La función de comparación (a, b) => a - b indica que sort() debe ordenar los elementos de menor a mayor. Finalmente, devuelve el array ordenado. */
//     return array.slice().sort((a, b) => a - b);
// }

/* // Ejemplo de uso:
const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const numerosOrdenados = ordenarNumeros(numeros);
console.log(numerosOrdenados); // Esto imprimirá [1, 1, 2, 3, 4, 5, 5, 6, 9] */

// Crea una función que tome un array de strings y un número como argumentos. La función debería devolver un nuevo array que contenga solo los strings cuya longitud sea mayor que el número dado.

// function filtrarPorLongitud(array, longitudMinima) {
//     /* Esta función filtrarPorLongitud toma dos argumentos: un array de strings (array) y un número (longitudMinima). Utiliza el método filter() para crear un nuevo array que contenga solo los elementos del array original (array) que cumplen con la condición de tener una longitud mayor que longitudMinima. Finalmente, devuelve el nuevo array filtrado.
//  */
//     // return array.filter(str => str.length > longitudMinima);
// }

/* // Ejemplo de uso:
const palabras = ["manzana", "banana", "kiwi", "uva", "pera"];
const longitudMinima = 4;
const palabrasFiltradas = filtrarPorLongitud(palabras, longitudMinima);
console.log(palabrasFiltradas); // Esto imprimirá ["manzana", "banana"] */

// ejercicios con objetos y arrays

/* 
    Registro de usuarios:
Crea un programa que permita registrar usuarios. Cada usuario debe tener un nombre, una edad y un correo electrónico. Utiliza un array para almacenar los objetos de usuario.

*/

// Definimos una función para registrar un nuevo usuario
function registrarUsuario(nombre, edad, correo) {
    return {
        nombre: nombre,
        edad: edad,
        correo: correo
    };
}

// Creamos un array para almacenar los usuarios registrados
let usuariosRegistrados = [];

// Función para agregar un usuario al array de usuarios
function agregarUsuario(nombre, edad, correo) {
    const nuevoUsuario = registrarUsuario(nombre, edad, correo);
    usuariosRegistrados.push(nuevoUsuario);
    console.log(`¡Usuario ${nombre} registrado con éxito!`);
}

// Ejemplo de uso
ingreseUnNombre = prompt("ingrese su nombre");
ingreseSuEdad = Number(prompt("Ingrese su edad"));
ingreseEmail = prompt("Ingrese su email");
agregarUsuario(ingreseUnNombre, ingreseSuEdad, ingreseEmail);

// Mostrar los usuarios registrados
console.log("Usuarios registrados:");
usuariosRegistrados.forEach(usuario => {
    console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Correo: ${usuario.correo}`);
});
