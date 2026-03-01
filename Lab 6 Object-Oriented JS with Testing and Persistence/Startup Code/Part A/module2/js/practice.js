/* =================================
   Module 2: Inheritance
   Run with: node js/practice.js
   ================================= */

// ---- Module 1 (Solved): Classes, Constructors, Methods ----

class Transaction {
    constructor(description, amount, type, category) {
        this.description = description;
        this.amount = amount;
        this.type = type;
        this.category = category;
    }

    format() {
        const sign = this.type === "income" ? "+" : "-";
        return sign + this.amount.toLocaleString() + " QAR";
    }

    isExpense() { return this.type === "expense"; }
    isIncome() { return this.type === "income"; }
}

class Account {
    constructor(name, type, balance) {
        this.name = name;
        this.type = type;
        this.balance = balance;
        this.createdAt = new Date().toLocaleDateString();
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount.toLocaleString()} QAR`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount.toLocaleString()} QAR`);
    }

    getBalance() {
        return this.balance.toLocaleString() + " QAR";
    }
}

class BudgetCategory {
    constructor(name, budgeted, spent = 0) {
        this.name = name;
        this.budgeted = budgeted < 0 ? 0 : budgeted;
        this.spent = spent;
    }

    addSpending(amount) { this.spent += amount; }
    getRemaining() { return this.budgeted - this.spent; }
    isOverBudget() { return this.spent > this.budgeted; }
    toString() { return `${this.name}: ${this.spent.toLocaleString()} / ${this.budgeted.toLocaleString()} QAR`; }
}


// ======================================================
// Module 2: Inheritance
// A child class extends a parent to inherit its properties and methods.
// Same as Java: class Child extends Parent { ... }
// Call super() in the constructor to run the parent's constructor first.
// ======================================================


// ---- Exercise 1: SavingsAccount extends Account ----
// Create a SavingsAccount that extends Account.
// Constructor takes: name, balance, profitRate (e.g., 0.05 for 5%)
// Call super() with name, "savings", and balance.
// Then set this.profitRate.
//
// Add a method: applyProfit() - adds (balance * profitRate) to the balance,
// logs the profit earned.

// TODO: Define SavingsAccount class
class SavingsAccount extends Account{
    constructor(name,balance,profitRate){
        //we need to use u unless the dad has an emoty constructor
        super(name,'savings',balance);
        this.profitRate=profitRate;
    }
    applyProfit(){
        const profit = this.balance*this.profitRate;
        this.balance+=profit;
        console.log(`profit earned =${profit.toLocaleString()} QAR`)
    }

}


// Test:
const savings = new SavingsAccount("Emergency Fund", 20000, 0.04);
console.log("Type:", savings.type);           // savings
console.log("Balance:", savings.getBalance()); // 20,000 QAR
savings.applyProfit();                         // Profit earned: 800 QAR
console.log("After profit:", savings.getBalance());


// ---- Exercise 2: RecurringTransaction extends Transaction ----
// Extends Transaction with an extra property: frequency ("monthly", "weekly", etc.)
// Call super() for the Transaction fields, then set this.frequency.
//
// Override format() to append the frequency: "+8,000 QAR (monthly)"
// Use super.format() to get the base string, then add to it.

// TODO: Define RecurringTransaction class

class RecurringTransaction extends Transaction{
    constructor(description, amount, type, category, frequency){
        super(description, amount, type, category);
        this.frequency = frequency;
    }
    format(){
        return super.format() + this.frequency;
    }

}


// // Test:
// const salary = new RecurringTransaction("Salary", 8000, "income", "Salary", "monthly");
// const netflix = new RecurringTransaction("Netflix", 45, "expense", "Entertainment", "monthly");
// console.log(salary.format());     // +8,000 QAR (monthly)
// console.log(netflix.format());    // -45 QAR (monthly)
// console.log("Is expense?", netflix.isExpense()); // true (inherited)


// ---- Exercise 3: instanceof and Type Checking ----
// Create one of each type and test with instanceof.
// Inheritance means: a SavingsAccount IS an Account, a RecurringTransaction IS a Transaction.

// TODO: Create instances and test with instanceof

// Expected:
// salary instanceof Transaction -> true
// salary instanceof RecurringTransaction -> true
// savings instanceof Account -> true
// savings instanceof SavingsAccount -> true
// new Transaction("x", 1, "income", "y") instanceof RecurringTransaction -> false

t1 = new SavingsAccount("idk1",5200,20);
t2 = new RecurringTransaction("idk2",6500,"idk3","idk4","annually");
console.log(t1 instanceof SavingsAccount);
console.log(t2 instanceof Account);
console.log(t2 instanceof RecurringTransaction);
console.log(t2 instanceof Transaction);
