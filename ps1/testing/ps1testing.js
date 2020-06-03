const {describe, it} = require('mocha');
const {expect} = require('chai')

const alpha = require('../PS1.P1');
const mathFunction = require('../PS1.P2');
const p3module = require('../PS1.P3');
const FunctionP3 = p3module.FunctionP3;
const lambda1 = p3module.lambda1;
const lambda2 = p3module.lambda2;

describe('This is ps1testing', () => {

    //p1
    it('should return aaacccdeefgiiiiiiillloopprrssstuux for the input Supercalifragilisticexpialidocious', function () {
        let result = alpha('supercalifragilisticexpialidocious');
        expect(result).to.be.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });
    it('should return az for the input za', function () {
        let result = alpha('za');
        expect(result).to.be.equal('az');
    });
    it('should return ehllo for the input hello', function () {
        let result = alpha('hello');
        expect(result).to.be.equal('ehllo');
    });
    //p2
    it('should return 6 for the input 4+2', function () {
        let result = mathFunction('4+2');
        expect(result).to.be.equal(6);
    });
    it('should return 35 for the input 5*7', function () {
        let result = mathFunction('5*7');
        expect(result).to.be.equal(35);
    });
    it('should return 5 for the input 6-1', function () {
        let result = mathFunction('6-1');
        expect(result).to.be.equal(5);
    });
    it('should return 4.5 for the input 9/2', function () {
        let result = mathFunction('9/2');
        expect(result).to.be.equal(4.5);
    });
    //p3-a
    it('should return [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’] for the input supercalifragilisticexpialidocious', function () {
        let result = FunctionP3('supercalifragilisticexpialidocious', lambda1);
        expect(result).to.be.a('array');
    });
    it('should return [‘california’, ‘cation’] for the input californiacation', function () {
        let result = FunctionP3('californiacation', lambda1);
        expect(result).to.be.a('array');
    });
    it('should return an array for any input', function () {
        let result = FunctionP3('hello', lambda1);
        expect(result).to.be.a('array');
    });
    //p3-b
    it('should return an object for any input ', function () {
        let result = FunctionP3('supercalifragilisticexpialidocious', lambda2);
        expect(result).to.be.a('object');
    });
    it('should return an object with the property originalString for the input supercalifragilisticexpialidocious', function () {
        let result = FunctionP3('supercalifragilisticexpialidocious', lambda2);
        expect(result).to.have.property('originalString');
    });
    it('should return supercalifragilisticexpialidocious for the value of property originalString when input is supercalifragilisticexpialidocious', function () {
        let result = FunctionP3('supercalifragilisticexpialidocious', lambda2);
        expect(result.originalString).to.be.equal('supercalifragilisticexpialidocious');
    });

})