const prompt = require('prompt-sync')({sigint: true}); 

let validation = function(){
    //To check if first name starts with Capital and has min 3 characters.
    var fname = prompt("Enter First Name :");
    let firstName = /^[A-Z]{1}[a-z]{3,}/.test(fname);
    if(firstName === true){
        console.log("Validated First Name.");
    }
    else {
        console.log("First Name is incorrect!");
    }

    //To check if last name starts with Capital and has min 3 characters.
    var lname = prompt("Enter Last Name :");
    let lastName = /^[A-Z]{1}[a-z]{3,}/.test(lname);
    if(lastName == true){
        console.log("Validated Last Name.");
    }
    else {
        console.log("Last Name is incorrect!");
    }

     //To check if email is valid or not.
     var email = prompt("Enter Email :");
     let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
     if(emailReg == true){
         console.log("Validated Email.");
     }
     else {
         console.log("Email is incorrect!");
     }
}

validation();



