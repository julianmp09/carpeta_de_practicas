// ¿metodos de busqueda y transformacion

// Metodo => forEach();
// Ejemplo con un array
/*  forEach es un método que se utiliza para iterar sobre elementos de un array en JavaScript. Te permite ejecutar una función para cada elemento del array. */
/* const array = [1, 2, 3, 4, 5];

array.forEach(elemento => {
  console.log(elemento);
}); */
// Esto imprimirá cada elemento del array en la consola, uno por uno.

/* El método forEach ejecuta la función proporcionada una vez para cada elemento del array en orden. Además, puedes acceder al índice del elemento y al propio array dentro de la función: */

/* array.forEach((elemento, indice) => {
    console.log(`Elemento ${elemento} en el índice ${indice}`);
  }); */

//Ejemplo aplicado con un array de objetos.
  
/* const productos = [
{id:1, nombre: "telefono", precio: 1000},
{id:2, nombre: "telefono-1", precio: 3000},
{id:3, nombre: "telefono-2", precio: 2000},
{id:4, nombre: "telefono-3", precio: 100000},
];

productos.forEach( elementos2 => {
    console.log(`ID: ${elementos2.id}`);
}) */

// Metodo Find
/* el método find() se utiliza en JavaScript para encontrar el primer elemento en un array que cumpla con una condición específica. Una vez que se encuentra ese elemento, find() devuelve su valor. Si ningún elemento cumple con la condición, devuelve undefined. */


// Ejemplo con un array de objetos
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 }
  ];
  
  // Queremos encontrar la primera persona que tenga más de 25 años
  const personaMayorDe25 = personas.find(persona => persona.edad > 25);
  
  console.log(personaMayorDe25); // Esto imprimirá { nombre: 'María', edad: 30 }

/* En este ejemplo, find() busca en el array personas y devuelve el primer objeto que cumpla con la condición especificada en la función de callback, es decir, el primer objeto con una propiedad edad mayor que 25.

Es importante tener en cuenta que find() solo devuelve el primer elemento que cumple con la condición y luego detiene la búsqueda. Si hay varios elementos que cumplen con la condición y deseas obtenerlos todos, deberías considerar el uso de otros métodos como filter(). */

// Metodo Filter
/* el método filter() en JavaScript se utiliza para crear un nuevo array con todos los elementos que cumplan una condición específica, esta condición se define en una función de callback. */

// Ejemplo con un array de números
const numeros = [10, 20, 30, 40, 50];

// Queremos filtrar los números mayores que 25
const numerosMayoresQue25 = numeros.filter(numero => numero > 25);

console.log(numerosMayoresQue25); // Esto imprimirá [30, 40, 50]

/* filter() crea un nuevo array (numerosMayoresQue25) que contiene solo los números del array original (numeros) que son mayores que 25.

La función de callback proporcionada a filter() se ejecuta para cada elemento del array original. Si esta función devuelve true para un elemento, ese elemento se incluirá en el nuevo array. Si devuelve false, el elemento se omitirá.

Es importante destacar que filter() no modifica el array original; en su lugar, devuelve un nuevo array con los elementos que cumplen la condición especificada. Esto hace que filter() sea útil cuando necesitas trabajar con un subconjunto de elementos de un array sin afectar al array original */

// Ejemplo con un array de objetos

// Ejemplo con un array de objetos
const personas1 = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 17 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Ana', edad: 19 }
  ];
  
  // Queremos filtrar solo las personas mayores de edad (18 años o más)
  const personasMayoresDeEdad = personas1.filter(persona => persona.edad >= 18);
  
  console.log(personasMayoresDeEdad);
  
  /* la función de filter() se ejecuta para cada objeto en el array personas. La función verifica si la propiedad edad de cada objeto es mayor o igual a 18. Si la condición se cumple (es decir, si la persona es mayor de edad), esa persona se incluirá en el nuevo array personasMayoresDeEdad. Si no se cumple, la persona se omitirá.

El resultado será un nuevo array que contiene solo los objetos de personas que son mayores de edad. */

// metodo map
/* el método map() en JavaScript se utiliza para crear un nuevo array a partir de otro array, aplicando una función a cada uno de sus elementos. La función de mapeo o transformación especificada determina cómo se modificará cada elemento del array original para formar el nuevo array.  */

// Ejemplo con un array de números
const numeros1 = [1, 2, 3, 4, 5];

// Queremos crear un nuevo array con cada número multiplicado por 2
const numerosMultiplicadosPorDos = numeros1.map(numero => numero * 2);

console.log(numerosMultiplicadosPorDos); // Esto imprimirá [2, 4, 6, 8, 10]

/* En este ejemplo, la función de map() se ejecuta para cada elemento del array numeros. La función toma cada número del array original y lo multiplica por 2, y luego devuelve el resultado. El nuevo array numerosMultiplicadosPorDos contendrá los números resultantes de esta operación.

Es importante tener en cuenta que map() crea un nuevo array y no modifica el array original. Además, el nuevo array tendrá la misma longitud que el array original, ya que cada elemento del array original se transforma en un elemento del nuevo array. */

/* Aquí tienes un ejemplo de cómo podrías usar map() en una situación práctica de la vida real. Imagina que tienes un array de objetos que representan productos en una tienda en línea, y deseas crear un nuevo array con solo los nombres de los productos para mostrar en una lista: */

// Ejemplo con un array de objetos representando productos
const productos = [
    { id: 1, nombre: 'Camisa', precio: 20 },
    { id: 2, nombre: 'Pantalón', precio: 30 },
    { id: 3, nombre: 'Zapatos', precio: 50 },
    { id: 4, nombre: 'Sombrero', precio: 15 }
  ];
  
  // Queremos crear un nuevo array solo con los nombres de los productos
  const nombresDeProductos = productos.map(producto => producto.nombre);
  
  console.log(nombresDeProductos);

/* En este ejemplo, map() se utiliza para crear un nuevo array (nombresDeProductos) que contiene solo los nombres de los productos del array original productos. Cada objeto del array original es mapeado a su nombre correspondiente en el nuevo array.

Este nuevo array de nombres de productos podría ser utilizado, por ejemplo, para mostrar una lista de productos en una página web o para realizar cualquier otra operación que requiera solo los nombres de los productos.
*/