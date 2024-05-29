/* Estructura de una funcion

funtion nombreFuncion () {
    codigo a ejectutar 
}

estructura de una funcion flecha (la mejor de todas)

const o let nombreFuncion = () => {
    codigo a ejecutar
}

*/

/* function saludar () {
    let nombre = prompt("ingrese el nombre");
    alert(`Hola ${nombre}`);
}

saludar(); */

/* Estructura de una funcion con parametros

    funtion nombreFuncion (parametro, parametro ... parametron){
        Codigo a ejecutar de la funcion

    }

    nombreFuncion(valr1,valor2,valorn);

*/
/* 
function saludar (saludo,nombre) {
    console.log(`${saludo} ${nombre}`);
}

saludar("hola", "julian"); */

// calculadora basica: Crea una calculadora que pueda realizar operaciones simples como suma, resta, multiplicación y división. Debes implementar una función para cada operación y otra función principal que solicite al usuario que elija la operación y los números.

/* const sumar = (num1, num2) =>{
    return num1 + num2;
}
const restar = (num1, num2) =>{
    return num1 - num2;
}
const multiplicación = (num1, num2) =>{
    return num1 * num2;
}
const division= (num1, num2) =>{
    return num1 / num2;
}



const calculadora = () =>{
        // Solicitar al usuario que elija la operación
        let operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /):");


        // Solicitar al usuario los números
        let numero1 = Number(prompt("Ingrese el primer número:"));
        let numero2 = Number(prompt("Ingrese el segundo número:"));
    
        // Realizar la operación según la selección del usuario
        switch (operacion) {
            case '+':
                alert(`El resultado de la suma es: ${sumar(numero1, numero2)}`);
                break;
            case '-':
                alert(`El resultado de la resta es: ${restar(numero1, numero2)}`);
                break;
            case '*':
                alert(`El resultado de la multiplicación es: ${multiplicar(numero1, numero2)}`);
                break;
            case '/':
                alert(`El resultado de la división es: ${dividir(numero1, numero2)}`);
                break;
            default:
                alert("Operación no válida");
        }
}

calculadora(); */

// 2) Verificar número primo: Escribe una función que tome un número como argumento y devuelva true si es primo y false si no lo es. Luego, crea un programa principal que solicite al usuario un número y utilice la función para verificar si es primo.

/* const encontrarNumeroPrimo = (numero) =>{
    // si el numero es menor o igual a 1, no es primo
    if (numero <= 1) {
        return false;
    }
        // Verificar si el número es divisible por algún número entre 2 y la mitad de su valor
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                // Si el número es divisible por otro número que no sea 1 o él mismo, no es primo
                return false;
            }
        }
        // Si el bucle termina sin encontrar ningún divisor, el número es primo
        return true;
}

let solicitaUnNumero = Number(prompt("Ingrese un numero:"));

while(true){
    if (encontrarNumeroPrimo(solicitaUnNumero)) {
        alert (`El ${solicitaUnNumero} es primo`);
        break;
    }else {
        alert (`El ${solicitaUnNumero} no es primo`);
    }
    solicitaUnNumero = Number(prompt("Ingrese un numero:"));
} */

/* 
    3) Convertidor de temperatura: Crea una función que convierta una temperatura de grados Celsius a grados Fahrenheit y otra función que haga lo contrario. Luego, implementa un programa principal que solicite al usuario que ingrese una temperatura y la unidad en la que está expresada, y luego imprima la temperatura convertida.


*/

/* const convertirCelsiusaFahrenheit = (Celsius) => {
    return (Celsius * 9/5) + 32;
}
const convertirFahrenheitaCelsius = (Fahrenheit) => {
    return (Fahrenheit - 32) * 5/9;
}

let ingresaUnDato = Number(prompt("ingresa el valor de la temperatura que quiere convertir:"));

let ingresaLaTemperatura = prompt("Ingresa la unidad (C° o F°) ").toUpperCase();

if (ingresaLaTemperatura === "C"){
    alert (`El valor en C° es = ${convertirCelsiusaFahrenheit(ingresaUnDato)} `);
} else if (ingresaLaTemperatura === "F"){
    alert (`El valor en F° es = ${convertirFahrenheitaCelsius(ingresaUnDato).toFixed(4)} `);
} */

/* 
    4) Contador de vocales: Escribe una función que tome una cadena como argumento y devuelva el número de vocales que contiene. Luego, crea un programa principal que solicite al usuario que ingrese una cadena y utilice la función para contar las vocales.
*/

/* const numeroDeVocales = (vocales) => {
    let conteoVocales = 0;

    for (let i = 0; i < vocales.length; i++) {
        let caracter = vocales[i];
        if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
             conteoVocales++;
        }
    }   
    
    return conteoVocales;
}

const vocales = prompt("Ingrese una palabra: ");

const resultado = numeroDeVocales(vocales);

alert(`El numero de vocales que tiene tu palabra es de = ${resultado}`); */

/* 5) Generador de contraseñas: Crea una función que genere una contraseña aleatoria con una longitud especificada por el usuario. La contraseña debe contener una combinación de letras (mayúsculas y minúsculas), números y caracteres especiales. Implementa un programa principal que solicite al usuario la longitud deseada y genere la contraseña utilizando la función.

 */

function generarContrasena(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        // Generar un índice aleatorio dentro del rango de caracteres
        const indice = Math.floor(Math.random() * caracteres.length);
        // Agregar el carácter correspondiente al índice generado a la contraseña
        //charAt es un método en JavaScript que se utiliza para obtener el carácter en una posición específica dentro de una cadena. Toma un índice como argumento y devuelve el carácter en esa posición en la cadena.
        contrasena += caracteres.charAt(indice);
    }
    return contrasena;
}

// Programa principal
const longitud = Number(prompt("Ingrese la longitud deseada para la contraseña:"));

if (longitud > 0) {
    const contrasenaGenerada = generarContrasena(longitud);
    alert(`La contraseña generada es: ${contrasenaGenerada}`);
} else {
    alert("La longitud de la contraseña debe ser mayor que 0.");
}
