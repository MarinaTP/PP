// 2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. //

function Movie(name, actor, actress, dir, genre, imbd) {
    this.title = name,
    this.actor = actor,
    this.actress = actress,
    this.director = dir,
    this.genre = genre,
    this.popularity = imbd

} 
var favMovie = new Movie("Perfect Strangers", "Marco Giallinni", "Anna Foglietta", "Paolo Genovese", "comedy-drama", 6.9);
console.log(favMovie);
console.log(favMovie.popularity);
