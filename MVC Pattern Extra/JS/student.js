function Student(name, surname){
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function(){
var name = this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
var surname = this.surname.charAt(0).toUpperCase() + this.surname.slice(1).toLowerCase();


    return name + " " + surname;
}

// var s = new Student('MARINA', 'POPOVIC');
// console.log(s.getStudentData());