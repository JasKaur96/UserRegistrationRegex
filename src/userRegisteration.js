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
}

getName('Enter First name:');
getLastName('Enter Last name:');
getMobileNo('Enter MobileNo.:');
getEmail('Enter Email:');
getPassword('Enter Password :');
printData();




