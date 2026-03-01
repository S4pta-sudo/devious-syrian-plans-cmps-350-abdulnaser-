/* =================================
   Module 3: Unit Testing with Mocha and Chai
   Run with: npm test
   ================================= */

// Mocha gives you describe() and it() to organize tests.
// Chai gives you expect() to make assertions.
// Together they let you verify your code works correctly.

const { expect } = require("chai");
const { Transaction, Account, SavingsAccount } = require("../js/transaction");


// ---- Exercise 1: Test the Transaction class ----
// Write tests for:
//   a) Constructor sets all properties correctly
//   b) format() returns the right string for income
//   c) format() returns the right string for expense
//   d) isExpense() and isIncome() return correct booleans

describe("Transaction", () => {

    // TODO: Test that constructor sets properties
    it("should set all properties from constructor", () => {
        // Create a transaction and check each property with expect().to.equal()
        t1 = new Transaction("idk1",35,"idk2","idk3");
        expect(t1.description).to.equal("idk1");
        expect(t1.amount).to.equal(35);
        expect(t1.type).to.equal("idk2");
        expect(t1.category).to.equal("idk3");
    });

    // TODO: Test format() for income
    it("should format income with + sign", () => {
        // Create an income transaction and check format() output
        t2 = new Transaction("idk1",35,"income","idk3");
        const out = t2.format();
        expect(out).to.equal("+35 QAR");
    });

    // TODO: Test format() for expense
    it("should format expense with - sign", () => {
        t2 = new Transaction("idk1",35,"expense","idk3");
        const out = t2.format();
        expect(out).to.equal("-35 QAR");
    });

    // TODO: Test isExpense() and isIncome()
    it("should correctly identify transaction type", () => {
        t2 = new Transaction("idk1",35,"income","idk3");
        t3 = new Transaction("idk1",35,"expense","idk3");
        
        
        expect(t3.isExpense()).to.equal(true);
        
        expect(t2.isIncome()).to.equal(true);
    });
});


// ---- Exercise 2: Test the Account class ----
// Write tests for:
//   a) deposit() increases balance
//   b) withdraw() decreases balance when funds available
//   c) withdraw() returns false when insufficient funds
//   d) getBalance() returns formatted string

describe("Account", () => {

    // TODO: Test deposit
    it("should increase balance after deposit", () => {

    });

    // TODO: Test successful withdraw
    it("should decrease balance after withdraw", () => {

    });

    // TODO: Test insufficient funds
    it("should return false when withdrawing more than balance", () => {

    });

    // TODO: Test getBalance formatting
    it("should return formatted balance string", () => {

    });
});


// ---- Exercise 3: Test the SavingsAccount class ----
// Write tests for:
//   a) Constructor sets type to "savings" automatically
//   b) Inherits deposit() from Account
//   c) applyProfit() calculates and adds profit correctly

describe("SavingsAccount", () => {

    // TODO: Test that type is "savings"
    it("should have type set to savings", () => {

    });

    // TODO: Test inherited deposit
    it("should inherit deposit from Account", () => {

    });

    // TODO: Test applyProfit
    it("should calculate and add profit correctly", () => {

    });
});
