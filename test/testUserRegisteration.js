const assert = require('chai').assert //getting from asserting lib
const data = require('../src/inputValidation')

describe('User Registeration Test',function(){
    it('first name should return true', function(){
        assert.equal(data.firstName("Jaspreet"),true)  
    })
    it('first name should return false', function(){
        assert.equal(data.firstName("jas"),false)  
    })
    it('first name type check', function(){
        assert.typeOf(data.firstNameType("Jaspreet"),'string')  
    })
    it('last name', function(){
        assert.equal(data.lastName("Kaur"),true)  
    })
    it('last name', function(){
        assert.equal(data.lastName("kaur"),false)  
    })
    it('last name type check', function(){
        let result = data.firstNameType("Kaur")
        assert.typeOf(result,'string')  
    })
    it('mobile', function(){
        assert.equal(data.mobileNumber("91 9876677984"),true)  
    })
    it('mobile', function(){
        assert.equal(data.mobileNumber("919876677984"),true)  
    })
    it('mobile', function(){
        assert.equal(data.mobileNumber("9876677984"),true)  
    })
    it('mobile', function(){
        assert.equal(data.mobileNumber("+919876677984"),true)  
    })
    it('age>18 should return true', function(){ 
        assert.isAbove(data.age(20),18)  
    })
    it('age>18 should return true', function(){
        assert.isAbove(data.age(16),18)  
    })
    it('age type check', function(){
        assert.typeOf(data.age(18),'number')  
    })
    it('age atleast 18', function(){
        assert.isAtLeast(data.age(17), 18);
    })
    it('age atleast 18', function(){
        assert.isAtLeast(data.age(18), 18);
    })
    it('age atleast 18', function(){
        assert.isAtMost(data.age(18), 18);
    })
    it('age is number', function(){
        assert.isNumber(data.age(18), true);
    })
    it('email', function(){
        assert.equal(data.email("jas@gmail.com"),true)  
    })
    it('email', function(){
        assert.isTrue(data.email("jas@gmail.com"),true)  
    })
    it('email', function(){
        assert.isFalse(data.email("jasgmail.com"),true)  
    })
    it('password', function(){
        assert.equal(data.password("Jas@123abc"),true)  
    })
    it('password', function(){
        assert.isString(data.passwordType("Jas@123abc"),'string')  
    })
    it('password', function(){
        assert.equal(data.password("Jas123abc"),true)  
    })
    it('password', function(){
        assert.equal(data.password("Jas@abc"),true)  
    })
    it('password', function(){
        assert.equal(data.password("jas@123abc"),true)  
    })
    it('password', function(){
        assert.equal(data.password("J@123"),true)  
    })
    
})
