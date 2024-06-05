const click = document.getElementById("boton");

click.addEventListener("click", () => Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  }))

const click2 = document.getElementById("boton2");

click2.addEventListener("click", () => Toastify({
    text: "haz click aqui para ir a BYU-Pathway",
    duration: 3000,
    destination: "https://www.byupathway.edu/",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast())
