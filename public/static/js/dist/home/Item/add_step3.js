$(function(){var a={page:{},PModules:[{id:1,type:1,draggable:!1,sort:0,content:{fulltext:"&lt;p&gt;『富文本编辑器』&lt;/p&gt;"}}],LModules:[]},b=$("#j-initdata").val(),c=$("#j-pageID").val();b=b.length?$.parseJSON(b):a,_.each(b.PModules,function(a,b){var c=0==b?!0:!1;HYD.DIY.add(a,c)}),_.each(b.LModules,function(a){HYD.DIY.add(a)}),$("#j-savePage").click(function(){if(HYD.DIY.Unit.verify()){var a=HYD.DIY.Unit.getData();return $.ajax({url:window.location.href,type:"post",dataType:"json",data:{id:c,title:a.page.title,content:JSON.stringify(a),is_preview:0},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，保存成功！"),setTimeout(function(){window.location.href=a.link},1e3)):HYD.hint("danger","对不起，保存失败："+a.msg),$.jBox.hideloading()}}),!1}}),$("#j-saveAndPrvPage").click(function(){if(HYD.DIY.Unit.verify()){var a=HYD.DIY.Unit.getData();return $.ajax({url:window.location.href,type:"post",dataType:"json",data:{id:c,title:a.page.title,content:JSON.stringify(a),is_preview:1},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，保存成功！"),setTimeout(function(){window.location.href=a.link},1e3)):HYD.hint("danger","对不起，保存失败："+a.msg),$.jBox.hideloading()}}),!1}})});