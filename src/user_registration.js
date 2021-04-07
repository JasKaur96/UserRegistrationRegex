const prompt = require('prompt-sync')({sigint: true}); 
var regPattern;
let namePattern = "^[A-Z]{1}[a-z]{3,}";
let emailReg = "^[a-zA-Z0-9_.]+@[a-zA-Z.a-zA-Z{2,}.a-zA-Z{2,}]+$";
let mobileReg = "^[9][1][ ][6-9]{1}[0-9]{9}$";
let passwordReg = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#&$]).{8,}$";
var readArr=[];
let length = readArr.length;
validation = function(data,pattern){
    regPattern = new RegExp(pattern);
    result = regPattern.test(data);
    if(result == true){
       console.log("Validated.");
       return true;
    }
    else {
        console.log("Please enter correct format!");
        return false;
    }
}

let getData = function(string, pattern){
    let readData = prompt(string);
    let result = validation(readData,pattern);
    if(result == true){
        read(readData)
        length++;
        return readData;
    }
    while(result == false){       
        let readData = prompt(string);
        let result = validation(readData,pattern);
        read(readData);
        if(result == true){
            break;
        }            
    }
}

let read = function(data){
    readArr.push(data);
}
let printData = function(){
    console.log("\n\n*******UserDetails*******");
    for(let i=0; i<length; i++){
        console.log(readArr[i]);
    }
}

getData('Enter the first name:',namePattern);
getData('Enter the last name:',namePattern);
getData('Enter the mobile no.:',mobileReg);
getData('Enter the email:',emailReg);
getData('Enter the password:',passwordReg);
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




