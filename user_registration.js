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
     let emailReg = /^^[a-zA-Z0-9_.]+@[a-zA-Z.a-zA-Z{2,}.a-zA-Z{2,}]+$/.test(email);
     if(emailReg == true){
         console.log("Validated Email.");
     }
     else {
         console.log("Email is incorrect!");
     }

    //To check if mobile number is valid or not.
     var mobile = prompt("Enter Mobile No. :");
     let mobileReg = /^[9][1][ ][6-9]{1}[0-9]{9}$/.test(mobile);
     if(mobileReg == true){
         console.log("Validated Mobile No..");
     }
     else {
         console.log("Mobile No. is incorrect!");
     }

      /*To check if password is valid or not with min 8 char, at least 1 uppercase
        and atleast 1 numeric value.*/
      var pswd = prompt("Enter Password :");
      let password = /(?=.*[A-Z])[A-Z a-z 0-9]{8,}$/.test(pswd);
      if(password == true){
          console.log("Validated Password.");
      }
      else {
          console.log("Password is incorrect!");
      }
}

validation();



