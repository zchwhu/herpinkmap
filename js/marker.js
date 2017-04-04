/**
 * Created by Administrator on 2017/4/4 0004.
 */
$(function () {
    $(document).on("change","#upload",function (e) {
        upload(".form-headimg",e);
    })

    function upload(target,event) {
        var files = event.target.files,
            reader = new FileReader(),
            target = $(target);

        if(/image/.test(files[0].type)){
            reader.readAsDataURL(files[0]);
        }

        reader.onload = function () {
            target.attr("src",reader.result);
        }
    }

    $("#markerForm").submit(function () {
        var $isValid = $.validate($("#markerForm"),{
            title:{
                validators:{
                    notEmpty:{
                        message:"地点名称不能为空,请输入地点名称"
                    }
                }
            },
            longitude:{
                validators:{
                    notEmpty:{
                        message:"地点精度不能为空,请输入地点纬度信息"
                    },
                    isNumber: {
                        message: "地点精度格式错误,请重新输入"
                    }
                }
            },
            latitude: {
                validators:{
                    notEmpty:{
                        message:"地点纬度不能为空,请输入地点纬度信息"
                    },
                    isNumber: {
                        message: "地点纬度格式错误,请重新输入"
                    }
                }
            },
            location: {
                validators:{
                    notEmpty:{
                        message:"地点位置不能为空,请输入地点位置"
                    }
                }
            },
            type: {
                validators:{
                    notEmpty:{
                        message:"地点类型不能为空,请选择地点类型"
                    }
                }
            }
        })

        return $isValid;
    })

    $("input[type='text'],input[type='password'],input[type='number'],.wangEditor-txt").focus(function () {
        if($(this).parents(".form-group").next(".help-block").length>0){
            $(this).parents(".form-group").next(".help-block").remove();
        }
    })

    $("select").change(function () {
        if($(this).find("option:selected").index()>0){
            if($(this).parents(".form-group").next(".help-block").length>0){
                $(this).parents(".form-group").next(".help-block").remove();
            }
        }
    })
})