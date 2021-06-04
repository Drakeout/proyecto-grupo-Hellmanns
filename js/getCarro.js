$(document).ready(()=>{
    var carrito = localStorage.getItem('productoCarro');
    
    console.log(carrito);

    carrito.split();

    var id = carrito;

    $.ajax({
        type: 'GET',
        url: `https://fakestoreapi.com/products/${id}`,
        dataType: 'json'
    }).done((data) => {
        console.log(data);
    });

    
});