$(function(){HYD.DIY.Unit.event_typeMgzCate=function(a,b){var c=b.dom_conitem,d=a;$("#tpl_diy_con_typeMgzCate").html(),$("#tpl_diy_ctrl_typeMgzCate").html();d.find("input[name='showtitle']").change(function(){var a=$(this).val();c.find(".showtitle").text(a),$(".j-pagetitle").text(a),$(".j-pagetitle-ipt").val(a),b.content.showtitle=a}),d.find(".j-priority").change(function(){var a=$(this).val(),c=$(this).attr("name");b.content[c]=a}),b.ue&&b.ue.destroy(),b.ue=UE.getEditor("editor"+b.id),b.ue.ready(function(){b.ue.setContent(HYD.DIY.Unit.html_decode(b.content.fulltext)),b.ue.focus(!0);var a=function(){var a=b.ue.getContent();c.find(".fulltext").html(a),b.content.fulltext=HYD.DIY.Unit.html_encode(a)};b.ue.addListener("selectionchange",a),b.ue.addListener("contentChange",a)})}});