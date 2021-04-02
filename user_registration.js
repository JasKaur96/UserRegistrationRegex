const prompt = require('prompt-sync')({sigint: true}); 

let validation = function(){
    //To check if first name starts with Capital and has min 3 characters.
    var fname = prompt("Enter First Name :");
    let firstName = /^[A-Z]{1}[a-z]{3,}/.test(fname);
    if(firstName == true){
        console.log("Validated First Name.");
    }
    else {
        console.log("Name is incorrect!");
    }
}

validation();



