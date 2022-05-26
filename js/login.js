$(document).ready(function(){
    $("#btn-login").click(function(){
        let username = $("#username").val().trim();
        let password = $("#pwd").val().trim();

        console.log(username)

        if( username != "" && password != "" ){
            $.ajax({
                url:'https://localhost:5501/User/Login',
                type:'post',
                data:JSON.stringify({username:username,password:password}),
                contentType:"application/json; charset=utf-8",
                success:function(response){
                    
                    window.location = "welcome.html";
                },
                error:function(){
                    $("#error").fadeIn();
                }
            });
        }
    });

    $("#btn-registration").click(function(){
        window.location = "registration.html";
    })
});