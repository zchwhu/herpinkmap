/**
 * Created by Administrator on 2017/4/4 0004.
 */
$(function () {
    $(document).on("click",".user-add-btn",function () {
        $(".user-add-modal").modal();
    })

    $(document).on("click",".user-cog-btn",function () {
        var $username = $(this).parent('td').siblings('.user-name').text();
        $(".user-cog-modal input[name='username']").val($username);
        $(".user-cog-modal").modal();
    })

    $(document).on("click",".user-del-btn",function () {
        if(confirm("你确定要删除这个用户吗？")){
            $(this).parents("tr").remove();
        }
    })

    $(".user-add-confirm").click(function () {
        var $isValid = $.validate($("#userAddForm"),{
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
                        message:"密码不能为空,请输入用户密码"
                    }
                }
            }
        })

        return $isValid;
    })

    $(".user-cog-confirm").click(function () {
        var $isValid = $.validate($("#userCogForm"),{
            password:{
                validators:{
                    notEmpty:{
                        message:"请输入新的用户密码"
                    }
                }
            },
            repeatpassword:{
                validators:{
                    notEmpty:{
                        message:"请确认新的用户密码"
                    },
                    isEqual:{
                        target: 'password',
                        message:"两次密码输入不一致，请再次确认"
                    }
                }
            }
        })
    })

    $('.user-add-modal').on('hidden.bs.modal', function (e) {
        $(this).find(".help-block").remove();
        $(this).find(":input").val('');
    })

    $('.user-cog-modal').on('hidden.bs.modal', function (e) {
        $(this).find(".help-block").remove();
        $(this).find(":input").val('');
    })

    $("input[type='text'],input[type='password']").focus(function () {
        if($(this).parents(".form-group").next(".help-block").length>0){
            $(this).parents(".form-group").next(".help-block").remove();
        }
    })
})