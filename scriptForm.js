
    console.log(sessionStorage.getItem("item"));
    var listaTestimonios = JSON.parse(sessionStorage.getItem("item"))
    console.log(listaTestimonios)


    function mostrarItems(listaTestimonios) {

        var contenidoItems = document.getElementsByClassName('testimonios');
        contenidoItems.innerHTML = '' ;

        listaTestimonios.forEach((listaT)=>{
            var etiquetaItem = document.createElement('p');
            etiquetaItem.textContent = `${listaT.consulta}`;
            contenidoItems.appendChild(etiquetaItem)

        })
        
    }

    // function displayData() {
    //     var dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    //     var listContainer = document.getElementById('dataList');
    //     listContainer.innerHTML = '';
        
    //     dataList.forEach(function(data) {
    //       var listItem = document.createElement('li');
    //       listItem.textContent = `Nombre: ${data.name}, Email: ${data.email}`;
    //       listContainer.appendChild(listItem);
    //     });
    //   }