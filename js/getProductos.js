$(document).ready(() => {

    var seccion = null;

    if (document.getElementById('mujer')) {
        console.log('sii');
        seccion = `women's%20clothing`;
    } else if (document.getElementById('hombre')) {
        console.log('Siix2');
        seccion = `men's%20clothing`;
    }

    var dataResult = null;

    $.ajax({
        type: 'GET',
        url: `https://fakestoreapi.com/products/category/${seccion}`,
        dataType: 'json'
    }).done((data) => {
        dataResult = data;
        mostrarProductos();

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

    const mostrarProductos = () => {
        $("#productos").empty();
        dataResult.map(producto => {
            $("#productos").append(
                tarjetaProducto(
                    producto.title,
                    producto.image,
                    producto.price,
                    producto.description,
                    producto.id
                )
            );
        });
    }



});