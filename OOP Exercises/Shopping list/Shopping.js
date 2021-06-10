'use strict';

(
    function(){

        function Product(productID, name, price, expirationDate){
            this.productID = productID;
            this.name = name;
            this.price = price;
            this.expirationDate = expirationDate;

            this.getInfo = function(){
                var shortName = "";
                shortName = this.name.slice(0,1) +  this.name.slice(this.name.length-1, this.name.length).toUpperCase();
                return shortName + this.productID + ", " + this.name + ", " + this.price;
            }

        }

        function ShoppingBag(){
            this.listOfProducts = [];

            this.addProduct = function(product){
                var currentDate = new Date();
                if(product.expirationDate >= currentDate){
                    return this.listOfProducts.push(product);
                }

            }
        }


var product1 = new Product(84938, "Banana", 4, "04.03.2021");

var shoppingBag1 = new ShoppingBag();

product1.shoppingBag.addProduct();

console.log(product1.getInfo());
console.log(shoppingBag1.listOfProducts);



})();