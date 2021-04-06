const assert = require('chai').assert //getting from asserting lib
const data = require('../src/userRegisteration')

describe('User Registeration Test',function(){
    it('first name', function(){
        assert.equal(data.firstName("Jaspreet"),true)  
    })
    it('last name', function(){
        assert.equal(data.lastName("Kaur"),true)  
    })
    it('mobile', function(){
        assert.equal(data.mobileNumber("91 9876677984"),true)  
    })
    it('email', function(){
        assert.equal(data.email("jas@gmail.com"),true)  
    })
    it('password', function(){
        assert.equal(data.password("Jas@123abc"),true)  
    })
    
})
