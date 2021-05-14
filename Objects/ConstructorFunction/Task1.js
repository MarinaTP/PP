/*1.	Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!*/

function MyCoffee(myCoffeeName, strength, milkOrNoMilk, sug, cold) {
    this.name = myCoffeeName,
    this.strength = strength,
    this.milk = milkOrNoMilk,
    this.sugar = sug,
    this.cold = cold
 }
 var coffeeThatILike = new MyCoffee("Ness Coffee", "strong", "no", "yes", "yes");
 console.log(coffeeThatILike);
console.log(coffeeThatILike.sugar);