$(document).ready(function() {
	console.log('HTML Listo');

	//ocultar menu
	$('.js-menu').hide();


	$('.js-show-recipe').on('click', function() {
		console.log('Quite clase make');
		$('.page.recipe').removeClass('make');
	});

	$('.js-show-make').on('click', function() {
		console.log('Agregue clase make');
		$('.page.recipe').addClass('make');
	});


});

/*Asigna funciones que se ejecuten cuando el usuario de click en las pestañas 
(2 elementos a con clase js-show-recipe y js-show-make, estos 2 estan dentro de un DIV con clase btns-group).*/


/*	Identifica el DIV que contiene la mayoria del codigo, tiene las clases page y recipe. Agregale la clase make cuando se 
haga click en el elemento js-show-make. Y si el usuario hace click en el elemento js-show-recipe entonces quitale la clase make al DIV.*/
