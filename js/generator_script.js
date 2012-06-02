  //The following code - in its parts(see readme.md for details) falls under the following license (MIT)
  
  /*
  *Copyright (C) <2012> <Willson Smith, http://willsonsmith.com>
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.	
  */
  
  $(document).ready(function () {
  	var thecss = {
  	'font-size': '20px',
  	'padding': '5px',
  	'border-radius': '5px',
  	'color': 'white',
  	'text-shadow': '0 -1px 0 rgba(0, 0, 0, 0.25)',
  	'text-decoration': 'none',
  	'border': '1px solid rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)'
  
    },
  
  
  
    		hueglob = 180,
    		satglob = 50,
    		satglob2 = satglob - 20,
    		lightglob = 50,
    		lightglob2 = lightglob - 20,
    		opacglob = 1,
  
    		sizglob = 16,
    		radglob = 5,
    		/*theHeight = $('.btn').css('height'),*/
  
    	  globs =  hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob;
  
    	  $('.btn').css(thecss);
    	  $('.btn').css('background', '-webkit-linear-gradient(top, hsla(' + globs + ') 100%)');
    	  $('.btn').css('background', '-moz-linear-gradient(top, hsla(' + globs + ') 100%)');
    	  $('.btn').css('background', '-o-linear-gradient(top, hsla(' + globs + ') 100%)');
    	  $('.btn').css('background', '-ie-linear-gradient(top, hsla(' + globs + ') 100%)');
    	  $('.btn').css('background', 'linear-gradient(top, hsla(' + globs + ') 100%)');
  
  
    	  $('#slider-hue').slider({
    		  min: 0,
    		  max: 360,
    		  value: hueglob,
    		  slide: function (event, ui) {
    			  //hueValue = ui.value;
    			  hueglob = ui.value;
    			  $('.btn').css('background', '-webkit-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-moz-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-o-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-ms-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', 'linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
  
    		  }
    	  });
  
    	  $('#slider-sat').slider({
    		  min: 0,
    		  max: 100,
    		  value: satglob,
    		  slide: function (event, ui) {
    			  //satValue = ui.value;
    			  satglob = ui.value;
    			  $('.btn').css('background', '-webkit-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-moz-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-o-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-ms-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', 'linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    		  }
  
    	  });
  
    	  $('#slider-light').slider({
    		  min: 0,
    		  max: 100,
    		  value: lightglob,
    		  slide: function (event, ui) {
    			  //lightValue = ui.value;
    			  lightglob = ui.value;
    			  $('.btn').css('background', '-webkit-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-moz-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-o-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-ms-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', 'linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
  
    		  }
  
    	  });
  
    	  $('#slider-opacity').slider({
    		  min: 0,
    		  max: 1,
    		  value: opacglob,
    		  step: 0.01,
    		  slide: function (event, ui) {
    			  //opacValue = ui.value;
    			  opacglob = ui.value;
    			  $('.btn').css('background', '-webkit-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-moz-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-o-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', '-ms-linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
    			  $('.btn').css('background', 'linear-gradient(top, hsla(' + hueglob + ',' + satglob + '% ,' + lightglob + '% ,' + opacglob + ') 0%,hsla(' + hueglob + ',' + satglob2 + '% ,' + lightglob + '% ,' + opacglob + ') 100%)');
  
    		  }
  
    	  });
  
  
    	  $('#slider-size').slider({
    		  min: 0,
    		  max: 100,
    		  value: sizglob,
    		  slide: function (event, ui) {
    			  //sizValue = ui.value;
    			  sizglob = ui.value;
    			  $('.btn').css('font-size', sizglob);
  
    		  }
  
    	  });
  
  
  //to be implimented, size calculations needed
  	$('#slider-border-radius').slider({
  	  	  min: 0,
  	  	  max: 50,
  	  	  step: 5,
  	  	  value: radglob,
  	  	  slide: function (event, ui) {
  	  		  //sizValue = ui.value;
  	  		  radglob = ui.value;
  	  		  console.log(theHeight);
  	  		  $('.btn').css('border-radius', radglob);
  
  	  	  }
  
  		});
  		//end border-radius
  
  
    	  $('.the-icons li').on('click', function () {
    		  var theclass = $(this).attr('class');
    		  $('.btn i').removeAttr('class');
    		  $('.btn i').attr('class', theclass);
    	  });
  
    	$(".btn>span").keydown(function(e){
    		if (e.keyCode == 13) {
    			e.preventDefault();
    		}
    	});
  
    	  $('#htgen').on('click', function (e) {
    		e.preventDefault();
    		$('.btn').clone().appendTo('#hiddenB');
    		  $('#hiddenB>.btn>span').removeAttr('contenteditable');
    		  $('#hiddenB>.btn').removeAttr('style');
    		  var htmlStr = $('#hiddenB').html();
    		  $('#html').val(htmlStr);
    		  $('#hiddenB').html('');
  
    	  });
  
  
    	  function gettheStyle(style) {
  	  	  var 	cssStr = $('.btn'),
  	  	  		fsize = document.defaultView.getComputedStyle(cssStr[0], "")['font-size'],
  	  	  		tpadd = document.defaultView.getComputedStyle(cssStr[0], "")['padding'],
  	  	  		brad = document.defaultView.getComputedStyle(cssStr[0], "")['border-radius'],
  				//bground = document.defaultView.getComputedStyle(cssStr[0], "")['background'],
  				bground = cssStr.css('background-image'),
  				bgweb = bground.replace(/-webkit|moz|o|ms/, '-webkit'),
  				bgmoz = bground.replace(/-webkit|moz|o|ms/, '-moz'),
  				bgop = bground.replace(/-webkit|moz|o|ms/, '-o'),
  				bgie = bground.replace(/-webkit|moz|o|ms/, '-ms'),
  	  	  	  	compcss = {
  			  	  	'font-size': fsize,
  			  	  	'padding': tpadd,
  			  	  	'-webkit-border-radius': brad,
  			  	  	'-moz-border-radius': brad,
  			  	  	'-o-border-radius': brad,
  			  	  	'-ms-border-radius': brad,
  			  	  	'border-radius': brad,
  			  	  	'background': bground,
  			  	  	'background-w': bgweb,
  			  	  	'background-m': bgmoz,
  			  	  	'background-o': bgop,
  			  	  	'background-i': bgie,
  			  	  	'color': 'white',
  			  	  	'text-shadow': '0 -1px 0 rgba(0, 0, 0, 0.25)',
  			  	  	'text-decoration': 'none',
  			  	  	'border': '1px solid rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
  
  	  		},
  	  		value = '';
  	  		console.log(bground);
  	  	  $.each(compcss, function(key, val){
  
  		  	  value += key + ' : ' + val + ';' + '\n';
  
  	  	  });
  	  	  regexbg = value.replace(/^background-[a-z]/mg, 'background');
  	  	  //console.log(xx);
  	  	  $('#css').val(regexbg);
  
  
  
    	  };
  	  	 $('#cssgen').on('click', function (e) {	
  		  	gettheStyle(); 
  		 });
  
  
  	});