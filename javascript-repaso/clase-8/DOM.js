/* 
    El DOM (Document Object Model) es una interfaz de programación que representa y manipula documentos HTML, XHTML y XML como una estructura de árbol de objetos. En el DOM, cada elemento en un documento es representado como un nodo, y estos nodos están organizados en una estructura jerárquica que refleja la estructura del documento. Esto permite a los desarrolladores acceder y manipular fácilmente los elementos y contenido de un documento web utilizando scripts (como JavaScript), lo que permite la creación de aplicaciones web dinámicas e interactivas. El DOM proporciona métodos y propiedades para interactuar con los nodos del documento, como agregar, eliminar o modificar elementos, así como para responder a eventos del usuario y del navegador.
*/

// console.log(document.body);

// Acceso al DOM
// traer elemetos id 
// const div = document.getElementById("container");
// const ingreseAlgo = prompt("Ingrese algo:");

// console.log(div.innerHTML);


// Modificar el DOM

/* 
if(ingreseAlgo === "hola"){
    div.innerHTML = "Hola programador";
} else if (ingreseAlgo === "adios"){
    div.innerHTML = "Adios programador";
} else{
    div.innerHTML = "adios2adios";
} */

/* 
    innerHTML: La propiedad innerHTML de un elemento en el DOM de HTML representa el contenido HTML dentro de ese elemento. Cuando se accede a innerHTML, se obtiene una representación como cadena de todos los elementos hijos del elemento, incluidos sus tags HTML. También se puede establecer innerHTML para modificar el contenido HTML de un elemento. Sin embargo, se debe tener cuidado al usar innerHTML, ya que puede ser vulnerable a ataques de inyección de scripts si se asigna contenido no confiable.
*/
// console.log(div.innerText);

/* 
    innerText: La propiedad innerText de un elemento en el DOM de HTML representa el contenido textual visible dentro del elemento y todos sus descendientes. A diferencia de innerHTML, innerText devuelve solo el texto visible, omitiendo cualquier contenido HTML o tags. También se puede establecer innerText para modificar el contenido textual de un elemento. innerText es más seguro que innerHTML para la manipulación de texto, ya que no evalúa ni modifica contenido HTML. Sin embargo, tenga en cuenta que innerText puede no ser compatible con navegadores más antiguos.

    textContent: La propiedad textContent de un elemento en el DOM de HTML representa el contenido textual de ese elemento y todos sus descendientes. A diferencia de innerText, que considera el estilo CSS para determinar la visibilidad del texto, textContent devuelve el texto sin considerar el estilo. Esto significa que textContent incluirá texto oculto por CSS o contenido dentro de elementos como <script> o <style>. Además, textContent puede ser más rápido que innerText ya que no requiere el cálculo de estilo. Sin embargo, si solo necesitas el texto visible para el usuario, innerText podría ser más adecuado.
*/

/* const lista = document.getElementsByClassName("lista");
console.log(lista); // HTMLCollection es parecido a un array pero no lo es
console.log(lista[0].innerHTML);
console.log(lista[1].innerHTML);
console.log(lista[2].innerHTML);


const div = document.getElementById("container"); */

// creacion de elementos
/* 
    1 paso: creacion del nodo
    2 paso: agregar contenido
    3 paso: agregar a un padre
*/
const div = document.getElementById("container");

const buttom = document.createElement("button")

buttom.innerHTML = `click`;

div.appendChild(buttom);

// eliminar nodos

// buttom.remove()

buttom.addEventListener("click", () => {
    alert("Hola a todos")
})

class persona {
    constructor (name, age, id){
        this.name = name;
        this.age = age;
        this.id = id;
    }
};

// const nombre = prompt("Cual es tu nombre?");
// const edad = Number(prompt("Cual es tu edad?"));
// const id = Number(prompt("Cual es tu numero de documento?"));

// const usuario = new persona(nombre, edad, id);

// // Accediendo a las propiedades de usuario
// console.log("Nombre:", usuario.name);
// console.log("Edad:", usuario.age);
// console.log("ID:", usuario.id);

// const usuarios = [];


// // Pedir datos y crear usuarios
// for (let i = 0; i < 3; i++) { // Cambia el número 3 por la cantidad de usuarios que desees crear
//     const nombre = prompt("Cual es tu nombre?");
//     const edad = Number(prompt("Cual es tu edad?"));
//     const id = Number(prompt("Cual es tu numero de documento?"));
//     const usuario = new persona(nombre, edad, id);
//     usuarios.push(usuario); // Agregar usuario al array
// }

// // Imprimir los usuarios almacenados en el array
// console.log("Usuarios almacenados:");
// usuarios.forEach((usuario, index) => {
//     console.log(`Usuario ${index + 1}:`, usuario);
// });

const colores = ["azul", "verde"];


for (let i=0; i < 3; i++) {
    const ingreseUnColor = prompt("Ingrese un color");
    colores.push(ingreseUnColor);
}

colores.pop();

console.log("colores ingresados: ");
colores.forEach(color =>
    console.log(color)
)
