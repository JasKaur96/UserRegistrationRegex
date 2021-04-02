const readlineSync = require('readline-sync');
let validation = function(){
    //To check if name starts with Capital and has min 3 characters.
    var fname = readlineSync.question("Enter Name :");
    let nameRegex = /^[A-Z]{1}[a-z]{3,}/.test(fname);
    if(nameRegex === true){
        console.log("Validated First Name.");
    }
    else {
        console.log("Name is incorrect!");
    }
}

validation();



