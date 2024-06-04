// eventos

let boton = document.querySelector("#boton");
let caja = document.querySelector("#caja");
boton.addEventListener("click", () => {
    const nuevoElemento = document.createElement("div");
    nuevoElemento.innerHTML = `
        <h2> Hola, soy un evento click </h2>
    `;
    caja.appendChild(nuevoElemento);
    
})

/* boton.addEventListener("click", () => {
    console.log("hola mundo");
}) */

/* 
    el evento submit es muy útil en formularios HTML y se utiliza para detectar cuándo se envía un formulario. Este evento se desencadena cuando un usuario envía un formulario, ya sea haciendo clic en un botón de envío (<input type="submit">) o presionando la tecla "Enter" dentro de uno de los campos del formulario.
*/


const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Aquí podrías realizar la validación de los datos antes de enviarlos al servidor

    // Simulación de envío de datos al servidor (en este caso, simplemente mostramos los datos)
    const mensaje = `¡Hola ${nombre}! Has sido registrado con éxito. Tu correo electrónico es ${email}.`;
    document.getElementById("mensaje").textContent = mensaje;

})