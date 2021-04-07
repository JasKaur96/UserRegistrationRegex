const prompt = require('prompt-sync')({sigint: true}); 
const validation = require('./inputValidation')
var readArr=[];
let length = readArr.length;
let res= false;

let getName = function(string){
    let readData = prompt(string);
    let result = validation.firstName(readData);
    while(res == false){
        if(result == true){
            read(readData);
            // console.log("inside if",readData)
            length++;
            return true; 
        }
        else{
            let readData = prompt(string);
            let result = validation.firstName(readData);
            read(readData);
            // console.log("inside else",readData)
            return result;
        }      
    }
}

let getLastName = function(string){
    let readData = prompt(string);
    let result = validation.lastName(readData);
    while(res == false){
        if(result == true){
            read(readData);
            // console.log("inside if",readData)
            length++;
            return true; 
        }
        else{
            let readData = prompt(string);
            let result = validation.lastName(readData);
            read(readData);
            // console.log("inside else",readData)
            return result;
        }      
    }
}


let getMobileNo = function(string){
    let readData = prompt(string);
    let result = validation.mobileNumber(readData);
    while(res == false){
        if(result == true){
            read(readData);
            // console.log("inside if",readData)
            length++;
            return true; 
        }
        else{
            let readData = prompt(string);
            let result = validation.mobileNumber(readData);
            read(readData);
            // console.log("inside else",readData)
            return result;
        }      
    }
}

let getEmail = function(string){
    let readData = prompt(string);
    let result = validation.email(readData);
    while(res == false){
        if(result == true){
            read(readData);
            // console.log("inside if",readData)
            length++;
            return true; 
        }
        else{
            let readData = prompt(string);
            let result = validation.email(readData);
            read(readData);
            // console.log("inside else",readData)
            return result;
        }      
    }
}

let getPassword = function(string){
    let readData = prompt(string);
    let result = validation.password(readData);
    while(res == false){
        if(result == true){
            read(readData);
            // console.log("inside if",readData)
            // length++;
            return true; 
        }
        else{
            let readData = prompt(string);
            let result = validation.password(readData);
            read(readData);
            // console.log("inside else",readData)
            return result;
        }      
    }
}
let read = function(data){
    readArr.push(data);
    // length++;
}
let printData = function(){
    console.log("\n\n*******UserDetails*******");
    console.log(readArr);
    // console.log("FirstName :",readArr[0]);
    // console.log("LastName :",readArr[1]);
    // console.log("MobileNo. :",readArr[2]);
    // console.log("Email :",readArr[3]);
}

getName('Enter First name:');
getLastName('Enter Last name:');
getMobileNo('Enter MobileNo.:');
getEmail('Enter Email:');
getPassword('Enter Password :');
printData();




// },
// var Obj ={
//     validation : function(data,pattern){
//         regPattern = new RegExp(pattern);
//         result = regPattern.test(data);
//         return this;
//     },

//     validationPassed : function(){
//         if(result == true){
//             console.log("Validated.");
//         }
//         else {
//             console.log("Please enter correct format!");
//             getData();
//         }
//         return this;
//     }
// };

    //     // To check if first name starts with Capital and has min 3 characters.
    //     var fname = prompt("Enter First Name :");
    //     Obj.validation(fname,namePattern).validationPassed();

    //      // To check if first name starts with Capital and has min 3 characters
    //     var lname = prompt("Enter Last Name :");
    //     Obj.validation(lname,namePattern).validationPassed();
       
    //     //To check if email is valid or not.
    //     var email = prompt("Enter Email :");
    //     Obj.validation(email,emailReg).validationPassed();

    //     //To check if mobile number is valid or not.
    //     var mobile = prompt("Enter Mobile No. :");
    //     Obj.validation(mobile,mobileReg).validationPassed();

    //     /*To check if password is valid or not with min 8 char, at least 1 uppercase
    //         atleast 1 numeric value and exact 1 special char.*/
    //     var pswd = prompt("Enter Password :");
    //     Obj.validation(pswd,passwordReg).validationPassed();

    //     res = false;
    // }
// }




