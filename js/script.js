$(document).ready(function(){
    $('.carousel[data-type="multi"] .item').each(function() {
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i = 0; i < 2; i++) {
			next = next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		}
	});

 $(window).scroll(function(){
 	var barra = $(window).scrollTop();
 	var posicion = barra * 0.50;
 	var posicion2 = barra * 1;

 	$('header').css({
 		'background-position' : '0 ' + posicion + 'px'
 	});
 	$("#os").css({
 		'background-position' : '0 ' + posicion + 'px'

 	});
 	$("#tit").css({
 		'background-position' : '0 ' + posicion + 'px'

 	});
 	$("h1").css({
 		'margin-top' : '-'+ posicion2 + 'px'
 		// 'background-position' : '0 ' + posicion + 'px'

 	});

 })
    $('.button').click( function(e) {

      e.preventDefault();
      $('html, body').animate( {scrollTop : 300}, 1000 );

    });
   

  });