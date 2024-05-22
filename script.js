// Validación del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let consulta = document.getElementById('consulta').value;
    let motivo = document.getElementById('motivo').value;

    //Creo un objeto
    let formularioDatos = {
        nombre : nombre,
        email : email,
        consulta : consulta
    };

    var vectorDatos = JSON.parse(sessionStorage.getItem("item")) || [];
    if (motivo === "Comentarios") {
        vectorDatos.push(formularioDatos);
        sessionStorage.setItem("item",JSON.stringify(vectorDatos));
    }
    
    redireccion();
});

function redireccion() {
    let mensaje = "Gracias por tu Tiempo ";
    if (confirm(mensaje) == true) {
        window.location.href = "index.html";
    } else {
        window.location.href = "#";
    }
};
