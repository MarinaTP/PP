// 3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function createProject(projectName, descript, language, url, isProjectInDevelopment) {
    var project = {
        name: projectName,
        description: descript,
        programmingLanguage: language,
        gitRepository: url,
        development: isProjectInDevelopment,
        projectRepo: function() {
            return project.gitRepository;
        },
        isJavaScript: function(){
            if(project.programmingLanguage === 'JavaScript'){
                return 'Project is written in JavaScript';
            } else{
                return 'Project is not written in JavaScript';
            }

        },
        isInDevelopment: function() {
            if(project.development === true){
                return 'Project is in development';
            }else{
                return 'Project is not in development';
            }
        }
    }
return project;
};
var myProject = createProject('Function1', 'Helping with math', 'JavaScript', 'http://github.com', true);
console.log(myProject);
console.log(myProject.projectRepo());
console.log(myProject.isJavaScript());
console.log(myProject.isInDevelopment());