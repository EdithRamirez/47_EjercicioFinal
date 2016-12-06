$(document).ready(function() {
	console.log('HTML Listo');

	//ocultar menu
	$('.js-menu').hide();

	//boton js-show-recipe elimina la clase make al dar click
	$('.js-show-recipe').on('click', function() {
		console.log('Quite clase make');
		$('.page.recipe').removeClass('make');

		/*Si se hace click en js-show-recipe agrega la clase active y quitasela a js-show-make.*/
		$('.js-show-recipe').addClass('active');
		$('.js-show-make').removeClass('active');

	});

	//boton js-show-make agrega la clase make al dar click
	$('.js-show-make').on('click', function() {
		console.log('Agregue clase make');
		$('.page.recipe').addClass('make');
		
		/*Si se hace click en js-show-make agregale la clase active y quitasela a js-show-recipe.*/
		$('.js-show-make').addClass('active');
		$('.js-show-recipe').removeClass('active');
	});
});