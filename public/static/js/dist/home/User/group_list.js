$(function(){$(".j-del").click(function(){var a=$(this).data("id"),b=$(this).data("type");return $.jBox.show({title:"提示",content:"删除后将不可恢复，是否继续？",btnOK:{onBtnClick:function(c){$.jBox.close(c),$.ajax({url:"/User/del_group",type:"post",dataType:"json",data:{id:a,type:b},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，删除成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，删除失败："+a.msg),$.jBox.hideloading()}})}}}),!1}),$(".btn_table_delAll").click(function(){var a=[],b=$(".table-ckbs:checked");return b.each(function(){a.push($(this).data("id"))}),a.length?($.jBox.show({title:"提示",content:"删除后将不可恢复，是否继续？",btnOK:{onBtnClick:function(c){$.jBox.close(c),$.ajax({url:"/User/delAll_group",type:"post",dataType:"json",data:{id:a},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?b.parents("tr").fadeOut(300,function(){HYD.hint("success","恭喜您，删除成功！")}):HYD.hint("danger","对不起，删除失败："+a.msg),$.jBox.hideloading()}})}}}),!1):void HYD.hint("warning","对不起，请选择要删除的数据！")}),$(".j-add-grup").click(function(){return $.jBox.show({title:"添加分组",content:_.template($("#tpl_add_user_group").html()),btnOK:{onBtnClick:function(a){var b=a.find("input[name='title']"),c=$.trim(b.val());if(""==c)return void HYD.FormShowError(b,"请输入分组");var d=a.find("input[name='identity']").val();$.jBox.close(a),$.ajax({url:"/User/add_group",type:"post",dataType:"json",data:{title:c,type:d},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，添加成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，添加失败："+a.msg),$.jBox.hideloading()}})}}}),!1}),$(".j-edit_group").click(function(){var a=$(this),b=a.data("id"),c={title:a.data("title")},d=_.template($("#tpl_edit_user_group").html(),c),e=$(d);return $.jBox.show({width:500,title:"编辑分组",content:e,btnOK:{onBtnClick:function(a){var c=a.find("input[name='title']"),d=$.trim(c.val());if(""==d)return void HYD.FormShowError(c,"请输入分组");var e=a.find("input[name='identity']").val();$.jBox.close(a),$.ajax({url:"/User/edit_group",type:"post",dataType:"json",data:{id:b,title:d,type:e},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，编辑成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，编辑失败："+a.msg),$.jBox.hideloading()}})}}}),!1})});