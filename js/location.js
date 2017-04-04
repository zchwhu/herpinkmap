/**
 * Created by Administrator on 2017/4/4 0004.
 */
$(function () {
    $(document).on("click",".location-del-btn",function () {
        if(confirm("你确定要删除这个地点吗？")){
            $(this).parents("tr").remove();
        }
    })
})