$(document).ready(()=>{

    var seccion = null;

    if (document.getElementById('mujer')){
        console.log('sii');
        seccion = `women's%20clothing`;
    } else if (document.getElementById('hombre')){
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
        <div class="card">
            <div class="row g-0" >
                <div class="col-md-4 mx-auto my-auto">
                    <img src="${imgs}" alt="..." class="img-fluid p-1">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title" id="titulo">${titulo}</h5>
                    <p class="card-text" id="descripcion">${description}</p>
                    
                        <hr/>                    
                        <div class="d-flex flex-row justify-content-end">
                            <p class="card-text text-end mx-1" id='precio'><strong>$ ${precio}</strong></p>
                            <button class='btn btn-primary mx-2' id='${id}'>Agregar</button>
                        </div>
                    
                </div>
                </div>
            </div> 
        </div>
        `;
        let card = document.createElement('div');
        $(card).html(html);
        $(card).addClass('col m-1');
        $(card).attr('id', id);

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