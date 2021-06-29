class App {
    constructor(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }

isCCLicence(){
        if(this.licence === "Creative Commons"){
            return "Licence is CC"
        }
        return "Licence is not CC"
    }
    
like(){
        return ++this.stars;
    }
    
showStars(){
        return this.stars;
    }
    
}

class WebApp extends App {
    constructor(name, url, technologies, licence, stars) {
        super(name, licence, stars)
        this.url = url;
        this.technologies = technologies;
    }

getData(){
        return "Name: " + this.name + "\n" + "Url: " + this.url + "\n" + "Technologies: " + this.technologies + "\n" + "Licence: " + this.licence + "\n" + "Stars: " + this.stars + "\n"
    }

reactBased(){
        if(this.technologies === "React"){
            return "One of the used technology is React"
        }   

}
}

class MobileApp extends App {
    constructor(name, platforms, licence, stars) {
        super(name, licence, stars)
        this.platforms = platforms;
    }

getData(){
        return "Name: " + this.name + "\n" + "Platforms: " + this.platforms + "\n" + "Licence" + this.licence + "\n" + "Stars" + this.stars;
    }

forAndroid(){
    if(this.platforms === "Android"){
    return "This platform is developed for Android"
    }
    return "This platform is not for Android"
}
}
// TESTING
var webApp1 = new WebApp('WebbApp One', 'wwww.google.com', 'React', 'CC', 3);
// console.log(webApp1);
var mobApp1 = new MobileApp("MobOne", "Android", "Creative Commons", "4 stars");
console.log(mobApp1.showStars());