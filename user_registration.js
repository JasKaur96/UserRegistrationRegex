const readlineSync = require('readline-sync');
let validation = function(){
    //To check if first name starts with Capital and has min 3 characters.
    var fname = readlineSync.question("Enter First Name :");
    let firstName = /^[A-Z]{1}[a-z]{3,}/.test(fname);
    if(firstName === true){
        console.log("Validated First Name.");
    }
    else {
        console.log("Name is incorrect!");
    }

    //To check if last name starts with Capital and has min 3 characters.
    var lname = readlineSync.question("Enter Last Name :");
    let lastName = /^[A-Z]{1}[a-z]{3,}/.test(lname);
    if(lastName == true){
        console.log("Validated Last Name.");
    }
    else {
        console.log("Name is incorrect!");
    }
}

validation();



