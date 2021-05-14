// 4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
// ○	Add a method that checks if a meal can be prepared for 15 minutes. 
// ○	Add a method that changes the type of cuisine to the given value. 
// ○	Add a method that delete a given ingredient from the list of ingredients. 

function createRecipe(nameOfRecipe, state, value, list, time, howToMakeIt) {
    var recipe = {
        name: nameOfRecipe,
        typeOfCuisine: state,
        complexity: value,
        listOfIngredients: list,
        preparingTime: time,
        instructions: howToMakeIt,
        necessaryIngredients: function(){
            return (recipe.listOfIngredients);
        },
        necessaryTime: function(){
            if(recipe.preparingTime <= 15){
               return 'Meal can be prepared for 15 minutes';
            }else{
                return 'Meal can\'t be prepared for 15 minutes';
            }
        },
        changeTypeCuisine: function(newCuisine){
            recipe.typeOfCuisine = newCuisine;
            return recipe.typeOfCuisine;
        },
        withoutIngredient: function(ingredient){
             var newList = recipe.listOfIngredients.filter(function(el) {
                return el !== ingredient;
            });
            return newList;
        }

    }
    return recipe;
}
var pizza = createRecipe('Pizza', 'Italy', 4, ['ketchup', 'mush', 'cheese'], 10, 'bake and enjoy');
console.log(pizza);
console.log(pizza.necessaryIngredients());
console.log(pizza.necessaryTime())
console.log(pizza.changeTypeCuisine('Spanish'));
console.log(pizza.withoutIngredient('mush'));