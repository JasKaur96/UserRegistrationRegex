const assert = require ('chai').assert;
const expect = require('chai').expect //getting from asserting lib
const utils = require('../src/utils')
const checkPattern = require('../src/constants')
describe('Validation testing ',function() {

    it('Should return true if first name matches pattern',function() {
        assert.equal(utils.validation("Jaspreet",checkPattern.namePattern),true)  
    })
    it('check the last name',function() {
        assert.equal(utils.validation("Kaur",checkPattern.namePattern),true)  
    })
    it('check mobile  and return true',function(){
        expect(utils.validation("91 9876677984",checkPattern.mobileReg)).to.true;
    })
    it('check email and should return true',function(){
        expect(utils.validation("jas@gmail.com",checkPattern.emailReg)).to.be.true;
    })
    it('check password should return true',function(){
        expect(utils.validation("jas@123K",checkPattern.passwordReg)).to.be.true;
    })    
});

describe('Invalid Data testing ',function() {
    it('Should return false not match pattern',function() {
        assert.equal(utils.validation("jas",checkPattern.namePattern),true)  
    })
    it('check the last name ',function() {
        assert.equal(utils.validation("kaur",checkPattern.namePattern),true)  
    })
    it('check mobile ',function(){
        expect(utils.validation("9876677984",checkPattern.namePattern)).to.true;
    })
    it('check email and should return true',function(){
        expect(utils.validation("jasgmail",checkPattern.emailReg)).to.be.true;
    })
    it('check password should return true',function(){
        expect(utils.validation("jas123",checkPattern.passwordReg)).to.be.true;
    })    
});