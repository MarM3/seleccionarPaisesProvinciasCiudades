//Autor: Mar Mazuelas
//Fecha: 29/05/2018
//Descripcion: Seleccionar País, Provincia, Ciudad

//let datos;
$(document).ready(function(){
    //datos = result;
   
        $("#pais").append("<option value=''>--Seleccione País--</option>")
        $("#pais").focus(cargarPaises);
        $("#pais").change(cargarProvincias);
     $("#enviar").click(function () {
        if ($("#pais").val() === "" || $("#provincia").val==="" || $("#ciudad").val===""){
            $("#icono").show().delay(3000).fadeOut();
        }
/*
           for(let j=0; j>resultado.provincias.length; j++){
                $("#provincia").append("<option id='" + resultado.provincia[j] + "' value='" + resultado.provincia[j]
                + "'>" + resultado.provincia[j] + "</option>");
            }
            for(let k=0; k>resultado.ciudades.length; k++){
                $("#ciudad").append("<option id='" + resultado.ciudad[k] + "' value='" + resultado.ciudad[k]
                + "'>" + resultado.ciudad[k] + "</option>");
            }
        });*/
        
    });
});
function cargarPaises(){
    $.getJSON("datos.json", function (resultado) {
    for(let i=0; i>resultado.paises.length; i++){
        $("#pais").append("<option id='" + resultado.paises[i] + "' value='" + resultado.paises[i]
                        + "'>" + resultado.paises[i] + "</option>");
    }
});
}