$(function() {

	// Cambio imagen perfil
	$("#imagen_perfil").on('change', function(){
		event.stopPropagation();
        var imagen =  $(this).val();    
        $('#img_perfil').attr( 'src', 'img/perfil/' + imagen );
        $('#tweet__img').attr( 'src', 'img/perfil/' + imagen );
	});

 	//Cambio portada perfil

 	$("#imagen_portada").on('change', function(){
        var imagen =  $(this).val();
        event.stopPropagation();
        $('.portada_perfil__img_portada').attr( 'src', 'img/portada/' + imagen );
	});

	//Da like y contador

	$('.contenedor_perfil__post').on('click','.tweet__social', function(){
		event.stopPropagation();
		$(this).find('.tweet__social_icon_like').toggleClass("tweet__social_icon_like--like");

		var contador = $(this).find('.tweet__social_contador');
		var valor = parseInt(contador.text());
		var total = valor + 1;

		contador.text(total);






	});
	// Remueve Tweet

	$('.contenedor_perfil__post').on('click','.tweet__btn-elimina-tweet', function(){
		event.stopPropagation();
		$(this).parent().fadeOut(500);
	});



	// Crea nuevo Tweet

	$('.crear_tweet').on('submit', function(event){
		$('.contenedor_perfil__post--no_tweets').remove();

		event.preventDefault();

		var mensaje 		= $('#txt_mensaje').val()
		var imagen_perfil 		= $('#imagen_perfil').val()
		var imagen_portada 		= $('#imagen_portada').val()

		var html 		= `<div class="tweet">
								<div class="tweet__btn-elimina-tweet"><i class="fa fa-times-circle tweet__icon_elimina-tweet"></i></div>
								<img id="tweet__img" src="img/perfil/${imagen_perfil}">
								<a href="#">Alejandro Ramírez<span>@alejandro</span></a>
								<img class="tweet__portada_perfil__img_portada" src="img/portada/${imagen_portada}">
								<p>${mensaje}</p>
								<div class="tweet__social">
									<div><i class="fa fa-heart tweet__social_icon_like"></i><span class="tweet__social_contador">0</span></div>
								</div>
							</div>`

		$('.contenedor_perfil__post').append(html);

		$('#txt_mensaje').val('')
		$('#imagen_perfil').val('')
		$('#imagen_portada').val('')
	});

	



});