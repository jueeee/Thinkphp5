$(function(){var a=$("#extRulePanel");$("#j-addNewRule").click(function(){var b=$("#tpl_ump_checkin_rule").html();return a.append(b),!1}),$(document).on("click",".j-delRule",function(){var a=$(this).parent(".rule"),b=$(this).data("id");""!=$(this).data("id")?$.jBox.show({title:"提示",content:_.template($("#tpl_jbox_simple").html(),{content:"删除后将不可恢复，是否继续？"}),btnOK:{onBtnClick:function(c){$.jBox.close(c),$.ajax({url:"",type:"post",dataType:"json",data:{id:b},beforeSend:function(){$.jBox.showloading()},success:function(b){1==b.status?(HYD.hint("success","恭喜您，删除成功！"),a.remove()):HYD.hint("danger","对不起，删除失败："+b.msg),$.jBox.hideloading()}})}}}):a.remove()})});