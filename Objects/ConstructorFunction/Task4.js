// 4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
// ○	Add a method that checks if a meal can be prepared for 15 minutes. 
// ○	Add a method that changes the type of cuisine to the given value. 
// ○	Add a method that delete a given ingredient from the list of ingredients. 

function Recipe(nameOfRecipe, state, value, list, time, howToMakeIt) {
        this.name = nameOfRecipe,
        this.typeOfCuisine = state,
        this.complexity = value,
        this.listOfIngredients = list,
        this.preparingTime = time,
        this.instructions - howToMakeIt,
        this.necessaryIngredients = function(){
            return (this.listOfIngredients);
        },
        this.necessaryTime = function(){
            if(this.preparingTime <= 15){
               return 'Meal can be prepared for 15 minutes';
            }else{
                return 'Meal can\'t be prepared for 15 minutes';
            }
        },
        this.changeTypeCuisine = function(newCuisine){
            this.typeOfCuisine = newCuisine;
            return this.typeOfCuisine;
        },
        this.withoutIngredient = function(ingredient){
             var newList = this.listOfIngredients.filter(function(el) {
                return el !== ingredient;
            });
            return newList;
        }

    }



var pizza = new Recipe('Pizza', 'Italy', 4, ['ketchup', 'mush', 'cheese'], 10, 'bake and enjoy');
console.log(pizza);
console.log(pizza.necessaryIngredients());
console.log(pizza.necessaryTime())
console.log(pizza.changeTypeCuisine('Spanish'));
console.log(pizza.withoutIngredient('mush'));
var spaghetti = new Recipe('Spaghetti', 'Italy', 8, ['ketchup', 'pastry', 'cheese', 'meat'], 10, 'bake and enjoy');
console.log(spaghetti);

console.log(pizza.name);
console.log(pizza === spaghetti);
pizza = spaghetti;
console.log(pizza.name);
console.log(pizza === spaghetti);