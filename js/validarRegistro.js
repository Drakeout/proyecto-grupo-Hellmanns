$('#formularioRegistro').validate({
    rules: {
        "txtEmail": {
            required: true,
            email: true
        },
        txtContrasena: {
            required: true,
            minlength: 10
        },
        "txtConfirmarContrasena": {
            required: true,
            equalTo: '#id_contrasena'
        },
        "txtFono": {
            required: true,
            rangelength: [9, 11]
        },
        "txtNombre": {
            required: true
        },
        "txtApellido": {
            required: true
        },
        "txtDireccion": {
            required: true
        },
        "selectRegion": {
            required: true
        }
    },
    messages: {
        "txtEmail": {
            required: 'El email es un campo obligatorio',
            email: 'Por favor ingrese un email válido'
        },
        txtContrasena: {
            required: 'La contraseña es un campo obligatorio',
            minlength: 'La contraseña debe tener un minimo de 10 caracteres'
        },
        "txtConfirmarContrasena": {
            required: 'Por favor confirme la contraseña',
            equalTo: 'Las contraseñas no concuerdan'
        },
        "txtFono": {
            required: 'Un teléfono es obligatorio',
            rangelength: 'Ingrese un teléfono entre 9 y 11 caracteres'
        },
        "txtNombre": {
            required: 'El nombre es un campo oblitagorio'
        },
        "txtApellido": {
            required: 'El apellido es un campo obligatorio'
        },
        "txtDireccion": {
            required: 'Su dirección es un campo obligatorio'
        },
        "selectRegion": {
            required: 'Por favor seleccione una región'
        },
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
    }
})