let namePattern = "^[A-Z]{1}[a-z]{3,}";
let emailReg = "^[a-zA-Z0-9_.]+@[a-zA-Z.a-zA-Z{2,}.a-zA-Z{2,}]+$";
let mobileReg = "^[9][1][ ][6-9]{1}[0-9]{9}$";
let passwordReg = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#&$]).{8,}$";

module.exports = {
     firstName(fname){         
            var patt = new RegExp(namePattern);
            var res = patt.test(fname);  
            if(res == true)
            {
                console.log("validated");
                return true;
            }
            else{
                console.log("invalid inputs");
                return false;
            }
            return fname;
    },

    lastName (lname){
        var patt = new RegExp(namePattern);
        var res = patt.test(lname);
        if(res == true)
            {
                console.log("validated");
                return true;
            }
            else{
                console.log("invalid inputs");
                return false;
            }
            return lname;
    },
        
     email(email){
        var patt = new RegExp(emailReg);
        var res = patt.test(email);
        if(res == true)
        {
            console.log("validated");
            return true;
        }
        else{
            console.log("invalid inputs");
            return false;
        }
        return email;
    },

    mobileNumber(mobileNo){
           
        var patt = new RegExp(mobileReg);
        var res = patt.test(mobileNo);
        if(res == true)
        {
            console.log("validated");
            return true;
        }
        else{
            console.log("invalid inputs");
            return false;
        }
        return mobileNo;
    },
        
    password (pswd){
        var patt = new RegExp(passwordReg);
            var res = patt.test(pswd);
            if(res == true)
            {
                console.log("validated");
                return true;
            }
            else{
                console.log("invalid inputs");
                return false;
            }            
            return pswd;
    }

}