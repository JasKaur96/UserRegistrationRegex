const prompt = require('prompt-sync')({sigint: true}); 
const utils = require('./utils')
const checkPattern = require('./constants')
var regPattern;

var readArr=[];
let length = readArr.length;

let getData = function(string, pattern){
    let readData = prompt(string);
    let result = utils.validation(readData,pattern);
    if(result == true){
        read(readData)
        length++;
        return readData;
    }
    while(result == false){       
        let readData = prompt(string);
        let result = utils.validation(readData,pattern);
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

getData('Enter the first name:',checkPattern.namePattern);
getData('Enter the last name:',checkPattern.namePattern);
getData('Enter the mobile no.:',checkPattern.mobileReg);
getData('Enter the email:',checkPattern.emailReg);
getData('Enter the password:',checkPattern.passwordReg);
printData();
