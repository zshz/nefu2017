$(document).on("pageinit", function(){
    $("#register").on("tap", function(){
        location.href = "welcome/register_page";
    });

    $("#login_page").on("tap", function(){
        location.href = "welcome/login_page";
    });

    $("#username").on("blur", function(){
        $.post("user/check_username", {
            "username" : $(this).val()
        }, function(res){
            if(res == "no"){//用户名不可用
                $("#is-use").html("用户名已存在，你换一个");
            }else{
                $("#is-use").html("用户名可用");
            }
        });



    });
});
