const refreshCarro = () => {
    var carrito = localStorage.getItem('productoCarro');
    var dataResult = null;


    $('#carritoNavbar').empty();
    var split = carrito.split('-');



    const getProducto = (id) => {
        $.ajax({
            type: 'GET',
            url: `https://fakestoreapi.com/products/${id}`,
            dataType: 'json'
        }).done((data) => {
            dataResult = data;
            mostrarProducto(dataResult.title, dataResult.price);
        });
    }

    const mostrarProducto = (title, price) => {

        if (dataResult.title.empty && dataResult.price.empty ) {
           
         var html2 = `
         <div class="d-flex justify-content-between">
            <p>TEST</p>
         </div>
         `;
         
        } else {
            var html2 = `
            <div class="d-flex justify-content-between">    
                <p>${title}</p>
                <p>$ ${price}</p>
            </div>
            `;                 
        }
        $("#carritoNavbar").append(html2);

    };

    split.forEach(element => {
        getProducto(element);
    });
};

export default refreshCarro;