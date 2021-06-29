function collectData(){
    var choosenSubject = subjectName.value; 
    var inputStudent = studentData.value;
    var choosenGrade = grade.value; 

    return [choosenSubject, inputStudent, choosenGrade];
}

function validateData(data, college){
    var listOfNameAndSurname = data[1].split(' ');
    var name = listOfNameAndSurname[0];
    var surname = listOfNameAndSurname[1];
    var choosenSubject = data[0];
    var choosenGrade = data[2];

    if(choosenSubject ===  "-"){
      return errorMsg.textContent = "Please choose one subject!";
    }

    else if(studentData.value === ""){
      return errorMsg.textContent = "Please enter students name and surname!";
    }
    else if(listOfNameAndSurname[1] === 'undefined'){
       return errorMsg.textContent = "Please enter students both name and surname!";
    }

    else if(choosenGrade ===  "-"){
      return errorMsg.textContent = "Please choose one grade!";
    }
    else{
        var student = new Student(name, surname);
        var subject = new Subject(choosenSubject);
        var exam = new Exam(student, subject, choosenGrade);
        college.listOfExams.push(exam);
    }
}

function updatingStudentList(college){
   college.listOfExams.forEach(function(el){
       if(el.hasPassed() === 'PASSED'){
           var li = document.createElement('li');
           var span1 = document.createElement('span');
           var span2 = document.createElement('span');
           span1.textContent = el.getExamInfo();
           span2.textContent = el.grade;

           li.appendChild(span1);
           li.appendChild(span2);

           passedStudentsList.appendChild(li);
       }
       else{
        var li = document.createElement('li');
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        span1.textContent = el.getExamInfo();
        span2.textContent = el.grade;

        li.appendChild(span1);
        li.appendChild(span2);

        failedStudentsList.appendChild(li);
       }
   })
}

function updateStatistics(){
    var passed = 0;
    var failed = 0;
    college.listOfExams.forEach(function(el){
        if(el.getExamInfo() === "PASSED"){
            passed += 1;
        }
        else{
            failed += 1;
        }
    })
    numberOfPassedStudents.textContent = passed;
    numberOfFailedStudents.textContent = failed;

}

