// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var consulta = document.getElementById('consulta').value;
    var motivo = document.getElementById('motivo').value;

    if (nombre === '' || email === '' || consulta === '' || motivo === '') {
        event.preventDefault(); // Evitar que el formulario se envíe
        alert('Por favor complete todos los campos obligatorios.');
    }
});
