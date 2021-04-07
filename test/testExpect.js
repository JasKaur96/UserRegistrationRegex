const expect = require('chai').expect //getting from asserting lib
const data = require('../src/inputValidation')

describe('User Registeration Test using expect',function(){
    it('should return true',function(){
        expect(data.firstName("Jaspreet")).to.be.true;
    })
    it('should return lastname',function(){
        expect(data.firstNameType("Kaur")).to.equal("Kaur");
    })
    it('should return age type',function(){
        expect(data.age(21)).to.be.a('number');
    })
    it('should return age type',function(){
        expect(data.age(21)).to.be.a('string');
    })
    it('check if substring exists',function(){
        expect(data.mobileType("91 9876677984")).to.include('91');
    })
    it('check if substring exists',function(){
        expect(data.mobileType("91 9876677984")).to.include('81');
    })
    it('check if substring should not exist',function(){
        expect(data.passwordType("jas@123K")).to.not.include("kaur");
    })
    it('check if substring should not exists',function(){
        expect(data.passwordType("jas@123K")).to.not.include("jas");
    })
    it('should return false',function(){
        expect(data.email("jasgmail.com")).to.be.false;
    })

})