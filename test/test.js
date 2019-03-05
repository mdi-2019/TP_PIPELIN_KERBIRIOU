let expect    = require("chai").expect;
let script = require("../script.js");

describe('Fonctions mathématiques', function() {
  describe('cos', function() {
    it('Teste cos(0) = 1 et cos(pi) = -1', function() {
    	let cos0 = script.cos(0);
    	let cospi = script.cos(Math.PI);
     	expect(cos0).to.equal(1);
     	expect(cospi).to.equal(-1);
    });
  });
  describe('sqrt', function() {
    it('100 cas de sqrt', function() {
    	for(let  i = 0 ; i < 100 ; ++i){
    		let val = Math.random() * (10000 - 1) + 1;
    		let sqrtval = script.sqrt(val);
    		expect(sqrtval).to.equal(Math.sqrt(val));   		 
    	}
    });
  });
});