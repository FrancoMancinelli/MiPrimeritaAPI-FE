$(document).ready(function(){
    $("#btn-confirmar").click(function(){
        let email = $("#email").val().trim();
        let username = $("#username").val().trim();
        let password = $("#pwd1").val().trim();
        let password2 = $("#pwd2").val().trim();
        let birth =  $("#birth").val().trim();
        
        console.log(birth);
        console.log(email);
        console.log(username)

        if( email != "" && username != "" && password != "" && password2 != ""){
            if(password == password2){
                $.ajax({
                    url:'https://localhost:5501/User/Registration',
                    type:'post',
                    data:JSON.stringify({email:email,username:username,password:password,birth:birth}),
                    contentType:"application/json; charset=utf-8",
                    success:function(response){
                        
                        window.location = "index.html";
                    },
                    error:function(){
                        $("#error").fadeIn();
                    }
                });
            }
        }
    });
});