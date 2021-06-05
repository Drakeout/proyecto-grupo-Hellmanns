import refreshCarro from './refresCarro.js';
$(document).ready(() => {

    var dataResult = null;
    var id = null;

    id = JSON.parse(sessionStorage.getItem('producto'));


    const agregarInfo = (titulo, precio, descripcion, img, categoria) => {
        $("#titulo").text(titulo);
        $("#precio").text(`$ ${precio}`);
        $("#descripcion").text(descripcion);
        $("#imagen").attr('src', img);
        $("#categoria").text(categoria)

    };

    $.ajax({
        type: 'GET',
        url: `https://fakestoreapi.com/products/${id}`,
        dataType: 'json'
    }).done((data) => {
        dataResult = data;
        agregarInfo(dataResult.title, dataResult.price, dataResult.description, dataResult.image, dataResult.category);
    });

    $("#btnComprar").click(() => {

        var data = localStorage.getItem('productoCarro');
        if (data === null) {
            localStorage.setItem('productoCarro', JSON.stringify(dataResult.id));

        } else {
            localStorage.setItem('productoCarro', `${data}-${JSON.stringify(dataResult.id)}`);

        }
        refreshCarro();
    });




})

function volver() {
    window.history.back();
}