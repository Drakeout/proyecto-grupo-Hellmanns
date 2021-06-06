$(document).ready(() => {
    var carrito = localStorage.getItem('productoCarro');

    console.log(carrito);

    var ids = carrito.split('-');

    

    

    $('#listaCarro').empty();

    const listarProductos = (title, description, price, id) => {
        var tr = document.createElement('tr');
        var html = `
                    <td data-th="Product">
                        <div class="row">
                            <div class="col-md-9 text-left mt-sm-2">
                                <h4>${title}</h4>
                                <p class="font-weight-light">${description}</p>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">$ ${price}</td>
                    <td data-th="Quantity">
                        <input type="number" class="form-control form-control-lg text-center" value="1" disabled>
                    </td>
                    <td class="actions" data-th="" >
                        <div class="text-right">
                            <button class="btn btn-white border-secondary bg-white btn-md mb-2" id='${id}'>
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                `;

        $(tr).html(html)
        $('#listaCarro').append(tr);

    }

    const borrarElemento = (id) => {
        var fileter = ids.filter(function(value){
            return value != id
        })
    };

    var suma = null;

    var contador = ids.length;
    
    ids.forEach(id => {
        $.ajax({
            type: 'GET',
            url: `https://fakestoreapi.com/products/${id}`,
            dataType: 'json'
        }).done((data) => {
            contador -= 1;
            var desc = data.description;
            var descCorta = desc.substring(0, 22);

            suma = suma + data.price

            listarProductos(data.title, descCorta, data.price, data.id)

            if (contador === 0) {
                $('#total').text(() => suma.toFixed(2));
                $('.btn-white').each(function(){
                    $(this).click(()=>{
                        var idBr = this.id
                        var fileter = ids.filter(function(value){
                            return value != idBr
                        })
                        var filtradoGuardado = fileter.join('-')
                        localStorage.removeItem('productoCarro');
                        localStorage.setItem('productoCarro', filtradoGuardado);
                        $('#listaCarro').load(location.href + '#listaCarro');
                    })
                })
            }
        });
    });

    $('#volver').click(()=>window.history.back())
  
    
    

});

