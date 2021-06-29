function Exam(nameOfSubject, student, grade){
    this.nameOfSubject = nameOfSubject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function(){
    return this.nameOfSubject.getSubjectName() + " " + this.student.getStudentData();
}

Exam.prototype.hasPassed = function(){
    if(this.grade <= 5){
        return "FAILED"
    }
    else{
        return "PASSED"
    }
}

// return (this.grade>5)-vraca true ili false