$(function(){var a=$("#j-initdata").val(),b=$("#j-pageID").val();a=$.parseJSON(a),$(".j-pagetitle").text(a.page.title),$(".j-pagetitle-ipt").val(a.page.title),_.each(a.PModules,function(a,b){var c=0==b?!0:!1;HYD.DIY.add(a,c)}),_.each(a.LModules,function(a){HYD.DIY.add(a)});var c=a.PModules[0].content.privType-1;$("input[name=privType]").eq(c).attr("checked","checked"),$("#j-savePage").click(function(){if(HYD.DIY.Unit.verify()){var a=HYD.DIY.Unit.getData();return $.ajax({url:window.location.href,type:"post",dataType:"json",data:{id:b,title:a.page.title,content:JSON.stringify(a),is_preview:0},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，保存成功！"),setTimeout(function(){window.location.href="/Item/list_group"},1e3)):HYD.hint("danger","对不起，保存失败："+a.msg),$.jBox.hideloading()}}),!1}}),$("#j-saveAndPrvPage").click(function(){if(HYD.DIY.Unit.verify()){var a=HYD.DIY.Unit.getData();return $.ajax({url:window.location.href,type:"post",dataType:"json",data:{id:b,title:a.page.title,content:JSON.stringify(a),is_preview:1},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，保存成功！"),setTimeout(function(){window.open(a.link)},1e3)):HYD.hint("danger","对不起，保存失败："+a.msg),$.jBox.hideloading()}}),!1}})});