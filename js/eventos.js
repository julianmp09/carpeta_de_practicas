// guardo el formulario en una variable
let miFormulario = document.querySelector("#formulario");
// get the feedback div element so we can do something with it.
const feedbackElement = document.getElementById("feedback");
 // get the form so we can read what was entered in it.
const formElement = document.forms[0];

const validarFormulario = (e) => {
            // stop the form from doing the default action.
            e.preventDefault();
            // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
            feedbackElement.innerHTML = `Hola ${formElement.fname.value}! Gracias por crear una cuenta con nosotros. Nos estaremos contactando lo mas rapido posible!`;
            // make the feedback element visible.
            feedbackElement.style.display = "block";
            // add a class to move everything down so our message doesn't cover it.
            document.body.classList.toggle('moveDown');
}

miFormulario.addEventListener("submit", validarFormulario);