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

/* 
    Gestor de Libros:
Crea un programa que permita almacenar información sobre libros. Debe permitir agregar nuevos libros, mostrar información de un libro específico, listar todos los libros almacenados y buscar libros por título o autor.
*/

// // Definir la clase Libro
// class Libro {
//     constructor(titulo, autor, genero, año) {
//         this.titulo = titulo;
//         this.autor = autor;
//         this.genero = genero;
//         this.año = año;
//     }
// }

// // Definir la clase GestorLibros
// class GestorLibros {
//     constructor() {
//         this.libros = [];
//     }

//     // Método para agregar un nuevo libro
//     agregarLibro(libro) {
//         this.libros.push(libro);
//     }

//     // Método para mostrar información de un libro específico
//     mostrarLibro(titulo) {
//         const libroEncontrado = this.libros.find(libro => libro.titulo === titulo);
//         if (libroEncontrado) {
//             console.log(libroEncontrado);
//         } else {
//             console.log("Libro no encontrado");
//         }
//     }

//     // Método para listar todos los libros almacenados
//     listarLibros() {
//         this.libros.forEach(libro => console.log(libro));
//     }

//     // Método para buscar libros por título o autor
//     buscarLibros(busqueda) {
//         const librosEncontrados = this.libros.filter(libro =>
//             libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
//             libro.autor.toLowerCase().includes(busqueda.toLowerCase())
//         );
//         librosEncontrados.forEach(libro => console.log(libro));
//     }
// }

// // Ejemplo de uso
// const gestorLibros = new GestorLibros();

// // Agregar nuevos libros
// gestorLibros.agregarLibro(new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico", 1967));
// gestorLibros.agregarLibro(new Libro("El principito", "Antoine de Saint-Exupéry", "Literatura infantil", 1943));
// gestorLibros.agregarLibro(new Libro("1984", "George Orwell", "Distopía", 1949));

// // Mostrar información de un libro específico
// gestorLibros.mostrarLibro("Cien años de soledad");

// // Listar todos los libros almacenados
// console.log("Listado de libros:");
// gestorLibros.listarLibros();

// // Buscar libros por título o autor
// console.log("Resultados de la búsqueda:");
// gestorLibros.buscarLibros("Orwell");


/* Registro de estudiantes:
Crea un programa que permita registrar información básica de estudiantes, como nombre, edad y grado. Cada estudiante debe ser representado como un objeto con propiedades para almacenar esta información.

*/

// Definir una clase Estudiante
// class Estudiante {
//     constructor(nombre, edad, grado) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.grado = grado;
//     }

//     // Método para mostrar la información del estudiante
//     mostrarInfo() {
//         console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Grado: ${this.grado}`);
//     }
// }

// // Función para registrar un nuevo estudiante
// function registrarEstudiante() {
//     // Solicitar información al usuario
//     let nombre = prompt("Ingrese el nombre del estudiante:");
//     let edad = parseInt(prompt("Ingrese la edad del estudiante:"));
//     let grado = prompt("Ingrese el grado del estudiante:");

//     // Crear un nuevo objeto Estudiante con la información proporcionada
//     let nuevoEstudiante = new Estudiante(nombre, edad, grado);

//     // Devolver el nuevo objeto Estudiante
//     return nuevoEstudiante;
// }

// // Función principal
// function main() {
//     // Crear un array para almacenar los estudiantes
//     let estudiantes = [];

//     // Registrar varios estudiantes
//     for (let i = 0; i < 3; i++) {
//         console.log(`Ingrese los datos del estudiante ${i + 1}:`);
//         let nuevoEstudiante = registrarEstudiante();
//         estudiantes.push(nuevoEstudiante);
//     }

//     // Mostrar la información de todos los estudiantes registrados
//     console.log("Estudiantes registrados:");
//     estudiantes.forEach(estudiante => {
//         estudiante.mostrarInfo();
//     });
// }

// // Llamar a la función principal para ejecutar el programa
// main();

/* Juego de cartas:
Implementa un juego de cartas simple, como el blackjack. Cada carta en el juego puede ser un objeto con propiedades como valor y palo. Puedes crear objetos adicionales para representar la baraja y la mano de cada jugador, y definir métodos para mezclar la baraja, repartir cartas y calcular la puntuación de cada jugador.
*/

// Definir la clase Carta
class Carta {
    constructor(valor, palo) {
        this.valor = valor;
        this.palo = palo;
    }
}

// Definir la clase Baraja
class Baraja {
    constructor() {
        this.cartas = [];
        const palos = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
        const valores = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (let palo of palos) {
            for (let valor of valores) {
                this.cartas.push(new Carta(valor, palo));
            }
        }
    }

    // Método para mezclar la baraja
    mezclar() {
        for (let i = this.cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartas[i], this.cartas[j]] = [this.cartas[j], this.cartas[i]];
        }
    }

    // Método para repartir una carta
    repartir() {
        return this.cartas.pop();
    }
}

// Definir la clase Jugador
class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.manos = [];
    }

    // Método para recibir una carta
    recibirCarta(carta) {
        this.manos.push(carta);
    }

    // Método para calcular la puntuación de la mano
    calcularPuntuacion() {
        let puntuacion = 0;
        let ases = 0;

        for (let carta of this.manos) {
            if (carta.valor === 'As') {
                ases++;
                puntuacion += 11;
            } else if (carta.valor === 'J' || carta.valor === 'Q' || carta.valor === 'K') {
                puntuacion += 10;
            } else {
                puntuacion += parseInt(carta.valor);
            }
        }

        while (puntuacion > 21 && ases > 0) {
            puntuacion -= 10;
            ases--;
        }

        return puntuacion;
    }
}

// Función para iniciar el juego
function jugarBlackjack() {
    const baraja = new Baraja();
    baraja.mezclar();

    const jugador = new Jugador('Jugador');
    const crupier = new Jugador('Crupier');

    // Repartir cartas iniciales
    jugador.recibirCarta(baraja.repartir());
    crupier.recibirCarta(baraja.repartir());
    jugador.recibirCarta(baraja.repartir());
    crupier.recibirCarta(baraja.repartir());

    console.log(`Cartas del Jugador: ${jugador.manos.map(carta => carta.valor + ' de ' + carta.palo).join(', ')}`);
    console.log(`Cartas del Crupier: ${crupier.manos[0].valor} de ${crupier.manos[0].palo} y una carta oculta`);

    // Turno del jugador
    while (true) {
        const opcion = prompt('¿Deseas tomar otra carta? (s/n)').toLowerCase();
        if (opcion === 's') {
            jugador.recibirCarta(baraja.repartir());
            console.log(`Cartas del Jugador: ${jugador.manos.map(carta => carta.valor + ' de ' + carta.palo).join(', ')}`);
            const puntuacionJugador = jugador.calcularPuntuacion();
            console.log(`Puntuación del Jugador: ${puntuacionJugador}`);
            if (puntuacionJugador > 21) {
                console.log('Has superado 21. ¡Perdiste!');
                return;
            }
        } else {
            break;
        }
    }

    // Turno del crupier
    while (crupier.calcularPuntuacion() < 17) {
        crupier.recibirCarta(baraja.repartir());
    }
    console.log(`Cartas del Crupier: ${crupier.manos.map(carta => carta.valor + ' de ' + carta.palo).join(', ')}`);
    const puntuacionCrupier = crupier.calcularPuntuacion();
    console.log(`Puntuación del Crupier: ${puntuacionCrupier}`);

    // Determinar el resultado del juego
    if (puntuacionCrupier > 21 || (puntuacionJugador > puntuacionCrupier)) {
        console.log('¡Ganaste!');
    } else if (puntuacionJugador < puntuacionCrupier) {
        console.log('¡Perdiste!');
    } else {
        console.log('¡Empate!');
    }
}

// Iniciar el juego
jugarBlackjack();
