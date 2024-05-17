// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let consulta = document.getElementById('consulta').value;
    let motivo = document.getElementById('motivo').value;

    if (nombre === '' || email === '' || consulta === '' || motivo === '') {
        event.preventDefault(); // Evitar que el formulario se envíe
        alert('Por favor complete todos los campos obligatorios.');
    }
});
