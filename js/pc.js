// build time:Sat Jul 06 2019 18:49:05 GMT+0800 (中国标准时间)
define([],function(){var n=function(){var n=$(".tips-box");return{show:function(){n.removeClass("hide")},hide:function(){n.addClass("hide")},init:function(){}}}();var e=function(){var n=$(".tagcloud a");n.css({"font-size":"12px"});for(var e=0,t=n.length;e<t;e++){var s=n.eq(e).html().length%5+1;n[e].className="";n.eq(e).addClass("color"+s)}};var t=function(n){var e=$(".switch-wrap"),t=["-webkit-transform: translate(-"+n*100+"%, 0);","-moz-transform: translate(-"+n*100+"%, 0);","-o-transform: translate(-"+n*100+"%, 0);","-ms-transform: translate(-"+n*100+"%, 0);","transform: translate(-"+n*100+"%, 0);"];e[0].style.cssText=t.join("");$(".icon-wrap").addClass("hide");$(".icon-wrap").eq(n).removeClass("hide")};var s=function(){var s=$("#myonoffswitch");var a=$(".second-part");var i=$(".first-part");s.click(function(){if(s.hasClass("clicked")){s.removeClass("clicked");a.removeClass("turn-left");i.removeClass("turn-left")}else{s.addClass("clicked");a.addClass("turn-left");i.addClass("turn-left");e()}});var r;var o=false;var l=false;$(".icon").bind("mouseenter",function(){o=true;n.show()}).bind("mouseleave",function(){o=false;setTimeout(function(){if(!l){n.hide()}},100)});$(".tips-box").bind("mouseenter",function(){l=true;n.show()}).bind("mouseleave",function(){l=false;setTimeout(function(){if(!o){n.hide()}},100)});$(".tips-inner li").bind("click",function(){var e=$(this).index();t(e);n.hide()})};return{init:function(){e();s();n.init()}}});
//rebuild by neat 