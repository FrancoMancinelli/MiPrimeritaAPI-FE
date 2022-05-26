$(document).ready(function(){
        
    $.ajax({
        url:'https://localhost:5501/Alumno/All',
        type:'get',
        contentType:"application/json; charset=utf-8",
        success:function(response){
            let alumnos = response
            alumnos.forEach(alumno => {
                console.log(alumno)
                $("#alumnos").append('<li>'+alumno.dni+'</li>')
            });
            
        },
        error:function(){            
            alert("error")
        }
    });
        
  
});