const assert = require('chai').assert //getting from asserting lib
const data = require('../src/userRegisteration')

describe('User Registeration Test',function(){
    it('first name', function(){
        assert.equal(data.firstName("Jaspreet"),true)  
    })
    it('first name', function(){
        assert.equal(data.firstName("jaspreet"),true)  
    })
    it('last name', function(){
        assert.equal(data.lastName("Kaur"),true)  
    })
    it('last name', function(){
        assert.equal(data.lastName("kaur"),true)  
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
    it('email', function(){
        assert.equal(data.email("jas@gmail.com"),true)  
    })
    it('email', function(){
        assert.equal(data.email("jasgmail.com"),true)  
    })
    it('password', function(){
        assert.equal(data.password("Jas@123abc"),true)  
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
