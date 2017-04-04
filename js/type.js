/**
 * Created by Administrator on 2017/4/4 0004.
 */
$(function () {
    $(".type-add-btn").click(function () {
        $(".type-add-modal").modal();
    })

    $(".type-add-confirm").click(function () {
        var $isValid = $.validate($("#typeAddForm"),{
            typename:{
                validators:{
                    notEmpty:{
                        message:"请输入新的类型名称"
                    }
                }
            },
            icon:{
                validators:{
                    notEmpty:{
                        message:"请上传类型图标"
                    }
                }
            }
        })
    })

    $("input[type='file']").change(function () {
        if($(this).val().length>0){
            if($(this).parents(".form-group").next(".help-block").length>0){
                $(this).parents(".form-group").next(".help-block").remove();
            }
        }
    })

    $("input[type='text']").focus(function () {
        if($(this).parents(".form-group").next(".help-block").length>0){
            $(this).parents(".form-group").next(".help-block").remove();
        }
    })

    $(document).on("change","#upload",function (e) {
        upload("input[name='icon']",e);
    })


    $('.type-add-modal').on('hidden.bs.modal', function (e) {
        $(this).find(":input").val('');
        $(this).find(".help-block").remove();
        $(this).find("img").remove();
    })

    $(document).on("click",".type-del-btn",function () {
        if(confirm("删除当前类型的话属于该类型下的所有类型信息将一并删除，你确定要删除这个类型吗？")){
            $(this).parents(".type-item").remove();
        }
    })

    function upload(target,event) {
        var files = event.target.files,
            reader = new FileReader(),
            target = $(target);

        if(/image/.test(files[0].type)){
            reader.readAsDataURL(files[0]);
        }

        reader.onload = function () {
            var $img = $("<img class='form-headimg'>");
            $img.attr("src",reader.result).insertBefore(target);
        }
    }
})