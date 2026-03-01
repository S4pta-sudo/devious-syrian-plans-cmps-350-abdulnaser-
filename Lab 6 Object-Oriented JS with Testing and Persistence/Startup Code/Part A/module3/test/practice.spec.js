//get the chai package for assertions
const { expect } = require("chai");

const a = 10;
const b = 20;

function add(a,b){
    return a+b;
}

//group of things to test being title, operation
describe("Math Operations",()=>{
    it("addition of 2 and 3 must be 5",()=>{
        expect(add(2,3)).equal(5);
    });

    it("addition of 3 and 4 should be 7",()=>{
        expect(add(3,4)).to.equal(7);
    });
    

});


/**
 * think of this operation as:
 * describe groups a specific group of test
 * it is a specific test
 * an expect is the operation of testing itself
 * this is where you import your functions
 * 
 * think of the chai and mocha dynamic as
 * 
 * chai allows us to write the tests
 * 
 * mocha does the work behind the scenes and does the testing
 * that we write
 * 
 */