function showalert() {alert("Que pensaste que iba a pasar? que te iba a mandar un rickroll?")}

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {

event.preventDefault();
validateForm();

});

function validateEmail(email) {

    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);

}

function validateForm() {

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)) {

      alert('Por favor ingrese un correo electrónico válido.');

    } else {

      console.log("correo enviado")

        alert('Correo electrónico enviado correctamente.');

    }
}

document.querySelector("button.button-menu-toggle")

    .addEventListener("click", function() {

        document.querySelector(".nav-links");
        classList.toggle("nav-links-responsive");
    })

    function validarRegistro() {
      // Obtener los valores ingresados por el usuario
      var nombre = document.getElementById("nombre").value;
      var correo = document.getElementById("correo").value;
      var contraseña = document.getElementById("contraseña").value;
      
      // Validar que los campos no estén vacíos
      if (nombre === '' || correo === '' || contraseña === '') {
        alert("Por favor, complete todos los campos.");
        return false;
      }
      
      // Validar la dirección de correo electrónico
      var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!regexCorreo.test(correo)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
      }
      
      // Enviar los datos del formulario o realizar otras acciones necesarias
      // Aquí puedes agregar el código adicional para procesar el registro del usuario
      
      window.location.href = "Inicio de sesion.html";
      alert("¡Registro exitoso!");
      return true;
    }   