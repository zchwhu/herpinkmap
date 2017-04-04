/**
 * Created by Administrator on 2017/4/4 0004.
 */
$(function () {
    $("#loginForm").submit(function () {
        var $isValid = $.validate($("#loginForm"),{
            username:{
                validators:{
                    notEmpty:{
                        message:"用户名不能为空,请输入用户名"
                    }
                }
            },
            password:{
                validators:{
                    notEmpty:{
                        message:"密码不能为空,请输入登录密码"
                    }
                }
            }
        })

        return $isValid;
    })

    $("input[type='text'],input[type='password']").focus(function () {
        if($(this).parents(".form-group").next(".help-block").length>0){
            $(this).parents(".form-group").next(".help-block").remove();
        }
    })
})