class Person {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }
}

class Employee extends Person {
    constructor(name, surname, job, salary){
        super(name, surname)

        this.job = job
        this.salary = salary
    }

    getData() {
        return this.name + " " + this.surname + " " + this.salary 
    }

    getSalary() {
        return this.salary;
    }

    increaseSalary(){
         this.salary = this.salary + this.salary *  0.1;
    }

}


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization){
        super(name, surname, job, salary)

        this.specialization = specialization
    }

    getSpecialization(){
        return this.specialization
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary)

        this.department = department
    }

    getDepartment(){
        return this.department
    }

    changeDepartment(newDepartment){
        this.department = newDepartment

    }
}

// TESTIRANJE

var employee1 = new Employee("Ana", "Maric", "tester", 500);

console.log(employee1);

var manager1 = new Manager("Tanja", "Ilic", "sales manager", 1000, "sales");

console.log(manager1.getDepartment());
manager1.changeDepartment("controller");
console.log(manager1.getDepartment());