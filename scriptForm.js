var listaTestimonios = JSON.parse(sessionStorage.getItem("item"));

mostrarItems(listaTestimonios);

function mostrarItems(listaTestimonios) {
    var contenidoItems = document.querySelector('.testimonios');

    if (contenidoItems) {
        listaTestimonios.forEach((listaT) => {
            var etiquetaItem = document.createElement('p');
            etiquetaItem.textContent = `"${listaT.consulta}" - ${listaT.nombre}`;
            contenidoItems.appendChild(etiquetaItem);
        });
    } else {
        console.log('No se encontró ningún elemento con la clase "testimonios".');
    }
}
