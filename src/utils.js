
module.exports ={
    validation : function(data,pattern){
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
}