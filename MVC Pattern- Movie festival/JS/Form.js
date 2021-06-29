var festival1 = new Festival();

// FIRST FORM
var title = document.querySelector('#title');
var length = document.querySelector('#length');
var genre = document.querySelector('#genreOption');
var addMovieButton = document.querySelector('#btnCreateMovie');
var listOfMovies = document.querySelector('#listOfMovies');
var errorMsgMovie = document.querySelector('#errorMsgMovie');
var listOfMovies = document.querySelector('#listOfAllMovies');

// SECOND FORM
var dateInput = document.querySelector('#dateInput');
var btnCreateProgram = document.querySelector('#btnCreateProgram');
var movieSelect=document.querySelector('#movie-select');
var listOfPrograms=document.querySelector('#listOfPrograms');
var programSelect=document.querySelector('#program-select');
var btnAddMovieToProgram=document.querySelector('#btn-AddMovieToProgram');
var errorDateMsg=document.querySelector('#errorDate');

// LISTENERS
addMovieButton.addEventListener('click', addMovieToList);
btnCreateProgram.addEventListener('click', createProgram);
btnAddMovieToProgram.addEventListener('click', addMovieToProgram);


function addMovieToList(){
    var titleInput = title.value;
    var lengthInput = length.value;
    var genreInput = genre.value;

    if(titleInput === ''){
        errorMsgMovie.innerText = "Title name is required!"
        }
    else if (lengthInput === ''){
        errorMsgMovie.innerText = "Length is required!";
    }
    else if (genreInput === '-'){
        errorMsgMovie.innerText = "Genre is required!";
    } 
    else{
        var movie = new Movie(titleInput, lengthInput, genreInput);
        // PUSH TO FESTIVAL LIST
        festival1.listOfMovies.push(movie);

        // CREATE LI ELEMENT
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(movie.movieInfo()));
        listOfMovies.appendChild(li);

    }
    var option = document.createElement('option');
    option.innerText = movie.title;

    // adding index numbers to value
    for(var i = 0; i < festival1.listOfMovies.length; i++){
        option.value = i;
    }
    movieSelect.appendChild(option);

// TO CLEAR INPUTS
    title.value = '';
    length.value = '';
    genre.value  = '-';
    errorMsgMovie.innerText = '';
}


function createProgram(){
     
    var date = dateInput.value;
    var d = new Date(date);
    var today = new Date();

    if(d > today){ 

    var program = new Program(date);

    // push to festival list
    festival1.listOfPrograms.push(program);

    // CREATE LI ELEMENT
    var li = document.createElement('li');
    li.innerText = program.programInfo();
    listOfPrograms.appendChild(li);

    // CREATE OPTIONS
    var option = document.createElement('option');
    option.innerText = program.programInfo();

     // adding index numbers to value
    for(var i = 0; i < festival1.listOfPrograms.length; i++){
        option.value = i;
    }
    programSelect.appendChild(option);

    // TO CLEAR INPUTS
    dateInput.value = '';
    errorDateMsg.innerText = '';
     }

    else {
      errorDateMsg.innerText = "Please select valid date!"
    }

}

function addMovieToProgram(){
var choosenMovie = movieSelect.value;
var choosenProgram = programSelect.value;


festival1.listOfPrograms[choosenProgram].pushMovie(festival1.listOfMovies[choosenMovie]);// adding movies to program list
listOfPrograms.children[choosenProgram].innerText = festival1.listOfPrograms[choosenProgram].programInfo();//changing info for program in ul
programSelect.options[programSelect.options.selectedIndex].innerText = festival1.listOfPrograms[choosenProgram].programInfo();//changing program info in options
programSelect.options.selectedIndex = 0;
movieSelect.options.selectedIndex = 0;


}
