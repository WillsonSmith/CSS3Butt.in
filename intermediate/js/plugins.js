window.log=function f(){log.history=log.history||[];log.history.push(arguments);if(this.console){var a=arguments;try{a.callee=f.caller}catch(d){}a=[].slice.call(a);typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};
(function(g){function a(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),e;e=d.pop();)g[e]=g[e]||a})(function(){try{return console.log(),window.console}catch(g){return window.console={}}}());
$(document).ready(function(){function g(){var a=$("#btn"),b=document.defaultView.getComputedStyle(a[0],"")["font-size"],c=document.defaultView.getComputedStyle(a[0],"").padding,d=document.defaultView.getComputedStyle(a[0],"")["border-radius"],a=a.css("background-image"),e=a.replace(/-webkit|moz|o|ms/,"-webkit"),g=a.replace(/-webkit|moz|o|ms/,"-moz"),i=a.replace(/-webkit|moz|o|ms/,"-o"),j=a.replace(/-webkit|moz|o|ms/,"-ms"),k=a.replace(/-webkit-|moz-|o-|ms-/,""),b={"font-size":b,padding:c,"-webkit-border-radius":d,
"-moz-border-radius":d,"-o-border-radius":d,"-ms-border-radius":d,"border-radius":d,"background-w":e,"background-m":g,"background-o":i,"background-i":j,background:k,color:"white","text-shadow":"0 -1px 0 rgba(0, 0, 0, 0.25)","text-decoration":"none",border:"1px solid rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)"},m="";console.log(a);$.each(b,function(a,b){m+=a+" : "+b+";\n"});regexbg=m.replace(/^background-[a-z]/mg,"background");$("#css").val("#btn{\n"+regexbg+"}")}var a=180,d=50,e=d-
10,b=50,c=1,j=16,k=5,i=a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c;$("#btn").css({"font-size":"20px",padding:"5px","border-radius":"5px",color:"white","text-shadow":"0 -1px 0 rgba(0, 0, 0, 0.25)","text-decoration":"none",border:"1px solid rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)"});$("#btn").css("background","-webkit-linear-gradient(top, hsla("+i+") 100%)");$("#btn").css("background","-moz-linear-gradient(top, hsla("+i+") 100%)");$("#btn").css("background","-o-linear-gradient(top, hsla("+
i+") 100%)");$("#btn").css("background","-ie-linear-gradient(top, hsla("+i+") 100%)");$("#btn").css("background","linear-gradient(top, hsla("+i+") 100%)");$("#slider-hue").slider({min:0,max:360,value:a,slide:function(l,h){a=h.value;$("#btn").css("background","-webkit-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-moz-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");
$("#btn").css("background","-o-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-ms-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)")}});$("#slider-sat").slider({min:0,max:100,value:d,slide:function(l,h){d=h.value;$("#btn").css("background","-webkit-linear-gradient(top, hsla("+
a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-moz-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-o-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-ms-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","linear-gradient(top, hsla("+
a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)")}});$("#slider-light").slider({min:0,max:100,value:b,slide:function(l,h){b=h.value;$("#btn").css("background","-webkit-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-moz-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-o-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+
c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-ms-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)")}});$("#slider-opacity").slider({min:0,max:1,value:c,step:0.01,slide:function(l,h){c=h.value;$("#btn").css("background","-webkit-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+
a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-moz-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-o-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","-ms-linear-gradient(top, hsla("+a+","+d+"% ,"+b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)");$("#btn").css("background","linear-gradient(top, hsla("+a+","+d+"% ,"+
b+"% ,"+c+") 0%,hsla("+a+","+e+"% ,"+b+"% ,"+c+") 100%)")}});$("#slider-size").slider({min:0,max:100,value:j,slide:function(a,b){j=b.value;$("#btn").css("font-size",j)}});$("#slider-border-radius").slider({min:0,max:50,step:5,value:k,slide:function(a,b){k=b.value;console.log(theHeight);$("#btn").css("border-radius",k)}});$(".the-icons li").on("click",function(){var a=$(this).attr("class");$(".the-icons li").removeClass("greenbg");$("#btn i").removeAttr("class");$("#btn i").attr("class",a);$(this).addClass("greenbg")});
$("#blank-i").on("click",function(a){a.preventDefault();$("#btn i").removeAttr("class")});$("#btn").on("click",function(a){a.preventDefault()});$("#btn>span").keydown(function(a){a.keyCode==13&&a.preventDefault()});$("#htgen").on("click",function(a){a.preventDefault();$("#btn").clone().appendTo("#hiddenB");$("#hiddenB>#btn>span").removeAttr("contenteditable");$("#hiddenB>#btn").removeAttr("style");a=$("#hiddenB").html();$("#html").val(a);$("#hiddenB").html("")});$("#cssgen").on("click",function(a){a.preventDefault();
g()});$("#bt-n").on("click",function(a){a.preventDefault();a=$(this).clone();console.log(a);$("#linkbtnhtml").val(a)})});
