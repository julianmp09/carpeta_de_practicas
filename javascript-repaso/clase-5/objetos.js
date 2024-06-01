/* Estructura de objetos

{clave1: valor1, clave2: valor2, claven: valorn}

*/

/* let persona = {
    nombre: "Julian",
    edad: 26,
    direccion: "Alvear 698 - Lomas de Zamora"
} */

/* Para agragar otra clave:valor solo bastaria con hacer lo siguiente */

// persona.telefono = "11-25037582";

// console.log(persona);

/* Funcion constructora */

/* function persona (nombre,edad,direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
}

const persona1 = new persona("Julian", 27, "Alvear 698 - Lomas de Zamora");

console.log(persona1) */

/* let persona = {
    nombre: "Julian",
    edad: 26,
    direccion: "Alvear 698 - Lomas de Zamora"
}

for (const clave in persona) {
    console.log(clave);
} */
// Clase constructora
/* class persona{
    constructor (nombre,edad,direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
}


const persona1 = new persona("Julian", 27, "Alvear 698 - Lomas de Zamora");

console.log(persona1);
console.log(persona1.direccion);
 */

/* 1) Libro: Crea un objeto libro que represente un libro con propiedades como titulo, autor, año y genero. Luego, crea una función que imprima toda la información del libro.
*/

/* let libro = {
    titulo: "harry potter y la piedra filosofal",
    autor: "J.K Rowling",
    año: 2001,
    genero: "Fantasia"
}

const imprimirObjeto = () =>{
    console.log(libro);
}

imprimirObjeto(); */

/*  
    2) Estudiante: Define un objeto estudiante con propiedades como nombre, edad, curso y calificaciones. Luego, agrega un método al objeto que calcule y devuelva el promedio de las calificaciones.
*/

/* let estudiante = {
    nombre: "julian",
    edad: 26,
    curso: "JavaScript",
    calificaciones: [10,8,10,10],
    calcularCalificacionTotal() {
        let sumaCalificaciones = 0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            sumaCalificaciones += this.calificaciones[i];
        }
        return sumaCalificaciones / this.calificaciones.length;
    }
};

// Llamar al método para calcular el promedio de las calificaciones
let promedioCalificaciones = estudiante.calcularCalificacionTotal();
console.log(`El promedio de las calificaciones de ${estudiante.nombre} es ${promedioCalificaciones}`); */

/* 
    3) Rectángulo: Crea un objeto rectangulo con propiedades base y altura. Agrega métodos al objeto para calcular el área y el perímetro del rectángulo.

*/

/* let rectangulo = {
    base: 10,
    altura: 20,
    calcularElArea () {
        let area = this.altura * this.base;
        return area;
    },
    calcularElPerimetro () {
        let perimetro = (2 * this.altura) + (2 * this.base);
        return perimetro;
    }
}

let areaRectangulo = rectangulo.calcularElArea();
console.log(`El area del rectangulo es de ${areaRectangulo} cm2`);

let perimetroRectangulo = rectangulo.calcularElPerimetro();
console.log(`El perimetro del rectangulo es de ${perimetroRectangulo} cm`); */

/* 
    4) Producto: Define un objeto producto que represente un producto en una tienda con propiedades como nombre, precio y stock. Luego, crea un método que permita vender una cierta cantidad de unidades del producto y actualice el stock en consecuencia.
*/

/* let producto = {
    nombre: "Nintendo Swicth",
    precio: 450,
    stock: 60,
    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`Se han vendido ${cantidad} unidades de ${this.nombre}.`);
        } else {
            console.log(`No hay suficiente stock disponible para vender ${cantidad} unidades de ${this.nombre}.`);
        }
    }
}

// Ejemplo de venta de productos
console.log(`Stock inicial de ${producto.nombre}: ${producto.stock}`);
producto.vender(10);
console.log(`Stock actual de ${producto.nombre}: ${producto.stock}`);
producto.vender(100); // Intentar vender más unidades de las disponibles */

/* 
    5) Persona: Crea un objeto persona con propiedades como nombre, edad, genero y hobbies. Agrega métodos al objeto para agregar un nuevo hobby, imprimir toda la información de la persona y calcular el año de nacimiento basado en la edad.

*/

/* let persona = {
    nombre : "julian",
    edad: 26,
    genero: "Masculino",
    hobbies: ["Jugar a la nintendo switch", "ver TV"],
    nuevoHobby (hobby) {
        if (hobby) {
            this.hobbies.push(hobby);
            console.log(`Se ha agregado el nuevo hobby "${hobby}".`);
        } else {
            console.log("Por favor ingrese un hobby válido.");
        }
    },
    imprimirInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Hobbies: ${this.hobbies.join(", ")}`);
    },

    calcularAñoDeNacimiento () {
        const añoActual = new Date().getFullYear();
        return añoActual - this.edad;
    }
};

let hobbyNuevo= prompt("Que otro hobbies tienes?");
persona.nuevoHobby(hobbyNuevo);

console.log("\nInformación de la persona:");
persona.imprimirInformacion();


let añoActual = Number(prompt("Ingrese el año actual"));
console.log(`Usted nacio en el año ${persona.calcularAñoDeNacimiento()}`); */

/* 1)  Gestor de Tareas:
Crea un programa que permita gestionar tareas. Cada tarea debe tener un nombre, una descripción y un estado (por ejemplo, pendiente, en progreso, completada). Deberías poder agregar nuevas tareas, marcar tareas como completadas y listar todas las tareas. */

