$(function(){$(".j-add").click(function(){$.jBox.show({width:500,title:"添加分销商等级",content:_.template($("#tpl_agent_rank_add").html()),btnOK:{onBtnClick:function(a){var b=a.find("input[name='title']"),c=a.find("input[name='superior_ratio']"),d=a.find("input[name='top_ratio']"),e=a.find("input[name='three_ratio']"),f=a.find("input[name='upgrade_amount']"),g=a.find("input[name='upgrade_order_amount']"),h=a.find("input[name='upgrade_agent_amount']"),i=$.trim(b.val()),j=parseFloat(c.val()),k=parseFloat(d.val()),l=parseFloat(e.val()),m=f.val(),n=g.val(),o=h.val();return""==i?void HYD.FormShowError(b,"请输入等级名称"):($.jBox.close(a),void $.ajax({url:"/User/addAgentRank",type:"post",dataType:"json",data:{title:i,superior_ratio:j,top_ratio:k,three_ratio:l,upgrade_amount:m,upgrade_order_amount:n,upgrade_agent_amount:o},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，添加成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，添加失败："+a.msg),$.jBox.hideloading()}}))}}})}),$(".j-modify").click(function(){var a=$(this),b=a.data("id"),c={title:a.data("title"),superior:a.data("superior"),top:a.data("top"),three:a.data("three"),amount:a.data("amount"),order_amount:a.data("order"),agent_amount:a.data("agent")},d=_.template($("#tpl_agent_rank_edit").html(),c),e=$(d),f=e.find("input[name='title']"),g=e.find("input[name='superior_ratio']"),h=e.find("input[name='top_ratio']"),i=e.find("input[name='three_ratio']"),j=e.find("input[name='upgrade_amount']"),k=e.find("input[name='upgrade_order_amount']"),l=e.find("input[name='upgrade_agent_amount']");return $.jBox.show({width:500,title:"编辑分销商等级",content:e,btnOK:{onBtnClick:function(a){$.jBox.close(a);var c=f.val(),d=parseFloat(g.val()),e=parseFloat(h.val()),m=parseFloat(i.val()),n=j.val(),o=k.val(),p=l.val();$.ajax({url:"/User/editAgentRank",type:"post",dataType:"json",data:{agent_rank_id:b,title:c,superior_ratio:d,top_ratio:e,three_ratio:m,upgrade_amount:n,upgrade_order_amount:o,upgrade_agent_amount:p},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，编辑成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，编辑失败："+a.msg),$.jBox.hideloading()}})}}}),!1}),$(".j-del").click(function(){var a=$(this),b=a.data("id");return $.jBox.show({width:300,title:"删除分销商等级",content:"确认要删除吗？",btnOK:{onBtnClick:function(a){$.jBox.close(a),$.ajax({url:"/User/delAgentRank",type:"post",dataType:"json",data:{id:b},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，删除成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，删除失败："+a.msg),$.jBox.hideloading()}})}}}),!1})});