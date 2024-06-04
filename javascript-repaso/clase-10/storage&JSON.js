//STORAGE

console.log(localStorage);

// setItem() es un método que forma parte de la interfaz Storage, disponible en el objeto window del navegador web. Este método se utiliza para almacenar un par clave-valor en el almacenamiento local o de sesión del navegador.

//La sintaxis básica de setItem() es la siguiente: setItem(clave, valor);

// localStorage.setItem("nombre", "julian");

/* Es importante tener en cuenta que el almacenamiento local y de sesión tiene sus limitaciones y consideraciones de seguridad, por lo que debes utilizarlo adecuadamente según las necesidades de tu aplicación. Además, ten en cuenta que el almacenamiento local persiste incluso después de cerrar y volver a abrir el navegador, mientras que el almacenamiento de sesión se borra cuando se cierra la pestaña o el navegador. */

// getItem(clave) getItem() es un método que forma parte de la interfaz Storage, disponible en el objeto window del navegador web. Este método se utiliza para recuperar el valor asociado a una clave específica del almacenamiento local o de sesión del navegador.

let nombre = localStorage.getItem("nombre");
console.log(nombre);

/* 
El sessionStorage es una característica del navegador web que permite a las aplicaciones web almacenar datos de manera temporal durante la duración de una sesión de navegación. Esto significa que los datos almacenados en el sessionStorage persisten mientras la ventana o pestaña del navegador está abierta y se borran cuando se cierra.
 */

//JSON

/* JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos que se utiliza comúnmente para transmitir datos entre un servidor y un cliente en aplicaciones web. Es un formato de texto que es fácil de leer y escribir para los humanos, y también fácil de parsear y generar para las máquinas. JSON se basa en dos estructuras de datos principales:

Objetos: Un objeto en JSON es una colección desordenada de pares clave-valor. Las claves deben ser cadenas de caracteres, y los valores pueden ser cualquier tipo de dato JSON válido, incluidos objetos, arreglos, números, cadenas, booleanos o null. Los pares clave-valor están separados por comas y se encierran entre llaves {}.  

JSON se utiliza ampliamente en aplicaciones web para enviar datos entre el cliente y el servidor, ya sea en solicitudes HTTP (por ejemplo, en solicitudes AJAX) o en respuestas HTTP. Es especialmente útil en este contexto debido a su simplicidad y facilidad de uso tanto para los humanos como para las máquinas. Además, JavaScript proporciona métodos incorporados (JSON.parse() y JSON.stringify()) para convertir entre cadenas JSON y objetos JavaScript, lo que facilita el manejo de datos JSON en aplicaciones web.

*/

// JSON.stringify(): Este método convierte un objeto JavaScript en una cadena JSON. Toma un objeto JavaScript como argumento y devuelve una cadena JSON que representa ese objeto. Este método es útil cuando deseas enviar datos de JavaScript a un servidor o almacenarlos localmente en un formato que sea fácil de guardar y transmitir.

const objeto = { nombre: "Juan", edad: 30, activo: true };
const jsonString = JSON.stringify(objeto);
console.log(jsonString); // {"nombre":"Juan","edad":30,"activo":true}


// JSON.parse(): Este método convierte una cadena JSON en un objeto JavaScript. Toma una cadena JSON como argumento y devuelve un objeto JavaScript que representa esa cadena JSON. Este método es útil cuando deseas recibir datos de un servidor en formato JSON y convertirlos en objetos JavaScript para manipularlos en tu código.

const jsonString1 = '{"nombre":"Juan","edad":30,"activo":true}';
const objeto2 = JSON.parse(jsonString1);
console.log(objeto2); // { nombre: "Juan", edad: 30, activo: true }

/* Estos dos métodos son fundamentales para trabajar con datos en formato JSON en JavaScript. Te permiten convertir entre objetos JavaScript y cadenas JSON de manera eficiente y sin problemas. Esto es especialmente útil al enviar datos entre un cliente y un servidor en aplicaciones web, ya que JSON es un formato comúnmente utilizado para la transferencia de datos en este entorno. */

/* 

Para implementar un archivo JSON en tu código JavaScript, primero necesitas cargar el contenido del archivo JSON en tu script. Puedes hacerlo de varias maneras, dependiendo de si el archivo JSON está en tu servidor o en el cliente.

Si el archivo JSON está en tu servidor:
Usando AJAX (Asynchronous JavaScript and XML): Puedes usar AJAX para cargar el archivo JSON de manera asíncrona desde tu servidor. Aquí tienes un ejemplo utilizando la API Fetch para cargar un archivo JSON: */

fetch('./storageJSON.json')
    .then(response => response.json())
    .then(storageJSON => {
        // Aquí puedes trabajar con los datos del archivo JSON
        console.log(storageJSON);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));

/* Esto lo veremos mas a profundida, mas adelante */