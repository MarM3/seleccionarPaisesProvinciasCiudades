//Autor: Mar Mazuelas
//Fecha: 29/05/2018
//Descripcion: Seleccionar País, Provincia, Ciudad

let elegido;
let proElegida;
$(document).ready(function () {
    $.getJSON("datos.json", function (resultado) {
        $("#pais").append("<option value=''>--Seleccione País--</option>");
        for (let i = 0; i < resultado.Paises.length; i++) {
            $("#pais").append("<option id='" + resultado.Paises[i] + "' value='" + i +
                "'>" + resultado.Paises[i] + "</option>");
        }
        $("#pais").change(function () {
            $("#provincia").empty();
            elegido = $("#pais").children("option:selected").val();
            if (elegido !== "") {
                $("#provincia").append("<option value=''>--Seleccione una provincia--</option>");
                for (let j = 0; j < resultado.Provincias.length; j++) {
                    $("#provincia").append("<option id='" + resultado.Provincias[elegido][j] + "' value='" + j +
                        "'>" + resultado.Provincias[elegido][j] + "</option>");
                }
            } else {
                $("#icono").show();
                $("#icono").delay(3000);
                $("#icono").fadeOut();
                return false;
            }
            $("#provincia").change(function(){
                $("#ciudad").empty();
                proElegida = $("#provincia").children("option:selected").val();
                if (elegido !== "" && proElegida !== ""){
                    $("#ciudad").append("<option value=''>--Seleccione una ciudad--</option>");
                    for(let k=0; k<resultado.Ciudades.length; k++){
                        $("#ciudad").append("<option id='" + resultado.Ciudades[elegido][proElegida][k] + "' value='" + k
                        + "'>" + resultado.Ciudades[elegido][proElegida][k] + "</option>");
                    }
                }else {
                    $("#icono").show();
                    $("#icono").delay(3000);
                    $("#icono").fadeOut();
                    return false;
                }
            });
        });
        //$("#pais").change(cargarProvincias);
        $("#enviar").click(function () {
            if ($("#pais").val() === "" || $("#provincia").val() === "" || $("#ciudad").val() === "") {
                $("#icono").show();
                $("#icono").delay(3000);
                $("#icono").fadeOut();
                return false;
            }
            return true;
        });
    });
});