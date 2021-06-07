// ::::::::::::::::::::::::::::::::::::::::::::::::TRY-CATCH:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// try{
// function xY(){
//     console.log(a);
// }
// xY();
// }catch(err){
//     // console.log('This is optional text if code is wrong!');
//     // console.log(err.name);
//     // console.log(err.message);
//     // console.log(err.stack);

// }


// ::::::::::::::::::::::::::::::::::::::::::::::::::HOW TO CREATE ERROR:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// var a = new Error('OMG, what just happened?');//new SyntaxError, new ReferenceError
// console.log(a.name);

// var b = {name: "My Error", message: 'OMG, what just happened?'};
// console.log(b.name);

// throw new ReferenceError('Do not do this');-THROW umesto return moze u funkciji, kada hocemo mi nasu gresku da bacimo



// ::::::::::::::::::::::::::::::::::::::::::::::::::TRY-CATCH-FINALLY(uvek se izvrsava, u svakom slucaju):::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

try{
    function xY(){
        console.log(a);
    }
    xY();
    }catch(err){
        console.log('This is optional text if code is wrong!');
    
    }finally{
        console.log('Execute always');
    }