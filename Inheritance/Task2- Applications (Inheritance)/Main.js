function App(name, licence, stars){
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.isCCLicence = function(){
    if(this.licence === "Creative Commons"){
        return "Licence is CC"
    }
    return "Licence is not CC"
}

App.prototype.like = function(){
    return ++this.stars;
}

App.prototype.showStars = function(){
    return this.stars;
}

function WebApp(name, url, technologies, licence, stars){
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;


WebApp.prototype.getData = function(){
    return "Name: " + this.name + "\n" + "Url: " + this.url + "\n" + "Technologies: " + this.technologies + "\n" + "Licence: " + this.licence + "\n" + "Stars: " + this.stars + "\n"
}
WebApp.prototype.reactBased = function(){
    if(this.technologies === "React"){
        return "One of the used technology is React"
    }
}


function MobileApp(name, platforms, licence, stars){
    App.call(this, name, licence, stars);
        this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function(){
    return "Name: " + this.name + "\n" + "Platforms: " + this.platforms + "\n" + "Licence" + this.licence + "\n" + "Stars" + this.stars;
}

MobileApp.prototype.forAndroid = function(){
    if(this.platforms === "Android"){
    return "This platform is developed for Android"
    }
    return "This platform is not for Android"
}




//TESTING

var webapp1 = new WebApp("AppOne", "www.appOne.com", "React", "Creative Commons", "5 stars");
// console.log(webapp1.getData());


var mobileapp1 = new MobileApp("MobOne", "Android", "Creative Commons", "4 stars");
console.log(mobileapp1.showStars());