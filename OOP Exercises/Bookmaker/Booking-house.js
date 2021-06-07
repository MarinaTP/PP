'use strict';

(
    function(){
        var CONTINENTS = Object.freeze({
            ASIA: 'AS',
            EUROPE: 'EU',


        });

        function Country(name, odds, continent){
            this.name = name;
            this.odds = odds;
            this.continent = continent;

        }

        function Person(name, surname, dateOfBirth){
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = new Date(dateOfBirth);
            this.personInfo =  function(){
                var date = this.dateOfBirth.getDate();
                var month = this.dateOfBirth.getMonth()+ 1;
                var year = this.dateOfBirth.getFullYear();
                return this.name + " " + this.surname + ", " + date + "." + month + "." + year;
            }
        }

        function Player(person, betAmount, country){
            this.person = person;
            this.betAmount = betAmount;
            this.country = country.name; 
            this.bettingInfo =  function(){
                var countryShort = this.country.slice(0,2).toUpperCase();
                var amount = country.odds * this.betAmount;
                var playersNameSurname = person.name + " " + person.surname;
                var playerYears = new Date().getFullYear() - person.dateOfBirth.getFullYear();
                return countryShort + ", " + amount + " eur" + ", " + playersNameSurname + ", " + playerYears + " years";

            }
        }

        function Address(country, city, postalCode, street, streetNum){
            this.country = country.name;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.streetNum = streetNum;
            this.adressInfo = function(){
                var countryShort = this.country.slice(0,2).toUpperCase();
                return this.street + streetNum + ", " + this.postalCode + ", " + this.city + ", " + countryShort;
            }
        }

        function BettingPlace(address){
            this.address = address;
            this.listOfPlayers = [];
            this.addPlayer = function(player){
                this.listOfPlayers.push(player);
                }
            this.bettingPlaceInfo = function(){
                
                return
            }
        }

        function BettingHouse(competition, numberOfPlayers){
            this.competition = competition;
            this.listOfBettingPlaces = [];
            this.numberOfPlayers = numberOfPlayers;
        }



var country1 = new Country("Srbija", 2, CONTINENTS.ASIA);

var person1 = new Person("Marina", "Tintor", "04/03/1984");
var person2 = new Person("Tanja", "Ilic", "06/11/1991");

var player1 = new Player(person1, 100, country1);
var player2 = new Player(person2, 300, country1);

var address1 = new Address(country1, "Belgrade", 11000, "Knez Mihailova", 5);
var bettingPlace1 = new BettingPlace(address1);
bettingPlace1.addPlayer(player1);
bettingPlace1.addPlayer(player2);
var bettingHouse1 = new BettingHouse("Football World Cup Winner");
console.log(country1);
console.log(person1);
console.log(player1);
console.log(address1);
console.log(bettingPlace1);
console.log(bettingHouse1);
console.log(person1.personInfo());
console.log(address1.adressInfo());
console.log(player1.bettingInfo());
console.log(bettingPlace1.listOfPlayers);
console.log()


}


)();