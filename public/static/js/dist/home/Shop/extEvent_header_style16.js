$(function(){Defaults={16:{page:{title:"商城首页"},PModules:[{id:16,type:"Header_style16",draggable:!1,sort:0,content:{bg:"/PublicMob/images/indexbg/16.jpg",photo:"/PublicMob/images/index16-4.png",dataset:[{link:"/Shop/index",linkType:6,showtitle:"成为分销商",title:"",pic:"/PublicMob/images/ind3_1.png"},{link:"/Shop/index",linkType:6,showtitle:"小店首页",title:"",pic:"/PublicMob/images/index3-3.png"},{link:"/Shop/index",linkType:6,showtitle:"我的订单",title:"",pic:"/PublicMob/images/index3_2.png"}]}}],LModules:[{id:9,type:4,draggable:!0,sort:0,content:{layout:1,showPrice:!0,showIco:!0,showName:!0,goodslist:[]}},{id:10,type:4,draggable:!0,sort:0,content:{layout:1,showPrice:!0,showIco:!0,showName:!0,goodslist:[]}}]}},HYD.DIY.Unit.event_typeHeader_style16=function(a,b){var c=b.dom_conitem,d=a,e=$("#tpl_diy_con_typeHeader_style16").html(),f=$("#tpl_diy_ctrl_typeHeader_style16").html(),g=function(){var a=$(_.template(e,b));c.find(".membersbox").remove().end().append(a);var g=$(_.template(f,b));d.empty().append(g),HYD.DIY.Unit.event_typeHeader_style16(d,b)};d.find(".j-modify-bg").click(function(){return HYD.popbox.ImgPicker(function(a){b.content.bg=a[0],g()}),!1}),d.find(".j-modify-photo").click(function(){return HYD.popbox.ImgPicker(function(a){b.content.photo=a[0],g()}),!1}),d.find(".j-moveup").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index();if(0!=a){var c=b.content.dataset.slice(a,a+1)[0];b.content.dataset.splice(a,1),b.content.dataset.splice(a-1,0,c),g()}}),d.find(".j-movedown").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index(),c=b.content.dataset.length;if(a!=c-1){var d=b.content.dataset.slice(a,a+1)[0];b.content.dataset.splice(a,1),b.content.dataset.splice(a+1,0,d),g()}}),d.find("input[name='navtitle']").change(function(){var a=$(this).parents("li.ctrl-item-list-li").index(),c=$(this).val();b.content.dataset[a].showtitle=c,g()}),d.find(".j-navDplist li").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index();HYD.popbox.dplPickerColletion({linkType:$(this).data("val"),callback:function(c,d){b.content.dataset[a].title=c.title,b.content.dataset[a].link=c.link,b.content.dataset[a].linkType=d,g()}})}),d.find("input[name='customlink']").change(function(){var a=$(this).parents("li.ctrl-item-list-li").index();b.content.dataset[a].link=$(this).val()}),d.find(".j-navModifyIcon").click(function(){var a=$(this).parents("li.ctrl-item-list-li").index();HYD.popbox.ImgPicker(function(c){b.content.dataset[a].pic=c[0],g()})})},HYD.DIY.Unit.event_typeHeader_style16_news=function(a,b){var c=b.dom_conitem,d=a,e=$("#tpl_diy_con_typeHeader_style16_news").html(),f=$("#tpl_diy_ctrl_typeHeader_style16_news").html(),g=function(){var a=$(_.template(e,b));c.find(".newsbox").remove().end().append(a);var g=$(_.template(f,b));d.empty().append(g),HYD.DIY.Unit.event_typeHeader_style9_news(d,b)};d.find("input[name='title']").change(function(){var a=$(this).val();b.content.showtitle=a,g()})}});