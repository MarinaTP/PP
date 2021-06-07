'use strict';

(
    function (){

        // konstruktorska funkcija za osobu
        function Person(name, surname){
            this.name = name;
            this.surname = surname;
            this.getData = function(){
                return this.name + " " + this.surname;
            } 
        }

        // konstruktorska funkcija za sediste
        function Seat(seatNum, category){
            this.seatNum = seatNum;
            this.category = category;
            this.getData = function(){
                return this.seatNum + ", " + this.category.toUpperCase();
            }

            // ako ne upise broj sedista dodeljuje se neki broj izmedju 10 i 100
            if(!this.seatNum){
                this.seatNum = Math.floor(Math.random()* (100 - 10) + 10);
            }
        
            // ako ne upise kategoriju bice dodeljena "e" kategorija
            if(!this.category){
                this.category = "e";
            }

            // POKUSAJ DA AKO STAVI NEKU DRUGU KATEGORIJU POSALJE PORUKU DA MORA BITI KATEGORIJA E ili B
            // else if(this.category !== 'e'|| this.category !== 'b' || this.category !== ' '){
            //     throw new Error('Category can be either "e" or "b"');
            // }

        }

        // konstruktorska funkcija za putnika i u nju ulaze kao parametri prethodne dve (Person i Seat)
        function Passenger(person, seat){
            this.person = person;
            this.seat = seat;
            this.getData = function(){
                // vraca format broj sedista i kategoriju (iz seat) i ime i prezime (iz person)
                return this.seat.getData() + ", " + this.person.getData(); 
            }
        }

        // konstruktorska funkcija za Let (parametri su relacija i datum, pa se dodaje listOfPassengers)
        function Flight(relation, date){
            this.relation = relation;
            this.date = new Date(date);
            this.listOfPassengers = [];

            // metodom se u listu dodaje putnik
            this.addPassenger = function(passenger){
                return this.listOfPassengers.push(passenger);
            }

            // metodom se vraca format datuma sa tackama i relacija, pa u drugi red za svakog putnika- uvuce dva taba i iz metode na putniku vraca podatke (broj sedista i ime i prezime)
            this.getData = function(){
                var result = '';
                var day = this.date.getDate();
                var month = this.date.getMonth() + 1;
                var year = this.date.getFullYear();
                result += '\t' + day + '.' + month + '.' + year + ', ' + this.relation + '\n';
                this.listOfPassengers.forEach(function(passenger) {
				result += '\t\t' + passenger.getData() + '\n'
			})
			return result;

            }

            // metoda vraca duzinu niza liste putnika, tj. broj putnika
            this.numberOfPassengers = function () {
                return this.listOfPassengers.length;
            } 
        }

         // konstruktorska funkcija za aerodrom, parametar je ime aerodroma i lista letova koja se dodaje
        function Airport(name){
            this.name = "Nikola Tesla";
            this.listOfFlights = [];

            // metoda koja na listu letova dodaje svaki let
            this.addFlight = function(flight){
                this.listOfFlights.push(flight);
            }

            // metoda koja racuna ukupan broj putnika (za svaki let uzme broj putnika)
            this.totNumOfpassengers = function(){
                var count = 0;
			this.listOfFlights.forEach(function(flight) {
				count += flight.numberOfPassengers()
			})
			return count;
		}

            // metoda koja za svaki aerodrom izvlaci podatke koji su potrebni
            this.getData = function(){
                var result = "";
                result = "Airport: " + this.name + ", " + "total passengers: " + this.totNumOfpassengers() + '\n';
                this.listOfFlights.forEach(function(flight) {
                    result += flight.getData();
                })
                return result;
            }

        }

        // funkcija koja pomocu konstruktorske funkcije koju sam napravila vraca novi let
        function createFlight(relation, date){
            return new Flight(relation, date)
        }

        // funkcija koja pomocu konstruktorske funkcije koju sam napravila vraca novog putnika i koristi konstruktorsku funkciju Person i Seat da bi vratila putnika u potrebnom formatu
        function createPassenger(name, surname, seatNum, category){
            var person = new Person(name, surname);
            var seat = new Seat(seatNum, category);
            return new Passenger(person, seat);

        }
// pravim aerodrom pomocu konstruktorske funkcije
var airportNikolaTesla = new Airport();

// pravim putnike pomocu funkcije koja dalje koristi konstruktorsku funkciju
var passenger1 = createPassenger("John", "Snow", 1, "b");
var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
var passenger4 = createPassenger("Tyrion", "Lannister");

// pravim let pomocu funkcije koja koristi konstruktorsku funkciju
var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

// dodajem putnika na svaki let
flight1.addPassenger(passenger1);
flight1.addPassenger(passenger2);
flight2.addPassenger(passenger3);
flight2.addPassenger(passenger4);

// dodajem let njegovom aerodromu
airportNikolaTesla.addFlight(flight1);
airportNikolaTesla.addFlight(flight2);


// TESTIRANJE
// console.log(person1.getData());
// console.log(person2);
// console.log(person3);

// console.log(seat1);
// console.log(seat2.getData());
// console.log(seat3);

// console.log(passenger1);
// console.log(passenger2);
// console.log(passenger3);
// console.log(passenger4);

// console.log(flight1);

// ispis koji je potreban po zadatku
console.log(airportNikolaTesla.getData());
})();