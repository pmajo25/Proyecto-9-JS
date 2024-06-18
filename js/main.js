function zapateria() {
    // Obtenemos los valores ingresados en los inputs
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio").value);
    //Declaracion de variables 
    let subtotal = cantidad * precio;
    let p_descuento, v_descuento, t_compras
    let respuesta;
    // procesos
    if (cantidad < 10) {
        p_descuento = 0;
    } else if (cantidad >= 10 && cantidad < 20) {
        p_descuento = 0.10;
    } else if (cantidad >= 20 && cantidad < 30) {
        p_descuento = 0.20;
    } else if (cantidad > 30) {
        p_descuento = 0.40;
    } else {
        p_descuento = 0.40;
    }

    v_descuento = subtotal * p_descuento;
    t_compras = subtotal - v_descuento;
    //salida


    document.getElementById("resultadoapp1").innerHTML = `<div class='alert alert-success' role='alert'><strong>Respuesta:</strong> El descuesto es del ${p_descuento * 100}%. Este descuento tiene un valor de $ ${v_descuento} y el total de la compra es $${t_compras} <img src='img/tienda.png'>.`;
}

function identificacion() {
    // Obtenemos los valores ingresados en los inputs
    const edad = Number(document.getElementById("edad").value);

    //Declaracion de variables 
    let resultado;
    // procesos
    if (edad <= 10) {
        resultado = "Eres un niño";
    } else if (edad > 12 && edad < 40) {
        resultado = "Eres un joven";
    } else if (edad > 40 && edad <= 60) {
        resultado = "Eres un adulto";
    } else if (edad > 60) {
        resultado = "Eres un adulto mayor";
    }

    //salida
    document.getElementById("resultadoapp2").innerHTML = `<div class='alert alert-success ' role='alert'><strong>Respuesta:</strong> Su edad le indica que: ${resultado} <img src='img/edad.png'>.`;

}

function imc() {
    // Obtenemos los valores ingresados en los inputs
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    //Declaracion de variables 
    let resultado;
    const indice = peso / (altura * altura);

    // procesos
    if (indice < 18.5) {
        resultado = "Usted tiene bajo peso";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-warning ' role='alert'><strong>Respuesta:</strong> Su imc indica que: ${resultado} <img src='img/imc.png'></div>.`;
    } else if (indice > 18.5 && indice <= 24.9) {
        resultado = "Usted esta en un estado normal";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-success  ' role='alert'><strong>Respuesta:</strong> Su imc indica que: ${resultado} <img src='img/imc.png'></div>.`;
    } else if (indice >= 25 && indice <= 29.9) {
        resultado = "usted tiene sobre peso";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-warning ' role='alert'><strong>Respuesta:</strong> Su imc indica que: ${resultado} <img src='img/imc.png'></div>.`;
    } else if (indice >= 30 && indice <= 34.9) {
        resultado = "usted tiene obesidad I";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger  ' role='alert'><strong>Respuesta:</strong> Su imc indica que: ${resultado} <img src='img/imc.png'></div>.`;
    } else if (indice >= 35 && indice <= 39.9) {
        resultado = "usted tiene obesidad II";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger  ' role='alert'><strong>Respuesta:</strong> Su imc indica que: ${resultado} <img src='img/imc.png'></div>.`;
    } else if (indice >= 40 && indice <= 49.9) {
        resultado = "usted tiene obesidad III";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger  ' role='alert'><strong>Respuesta:</strong> Su imc indica que: ${resultado} <img src='img/imc.png'></div>.`;
    } else if (indice > 50) {
        resultado = "usted tiene obesidad IV";
        document.getElementById("resultadoapp3").innerHTML = `<div class='alert alert-danger  ' role='alert'><strong>Respuesta:</strong> Su imc indica que: ${resultado} <img src='img/imc.png'></div>.`;
    }

    //salida
    

}
function presion_arterial() {
    // Obtenemos los valores ingresados en los inputs
    const presion = Number(document.getElementById("presion").value);

    //Declaracion de variables 
    let resultado;

    // procesos
    if (presion < 90) {
        resultado = "Baja";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-info" role="alert"><strong>Respuesta:</strong> Su presion arterial sistolica esta: ${resultado} <img src='img/hipertension.png'></div>.`;
    } else if (presion < 120) {
        resultado = "Normal";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-success" role="alert"><strong>Respuesta:</strong> Su presion arterial sistolica esta: ${resultado} <img src='img/hipertension.png'></div>.`;
    } else if (presion >= 120 && presion <= 139) {
        resultado = "en estado de prehipertension";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-warning" role="alert"><strong>Respuesta:</strong> Su presion arterial sistolica esta: ${resultado} <img src='img/hipertension.png'></div>.`;
    } else if (presion >= 140 && presion <= 159) {
        resultado = "Alta: Hipertension Fase 1";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-danger" role="alert"><strong>Respuesta:</strong> Su presion arterial sistolica esta: ${resultado} <img src='img/hipertension.png'></div>.`;
    } else if (presion >= 160) {
        resultado = "Alta: Hipertension Fase 2";
        document.getElementById("resultadoapp4").innerHTML = `<div class="alert alert-danger" role="alert"><strong>Respuesta:</strong> Su presion arterial sistolica esta: ${resultado} <img src='img/hipertension.png'></div>.`;
    }

    //salida
   
    


}