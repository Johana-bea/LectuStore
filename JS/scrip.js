
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensajeEmail = document.getElementById("mensajeEmail");
    const mensajeTelefono = document.getElementById("mensajeTelefono");

    const regexLetras = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^[0-9]{9}$/;

    let valido = true;

    // Validación de nombre y apellido
    if (!regexLetras.test(nombre)) {
        alert("El nombre solo debe contener letras.");
        valido = false;
    }

    if (!regexLetras.test(apellido)) {
        alert("El apellido solo debe contener letras.");
        valido = false;
    }

    // Validación de email
    if (!regexEmail.test(email)) {
        mensajeEmail.textContent = "Email inválido.";
        mensajeEmail.style.color = "red";
        valido = false;
    } else {
        mensajeEmail.textContent = "Email válido.";
        mensajeEmail.style.color = "green";
    }

    // Validación de teléfono
    if (!regexTelefono.test(telefono)) {
        mensajeTelefono.textContent = "El teléfono debe tener 9 dígitos numéricos.";
        mensajeTelefono.style.color = "red";
        valido = false;
    } else {
        mensajeTelefono.textContent = "Teléfono válido.";
        mensajeTelefono.style.color = "green";
    }

    // Si todo es válido, mostrar mensaje y limpiar
    if (valido) {
        alert("¡Formulario enviado correctamente!");
        document.getElementById("formulario").reset();
        mensajeEmail.textContent = "";
        mensajeTelefono.textContent = "";
    }

    return valido;
}