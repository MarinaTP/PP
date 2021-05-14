// 3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function Project(projectName, descript, language, url, isProjectInDevelopment) {
    
        this.name = projectName,
        this.description = descript,
        this.programmingLanguage = language,
        this.gitRepository = url,
        this.development = isProjectInDevelopment,
        this.projectRepo = function() {
            return this.gitRepository;
        },
        this.isJavaScript = function(){
            if(this.programmingLanguage === 'JavaScript'){
                return 'Project is written in JavaScript';
            } else{
                return 'Project is not written in JavaScript';
            }

        },
        this.isInDevelopment = function() {
            if(this.development === true){
                return 'Project is in development';
            }else{
                return 'Project is not in development';
            }
        }

};

var myProject = new Project('Function1', 'Helping with math', 'JavaScript', 'http://github.com', true);
console.log(myProject);
console.log(myProject.projectRepo());
console.log(myProject.isJavaScript());
console.log(myProject.isInDevelopment());