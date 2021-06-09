'use strict';

(
    function(){
        // MORA VELIKIM SLOVIMA I VARIJABLA I PROPERTIJI!!!!!!!!!
        // Object.freeze metod sprecava promenu objekta, dodavanje propertija, menjanje propertija, brisanje propertija... ako se pokusa promena stampa gresku
        var CONTINENT = Object.freeze({
            ASIA: 'AS',
            EUROPE: 'EU',
            AFRICA: 'AF',
            SOUTHAMERICA: 'SA',
            NORTHAMERICA: 'NA',
            AUSTRALIA: 'AU'

        });

        // Konstruktorska funkcija za drzavu (prima ime, kvotu i kontinent koji je zamrznuti objekat)
        function Country(name, odds, CONTINENT){
            this.name = name;
            this.odds = odds;
            this.continent = CONTINENT;
        }

        // Konstruktorska funkcija za osobu (prima ime, prezime i datum rodjenja)
        function Person(name, surname, dateOfBirth){
            this.name = name;
            this.surname = surname;
            this.dateOfBirth = new Date(dateOfBirth);

            // metod koji vraca string sa imenom, prezimenom i datumom rodjenja
            this.personInfo =  function(){
                var date = this.dateOfBirth.getDate();
                var month = this.dateOfBirth.getMonth()+ 1;
                var year = this.dateOfBirth.getFullYear();
                return this.name + " " + this.surname + ", " + date + "." + month + "." + year;
            }
        }

        // konstruktorska funkcija za igraca (prima  osobu, iznos, i drzavu (iz Country konstruktorske funkcije))
        function Player(person, betAmount, country){
            this.person = person;
            this.betAmount = betAmount;
            this.country = country.name; 

            // metod koji vraca string sa imenom drzave, ocekivanim iznosom i podacima o osobi
            this.bettingInfo =  function(){
                var countryShort = this.country.slice(0,2).toUpperCase();
                var amount = country.odds * this.betAmount;
                var playersNameSurname = person.name + " " + person.surname;
                var playerYears = new Date().getFullYear() - person.dateOfBirth.getFullYear();
                return countryShort + ", " + amount + " eur" + ", " + playersNameSurname + ", " + playerYears + " years";

            }
        }

        // konstruktorska funkcija za adresu
        function Address(country, city, postalCode, street, streetNum){
            this.country = country.name;
            this.city = city;
            this.postalCode = postalCode;
            this.street = street;
            this.streetNum = streetNum;

            // metod koji vraca string ulicu, broj, postanski kod, skraceno ime drzave
            this.adressInfo = function(){
                var countryShort = this.country.slice(0,2).toUpperCase();
                return this.street + " " + this.streetNum + ", " + this.postalCode + " " + this.city + ", " + countryShort;
            }
        }

        // konstruktorska funkcija za mesto kladjenja (prima adresu i posle se pravi lista igraca)
        function BettingPlace(address){
            this.address = address;
            this.listOfPlayers = [];

            // metod koji prima kao parametar igraca i dodaje ga u listu igraca
            this.addPlayer = function(player){
                this.listOfPlayers.push(player);
                }

            this.getInfo = function(){
                var sumOfAllBets = 0;
                this.listOfPlayers.forEach(function(){
                    sumOfAllBets += this.listOfPlayers.betAmount;
                })
                return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", " + " sum of all bets: " + sumOfAllBets 
                + " eur";
                
            }

                
        }

        // konstruktorska funkcija za kladionicu (prima takmicenje, listu mesta kladjenja koja ce se posle puniti i broj igraca)
        function BettingHouse(competition){
            this.competition = competition;
            this.listOfBettingPlaces = [];

            this.addBettingPlace = function(bettingPlace){
                this.listOfBettingPlaces.push(bettingPlace);
                }

            this.numberOfBettingPlaces = function(){
                var count = 0;
                this.listOfBettingPlaces.forEach(function(listOfPlayers) {
                    count += this.listOfPlayers.length;
                })
                return count;
            }

            this.bettingInfo = function(){
                var result = "";
                return this.competition + ", " + this.listOfBettingPlaces.length + " betting places" + ", " + this.numberOfBettingPlaces() + "bets" + "\n"+
                + "\t" + address.adressInfo() + " " + "sum of all bets:" + this.betAmount * this.numberOfBettingPlaces();
            }
        
        }

        // funkcija koja pomocu konstruktorske funkcije vraca kreiranog igraca
        function createPlayer(name, surname, dateOfBirth, betAmount, countryName, odds, continent){
            var person = new Person(name, surname, dateOfBirth);
            var country = new Country(countryName, odds, continent);
            return new Player(person, betAmount, country)
        }

        // funkcija koja pomocu kreatorske funkcije vraca kreirano mesto kladjenja
        function createBettingPlace(address){
            return new BettingPlace(address)
        }


var country1 = new Country("Srbija", 2, CONTINENT.EUROPE);

var person1 = new Person("Marina", "Tintor", "04/03/1984");
var person2 = new Person("Tanja", "Ilic", "06/11/1991");
var person3 = new Person("Danilo", "Popovic", "03/21/2018");
var person4 = new Person("Kosta", "Popovic", "12/03/2015");

var player1 = new Player(person1, 100, country1);
var player2 = new Player(person2, 300, country1);
var player3 = new Player(person3, 500, country1);
var player4 = new Player(person4, 400, country1);

var address1 = new Address(country1, "Belgrade", 11000, "Knez Mihailova", 5);
var address2 = new Address(country1, "Sremska Mitrovica", 22000, "Svetog Stefana", 10);

var bettingPlace1 = createBettingPlace(address1);
var bettingPlace2 = createBettingPlace(address2);

bettingPlace1.addPlayer(player1);
bettingPlace1.addPlayer(player2);
bettingPlace2.addPlayer(player3);
bettingPlace2.addPlayer(player4);

var bettingHouse1 = new BettingHouse("Football World Cup Winner");

bettingHouse1.addBettingPlace(bettingPlace1);
bettingHouse1.addBettingPlace(bettingPlace2);



// TESTIRANJE
// console.log(country1);

// console.log(person2);
// console.log(person3);

// console.log(player3.bettingInfo());

// console.log(address1);
console.log(bettingPlace2.getInfo());

// console.log(bettingHouse1);
// console.log(person1.personInfo());
// console.log(address1.adressInfo());
// console.log(player1.bettingInfo());
// console.log(bettingPlace1.listOfPlayers);



// ispis koji je potreban po zadatku
console.log(bettingHouse1.bettingInfo());


}
)();