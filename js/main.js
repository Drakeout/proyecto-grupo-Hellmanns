$(document).ready(()=>{


    $('#registroUsuario').validate({
        rules: {
            nombre: 'required',
            apellido: 'required'
        }
    })

})