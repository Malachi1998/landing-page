/*Declaración de constantes */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector ('.form-register');

    const nombreInput = form.querySelector('input[name="nombres"]');
    const apellidosInput = form.querySelector('input[name="apellidos"]'); 

    const phoneInput = form.querySelector('input[name="phone"]');
    const correoElectronicoInput = form.querySelector('input[name="correo electrónico"]');

    const tarjetaInput = form.querySelector('input[name="número de cuenta bancaria"]');
    const submitButton = form.querySelector('.botons');
})

/* uso de las constantes */
form.addEventListener('submit', function(event) {
     if (!/^[A-Z][a-z]+$/.test(nombreInput.value)) {
      nombreInput.setCustomValidity('El nombre debe comenzar con mayúscula y contener solo letras.');
      event.preventDefault();
    } else {
      nombreInput.setCustomValidity('');
    }

    
    if (!/^(?=.*[A-Z])(?=.*\d).{4,16}$/.test(contraseñaInput.value)) {
      contraseñaInput.setCustomValidity('La contraseña debe tener entre 4 y 16 caracteres, al menos una mayúscula y un número.');
      event.preventDefault();
    } else {
      contraseñaInput.setCustomValidity('');
    }

    if (!/\S+@\S+\.\S+/.test(correoInput.value)) {
        correoInput.setCustomValidity('El correo electrónico debe tener un formato válido.');
        event.preventDefault();
      } else {
        correoInput.setCustomValidity('');
      }
      if (!/^\d{16}$/.test(tarjetaInput.value)) {
        tarjetaInput.setCustomValidity('no me engañes quiero una verdadera');
        event.preventDefault();
      } else {
        contraseñaInput.setCustomValidity('');
      }
    });
    
nombreInput.addEventListener('input', function() {
        nombreInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
      });
    
      contraseñaInput.addEventListener('input', function() {
          contraseñaInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
        });
      
      correoInput.addEventListener('input', function() {
        correoInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
      });
      tarjetaInput.addEventListener('input', function() {
          tarjetaInput.setCustomValidity(''); // Limpiar el mensaje de validación al modificar el campo
        });
      