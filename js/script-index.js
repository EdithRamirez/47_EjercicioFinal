$(document).ready( function() {

	//oculta la flecha de menu
	$('.js-back').hide();
	//Llamo a la función que pinta en el elemento p 
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

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
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


