$(document).ready(function(){
    
})
$(function(){
    $("#formularioProducto").validate({
        rules:{
            producto:{
                required: true,
                minlength: 35
            },
            id:{
                required: true,
                minlength: 1
            }
        }
    })
})

let url = "https://api.exchangeratesapi.io/v1/"
$.get(url, function(respuesta){
    console.log(respuesta);
}, "json")