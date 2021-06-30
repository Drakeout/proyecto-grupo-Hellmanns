$(document).ready(() => {

    var seccion = null;

    if (document.getElementById('mujer')) {
        seccion = `women's%20clothing`;
    } else if (document.getElementById('hombre')) {
        seccion = `men's%20clothing`;
    } else if (document.getElementById('ninos')){
        seccion = `electronics`;
    }

    var dataResult = null;

    $.ajax({
        
        url: `http://127.0.0.1:8000/api/productos`,
        dataType: 'json'
    }).done((data) => {
        dataResult = data;
        print(data)
        mostrarProductos(dataResult);

    });

    const tarjetaProducto = (titulo, imgs, precio, description, id) => {
        let html = `
            <div class="card h-100 shadow">
                <img src="${imgs}" class="card-img-top p-3"/>
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                </div>
                <div class="card-footer mx-auto">
                    <p class="card-text ">$ ${precio}</p>
                </div>    
            </div>
        `;
        let card = document.createElement('div');
        $(card).html(html);
        $(card).addClass('col mt-3');
        $(card).attr('id', id);
        $(card).click(() => {
            sessionStorage.setItem('producto', JSON.stringify(id));
            location.href = '../pages/producto.html';
        });

        return card;
    }

    const mostrarProductos = (dataResult) => {
        $("#productos").empty();
        dataResult.map(producto => {
            $("#productos").append(
                tarjetaProducto(
                    producto.titulo,
                    producto.imagen,
                    producto.precio,
                    producto.descripcion,
                    producto.id
                )
            );
        });
    }




});