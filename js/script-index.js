$(document).ready( function() {

	//oculta la flecha de menu
	$('.js-back').hide();
	//Llamo a la función que pinta en el elemento p 
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);

});

/*funcion que pinta el texto del parrafo*/
function printNews() {
	$(".callout-news p").text("NUEVAS RECETAS");
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	//recorre el arreglo de los objetos
	for ( var i = 0; i < recipesArray.length; i++ ) {
		//guarda en una variable
		var recipe = recipesArray[i];
		//condicion que mostrara solo aquellos que cumplan el valor de true
		if( recipe.highlighted == true ) {
			renderRecipe(recipe);
		}
	}
	// _.each(recipesArray, renderRecipe);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	
	//Variables de las etiquetas a crear en el html
	var aItem = $('<a class="item-recipe" href="#"></a>');

	var spanAttr = $('<span class="attribution"></span>');
	
	var spanTitle = $('<span class="title-recipe"></span>');
	//pinta el valor que se tiene en el arreglo que corresponde al titulo
	spanTitle.text(recipe.title);
	
	var spanMeta = $('<span class="metadata-recipe"></span>');
	
	var spanAuthor = $('<span class="author-recipe"></span>');
	spanAuthor.text(recipe.source.name);
	
	var spanBook = $('<span class="bookmarks-recipe"></span>');
	
	var spanIcon = $('<span class="icon-bookmark"></span>');
	spanIcon.text(recipe.cookTime);
	
	var imgUrl = $('<img/>');
	//se modifica atributo para que se vea la imagen de la receta
	imgUrl.attr('src', 'img/recipes/320x350/' + recipe.name + '.jpg');

	///pinta en pantalla las etiquetas
	aItem.append(spanAttr);
	spanAttr.append(spanTitle);
	spanAttr.append(spanMeta);
	spanMeta.append(spanAuthor);
	spanMeta.append(spanBook);
	spanBook.append(spanIcon);
	aItem.append(imgUrl);

	//div padre donde se insertaran los hijos creados en html
	$('.list-recipes').append(aItem);
}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	
	for ( var i = 0; i < activitiesArray.length; i++ ) {	
		renderActivity(activitiesArray[i]);
	}
	if( activitiesArray.length > 0 ) {	
		$('div.wrapper-message').hide();	
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activity) {
	console.log('Voy a pintar la actividad: ', activity);

	//Se crea el html con underscope 
	var template = '<a href="#" class="item-activity">' +
		'<span class="attribution">' +
			'<span class="avatar">' +
				'<img src="<%= userAvatar %>" class="image-avatar">' +
			'</span>' +
			'<span class="meta">' +
				'<span class="author"> <%= userName %> </span> made' +
				'<span class="recipe"> <%= recipeName %> </span>: ' +  
				'<span class="location"> <%= place %> </span>' +
			'</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(&quot;<%= image %>&quot;)"></div>' +
	'</a>';

	var compiled = _.template(template);

	var a = compiled(activity);
	console.log(template);

	var elemento = $(a);
	$('.list-activities').append(elemento);
}