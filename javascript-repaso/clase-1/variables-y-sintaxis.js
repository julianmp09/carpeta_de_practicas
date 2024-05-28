/* 
    Practicando desde 0 mi JS
*/

// Declaremos nuestras varaibles

//Declare variables que me permiter obtener el resultado de una operacion matematica.
let numeroUno = 15;
let numeroDos = 15;

let resultado = `El resultado de la suma es: ${numeroUno + numeroDos}`;
let resultado2 = `El resultado de la resta es: ${numeroUno - numeroDos}`;
let resultado3 = `El resultado de la multiplicacion es: ${numeroUno * numeroDos}`;
let resultado4 = `El resultado de la division es: ${numeroUno / numeroDos}`;

// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);
// console.log(resultado4);

//Declaremos variable spara que la consola me muestre hola julian

let nombrePrincipal = "Julian";
let apellidoPrincipal = "Martinez";


let saludoPersonal = `¡Hola ${nombrePrincipal} ${apellidoPrincipal} un gusto conocerte! 😁`;

// console.log(saludoPersonal);

// Hagamos un programa que tome el nombre y el apellido de la persona para darle un saludo en el navegador.

// const nombreDelSolicitante = prompt("Ingrese su Primer Nombre: ");
// const apellidoDelSolicitante = prompt("Ingrese su primer apellido: ");

// const saludoPersonalizado = `¡Hola! ${nombreDelSolicitante} ${apellidoDelSolicitante} un gusto conocerte 😁`;

// alert(saludoPersonalizado);

// Hagamos un programa que le pida al usuario calcular el volumen de un cilindro

const Pi = 3.14;
let radio = Number(prompt("Ingrese el radio del cilindro: "));
radio = radio * 2;
const altura = Number(prompt("Ingrese el valor de la altura del cilindro: "));

alert(`El volumen de cilindro es ${Pi*radio*altura} cm3.`);