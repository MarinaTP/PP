
function Festival(){
    this.listOfMovies = [];
    this.listOfPrograms = [];
}

function Movie(title, length, genre){
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
}

Movie.prototype.movieInfo = function(){
    var firstLetter = this.genre.slice(0,1);
    var lastLetter = this.genre.slice(this.genre.length -1);
    return this.title + ", " + this.length + " minutes, " + (firstLetter + lastLetter).toUpperCase();
}

function Program(date){
    this.date=new Date(date);
    this.movies=[];
    
  }
  
  Program.prototype.getFullDate = function(){
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var date = day + '.' + month + '.' + year + '.';
    return date;
  }
  
  Program.prototype.movieDuration = function(){
    var res = 0;
    if(this.movies.length != 0){ 
    this.movies.forEach(function(el){
      res = res + el.length;
      return res; 
  })
  return this.movies.length + ' movies, ' + 'duration: ' + res + ' min';
  }
  
  else return "No movies yet!"
  }
  
  Program.prototype.programInfo = function(){
    
    return this.getFullDate()  + ", " + this.movieDuration();
  }
  
  
  Program.prototype.pushMovie = function(movie){
    this.movies.push(movie);
  }
  