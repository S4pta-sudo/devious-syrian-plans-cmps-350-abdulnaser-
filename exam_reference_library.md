# 📘 Web Development Exam Reference Library
### CMPS 350 — Labs 5, 6, 7 + Assignment 2 + Practice Session

> **How to use:** Press **Cmd+F** and search for any keyword: "filter", "Fetch", "OOP", "localStorage", "startEdit", "FormData", "Mocha", etc.
> Every concept from every lab, tutorial, starter code file, and assignment is documented here with the exact context it appeared in.

---

## 📑 Table of Contents

1. [Variables & Data Types (Lab 5 Module 1)](#1-variables--data-types)
2. [Functions — Declarations & Arrow (Lab 5 Module 2)](#2-functions--declarations--arrow)
3. [Arrays & Array Methods (Lab 5 Module 3)](#3-arrays--array-methods)
4. [DOM Selection & Manipulation (Lab 5 Module 4)](#4-dom-selection--manipulation)
5. [Event Listeners (Lab 5 Module 5)](#5-event-listeners)
6. [Mini Budget Calculator Pattern (Lab 5 Module 6 + Part B)](#6-mini-budget-calculator-pattern)
7. [Classes, Constructors & Methods (Lab 6 Module 1)](#7-classes-constructors--methods)
8. [Inheritance: extends, super, instanceof (Lab 6 Module 2)](#8-inheritance-extends-super-instanceof)
9. [Unit Testing: Mocha & Chai (Lab 6 Module 3)](#9-unit-testing-mocha--chai)
10. [DOM + Events + LocalStorage (Lab 6 Module 4)](#10-dom--events--localstorage)
11. [JSON & Data Transformation (Lab 7 Module 1)](#11-json--data-transformation)
12. [Async / Await & Promises (Lab 7 Module 2)](#12-async--await--promises)
13. [Fetch API — GET & Display (Lab 7 Module 3)](#13-fetch-api--get--display)
14. [CRUD Operations — POST, PUT, DELETE (Lab 7 Module 4)](#14-crud-operations--post-put-delete)
15. [Full CRUD App Architecture (Lab 7 Part B + Practice Session)](#15-full-crud-app-architecture)
16. [SPA Navigation — loadPage() Pattern (Assignment 2)](#16-spa-navigation--loadpage-pattern)
17. [FormData Pattern (Assignment 2)](#17-formdata-pattern)
18. [Template Literal HTML Cards (Assignment 2 / Labs)](#18-template-literal-html-cards)
19. [Search & Filter (Lab 7 Part B / Practice Session)](#19-search--filter)
20. [Edit Mode: startEdit / cancelEdit (Labs 7, Assignment 2)](#20-edit-mode-startedit--canceledit)
21. [CSS: Layouts, Grids & Responsive Design (Labs 3–4)](#21-css-layouts-grids--responsive-design)
22. [CSS: Form Styling, Buttons & States](#22-css-form-styling-buttons--states)
23. [HTML: Scaffolding & Templates](#23-html-scaffolding--templates)
24. [Validation & Sanitization Patterns](#24-validation--sanitization-patterns)
25. [Common Mistakes & Bug Fixes Checklist](#25-common-mistakes--bug-fixes-checklist)
26. [Complete TODO Inventory (All Labs & Assignment)](#26-complete-todo-inventory)
27. [Exam Question Types by Topic](#27-exam-question-types-by-topic)

---

## 1. Variables & Data Types

> **Source:** Lab 5 Module 1 — `Startup Code/Part A/module1/js/practice.js`

### const vs let

```javascript
// SETUP REQUIRED:
// - Replace "change to account name variable" with your variable name (e.g. accountName, productName)
// - Replace "change to tax rate variable" with your rate variable name (e.g. taxRate, discountRate)
// - Replace "change to isActive variable" with your boolean variable name (e.g. isActive, isLoggedIn)
// - Replace "change to balance variable" with your changing variable name (e.g. balance, counter, total)
// - Replace the assigned values ("Main Checking", 0.05, true, 15250) with your own starting values

// const — cannot be reassigned (like Java's final)
const accountName = "Main Checking";   // ← replace "accountName" and "Main Checking"
const taxRate     = 0.05;              // ← replace "taxRate" and 0.05
const isActive    = true;              // ← replace "isActive" and true

// let — can be reassigned
let balance = 15250;                   // ← replace "balance" and 15250
balance = balance + 1000;
balance += 500;  // shorthand

// ERROR: const accountName = "Savings";  ← cannot reassign a const
```

**Rule:** Use `const` by default. Use `let` only when the value needs to change (counters, running totals, state flags like `editingId`).

### Objects (Key-Value Pairs)

```javascript
// SETUP REQUIRED:
// - Replace "myObject" with your object variable name (e.g. transaction, product, student)
// - Replace property names (description, amount, category, type) with your actual property names
// - Replace property values ("Grocery Shopping", 850, "Food", "expense") with your data
// - Replace "myField" with the variable holding the key name you want to look up

// No class definition needed — just curly braces
const myObject = {
    description: "Grocery Shopping",   // ← replace key name and value
    amount:       850,                  // ← replace key name and value
    category:    "Food",               // ← replace key name and value
    type:        "expense"             // ← replace key name and value
};

// Access with dot notation
console.log(myObject.description);     // "Grocery Shopping"
console.log(myObject.amount);          // 850

// Access with bracket notation (when key is a variable)
const myField = "amount";             // ← replace "amount" with the key you want
console.log(myObject[myField]);        // 850
```

### Template Literals

```javascript
// SETUP REQUIRED:
// - Replace "appName" with your string variable name (e.g. appName, title, label)
// - Replace "greeting" with your greeting variable name
// - Replace "receipt" with your multi-line string variable name
// - Replace "formattedLine" with your formatted string variable name
// - Replace myObject.description / myObject.amount etc. with your actual object.property pairs

// Like Python f-strings — use backticks `` and ${}
const appName  = "MyFinance";                           // ← replace variable name and string value
const greeting = `Welcome to ${appName}`;              // ← replace variable name

// Multi-line receipt (Lab 5 Module 1 Exercise 3b)
const receipt = `
Transaction: ${myObject.description}
Amount:      ${myObject.amount} QAR
Category:    ${myObject.category}
Type:        ${myObject.type}
`;

// Formatted string (Lab 5 Module 1 Exercise 3a)
const formattedLine = `${myObject.description}: ${myObject.amount} QAR (${myObject.type})`;
```

### Practice Exercises (exact from Lab 5 Module 1)

```javascript
// SETUP REQUIRED (Lab 5 Module 1 exact exercise answers):
// - Replace accountName with your constant name; replace "Main Checking" with your value
// - Replace balance with your let variable name; replace 15250 with your starting value
// - Replace isActive with your boolean name; replace true with your value
// - Replace myTransaction with your object name
// - Replace description/amount/category/type with your property names and their values
// - Replace line / fullReceipt with your string variable names

// 1a.
const accountName = "Main Checking";   // ← replace both
// 1b.
let balance = 15250;                   // ← replace both
// 1c.
const isActive = true;                 // ← replace both
// 1d.
console.log(accountName, balance, isActive);

// 2a.
const myTransaction = { description: "Grocery Shopping", amount: 850, category: "Food", type: "expense" };
// 2b.
console.log(myTransaction);
// 2c.
console.log(myTransaction.description, myTransaction.amount);

// 3a.
const line = `${myTransaction.description}: ${myTransaction.amount} QAR (${myTransaction.type})`;
// 3b. (multi-line)
const fullReceipt = `Transaction: ${myTransaction.description}\nAmount: ${myTransaction.amount} QAR\nCategory: ${myTransaction.category}\nType: ${myTransaction.type}`;
// 3c.
console.log(line);
console.log(fullReceipt);
```

---

## 2. Functions — Declarations & Arrow

> **Source:** Lab 5 Module 2 — `Startup Code/Part A/module2/js/practice.js`

### Function Declarations (Exercise 1)

```javascript
// SETUP REQUIRED:
// - Replace formatCurrency with your function name (exam may call it formatAmount, displayCurrency, etc.)
// - Replace amount with your parameter name
// - Replace calculateRemaining with your function name (exam may call it calcBalance, getRemaining, etc.)
// - Replace income / expenses with your parameter names
// - Replace " QAR" with your currency string if different (e.g. " USD", "$", "")

// Multi-line, named, hoisted (can call before definition)
function formatCurrency(amount) {                        // ← replace function name and param
    return amount.toLocaleString() + " QAR";            // ← replace " QAR" if needed
}

function calculateRemaining(income, expenses) {          // ← replace function name and params
    return income - expenses;
}

// Tests (from lab)
console.log(formatCurrency(15250));           // "15,250 QAR"
console.log(calculateRemaining(12000, 8500)); // 3500
```

### Arrow Functions (Exercise 2)

```javascript
// SETUP REQUIRED:
// - Replace formatCurrency with your arrow function name (e.g. formatAmount, formatCurrencyArrow)
// - Replace amount with your parameter name
// - Replace calcSavingsRate with your function name (exam uses calcSavingsRate or calculateSavingsRate)
// - Replace income / expenses with your parameter names
// - Replace savings / rate with your internal variable names
// - Replace " QAR" if your currency is different

// One-liner — implicit return, no braces needed
const formatCurrency = (amount) => amount.toLocaleString() + " QAR"; // ← replace name, param, " QAR"

// Multi-line — explicit return required
const calcSavingsRate = (income, expenses) => {           // ← replace name and params
    const savings = income - expenses;                    // ← replace "savings"
    const rate    = (savings / income) * 100;             // ← replace "rate"
    return rate.toFixed(1);                               // "29.2"
};

// Safe version — handle income === 0
const calcSavingsRateSafe = (income, expenses) => {       // ← replace name
    if (income === 0) return "0.0";
    return (((income - expenses) / income) * 100).toFixed(1);
};

// Test:
console.log(calcSavingsRate(12000, 8500));  // "29.2"
```

### Processing an Array of Numbers (Exercise 3)

```javascript
// SETUP REQUIRED:
// - Replace monthlyExpenses with your array name (e.g. expenses, amounts, prices)
// - Replace income with your income variable name
// - Replace calculateTotal with your function name
// - Replace totalExpenses / balance / rate with your variable names
// - Replace calcSavingsRate with the name you defined in Exercise 2

const monthlyExpenses = [4500, 1200, 650, 320, 750, 380]; // ← replace array name and values
const income = 12000;                                      // ← replace variable name and value

// 3a. Write a function calculateTotal(items) that returns the sum of all items
function calculateTotal(items) {                           // ← replace function name
    return items.reduce((sum, item) => sum + item, 0);
}

// 3b. Total expenses
const totalExpenses = calculateTotal(monthlyExpenses);     // 7800  ← replace variable names

// 3c. Remaining balance
const balance = income - totalExpenses;                    // 4200  ← replace variable names

// 3d. Savings rate
const rate = calcSavingsRate(income, totalExpenses);       // "35.0" ← use your savings rate function name
```

### Key Differences: Declaration vs Arrow

| Feature | Function Declaration | Arrow Function |
|---|---|---|
| Hoisting | Yes — can call before definition | No — must define first |
| `this` binding | Has its own `this` | Inherits `this` from surrounding scope |
| Syntax | `function name() {}` | `const name = () => {}` |
| Best use | Named utility functions | Callbacks, one-liners, array methods |

---

## 3. Arrays & Array Methods

> **Source:** Lab 5 Module 3, Lab 7 Module 1 — practice files + Tutorial B01

### Standard Sample Data (used across ALL labs)

```javascript
// SETUP REQUIRED:
// - Replace transactions with your array name (e.g. transactions, items, products, recipes)
// - Replace description / amount / type / category with your actual property names from the exam
// - Keep the object structure — add or remove properties as needed for your exam

const transactions = [  // ← replace "transactions" with your array name
    { description: "Salary",        amount: 12000, type: "income",  category: "Income" },
    { description: "Rent",          amount: 4500,  type: "expense", category: "Housing" },
    { description: "Groceries",     amount: 1200,  type: "expense", category: "Food" },
    { description: "Bus Pass",      amount: 650,   type: "expense", category: "Transportation" },
    { description: "Electric Bill", amount: 320,   type: "expense", category: "Utilities" },
    { description: "Movie Tickets", amount: 150,   type: "expense", category: "Entertainment" },
    { description: "Freelance Work",amount: 3000,  type: "income",  category: "Income" },
    { description: "Restaurant",    amount: 200,   type: "expense", category: "Food" },
    { description: "Gas",           amount: 250,   type: "expense", category: "Transportation" },
    { description: "New Shoes",     amount: 380,   type: "expense", category: "Shopping" }
];
```

### filter — Keep items matching a condition

```javascript
// SETUP REQUIRED:
// - Replace transactions with your array name
// - Replace expensesOnly / incomeOnly / searchResults with your result variable names
// - Replace .type with your type property name (e.g. .type, .kind, .category)
// - Replace "expense" / "income" with your actual string values
// - Replace .description with your searchable property name
// - Replace "rent" with the search term (or use a variable from an input)

// 1a. All expenses (Lab 5 Module 3)
const expensesOnly = transactions.filter(t => t.type === "expense"); // ← replace array, var, and ".type"

// 1b. All income
const incomeOnly = transactions.filter(t => t.type === "income");    // ← replace var name

// Case-insensitive search on description
const searchResults = transactions.filter(t =>                        // ← replace var name
    t.description.toLowerCase().includes("rent")                     // ← replace .description and "rent"
);
```

### map — Transform each item

```javascript
// SETUP REQUIRED:
// - Replace transactions with your array name
// - Replace descriptions / formattedStrings / rowsHTML with your result variable names
// - Replace .description / .type / .amount / .category with your actual property names
// - Replace " QAR" with your currency string
// - Replace .type === "income" with your income check (e.g. .type === "income")

// 1c. Extract just descriptions
const descriptions = transactions.map(t => t.description);   // ← replace array, var, and ".description"

// 1d. Format each into display string: "+12,000 QAR" or "-4,500 QAR"
const formattedStrings = transactions.map(t => {              // ← replace var name
    const sign = t.type === "income" ? "+" : "-";           // ← replace .type and values
    return `${t.description}: ${sign}${t.amount.toLocaleString()} QAR`;
});

// Map to HTML table rows
const rowsHTML = transactions.map(t => `                      // ← replace var name
    <tr>
        <td>${t.description}</td>
        <td>${t.category}</td>
        <td>${t.amount.toLocaleString()} QAR</td>
    </tr>
`).join("");
// ALWAYS .join("") at the end to make one string
```

### reduce — Combine items into one value

```javascript
// SETUP REQUIRED:
// - Replace transactions with your array name
// - Replace totalIncome / totalExpenses / balance / largestExpense with your variable names
// - Replace .type with your type property (e.g. .type, .kind)
// - Replace .amount with your numeric property (e.g. .amount, .price, .cost)

// 2a. Total income (filter first, then reduce)
const totalIncome = transactions               // ← replace "totalIncome" and "transactions"
    .filter(t => t.type === "income")          // ← replace .type and "income"
    .reduce((sum, t) => sum + t.amount, 0);   // ← replace .amount

// 2b. Total expenses
const totalExpenses = transactions             // ← replace "totalExpenses"
    .filter(t => t.type === "expense")         // ← replace "expense"
    .reduce((sum, t) => sum + t.amount, 0);   // ← replace .amount

// 2c. Balance
const balance = totalIncome - totalExpenses;  // ← replace variable names

// Find the LARGEST expense
const largestExpense = transactions            // ← replace "largestExpense"
    .filter(t => t.type === "expense")
    .reduce((max, t) => t.amount > max.amount ? t : max);
// Result: { description: "Rent", amount: 4500, ... }
```

### Grouping by Category with reduce (Lab 7 Module 1 Exercise 3 + Lab 5 Module 3 Exercise 3a)

```javascript
// SETUP REQUIRED:
// - Replace transactions with your array name
// - Replace byCategory with your result variable name
// - Replace groups / t with your accumulator and item variable names (keep as-is is fine)
// - Replace .type / .category / .amount with your actual property names
// - Remove the `if` block to group ALL items instead of just expenses

// 3a. Group expenses by category (expenses only)
const byCategory = transactions.reduce((groups, t) => {  // ← replace "byCategory" and "transactions"
    if (t.type === "expense") {                           // ← replace .type and "expense" (remove if to group all)
        groups[t.category] = (groups[t.category] || 0) + t.amount;  // ← replace .category and .amount
    }
    return groups;
}, {});  // ← {} is the starting accumulator — do not change

// Group ALL items by category (no type filter)
const allByCategory = transactions.reduce((groups, t) => {  // ← replace variable names
    groups[t.category] = (groups[t.category] || 0) + t.amount;
    return groups;
}, {});
```

### Object.entries() — Loop over grouped data (Exercise 3b)

```javascript
// SETUP REQUIRED:
// - Replace byCategory with your grouped object variable name (result of reduce above)
// - Replace category / total with your destructured key/value names (can keep as-is)
// - Replace summaryHTML with your HTML result variable name
// - Replace " QAR" with your currency string

// 3b. Log each category with Object.entries().forEach()
Object.entries(byCategory).forEach(([category, total]) => {  // ← replace "byCategory"
    console.log(`${category}: ${total.toLocaleString()} QAR`);  // ← replace " QAR" if needed
});

// Map categories to HTML cards
const summaryHTML = Object.entries(byCategory)              // ← replace "summaryHTML" and "byCategory"
    .map(([category, total]) => `
        <div class="card">
            <h4>${category}</h4>
            <p>${total.toLocaleString()} QAR</p>
        </div>
    `)
    .join("");
```

### Other Array Methods (used throughout labs)

```javascript
// SETUP REQUIRED:
// - Replace transactions with your array name (must be let, not const, if you reassign it)
// - Replace the object literal properties with your actual property names and values
// - Replace foundItem / idx / hasExpense with your variable names
// - Replace t.id === 3 with your lookup condition (e.g. t.id === id, t.name === name)
// - Replace updatedObject with the new object to replace the found item

// push — add to end (every form submit)
transactions.push({ description: "Lunch", amount: 45, type: "expense", category: "Food" }); // ← replace all

// find — return first matching item
const foundItem = transactions.find(t => t.id === 3);    // ← replace "foundItem", array, condition

// findIndex — return index of first match
const idx = transactions.findIndex(t => t.id === 3);     // ← replace "idx", condition
transactions[idx] = updatedObject;                        // ← replace updatedObject with new item

// filter to REMOVE by id (use let for array so you can reassign)
transactions = transactions.filter(t => t.id !== id);    // ← replace condition (t.id !== id)

// some — check if ANY item matches
const hasExpense = transactions.some(t => t.type === "expense"); // ← replace var and condition
```

---

## 4. DOM Selection & Manipulation

> **Source:** Lab 5 Module 4 — `Startup Code/Part A/module4/js/practice.js`

### Exercise 0: Link JS to HTML (always first!)

```html
<!-- Place at bottom of <body> — HTML must load before script runs -->
<body>
    <!-- your HTML content here -->
    <script src="js/practice.js"></script>
</body>
```

Without this tag, your JS file sits there doing nothing. Check the console — if you see "Module 4 JS loaded!" the link works.

### Selecting Elements (Exercise 1)

```javascript
// SETUP REQUIRED:
// - Replace "myKey" with your localStorage key string (e.g. "balance", "module4-transactions")
// - Replace balanceEl / incomeEl / expenseEl with your element variable names
// - Replace "balance-display" / "income-display" / "expenses-display" with your HTML element IDs
// - Replace ".card" with your CSS selector (e.g. ".card", "#summary", ".item")
// - Replace ".amount" with your CSS selector for multiple elements

// TODO 4: Save total balance to LocalStorage
const totalBalance = 5000;
localStorage.setItem("myKey", totalBalance);              // ← replace "myKey"

// TODO 5: Reload balance from LocalStorage
const savedBalance = localStorage.getItem("myKey");       // ← replace "myKey"
if (savedBalance) {
    document.getElementById("balance-display").textContent = savedBalance + " QAR"; // ← replace ID
}

// 1a. By ID — returns ONE element (fastest)
const balanceEl  = document.getElementById("balance-display");  // ← replace var and ID
const incomeEl   = document.getElementById("income-display");   // ← replace var and ID
const expenseEl  = document.getElementById("expenses-display"); // ← replace var and ID

// 1b. Log textContent
console.log(balanceEl.textContent);                       // ← replace balanceEl

// 1c. By CSS selector — first match
const firstCard = document.querySelector(".card");         // ← replace ".card" with your selector
console.log(firstCard.querySelector("h3").textContent);

// 1d. By CSS selector — ALL matches
const allAmounts = document.querySelectorAll(".amount");   // ← replace ".amount" with your selector
console.log("Found", allAmounts.length, "amounts");
```

### Reading & Modifying Elements (Exercise 2)

```javascript
// SETUP REQUIRED:
// - Replace balanceEl with your element variable (obtained via getElementById above)
// - Replace "50,000" with the value you want to display
// - Replace "text-success" / "text-danger" with your CSS class names
// - Replace "output2" with your element ID for styling
// - Replace "#f0f0f0" / "red" with your color values
// - Replace "nav-menu" / "show" with your nav element ID and toggle class name

// 2a. Set textContent (safe — does not parse HTML)
balanceEl.textContent = "50,000";                          // ← replace var and value

// 2b. Add CSS class
balanceEl.classList.add("text-success");                   // ← replace class name

// 2c. Change inline style
document.getElementById("output2").style.backgroundColor = "#f0f0f0"; // ← replace ID and color
document.getElementById("output2").style.color = "red";               // ← replace ID and color

// Set innerHTML (allows HTML tags)
balanceEl.innerHTML = "<strong>50,000</strong> QAR";       // ← replace var and content

// Remove class
balanceEl.classList.remove("text-danger");                 // ← replace class name

// Toggle class (add if absent, remove if present)
const nav = document.getElementById("nav-menu");           // ← replace ID
nav.classList.toggle("show");                              // ← replace class name

// Check class
if (balanceEl.classList.contains("text-success")) { /* ... */ } // ← replace class name
```

### Creating & Appending Elements (Exercise 3)

```javascript
// SETUP REQUIRED:
// - Replace newCard with your element variable name
// - Replace "div" with the HTML tag you need (e.g. "li", "tr", "p")
// - Replace "card" with your CSS class name
// - Replace the innerHTML content with your actual display content
// - Replace calcSavingsRate(12000, 8500) with your function call and actual arguments
// - Replace "container" with your parent element ID

// 3a. Create element
const newCard = document.createElement("div"); // ← replace var and tag name

// 3b. Set class
newCard.className = "card";                    // ← replace class name

// 3c. Set inner HTML
newCard.innerHTML = `
    <h3>Savings Rate</h3>
    <p>${calcSavingsRate(12000, 8500)}%</p>    <!-- ← replace function and args -->
`;

// 3d. Append to parent
document.getElementById("container").appendChild(newCard); // ← replace "container"
```

### Coloring Balance Green/Red (universal pattern — appears in EVERY Part B)

```javascript
// SETUP REQUIRED:
// - Replace "total-balance" with your balance element's HTML ID
// - Replace balance with your balance variable name
// - Replace " QAR" with your currency string
// - Class names "text-success" / "text-danger" must match your CSS

const balanceEl = document.getElementById("total-balance");  // ← replace "total-balance"
balanceEl.textContent = balance.toLocaleString() + " QAR";   // ← replace balance var and " QAR"

// Approach 1 — classList (preferred in labs)
balanceEl.classList.remove("text-success", "text-danger");
balanceEl.classList.add(balance >= 0 ? "text-success" : "text-danger");

// Approach 2 — inline style (used in Lab 7 Part B starter)
balanceEl.style.color = balance >= 0 ? "green" : "red";
```

---

## 5. Event Listeners

> **Source:** Lab 5 Module 5 — `Startup Code/Part A/module5/js/practice.js`

### Click Events (Exercise 1 — running balance)

```javascript
// SETUP REQUIRED:
// - Replace currentBalance with your running balance variable name
// - Replace balanceDisplayEl with your display element variable name
// - Replace "balance-display" with your balance span/p element's HTML ID
// - Replace "add-income-btn" with your income button's HTML ID (from Lab 5 Module 5: #add-income-btn)
// - Replace "add-expense-btn" with your expense button's HTML ID (from Lab 5: #add-expense-btn)
// - Replace "reset-btn" with your reset button's HTML ID (from Lab 5: #reset-btn)
// - Replace 1000 / 500 with your actual increment/decrement amounts

let currentBalance = 0;                                            // ← replace variable name
const balanceDisplayEl = document.getElementById("balance-display"); // ← replace var and ID

// 1a. Add income button
document.getElementById("add-income-btn").addEventListener("click", () => { // ← replace ID
    currentBalance += 1000;                                        // ← replace var and amount
    balanceDisplayEl.textContent = currentBalance.toLocaleString() + " QAR";
});

// 1b. Add expense button
document.getElementById("add-expense-btn").addEventListener("click", () => { // ← replace ID
    currentBalance -= 500;                                         // ← replace var and amount
    balanceDisplayEl.textContent = currentBalance.toLocaleString() + " QAR";
});

// 1c. Reset button
document.getElementById("reset-btn").addEventListener("click", () => {      // ← replace ID
    currentBalance = 0;                                            // ← replace var
    balanceDisplayEl.textContent = "0 QAR";
});
```

### Input Events (Exercise 2 — real-time preview)

```javascript
// SETUP REQUIRED:
// - Replace "amount-input" with your input element's HTML ID (from Lab 5: #amount-input)
// - Replace "amount-preview" with your preview element's HTML ID (from Lab 5: #amount-preview)
// - Replace " QAR" with your currency string

// 2a. Live amount preview as user types
document.getElementById("amount-input").addEventListener("input", (event) => { // ← replace ID
    const value = event.target.value;   // read what user typed
    document.getElementById("amount-preview").textContent =   // ← replace ID
        Number(value).toLocaleString() + " QAR";              // ← replace " QAR"
});
```

### Form Submit Events (Exercise 3 — the universal pattern)

```javascript
// SETUP REQUIRED:
// - Replace "transaction-form" with your form element's HTML ID
// - Replace "transaction-body" with your <tbody> element's HTML ID
// - Replace transactions with your array variable name (must be let)
// - Replace "desc-input" / "form-amount" / "type-select" / "category-select" with your input IDs
//   (From Lab 5 Module 5: #desc-input, #form-amount, #type-select)

// Step 1: get form + table elements
const itemForm  = document.getElementById("transaction-form");  // ← replace ID
const itemTable = document.getElementById("transaction-body");  // ← replace ID

// Step 2: array to hold data
let transactions = [];                                          // ← replace variable name

// Step 3: Handle form submission
itemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values from inputs
    const description = document.getElementById("desc-input").value;             // ← replace ID
    const amount      = Number(document.getElementById("form-amount").value);    // ← replace ID
    const type        = document.getElementById("type-select").value;            // ← replace ID
    const category    = document.getElementById("category-select").value;        // ← replace ID

    const newItem = { description, amount, type, category };                     // ← match your properties
    transactions.push(newItem);                                                  // ← replace array name

    // Render table
    itemTable.innerHTML = transactions.map(item => `
        <tr>
            <td>${item.description}</td>
            <td class="${item.type === 'income' ? 'text-success' : 'text-danger'}">${item.amount}</td>
        </tr>
    `).join("");

    // Clear form
    e.target.reset();
});
```

### change Event for Dropdowns (used in filter)

```javascript
// SETUP REQUIRED:
// - Replace "filter-type" with your dropdown's HTML ID
// - Replace renderTransactions with your render function name

// Fires when user selects a different option
document.getElementById("filter-type").addEventListener("change", () => { // ← replace ID
    renderTransactions();   // ← replace with your render function name
});
```

### querySelectorAll + forEach (multiple elements)

```javascript
// SETUP REQUIRED:
// - Replace ".nav-link" with your nav link CSS class (e.g. ".nav-link", ".menu-item")
// - Replace "active" with your active class name
// - Replace page with your page variable (string like "home", "recipes", etc.)

// Active nav link pattern
document.querySelectorAll(".nav-link").forEach(link => { // ← replace ".nav-link"
    link.classList.remove("active");                      // ← replace "active"
});
document.querySelector(`.nav-link[onclick*="'${page}'"]`)?.classList.add("active"); // ← replace selector
```

---

## 6. Mini Budget Calculator Pattern

> **Source:** Lab 5 Module 6 (`module6/js/practice.js`) + Part B (`Part B/js/app.js`) — the canonical full pattern

This is the template every Part B builds on. Know all 4 steps.

```javascript
// SETUP REQUIRED:
// - Replace formatCurrency with your currency formatter function name (e.g. formatCurrency, formatAmount)
// - Replace calcSavingsRate with your savings rate function name
// - Replace transactions with your array variable name (must be let)
// - Replace updateDashboard with your dashboard function name (exam uses updateDashboard or updateSummary)
// - Replace renderTransactions with your render function name
// - Replace all HTML element IDs to match your HTML file:
//   "total-income" → your income display element ID
//   "total-expenses" → your expenses display element ID
//   "total-balance" → your balance display element ID
//   "savings-rate" → your savings rate element ID
//   "transaction-body" → your <tbody> element ID
//   "quick-transaction-form" → your form element ID (Lab 5 Part B: #quick-transaction-form)
//   "quick-desc" / "quick-amount" / "quick-type" → your input IDs (Lab 5 Part B names)
//   "clear-btn" → your clear button ID

/* ===== Lab 5 Module 6 + Part B — Full Pattern ===== */

// Step 1: Helper functions
const formatCurrency = (amount) => amount.toLocaleString() + " QAR";  // ← replace name, " QAR"

const calcSavingsRate = (income, expenses) => {                         // ← replace name and params
    if (income === 0) return "0.0";
    return (((income - expenses) / income) * 100).toFixed(1);
};

// Step 2: Data storage — empty array
let transactions = [];                                                  // ← replace variable name

// Step 3: updateDashboard()
function updateDashboard() {                                            // ← replace function name
    const totalIncome = transactions                                    // ← replace array and var
        .filter(t => t.type === "income")                             // ← replace .type and "income"
        .reduce((sum, t) => sum + t.amount, 0);                       // ← replace .amount

    const totalExpenses = transactions                                  // ← replace var
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpenses;                        // ← replace var names

    document.getElementById("total-income").textContent   = formatCurrency(totalIncome);    // ← replace IDs
    document.getElementById("total-expenses").textContent = formatCurrency(totalExpenses);
    document.getElementById("total-balance").textContent  = formatCurrency(balance);
    document.getElementById("savings-rate").textContent   = calcSavingsRate(totalIncome, totalExpenses) + "%";

    // Color the balance
    const balanceEl = document.getElementById("total-balance");         // ← replace ID
    balanceEl.classList.remove("text-success", "text-danger");
    balanceEl.classList.add(balance >= 0 ? "text-success" : "text-danger");
}

// Step 4: renderTransactions()
function renderTransactions() {                                          // ← replace function name
    const tableBody = document.getElementById("transaction-body");     // ← replace ID

    if (transactions.length === 0) {                                    // ← replace array name
        tableBody.innerHTML = `<tr><td colspan="3" class="empty-state">No transactions yet</td></tr>`;
        return;
    }

    tableBody.innerHTML = transactions.map(t => `
        <tr>
            <td>${t.description}</td>
            <td>${t.type}</td>
            <td class="${t.type === 'income' ? 'text-success' : 'text-danger'}">
                ${t.type === 'income' ? '+' : '-'}${formatCurrency(t.amount)}
            </td>
        </tr>
    `).join("");
}

// Step 5: Form submit listener (#quick-transaction-form in Part B)
document.getElementById("quick-transaction-form").addEventListener("submit", (e) => { // ← replace ID
    e.preventDefault();
    const description = document.getElementById("quick-desc").value;   // ← replace ID
    const amount      = Number(document.getElementById("quick-amount").value);  // ← replace ID
    const type        = document.getElementById("quick-type").value;   // ← replace ID

    transactions.push({ description, amount, type });                   // ← replace array and properties
    updateDashboard();
    renderTransactions();
    e.target.reset();
});

// Step 6: Clear button (#clear-btn)
document.getElementById("clear-btn").addEventListener("click", () => { // ← replace ID
    transactions.length = 0;  // clear in place (keeps same array reference)
    updateDashboard();
    renderTransactions();
});
```

---

## 7. Classes, Constructors & Methods

> **Source:** Lab 6 Module 1 — `module1/js/practice.js` + solved version in `module2/js/practice.js`

### Exercise 1: Transaction Class (core — appears in every lab from 6 onward)

```javascript
// SETUP REQUIRED:
// - Replace Transaction with your class name (exam may use Item, Recipe, Product, etc.)
// - Replace description / amount / type / category with your constructor parameter and property names
// - Replace format with your formatting method name (exam uses format())
// - Replace isExpense / isIncome with your check method names (exam uses isExpense() and isIncome())
// - Replace " QAR" with your currency string if different

class Transaction {                    // ← replace class name
    constructor(description, amount, type, category) {  // ← replace parameter names
        this.description = description; // ← replace property names to match parameters
        this.amount      = amount;
        this.type        = type;
        this.category    = category;
    }

    // Returns "+8,000 QAR" for income, "-3,500 QAR" for expense
    format() {                         // ← replace method name
        const sign = this.type === "income" ? "+" : "-";  // ← replace .type and "income"
        return sign + this.amount.toLocaleString() + " QAR"; // ← replace .amount and " QAR"
    }

    isExpense() { return this.type === "expense"; } // ← replace method name, .type, "expense"
    isIncome()  { return this.type === "income";  } // ← replace method name, .type, "income"
}

// Tests from lab:
const t1 = new Transaction("Salary", 8000, "income", "Salary");
const t2 = new Transaction("Rent", 3500, "expense", "Housing");
console.log(t1.format());    // +8,000 QAR
console.log(t2.format());    // -3,500 QAR
console.log(t1.isIncome());  // true
console.log(t2.isExpense()); // true
```

### Exercise 2: Account Class with Methods

```javascript
// SETUP REQUIRED:
// - Replace Account with your class name (exam keeps it as Account)
// - Replace name / type / balance with your constructor parameter/property names
// - Replace deposit / withdraw / getBalance with your method names
// - Replace " QAR" with your currency string
// - The createdAt property is auto-set by the constructor — do not pass it as an argument

class Account {                        // ← replace class name
    constructor(name, type, balance) { // ← replace parameter names
        this.name      = name;         // ← replace property names to match parameters
        this.type      = type;
        this.balance   = balance;
        this.createdAt = new Date().toLocaleDateString();  // auto-set — do not change
    }

    deposit(amount) {                  // ← replace method name
        this.balance += amount;        // ← replace .balance
        console.log(`Deposited ${amount.toLocaleString()} QAR`);
    }

    withdraw(amount) {                 // ← replace method name
        if (amount > this.balance) {   // ← replace .balance
            console.log("Insufficient funds");
            return false;              // return false for test assertions
        }
        this.balance -= amount;
        console.log(`Withdrew ${amount.toLocaleString()} QAR`);
        return true;
    }

    getBalance() {                     // ← replace method name
        return this.balance.toLocaleString() + " QAR"; // ← replace .balance and " QAR"
    }
}

// Tests from lab:
const acc = new Account("Main Checking", "checking", 10000);
console.log("Balance:", acc.getBalance());       // 10,000 QAR
acc.deposit(5000);                               // Deposited 5,000 QAR
console.log("After deposit:", acc.getBalance()); // 15,000 QAR
acc.withdraw(3000);                              // Withdrew 3,000 QAR
console.log("After withdraw:", acc.getBalance()); // 12,000 QAR
acc.withdraw(50000);                             // Insufficient funds
```

### Exercise 3: BudgetCategory with toString()

```javascript
// SETUP REQUIRED:
// - Replace BudgetCategory with your class name if different
// - Replace name / budgeted / spent with your property names
// - Replace addSpending / getRemaining / isOverBudget with your method names
// - toString() is called automatically in template literals: `${food}` calls food.toString()
// - Replace " QAR" with your currency string

class BudgetCategory {                 // ← replace class name if needed
    constructor(name, budgeted, spent = 0) { // ← replace params (spent defaults to 0)
        this.name     = name;
        this.budgeted = budgeted < 0 ? 0 : budgeted;  // guard negative
        this.spent    = spent;
    }

    addSpending(amount)  { this.spent += amount; }              // ← replace method name
    getRemaining()       { return this.budgeted - this.spent; } // ← replace method name
    isOverBudget()       { return this.spent > this.budgeted; } // ← replace method name

    // toString() is called automatically in template literals: `${food}` → food.toString()
    toString() {
        return `${this.name}: ${this.spent.toLocaleString()} / ${this.budgeted.toLocaleString()} QAR`;
    }
}

// Tests from lab:
const food = new BudgetCategory("Food", 2000);
food.addSpending(800);
food.addSpending(400);
console.log(`${food}`);                           // Food: 1,200 / 2,000 QAR
console.log("Over budget?", food.isOverBudget()); // false
food.addSpending(1000);
console.log(`${food}`);                           // Food: 2,200 / 2,000 QAR
console.log("Over budget?", food.isOverBudget()); // true
```

### AccountManager Class (Lab 6 Part B — the full OOP manager)

```javascript
// SETUP REQUIRED:
// - Replace AccountManager with your manager class name (exam uses AccountManager)
// - Replace storageKey with your localStorage key property name
// - Replace "lab6-transactions" with your actual localStorage key string
// - Replace transactions (this.transactions) with your internal array property name
// - Replace Transaction with your data class name (must match what you defined in Exercise 1)
// - Replace add / remove / getAll / clear / save / getTotals / getCategorySummary / getSavingsRate
//   with your method names (Lab 6 Part B uses these exact names)
// - Replace .type / .amount / .category with your property names

class AccountManager {                          // ← replace class name
    constructor() {
        this.storageKey   = "lab6-transactions"; // ← replace property name and key string
        const saved       = localStorage.getItem(this.storageKey);
        this.transactions = saved ? JSON.parse(saved) : [];  // ← replace "transactions" property
    }

    add(description, amount, type, category) {  // ← replace method name and param names
        const t = new Transaction(description, amount, type, category); // ← replace class name
        this.transactions.push(t);
        this.save();
        return t;
    }

    remove(index) {                             // ← replace method name
        this.transactions.splice(index, 1);
        this.save();
    }

    getAll()  { return this.transactions; }     // ← replace method name
    clear()   { this.transactions = []; this.save(); }  // ← replace method name
    save()    { localStorage.setItem(this.storageKey, JSON.stringify(this.transactions)); } // ← replace method name

    getTotals() {                               // ← replace method name
        const income   = this.transactions.filter(t => t.type === "income")
                             .reduce((sum, t) => sum + Number(t.amount), 0);
        const expenses = this.transactions.filter(t => t.type === "expense")
                             .reduce((sum, t) => sum + Number(t.amount), 0);
        return { 
            income, 
            expenses, 
            balance: income - expenses, 
            count: this.transactions.length 
        };
    }

    getCategorySummary() {                      // ← replace method name
        return this.transactions.reduce((acc, t) => {
            if (t.type === "expense") {
                acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
            }
            return acc;
        }, {});
    }

    getSavingsRate() {                          // ← replace method name
        const { income, expenses } = this.getTotals();
        if (income === 0) return "0.0";
        return (((income - expenses) / income) * 100).toFixed(1);
    }
}

// Create an instance
const manager = new AccountManager();           // ← replace class name
```

---

## 8. Inheritance: extends, super, instanceof

> **Source:** Lab 6 Module 2 — `module2/js/practice.js`

### Exercise 1: SavingsAccount extends Account

```javascript
// SETUP REQUIRED:
// - Replace SavingsAccount with your child class name
// - Replace Account with your parent class name (must match the class you defined in Exercise 2)
// - Replace name / balance / profitRate with your constructor parameter/property names
// - super() MUST be the very first line in the constructor
// - Replace "savings" if your type string is different ("savings" is hardcoded because all savings accounts have this type)
// - Replace applyProfit with your method name (exam uses applyProfit)
// - Replace .balance and .profitRate with your property names
// - The return value of applyProfit() is used in Mocha tests — keep the return

class SavingsAccount extends Account {         // ← replace both class names
    constructor(name, balance, profitRate) {   // ← replace parameter names
        super(name, "savings", balance);       // ← "savings" is hardcoded type; replace name/balance
        this.profitRate = profitRate;          // ← replace property name
    }

    applyProfit() {                            // ← replace method name
        const profit = this.balance * this.profitRate;  // ← replace .balance and .profitRate
        this.balance += profit;
        console.log(`Profit earned: ${profit.toLocaleString()} QAR`);
        return profit;  // return value used in Mocha tests!
    }
}

// Tests:
const savings = new SavingsAccount("Emergency Fund", 20000, 0.04);
console.log("Type:", savings.type);                // savings (set by super)
console.log("Balance:", savings.getBalance());     // 20,000 QAR (inherited method)
savings.applyProfit();                             // Profit earned: 800 QAR
console.log("After profit:", savings.getBalance()); // 20,800 QAR
```

### Exercise 2: RecurringTransaction extends Transaction

```javascript
// SETUP REQUIRED:
// - Replace RecurringTransaction with your child class name
// - Replace Transaction with your parent class name (must match Exercise 1 class)
// - Replace description / amount / type / category / frequency with your parameter/property names
// - super() MUST be first, passing all the parent's parameters
// - Replace frequency with your extra property name ("monthly", "weekly", etc.)
// - Replace format with your method name — it overrides the parent's format() by using super.format()

class RecurringTransaction extends Transaction { // ← replace both class names
    constructor(description, amount, type, category, frequency) { // ← replace params
        super(description, amount, type, category);               // MUST be first line
        this.frequency = frequency;  // ← replace property name ("monthly", "weekly", etc.)
    }

    // Override format() using super.format()
    format() {                                       // ← replace method name
        return super.format() + ` (${this.frequency})`; // ← replace super.format() and .frequency
    }
}

// Tests:
const salary  = new RecurringTransaction("Salary",  8000, "income",  "Salary",        "monthly");
const netflix = new RecurringTransaction("Netflix",  45,   "expense", "Entertainment", "monthly");
console.log(salary.format());              // +8,000 QAR (monthly)
console.log(netflix.format());             // -45 QAR (monthly)
console.log("Is expense?", netflix.isExpense()); // true (inherited)
```

### Exercise 3: instanceof Type Checking

```javascript
// TODO: Create instances and test with instanceof
const salary  = new RecurringTransaction("Salary", 8000, "income", "Salary", "monthly");
const savings = new SavingsAccount("Emergency Fund", 20000, 0.04);
const regular = new Transaction("Lunch", 45, "expense", "Food");

// instanceof goes UP the chain
console.log(salary instanceof Transaction);            // true
console.log(salary instanceof RecurringTransaction);   // true
console.log(savings instanceof Account);               // true
console.log(savings instanceof SavingsAccount);        // true
// A plain Transaction is NOT a RecurringTransaction
console.log(regular instanceof RecurringTransaction);  // false
```

### Inheritance Rules (summary from Lab 6)

| Rule | Detail |
|---|---|
| `super()` MUST be first | Before any `this.` in child constructor — JS throws if you forget |
| All parent methods inherited | No need to redefine unless overriding |
| Override by redefining | Write method again in child; call parent with `super.method()` |
| `instanceof` checks the chain | Child instance is `instanceof` BOTH child and parent |

---

## 9. Unit Testing: Mocha & Chai

> **Source:** Lab 6 Module 3 — `test/transaction.spec.js` (starter) + `Tutorial/B01/module3/test/transaction.spec.js` (solved)

### Setup (run once in module3 folder)

```bash
cd "Startup Code/Part A/module3"
npm init -y
npm install --save-dev mocha chai
```

Edit `package.json` — add these two lines:

```json
{
  "type": "module",
  "scripts": {
    "test": "mocha"
  }
}
```

Run tests: `npm test`

### Import / Export for Tests

```javascript
// SETUP REQUIRED:
// - Replace Transaction / Account / SavingsAccount with your actual class names
// - Replace "../js/practice.js" with the relative path to your class file
// - The .js extension in imports is MANDATORY in ESM — do not omit it

// In your practice.js file — export your classes at the bottom
export { Transaction, Account, SavingsAccount };  // ← replace class names

// In your .spec.js test file — import them at the top
import { expect } from "chai";
import { Transaction, Account, SavingsAccount } from "../js/practice.js"; // ← replace path and class names
// ALWAYS include .js extension in ESM imports
```

### Exercise 1: Testing Transaction (solved — Tutorial B01)

```javascript
// SETUP REQUIRED:
// - Replace "Transaction" (describe string) with your test suite name (usually the class name)
// - Replace Transaction (new Transaction(...)) with your class name
// - Replace description / amount / type / category with your property names
// - Replace format / isIncome / isExpense with your method names
// - Replace the expected values ("+8,000 QAR", "-3,500 QAR") with what your format() actually returns

describe("Transaction", () => {     // ← replace suite name string

    // Test that constructor sets properties
    it("should set all properties from constructor", () => {  // ← replace description string
        const t = new Transaction("Salary", 8000, "income", "Salary"); // ← replace class and args
        expect(t.description).to.equal("Salary");  // ← replace property names and expected values
        expect(t.amount).to.equal(8000);
        expect(t.type).to.equal("income");
        expect(t.category).to.equal("Salary");
    });

    // Test format() for income
    it("should format income with + sign", () => {   // ← replace description string
        const t = new Transaction("Salary", 8000, "income", "Salary");
        expect(t.format()).to.equal("+8,000 QAR");   // ← replace method name and expected string
    });

    // Test format() for expense
    it("should format expense with - sign", () => {  // ← replace description string
        const t = new Transaction("Rent", 3500, "expense", "Housing");
        expect(t.format()).to.equal("-3,500 QAR");   // ← replace method name and expected string
    });

    // Test checks
    it("should correctly identify transaction type", () => { // ← replace description string
        const income  = new Transaction("Salary", 8000, "income",  "Salary");  // ← replace class
        const expense = new Transaction("Rent",   3500, "expense", "Housing"); // ← replace class
        expect(income.isIncome()).to.equal(true);    // ← replace method name
        expect(income.isExpense()).to.equal(false);  // ← replace method name
        expect(expense.isExpense()).to.equal(true);  // ← replace method name
    });
});
```

### Exercise 2: Testing Account (solved)

```javascript
// SETUP REQUIRED:
// - Replace "Account" with your test suite name string
// - Replace Account (new Account(...)) with your class name
// - Replace deposit / withdraw / getBalance with your method names
// - Replace balance with your balance property name
// - Replace expected values (1500, 700, false, 1000, "15,000 QAR") if your implementation differs

describe("Account", () => {         // ← replace suite name string

    // Test deposit
    it("should increase balance after deposit", () => { // ← replace description
        const acc = new Account("Test", "checking", 1000); // ← replace class and args
        acc.deposit(500);                                   // ← replace method name
        expect(acc.balance).to.equal(1500);                // ← replace property and expected value
    });

    // Test successful withdraw
    it("should decrease balance after withdraw", () => { // ← replace description
        const acc = new Account("Test", "checking", 1000);
        acc.withdraw(300);                                  // ← replace method name
        expect(acc.balance).to.equal(700);                 // ← replace expected value
    });

    // Test insufficient funds
    it("should return false when withdrawing more than balance", () => { // ← replace description
        const acc = new Account("Test", "checking", 1000);
        const result = acc.withdraw(5000);                 // ← replace method name
        expect(result).to.equal(false);
        expect(acc.balance).to.equal(1000);                // unchanged ← replace property
    });

    // Test getBalance formatting
    it("should return formatted balance string", () => {  // ← replace description
        const acc = new Account("Test", "checking", 15000);
        expect(acc.getBalance()).to.equal("15,000 QAR");   // ← replace method name and expected string
    });
});
```

### Exercise 3: Testing SavingsAccount (solved)

```javascript
// SETUP REQUIRED:
// - Replace "SavingsAccount" with your test suite name string
// - Replace SavingsAccount (new SavingsAccount(...)) with your child class name
// - Replace deposit / applyProfit with your method names
// - Replace balance / type with your property names
// - Replace expected values ("savings", 15000, 500, 10500)
//   Note: applyProfit() returns the PROFIT AMOUNT (not the new balance)

describe("SavingsAccount", () => {  // ← replace suite name string

    // Test that type is "savings"
    it("should have type set to savings", () => {  // ← replace description
        const acc = new SavingsAccount("Fund", 10000, 0.05); // ← replace class and args
        expect(acc.type).to.equal("savings");                // ← replace property name
    });

    // Test inherited deposit
    it("should inherit deposit from Account", () => {  // ← replace description
        const acc = new SavingsAccount("Fund", 10000, 0.05);
        acc.deposit(5000);                                    // ← replace method name (inherited)
        expect(acc.balance).to.equal(15000);                 // ← replace property and expected
    });

    // Test applyProfit
    it("should calculate and add profit correctly", () => {  // ← replace description
        const acc = new SavingsAccount("Fund", 10000, 0.05);
        const profit = acc.applyProfit();                     // ← replace method name; returns profit
        expect(profit).to.equal(500);                        // 10000 * 0.05 = 500
        expect(acc.balance).to.equal(10500);                 // ← replace property
    });
});
```

### Expected Output (all passing)

```
  Transaction
    ✓ should set all properties from constructor
    ✓ should format income with + sign
    ✓ should format expense with - sign
    ✓ should correctly identify transaction type

  Account
    ✓ should increase balance after deposit
    ✓ should decrease balance after withdraw
    ✓ should return false when withdrawing more than balance
    ✓ should return formatted balance string

  SavingsAccount
    ✓ should have type set to savings
    ✓ should inherit deposit from Account
    ✓ should calculate and add profit correctly

  11 passing
```

### Chai Assertion Cheat Sheet

```javascript
// Primitives — use .to.equal()
expect(value).to.equal(42);
expect(str).to.equal("hello");
expect(bool).to.equal(true);
expect(bool).to.equal(false);

// Objects/Arrays — use .to.deep.equal() (checks structure, not reference)
expect(obj).to.deep.equal({ name: "Ali", age: 22 });
expect(arr).to.deep.equal([1, 2, 3]);

// Numbers
expect(num).to.be.above(10);    // > 10
expect(num).to.be.below(100);   // < 100

// Strings
expect(str).to.include("hello");

// Arrays
expect(arr).to.have.length(3);
```

---

## 10. DOM + Events + LocalStorage

> **Source:** Lab 6 Module 4 — `module4/js/practice.js` + `Tutorial/B01/module4/js/practice.js`

### Exercise 1: Render Class Instances to DOM Table (solved — Tutorial B01)

```javascript
// SETUP REQUIRED:
// - Replace sampleTransactions with your array name
// - Replace Transaction with your class name (must be already defined/imported)
// - Replace the constructor arguments to match your class's actual parameters
// - Replace transactionToRow with your row helper function name
// - Replace .description / .category with your property names (or .isIncome() / .format() if using class methods)
// - Replace "#transaction-table" with your actual <tbody> element selector

const sampleTransactions = [            // ← replace array name
    new Transaction("Salary",      12000, "income",  "Salary"),      // ← replace class and args
    new Transaction("Freelance",    3000, "income",  "Salary"),
    new Transaction("Rent",         4500, "expense", "Housing"),
    new Transaction("Groceries",     850, "expense", "Food"),
    new Transaction("Electricity",   320, "expense", "Utilities"),
];

// Helper: one item → one table row
function transactionToRow(item) {       // ← replace function name
    return `
        <tr>
            <td>${item.description}</td>   <!-- ← replace .description -->
            <td>${item.category}</td>      <!-- ← replace .category -->
            <td class="${item.isIncome() ? "text-success" : "text-danger"}">${item.format()}</td>
        </tr>
    `;
}

// Render sampleTransactions into table
const tableElement = document.querySelector("#transaction-table"); // ← replace "#transaction-table"
tableElement.innerHTML = sampleTransactions.map(item => transactionToRow(item)).join("");
```

### Exercise 2: Form Events + Dynamic Rendering

```javascript
// SETUP REQUIRED:
// - Replace liveTransactions with your array name (must be let so push works)
// - Replace updateDashboard with your dashboard function name
// - Replace renderLiveTransactions with your render function name
// - Replace transactionToRow with your row helper function name (from Exercise 1)
// - Replace Transaction with your class name
// - All HTML element IDs must match your HTML file:
//   "income-display" → your income display element ID
//   "expense-display" → your expense element ID
//   "balance-display" → your balance element ID
//   "transaction-list" → your container element ID
//   "transaction-form" → your form element ID
//   "desc-input" / "amount-input" / "type-select" → your input IDs
// - Replace .isIncome() / .isExpense() / .amount with your class methods/properties

let liveTransactions = [];              // ← replace variable name

function updateDashboard() {            // ← replace function name
    const income   = liveTransactions.filter(t => t.isIncome()).reduce((s, t) => s + t.amount, 0);
    const expenses = liveTransactions.filter(t => t.isExpense()).reduce((s, t) => s + t.amount, 0);
    const balance  = income - expenses;

    document.getElementById("income-display").textContent  = income.toLocaleString()   + " QAR"; // ← replace IDs
    document.getElementById("expense-display").textContent = expenses.toLocaleString() + " QAR";

    const balanceEl = document.getElementById("balance-display");  // ← replace ID
    balanceEl.textContent = balance.toLocaleString() + " QAR";
    balanceEl.className   = balance >= 0 ? "text-success" : "text-danger";
}

function renderLiveTransactions() {     // ← replace function name
    document.getElementById("transaction-list").innerHTML =  // ← replace ID
        liveTransactions.map(t => transactionToRow(t)).join("");
}

document.getElementById("transaction-form").addEventListener("submit", (e) => { // ← replace ID
    e.preventDefault();
    const desc   = document.getElementById("desc-input").value;            // ← replace ID
    const amount = Number(document.getElementById("amount-input").value);  // ← replace ID
    const type   = document.getElementById("type-select").value;           // ← replace ID

    liveTransactions.push(new Transaction(desc, amount, type, "General")); // ← replace class name and args
    updateDashboard();
    renderLiveTransactions();
    e.target.reset();
});
```

### Exercise 3: localStorage Persistence

```javascript
// SETUP REQUIRED:
// - Replace "module4-transactions" with your localStorage key string
// - Replace transactions with your array variable name (must be let)
// - Replace updateDashboard / renderLiveTransactions with your function names
// - Replace "clear-btn" / "count-btn" with your button IDs
//   (Lab 6 Module 4: #clear-btn, #count-btn)
// - Replace "storage-output" with your count display element ID
//   (Lab 6 Module 4: #storage-output)

const STORAGE_KEY = "module4-transactions"; // ← replace key string

// Load from localStorage on startup
const saved = localStorage.getItem(STORAGE_KEY);  // ← replace key variable
let transactions = saved ? JSON.parse(saved) : []; // ← replace array name
updateDashboard();                                 // ← replace function name
renderLiveTransactions();                          // ← replace function name

// Save to localStorage after each add (call this inside your submit handler)
localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions)); // ← replace key and array

// Clear button listener
document.getElementById("clear-btn").addEventListener("click", () => {    // ← replace ID
    localStorage.removeItem(STORAGE_KEY);
    transactions = [];
    updateDashboard();
    renderLiveTransactions();
});

// Count button listener
document.getElementById("count-btn").addEventListener("click", () => {    // ← replace ID
    document.getElementById("storage-output").textContent =              // ← replace ID
        `${transactions.length} items saved`;
});
```

### localStorage API — Complete Reference

```javascript
// Save (MUST stringify — localStorage only stores strings)
localStorage.setItem("myKey", JSON.stringify(dataArray));

// Load (MUST parse — with fallback to empty array)
const raw  = localStorage.getItem("myKey");
const data = raw ? JSON.parse(raw) : [];

// Alternative one-liner fallback
const data = JSON.parse(localStorage.getItem("myKey") || "[]");

// Remove one key
localStorage.removeItem("myKey");

// Remove ALL keys
localStorage.clear();
```

**Critical rules:**
- `localStorage` only stores **strings** — always `JSON.stringify` when saving
- Class instances lose their methods when stored/loaded — they come back as plain objects
- Data survives page refreshes and browser restarts

---

## 11. JSON & Data Transformation

> **Source:** Lab 7 Module 1 — `module1/js/practice.js` + Tutorial B01 (solved)

### Exercise 1: JSON.stringify and JSON.parse

```javascript
const transaction = { description: "Salary", amount: 12000, type: "income", category: "Salary" };

// Object → JSON string (to SEND to server / SAVE to localStorage)
const jsonString = JSON.stringify(transaction);
// '{"description":"Salary","amount":12000,"type":"income","category":"Salary"}'
console.log(typeof jsonString);  // "string"

// JSON string → Object (after RECEIVING from server / LOADING from localStorage)
const parsed = JSON.parse(jsonString);
console.log(parsed.description);  // "Salary"
console.log(typeof parsed);       // "object"

// Pretty-print with indentation (for debugging)
console.log(JSON.stringify(transaction, null, 2));
```

### Exercise 2a: Extract just descriptions

```javascript
// TODO: a) Extract just the descriptions into a new array and log it
const descriptions = transactions.map(t => t.description);
// ["Salary", "Freelance", "Rent", "Groceries", ...]
console.log(descriptions);
```

### Exercise 2b: Total all expenses

```javascript
// TODO: b) Calculate the total amount of all expenses and log it
const total = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);
console.log(`Total expense is ${total}`);
```

### Exercise 2c: Formatted strings

```javascript
// TODO: c) "Salary: +8,000 QAR" format — Tutorial B01 solution
const formatted = transactions.map(t => {
    const sign = t.type === "income" ? "+" : "-";
    return `${t.description}: ${sign}${t.amount.toLocaleString()} QAR`;
});
console.log(formatted);
```

### Exercise 2d: Find largest expense

```javascript
// TODO: d) Find which single expense has the highest amount
const largestExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((max, t) => t.amount > max.amount ? t : max);
console.log(largestExpense.description, largestExpense.amount);
```

### Exercise 3: Group by category

```javascript
// TODO: Group by category using reduce
const byCategory = transactions.reduce((groups, t) => {
    groups[t.category] = (groups[t.category] || 0) + t.amount;
    return groups;
}, {});

// TODO: Log each category with Object.entries().forEach()
Object.entries(byCategory).forEach(([category, total]) => {
    console.log(`${category}: ${total.toLocaleString()} QAR`);
});
```

### Destructuring (from Tutorial B01 instructor notes)

```javascript
// Array destructuring
const [a, b, ...rest] = [1, 2, 3, 4, 6, 7];
// a=1, b=2, rest=[3,4,6,7]

// Object destructuring
const { gender } = person;  // pull out only what you need

// Used in Object.entries loop
Object.entries(byCategory).forEach(([category, total]) => { ... });

// Used in Promise.all
const [users, products, settings] = await Promise.all([...]);
```

---

## 12. Async / Await & Promises

> **Source:** Lab 7 Module 2 — `module2/js/practice.js` + Tutorial B01

### Why Async? (from Lab 7 explanation)

JavaScript is single-threaded — it can only do one thing at a time. If fetching data from a server took 3 seconds and JS just waited, your entire page would freeze. `async/await` lets JS say "start this, and when it's done run this code." The rest of the page keeps working while waiting.

### Provided Helper Functions (given in lab — do not rewrite)

```javascript
function loadTransactions(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve([
                    { description: "Salary", amount: 8000, type: "income" },
                    { description: "Rent",   amount: 4000, type: "expense" },
                    { description: "Food",   amount: 650,  type: "expense" },
                ]);
            } else {
                reject(new Error("Failed to load data"));
            }
        }, 1000);
    });
}

function simulateApiCall(name, ms) {
    return new Promise(resolve => setTimeout(() => resolve(name), ms));
}
```

### Exercise 1: Basic async/await

```javascript
// SETUP REQUIRED:
// - Replace displayTransactions with your async function name (Lab 7 uses displayTransactions)
// - Replace data with your result variable name
// - Replace loadTransactions with the provided helper function name (given in lab, do not rewrite)
// - Replace .description / .amount with your object property names
// - Replace " QAR" with your currency string

async function displayTransactions() {   // ← replace function name (Lab 7 uses displayTransactions)
    console.log("Loading...");
    const data = await loadTransactions(true);  // ← replace "data" and the helper function name
    data.forEach(t => {
        console.log(`  ${t.description}: ${t.amount.toLocaleString()} QAR`); // ← replace properties
    });
    console.log(`Done! Loaded ${data.length} items`);
}

// Call the function
displayTransactions();  // ← replace function name
console.log("This prints IMMEDIATELY — not blocked");
```

### Exercise 2: Error Handling with try/catch

```javascript
// TODO: Write async function loadWithErrorHandling()
async function loadWithErrorHandling() {
    try {
        const data = await loadTransactions(false);  // WILL reject/fail
        console.log(data);  // never reached
    } catch (error) {
        console.log("Error caught:", error.message);  // "Error caught: Failed to load data"
    }
}

// TODO: Call loadWithErrorHandling()
loadWithErrorHandling();
```

### Exercise 3: Sequential vs Parallel (Promise.all)

```javascript
// TODO: Write async function runSequential()
async function runSequential() {
    console.time("Sequential");
    const accounts     = await simulateApiCall("accounts",     1000);  // wait 1s
    const transactions = await simulateApiCall("transactions", 1000);  // then 1s
    const goals        = await simulateApiCall("goals",        1000);  // then 1s
    console.log(accounts, transactions, goals);
    console.timeEnd("Sequential");  // ~3000ms total
}

// TODO: Write async function runParallel()
async function runParallel() {
    console.time("Parallel");
    const [accounts, transactions, goals] = await Promise.all([
        simulateApiCall("accounts",     1000),  // all 3 start at once
        simulateApiCall("transactions", 1000),
        simulateApiCall("goals",        1000),
    ]);
    console.log(accounts, transactions, goals);
    console.timeEnd("Parallel");  // ~1000ms total
}

// TODO: Call both — wrap in async so sequential finishes before parallel starts
(async () => {
    await runSequential();
    await runParallel();
})();
```

### Promise States (from Lab 7 notes)

| State | Meaning |
|---|---|
| Pending | Still working on it |
| Fulfilled | Done, here's the result |
| Rejected | Failed, here's the error |

---

## 13. Fetch API — GET & Display

> **Source:** Lab 7 Module 3 — `module3/js/practice.js` + Tutorial B01 (solved)

**IMPORTANT:** `fetch()` only works over HTTP, not `file://`. Always use **Live Server** (right-click `index.html` → Open with Live Server).

**API URL:** `https://myfinance-api-bay.vercel.app/transactions`

### Two-Step Fetch Pattern (memorize this)

```javascript
// fetch() → Promise for the response object
// response.json() → Promise for the parsed body
// You ALWAYS need two awaits:
const response = await fetch(API_URL);
const formattedText     = await response.json();
// data is now a JS array/object ready to use
```

### Exercise 1: Fetch and Display — solved (Tutorial B01)

```javascript
// SETUP REQUIRED:
// - Replace API_URL with your API constant name and set it to your actual API endpoint
// - Replace loadBtn / statusText / tableBody with your element variable names
// - Replace "load-btn" / "status-text" / "transaction-body" with your HTML element IDs
// - Replace loadTransactions with your fetch function name
// - Replace transactions with your global array name
// - Replace transToHTMLRow with your row helper function name
// - Replace .description / .category / .type / .amount / .id with your API property names
// - Replace startEdit / deleteTransaction with your onclick function names

const API_URL = "https://myfinance-api-bay.vercel.app/transactions"; // ← replace URL

const loadBtn    = document.getElementById("load-btn");           // ← replace var and ID
const statusText = document.getElementById("status-text");        // ← replace var and ID
const tableBody  = document.getElementById("transaction-body");   // ← replace var and ID

loadBtn.addEventListener("click", loadTransactions);              // ← replace function name

async function loadTransactions() {                               // ← replace function name
    statusText.textContent = "Loading...";

    try {
        const response = await fetch(API_URL);                    // ← replace API_URL
        if (!response.ok) throw new Error(`HTTP ${response.status}`);  // always check .ok!
        transactions = await response.json();                     // ← replace global array name

        tableBody.innerHTML = transactions
            .map(t => transToHTMLRow(t))                          // ← replace row help function name
            .join("");

        statusText.textContent = `Loaded ${transactions.length} items`; // ← replace array name
    } catch (err) {
        statusText.textContent = `Error: ${err.message}`;
    }
}

function transToHTMLRow(t) {                                      // ← replace function name
    const amountClass = t.type === "expense" ? "text-danger" : "text-success"; // ← replace .type
    return `
        <tr>
            <td>${t.description}</td>     <!-- ← replace property names -->
            <td>${t.category}</td>
            <td>${t.type}</td>
            <td class="${amountClass}">${t.amount.toLocaleString()} QAR</td>
            <td>
                <button onclick="startEdit(${t.id})" class="btn btn-sm btn-primary">Edit</button>
                <button onclick="deleteTransaction(${t.id})" class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    `;
}
```

### Exercise 2: Fetch, Transform, and Summarize — solved (Tutorial B01)

```javascript
const summaryBtn   = document.getElementById("summary-btn");
const summaryCards = document.getElementById("summary-container");

summaryBtn.addEventListener("click", displaySummaryCards);

async function displaySummaryCards() {
    try {
        const response     = await fetch(API_URL);
        transactions = await response.json();

        const income = transactions
            .filter(t => t.type === "income")
            .reduce((total, t) => total + t.amount, 0);

        const expenses = transactions
            .filter(t => t.type === "expense")
            .reduce((total, t) => total + t.amount, 0);

        const balance = income - expenses;

        summaryCards.innerHTML = `
            <div class="card card--success">
                <h3>Total Income</h3>
                <p class="amount">${income.toLocaleString()} QAR</p>
            </div>
            <div class="card card--danger">
                <h3>Total Expenses</h3>
                <p class="amount">${expenses.toLocaleString()} QAR</p>
            </div>
            <div class="card ${balance >= 0 ? 'card--success' : 'card--danger'}">
                <h3>Balance</h3>
                <p class="amount">${balance.toLocaleString()} QAR</p>
            </div>
        `;
    } catch (err) {
        console.error("Summary load error:", err);
    }
}
```

### Why check response.ok?

```javascript
// A 404 does NOT throw an exception — the fetch "succeeded" (server responded)
// but the resource doesn't exist. You MUST check manually:
if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
```

---

## 14. CRUD Operations — POST, PUT, DELETE

> **Source:** Lab 7 Module 4 — `module4/js/practice.js` + Tutorial B01 (solved)

### HTTP Methods Reference (from Lab 7)

| Method | Purpose | URL | Body? |
|---|---|---|---|
| GET | Read all | `/transactions` | No |
| GET | Read one | `/transactions/3` | No |
| POST | Create new | `/transactions` | Yes — JSON |
| PUT | Update existing | `/transactions/3` | Yes — JSON |
| DELETE | Remove | `/transactions/3` | No |

### Exercise 1: POST — Create (Tutorial B01 solved)

```javascript
const addForm   = document.getElementById("transaction-form");
const addStatus = document.getElementById("status-text");

addForm.addEventListener("submit", addTransaction);

async function addTransaction(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.amount = parseFloat(data.amount);

    try {
        const response = await fetch(API_URL, {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(data)
        });
        const created = await response.json();  // server returns new item with assigned id

        addStatus.textContent = `Created: ${created.description} (ID: ${created.id})`;
        loadTransactions(); // Reload data to show new item
        e.target.reset();
    } catch (err) {
        console.error("Add error:", err);
    }
}
```

### Exercise 2: PUT — Update (Tutorial B01 solved)

```javascript
// SETUP REQUIRED:
// - Replace "edit-form" with your edit form's HTML ID
// - Replace "edit-id" / "edit-desc" / "edit-amount" / "edit-type" / "edit-category" with your input IDs
// - Replace "edit-hint" / "cancel-edit-btn" / "edit-status" with your display element IDs
// - Replace API_URL with your API constant name
// - Replace item with your item variable name
// - Replace .amount with your numeric property name
// - Replace cancelEdit with your cancel function name
// - Replace loadTransactions with your fetch/reload function name

// startEdit(id) — fetch item by ID and populate edit form
async function startEdit(id) {                                    // ← replace function name if needed
    try {
        const response = await fetch(`${API_URL}/${id}`);         // ← replace API_URL
        const t        = await response.json();

        // Populate edit form fields
        document.querySelector("#edit-id").value       = t.id;          // ← replace IDs — must match HTML form
        document.querySelector("#edit-desc").value     = t.description;
        document.querySelector("#edit-amount").value   = t.amount;
        document.querySelector("#edit-type").value     = t.type;
        document.querySelector("#edit-category").value = t.category;

        document.getElementById("edit-hint").style.display       = "none";   // ← replace IDs
        document.getElementById("cancel-edit-btn").style.display = "block";
        document.getElementById("edit-status").textContent =
            `Editing transaction ${id}: ${t.description}`;
    } catch (err) { console.log(err); }
}

// Edit form submit — PUT request
document.getElementById("edit-form").addEventListener("submit", async (e) => { // ← replace ID
    e.preventDefault();
    const id = document.getElementById("edit-id").value;         // ← replace ID
    if (!id) {
        document.getElementById("edit-status").textContent = "Click Edit on a row first"; // ← replace ID
        return;
    }

    const formData = new FormData(e.target);
    const item     = Object.fromEntries(formData.entries());      // ← replace "item" variable name
    item.amount    = parseFloat(item.amount);                     // ← replace .amount with your numeric field

    try {
        const response = await fetch(`${API_URL}/${id}`, {        // ← replace API_URL
            method:  "PUT",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(item)
        });
        if (!response.ok) throw new Error(`Failed to update item ${id}`);

        document.getElementById("edit-status").textContent = `Updated item ${id}`; // ← replace ID
        cancelEdit();                                             // ← replace cancel function name
        loadTransactions();                                       // ← replace reload function name
    } catch (err) { console.error("Update failed:", err.message); }
});
```

### Exercise 3: DELETE — Remove (Tutorial B01 solved)

```javascript
// SETUP REQUIRED:
// - Replace deleteTransaction with your delete function name (Lab 7 uses deleteTransaction)
// - Replace API_URL with your API constant name
// - Replace "status-text" with your status element ID
// - Replace loadTransactions with your reload function name
// - confirm() shows a browser dialog — if user clicks Cancel, function stops

async function deleteTransaction(id) {                            // ← replace function name
    if (!confirm("Are you sure?")) return;

    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });    // ← replace API_URL
        document.getElementById("status-text").textContent = `Deleted item ${id}`; // ← replace ID
        loadTransactions();                                       // ← replace reload function name
    } catch (err) { console.error("Delete failed:", err.message); }
}
```

---

## 15. Full CRUD App Architecture (Practice patterns)

> **Source:** Lab 7 Part B — `Part B/js/app.js` + Practice Session `js/app.js`

### Q2: loadTransactions — Fetch from API (GET)

```javascript
// SETUP REQUIRED:
// - Replace API_URL with your API constant name and set it to your actual API endpoint
// - Replace transactions with your global array variable name (must be let, declared outside function)
// - Replace loadTransactions with your load function name (Lab 7 Part B uses loadTransactions)
// - Replace refreshAll with your refresh function name (called after load)
// - Replace "status-text" with your status display element ID

const API_URL = "https://myfinance-api-bay.vercel.app/transactions"; // ← replace URL
let transactions = [];                                                // ← replace array name

async function loadTransactions() {           // ← replace function name
    try {
        const response = await fetch(API_URL); // ← replace API_URL
        const data     = await response.json(); // ← replace "data"

        // 1. Store in global array
        transactions = data;                  // ← replace both variable names

        // 2. Call refresh function (which calls summary + render)
        refreshAll();                         // ← replace refresh function name

        // 3. Update status (optional)
        document.getElementById("status-text").textContent = "Loaded!"; // ← replace ID
    } catch (err) {
        console.error("Load failed:", err);
    }
}
```

### Q3: updateSummary — Calculate totals (filter + reduce)

```javascript
// SETUP REQUIRED:
// - Replace updateSummary with your function name (Lab 7 Part B uses updateSummary)
// - Replace transactions with your global array name
// - Replace .type / .amount with your API property names
// - Replace "total-income" / "total-expenses" / "total-balance" with your element IDs
// - Replace " QAR" with your currency string

function updateSummary() {                      // ← replace function name
    const totalIncome = transactions            // ← replace array name
        .filter(t => t.type === "income")       // ← replace .type and "income"
        .reduce((total, t) => total + t.amount, 0); // ← replace .amount

    const totalExpenses = transactions
        .filter(t => t.type === "expense")
        .reduce((total, t) => total + t.amount, 0);

    const balance = totalIncome - totalExpenses;

    // Update displays
    document.getElementById("total-income").textContent   = totalIncome.toLocaleString()   + " QAR"; // ← replace IDs
    document.getElementById("total-expenses").textContent = totalExpenses.toLocaleString() + " QAR";
    document.getElementById("total-balance").textContent  = balance.toLocaleString()       + " QAR";

    // Color balance sign
    const balanceEl = document.getElementById("total-balance");    // ← replace ID
    balanceEl.classList.remove("text-success", "text-danger");
    balanceEl.classList.add(balance >= 0 ? "text-success" : "text-danger");
}
```

### Q4: renderTransactions — Render rows (map + join)

```javascript
// SETUP REQUIRED:
// - Replace renderTransactions with your function name (Lab 7 Part B uses renderTransactions)
// - Replace getFilteredTransactions with your filter function name (Q8 function you write)
// - Replace "transaction-body" with your <tbody> element ID
// - Replace .description / .category / .type / .amount / .id with your API property names
// - Replace startEdit / deleteTransaction with your onclick function names
// - Replace " QAR" with your currency string
// - Replace colspan="6" with actual column count of your table
// - NOTE: If no filter function (Q8 not required), replace getFilteredTransactions() with transactions directly

function renderTransactions() {               // ← replace function name
    // Call filter function first (Q8)
    const filtered = getFilteredTransactions(); // ← replace with your filter function name, or just use: transactions
    const tableBody = document.getElementById("transaction-body"); // ← replace ID

    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" class="empty-state">No items found</td></tr>`;
        return;
    }

    tableBody.innerHTML = filtered.map(t => `
        <tr>
            <td>${t.description}</td>     <!-- ← replace property names -->
            <td>${t.category}</td>
            <td>${t.type}</td>
            <td class="${t.type === 'income' ? 'text-success' : 'text-danger'}">
                ${t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()} QAR
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="startEdit(${t.id})">Edit</button>
                <button class="btn btn-sm btn-danger"  onclick="deleteTransaction(${t.id})">Delete</button>
            </td>
        </tr>
    `).join("");
}
```

### Q5: addTransaction — POST fetch

```javascript
// SETUP REQUIRED:
// - Replace addTransaction with your function name (Lab 7 Part B uses addTransaction)
// - Replace API_URL with your API constant name
// - Replace transactions with your global array name
// - Replace refreshAll with your refresh function name

async function addTransaction(data) {         // ← replace function name and keep "data" param
    try {
        const response = await fetch(API_URL, {  // ← replace API_URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const created = await response.json(); // server returns new item with assigned id

        // 1. Add to local array
        transactions.push(created);           // ← replace array name

        // 2. Refresh page summary/table
        refreshAll();                         // ← replace refresh function name
    } catch (error) { console.error("Add error:", error); }
}
```

### Q6: updateTransaction — PUT fetch

```javascript
// SETUP REQUIRED:
// - Replace updateTransaction with your function name (Lab 7 Part B uses updateTransaction)
// - Replace API_URL with your API constant name
// - Replace transactions with your global array name
// - Replace .id with your id property name
// - Replace refreshAll with your refresh function name

async function updateTransaction(id, data) {  // ← replace function name
    try {
        const response = await fetch(`${API_URL}/${id}`, {  // ← replace API_URL
            method:  "PUT",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(data)
        });
        const updated = await response.json();

        // Replace in local array (findIndex then swap)
        const index = transactions.findIndex(t => t.id === id); // ← replace array and .id
        transactions[index] = updated;        // ← replace array name

        refreshAll();                         // ← replace refresh function name
    } catch (error) { console.error("Update error:", error); }
}
```

### Q7: deleteTransaction — DELETE fetch

```javascript
// SETUP REQUIRED:
// - Replace deleteTransaction with your function name (Lab 7 Part B uses deleteTransaction)
// - Replace API_URL with your API constant name
// - Replace transactions with your global array name
// - Replace .id with your id property name
// - Replace refreshAll with your refresh function name
// - confirm() shows a browser dialog — if user clicks Cancel, function stops

async function deleteTransaction(id) {        // ← replace function name
    if (!confirm("Are you sure?")) return;
    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });  // ← replace API_URL

        // Remove from local array
        transactions = transactions.filter(t => t.id !== id);  // ← replace array and .id

        refreshAll();                         // ← replace refresh function name
    } catch (error) { console.error("Delete error:", error); }
}
```

### refreshAll() — Provided helper

```javascript
// SETUP REQUIRED:
// - Replace refreshAll with your refresh function name
// - Replace updateSummary with your summary function name
// - Replace renderTransactions with your render function name
// Call this after every data change (add, update, delete, load)

function refreshAll() {                       // ← replace function name
    updateSummary();                          // ← replace function name
    renderTransactions();                     // ← replace function name
}
```

### Q8: getFilteredTransactions — Search & Dropdown filter

```javascript
// SETUP REQUIRED:
// - Replace getFilteredTransactions with your filter function name
// - Replace "search-input" with your search input element ID
// - Replace "filter-type" with your dropdown filter element ID
// - Replace transactions with your global array name
// - Replace .description with the property you want to search
// - Replace .type with your type property name
// - The value "all" means no type filter — must match your dropdown's "all" option value

function getFilteredTransactions() {          // ← replace function name
    const searchTerm = document.getElementById("search-input").value.toLowerCase(); // ← replace ID
    const filterType = document.getElementById("filter-type").value;  // "all", "income", "expense" ← replace ID

    return transactions.filter(t => {         // ← replace array name
        // Description search — case-insensitive partial match
        const matchesSearch = t.description.toLowerCase().includes(searchTerm); // ← replace .description

        // Type filter — "all" means no type restriction
        const matchesType = filterType === "all" || t.type === filterType; // ← replace .type

        // BOTH conditions must be true
        return matchesSearch && matchesType;
    });
}
```

### Q9: startEdit & cancelEdit — Edit Mode toggle

```javascript
// SETUP REQUIRED:
// - Replace editingId with your editing ID variable name (null = add mode, ID = edit mode)
// - Replace startEdit with your start edit function name (Lab 7 Part B uses startEdit)
// - Replace cancelEdit with your cancel edit function name
// - Replace transactions with your global array name
// - Replace .id with your id property name
// - Replace all HTML element IDs to match your HTML:
//   "desc-input" / "amount-input" / "type-select" / "category-select" → your form input IDs
//   "submit-btn" → your form submit button ID
//   "cancel-btn" → your cancel button ID
//   "transaction-form" → your form element ID
// - Replace addTransaction / updateTransaction with your CRUD function names

let editingId = null;  // null = add mode, ID = edit mode     // ← replace variable name

async function startEdit(id) {                // ← replace function name
    const item = transactions.find(i => i.id === id); // ← replace array and .id
    if (!item) return;

    editingId = id;                           // ← replace variable name

    // Populate form inputs
    document.getElementById("desc-input").value      = item.description; // ← replace IDs and properties
    document.getElementById("amount-input").value    = item.amount;
    document.getElementById("type-select").value     = item.type;
    document.getElementById("category-select").value = item.category;

    // Update UI text (optional)
    document.getElementById("submit-btn").textContent = "Update Item";  // ← replace ID
    const cancelBtn = document.getElementById("cancel-btn");            // ← replace ID
    if (cancelBtn) cancelBtn.classList.remove("hidden");
}

function cancelEdit() {                       // ← replace function name
    editingId = null;                         // ← replace variable name
    document.getElementById("transaction-form").reset(); // ← replace ID

    // Reset UI text
    document.getElementById("submit-btn").textContent = "Add Item";  // ← replace ID
    const cancelBtn = document.getElementById("cancel-btn");          // ← replace ID
    if (cancelBtn) cancelBtn.classList.add("hidden");
}

/* Handle Form Submit (Add or Update Branch) */
document.getElementById("transaction-form").addEventListener("submit", async (e) => { // ← replace ID
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.amount = Number(data.amount); // VERY IMPORTANT — converts string to number

    if (editingId) {                          // ← replace variable name
        await updateTransaction(editingId, data); // ← replace function names and variable
        cancelEdit();                         // ← replace function name
    } else {
        await addTransaction(data);           // ← replace function name
        e.target.reset();
    }
});
```

### Initialization

```javascript
// SETUP REQUIRED:
// - Replace loadTransactions with your load function name
// Call this once at the bottom of your script to initialize the app

loadTransactions();  // ← replace function name
```

---

## 16. SPA Navigation — loadPage() Pattern

> **Source:** Assignment 2 — `recipevault/js/app.js` TODO 5

### How SPA Navigation Works

Instead of linking to different HTML files (which reloads the page), a Single Page App fetches HTML *fragments* and injects them into a `<main>` container.

```javascript
// SETUP REQUIRED:
// - Replace loadPage with your function name (Assignment 2 uses loadPage)
// - Replace "pages" with your pages directory name (Assignment 2 uses "pages")
// - Replace "#main-content" with your main container element selector
// - Replace ".nav-link" with your nav link CSS class
// - Replace "home" / "recipes" / etc. with your actual page names (matching .html files in your pages folder)
// - Replace loadRecipes / setupAddForm with your page-specific initialization functions
// - Replace "form#add-recipe-form" with your form selector on the relevant page

async function loadPage(page) {               // ← replace function name
    // 1. Fetch the HTML fragment
    const response = await fetch(`pages/${page}.html`); // ← replace "pages"
    const content  = await response.text();

    // 2. Inject into main container
    document.querySelector("#main-content").innerHTML = content; // ← replace "#main-content"

    // 3. Update active nav link
    document.querySelectorAll(".nav-link").forEach(link => { // ← replace ".nav-link"
        link.classList.remove("active");
    });
    const selector = `.nav-link[onclick*="'${page}'"]`;      // ← replace ".nav-link"
    document.querySelector(selector)?.classList.add("active");

    // 4. Wire up page-specific handlers AFTER injection
    if (page === "home") {                    // ← replace "home" with your home page name
        loadRecipes();                        // ← replace with your home page init function
    }
    if (page === "add") {                     // ← replace "add" with your add page name
        const form = document.querySelector("form#add-recipe-form"); // ← replace selector
        if (form) form.addEventListener("submit", handleAddFormSubmit); // ← replace handler name
    }
}
```

### DOMContentLoaded — Initialize on Page Load (TODO 13)

```javascript
// TODO 13: Add a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    loadPage("home");  // show default page on first load
});
```

### HTML — Navigation links using onclick

```html
<nav>
    <a class="nav-link active" href="#" onclick="loadPage('home')">Home</a>
    <a class="nav-link"        href="#" onclick="loadPage('recipes')">Recipes</a>
</nav>

<main id="main-content">
    <!-- loadPage() injects content here -->
</main>
```

---

## 17. FormData Pattern

> **Source:** Assignment 2 — `recipevault/js/app.js` TODO 9

### Why FormData?

Instead of reading each input one by one, `FormData` collects ALL named inputs from a form at once.

```javascript
// TODO 4: "change to extract data function name"(formElement)
function "change to extract data function name"(form) {
    // 1. Create FormData object from form element
    const formData = new FormData(form);

    // 2. Convert to plain JS object
    const data = {
        "change to property name A": formData.get("change to input name A"),
        "change to property name B": Number(formData.get("change to input name B")),
        "change to property name C": formData.get("change to input name C"),
        "change to property name D": formData.get("change to input name D")
    };

    return data;
}

// TODO 5: "change to handle form submit function name"(e)
async function "change to handle form submit function name"(e) {
    e.preventDefault();
    const data = "change to extract data function name"(e.target);

    if ("change to editing ID variable") {
        await "change to update item function name"("change to editing ID variable", data);
        "change to cancel edit function name"();
    } else {
        await "change to add item function name"(data);
    }
}
```

// When inputs don't have name attributes, or for Lab 7 style
const "change to description variable" = document.getElementById("change to description input ID").value;
const "change to amount variable"      = Number(document.getElementById("change to amount input ID").value);
const "change to type variable"        = document.getElementById("change to type select ID").value;
const "change to category variable"    = document.getElementById("change to category select ID").value;

const "change to data variable" = { 
    "change to description property": "change to description variable", 
    "change to amount property": "change to amount variable", 
    "change to type property": "change to type variable", 
    "change to category property": "change to category variable" 
};

### FormData requires `name` attributes on inputs

```html
<!-- FormData picks up ONLY inputs with a name="" attribute -->
<input type="text"   name="change to description property" id="change to description input ID">
<input type="number" name="change to amount property"      id="change to amount input ID">
<select              name="change to type property"        id="change to type select ID">
    <option value="income">Income</option>
    <option value="expense">Expense</option>
</select>
```

---

## 18. Template Literal HTML Cards

> **Source:** Assignment 2 TODO 6 (`recipeToHTMLCard`) + Lab 7 Module 4 (`loadTransactions`)

### Item Card Template (Assignment 2 style)

```javascript
// TODO 6: itemToHTMLCard(item)
// TODO 6: "change to item to card function name"(item)
function "change to item to card function name"(item) {
    return `
        <div class="card">
            <div class="card-body">
                <h3>${item."change to description property"}</h3>
                <p>Category: ${item."change to category property"}</p>
                <div class="meta">
                    <span class="${item."change to type property" === 'income' ? 'text-success' : 'text-danger'}">
                        ${item."change to type property" === 'income' ? '+' : '-'}${item."change to amount property".toLocaleString()} "change to currency unit"
                    </span>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn btn-primary btn-sm" onclick="change to start edit function name(${item."change to id property"})">Edit</button>
                <button class="btn btn-danger btn-sm"  onclick="change to delete item function name(${item."change to id property"})">Delete</button>
            </div>
        </div>
    `;
}

// TODO 7: "change to render items function name"()
function "change to render items function name"() {
    const grid = document.getElementById("change to item grid ID");
    if (!grid) return;

    if ("change to array name".length === 0) {
        grid.innerHTML = "<p class='empty-state'>No items found</p>";
        return;
    }

    grid.innerHTML = "change to array name".map(item => "change to item to card function name"(item)).join("");
}
```

---

## 19. Search & Filter

> **Source:** Lab 7 Part B Task 7 / Practice Session Q8

### getFilteredTransactions() — description search + type dropdown

```javascript
// TODO: Write function "change to get filtered items function name"()
function "change to get filtered items function name"() {
    const searchTerm = document.getElementById("change to search input ID").value.toLowerCase();
    const filterType = document.getElementById("change to filter element ID").value;

    return "change to array name".filter(t => {
        // Description search — case-insensitive partial match
        const matchesSearch = t."change to description property".toLowerCase().includes(searchTerm);

        // Type filter — "all" means no type restriction
        const matchesType = filterType === "all" || t."change to type property" === filterType;

        // BOTH conditions must be true
        return matchesSearch && matchesType;
    });
}

// TODO: Add event listeners for search and filter
const searchInput = document.getElementById("change to search input ID");
if (searchInput) searchInput.addEventListener("input", "change to render items function name");

const filterSelect = document.getElementById("change to filter element ID");
if (filterSelect) filterSelect.addEventListener("change", "change to render items function name");
```

---

## 20. Edit Mode: startEdit / cancelEdit

> **Source:** Lab 7 Part B Task 8 / Practice Session Q9 / Assignment 2 TODOs 10–11

```javascript
let "change to editing ID variable" = null;  // null = add mode, any id value = edit mode

// TODO 10: "change to start edit function name"(id)
async function "change to start edit function name"(id) {
    const item = "change to array name".find(i => i."change to id property" === id);
    if (!item) return;

    "change to editing ID variable" = id;

    // Populate form fields
    document.getElementById("change to description input ID").value     = item."change to description property";
    document.getElementById("change to amount input ID").value   = item."change to amount property";
    document.getElementById("change to type select ID").value    = item."change to type property";
    document.getElementById("change to category select ID").value = item."change to category property";

    // Update UI for edit mode
    document.getElementById("change to submit button ID").textContent = "Update Item";
    const cancelBtn = document.getElementById("change to cancel button ID");
    if (cancelBtn) cancelBtn.classList.remove("hidden");
}

// TODO 11: "change to cancel edit function name"()
function "change to cancel edit function name"() {
    "change to editing ID variable" = null;
    document.getElementById("change to form ID").reset();
    // hide cancel button, restore text
}
```

---

## 21. CSS: Layouts, Grids & Responsive Design

### Dashboard Grid (Responsive auto-scaling)

```css
.dashboard-grid {
    display: grid;
    /* auto-fit makes columns fill available space */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}
```

### Flexbox Pattern (Centering & Nav)

```css
/* Center content vertically and horizontally */
.center-container {
    display: flex;
    justify-content: center; /* horizontal */
    align-items: center;     /* vertical */
    min-height: 200px;
}

/* Navbar layout */
.navbar {
    display: flex;
    justify-content: space-between; /* logo left, links right */
    align-items: center;
    padding: 10px 20px;
}
```

---

## 22. CSS: States, Colors & Utility Classes

### Text Color Utilities (income/expense)

```css
.text-success { color: "change to success color"; } /* Green for income */
.text-danger  { color: "change to danger color"; } /* Red for expense */
```

### Utility Classes

```css
.hidden { display: none !important; }

.btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-primary { background: "change to primary color"; color: white; }
.btn-danger  { background: "change to danger color"; color: white; }
```

---

## 23. HTML: UI Components

### Dashboard Summary

```html
<div class="dashboard-grid">
    <div class="card">
        <h3>Total Balance</h3>
        <p id="change to balance element ID">0 QAR</p>
    </div>
    <div class="card">
        <h3>Income</h3>
        <p id="change to total income element ID" class="text-success">0 QAR</p>
    </div>
    <div class="card">
        <h3>Expenses</h3>
        <p id="change to total expenses element ID" class="text-danger">0 QAR</p>
    </div>
</div>
```

### Item Form

```html
<form id="change to form ID" class="card p-20">
    <div class="form-group">
        <label>Description</label>
        <input type="text" id="change to description input ID" name="description" required>
    </div>
    <div class="form-row">
        <div class="form-group">
            <label>Amount</label>
            <input type="number" id="change to amount input ID" name="amount" step="0.01" required>
        </div>
        <div class="form-group">
            <label>Type</label>
            <select id="change to type select ID" name="type">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </div>
    </div>
    <div class="form-actions mt-20">
        <button type="submit" id="change to submit button ID" class="btn btn-primary">Add Item</button>
        <button type="button" id="change to cancel button ID" class="btn hidden" onclick="cancelEdit()">Cancel</button>
    </div>
</form>
```

---

## 24. Validation & Guards

```javascript
/* Guard Clauses (Common in Lab 6-7) */
function deleteTransaction(id) {
    if (!id) return; // guard against null id
    if (!confirm("Are you sure?")) return; // guard against accidental click
    // ... delete logic
}

/* Guard Clauses (Common in Lab 6-7) */
function "change to delete item function name"(id) {
    if (!id) return; // guard against null id
    if (!confirm("Are you sure?")) return; // guard against accidental click
    // ... delete logic
}

/* Regex validation (Lab 5-7 patterns) */
const "change to email pattern variable" = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const "change to is valid email variable" = "change to email pattern variable".test("change to email string");
```

---

## 25. Common Mistakes & Bug Fixes Checklist

| # | Mistake | Fix |
|---|---|---|
| 1 | Missing `e.preventDefault()` | Page reloads on submit |
| 2 | Forgetting `Number()` on input | Adds `"100" + "100"` as `"100100"` |
| 3 | Misspelling `getElementById` | `getElementbyId` (lowercase 'd') will throw error |
| 4 | `JSON.parse` with no fallback | Use `JSON.parse(data || '[]')` |
| 5 | Forgetting `await` on `.json()` | It's a promise, needs its own await |
| 6 | PUT/POST missing headers | Add `headers: { "Content-Type": "application/json" }` |
| 7 | Body not stringified | Use `body: JSON.stringify(data)` |
| 8 | Case sensitivity in search | Use `.toLowerCase()` on both values |
| 9 | Deleting with index instead of ID | Use `items.filter(i => i.id !== id)` |
| 10| `classList.add` with a `.` | Use `add("hidden")`, NOT `add(".hidden")` |

---

## 26. Complete TODO Inventory

### Lab 5 Module 1

```
// 1a. Declare a constant called accountName → "Main Checking"
// 1b. Declare a variable (let) called balance → 15250
// 1c. Declare a constant called isActive → true
// 1d. Log all three to the console
// 2a. Create a transaction object with: description, amount, category, type
// 2b. Log the full object to the console
// 2c. Log just the description and amount individually using dot notation
// 3a. Using your transaction object, create a formatted string with template literals
// 3b. Create a multi-line receipt string that displays all properties
// 3c. Log both strings to the console
```

### Lab 5 Module 2

```
// 1a. Write a function formatCurrency(amount) → "15,250 QAR"
// 1b. Write a function calculateRemaining(income, expenses) → difference
// 1c. Test both: formatCurrency(15250) and calculateRemaining(12000, 8500)
// 2a. Rewrite formatCurrency as a one-line arrow function (formatCurrencyArrow)
// 2b. Write arrow function calcSavingsRate(income, expenses) → rate with 1 decimal
// 2c. Test: calcSavingsRate(12000, 8500) → "29.2"
// 3a. Write function calculateTotal(items) → sum of all items
// 3b. Use calculateTotal to get the total expenses and log it
// 3c. Calculate and log the remaining balance
// 3d. Calculate and log the savings rate
```

### Lab 5 Module 3

```
// 1a. .filter() for expense transactions. Log the count.
// 1b. .filter() for income transactions. Log the count.
// 1c. .map() to create array of just description strings. Log it.
// 1d. .map() to create formatted strings like "+12,000 QAR" or "-4,500 QAR". Log it.
// 2a. .filter() + .reduce() to calculate total income. Log it.
// 2b. .filter() + .reduce() to calculate total expenses. Log it.
// 2c. Calculate and log the balance.
// 3a. .filter() + .reduce() to group expenses by category. { Housing: 4500, Food: 1400, ... }
// 3b. Object.entries() + .map() to log each category with its total.
```

### Lab 5 Module 4

```
// Exercise 0: Add <script src="js/practice.js"></script> at bottom of <body>
// 1a. getElementById for: "balance-display", "income-display", "expenses-display"
// 1b. Log textContent of each
// 1c. querySelector for first ".card" → log its h3 text
// 1d. querySelectorAll for ".amount" → log how many
// 2a. Change balance display's textContent to "50,000"
// 2b. classList.add("text-success") to balance element
// 2c. Change backgroundColor of #output2 using .style
// 3a. document.createElement("div") for new card
// 3b. Set its className to "card"
// 3c. Set innerHTML to show a "Savings Rate" card
// 3d. document.querySelector("#new-cards").appendChild(newCard)
```

### Lab 5 Module 5

```
// 1a. click listener on #add-income-btn → add 1000 to currentBalance, update display
// 1b. click listener on #add-expense-btn → subtract 500 from currentBalance
// 1c. click listener on #reset-btn → reset currentBalance to 0
// 2a. "input" listener on #amount-input → update #amount-preview with formatted value
// 3a. "submit" listener on #transaction-form:
//     preventDefault, read #desc-input/#form-amount/#type-select,
//     push to transactions[], display all, reset form
```

### Lab 5 Module 6

```
// Step 1: Write updateDashboard() — filter+reduce totals, update 4 DOM elements, color balance
// Step 2: Write renderTransactions() — map to HTML, handle empty state
// Step 3: "submit" listener on #calc-form — preventDefault, read 4 inputs, push, call both
// Step 4: "click" listener on #clear-all-btn — empty array, call both
```

### Lab 5 Part B

```
// Step 1: formatCurrency(amount) and calcSavingsRate(income, expenses)
// Step 2: Empty array for transactions
// Step 3: updateDashboard() → #total-income, #total-expenses, #total-balance, #savings-rate
// Step 4: renderTransactions() → #transaction-body table
// Step 5: "submit" on #quick-transaction-form → #quick-desc, #quick-amount, #quick-type
// Step 6: "click" on #clear-btn → empty array, call both
```

### Lab 6 Module 1

```
// TODO: Define the Transaction class with constructor and 3 methods
// TODO: Define the Account class with constructor and 3 methods
// TODO: Define the BudgetCategory class
```

### Lab 6 Module 2

```
// TODO: Define SavingsAccount class (extends Account)
// TODO: Define RecurringTransaction class (extends Transaction)
// TODO: Create instances and test with instanceof
```

### Lab 6 Module 3 (test file)

```
// TODO: Test that constructor sets properties (4 properties)
// TODO: Test format() for income (+8,000 QAR)
// TODO: Test format() for expense (-3,500 QAR)
// TODO: Test isExpense() and isIncome() booleans
// TODO: Test deposit increases balance
// TODO: Test withdraw decreases balance
// TODO: Test withdraw returns false when insufficient funds
// TODO: Test getBalance returns formatted string
// TODO: Test SavingsAccount type is "savings"
// TODO: Test SavingsAccount inherits deposit
// TODO: Test applyProfit calculates and adds profit
```

### Lab 6 Module 4

```
// TODO: Render sampleTransactions into #transaction-table using map + join
// TODO: Create liveTransactions array
// TODO: Write updateDashboard()
// TODO: Write renderLiveTransactions()
// TODO: "submit" listener on #transaction-form
// TODO: Load from localStorage on startup (key: "module4-transactions")
// TODO: Save to localStorage after each add
// TODO: "click" listener on #clear-btn → removeItem + reset + refresh
// TODO: "click" listener on #count-btn → show count in #storage-output
```

### Lab 6 Part B

```
// TODO: Define Transaction class
// TODO: Define AccountManager class
// TODO: Create instance: const manager = new AccountManager()
// TODO: Write updateDashboard() — uses manager.getTotals() and manager.getSavingsRate()
// TODO: Write renderTransactions() — uses manager.getAll(), map to rows, delete button
// TODO: Write deleteTransaction(index) — manager.remove(index), refresh
// TODO: Write renderCategorySummary() — manager.getCategorySummary(), Object.entries, cards
// TODO: "submit" on #transaction-form — read 4 inputs, manager.add(), refresh all, reset
// TODO: "click" on #clear-btn — manager.clear(), refresh all
// TODO: Call updateDashboard(), renderTransactions(), renderCategorySummary() on page load
```

### Lab 7 Module 1

```
// TODO: Create object, stringify, parse, log
// TODO: a) Extract descriptions array with .map()
// TODO: b) Total expenses with .filter() + .reduce()
// TODO: c) Formatted strings "Salary: +8,000 QAR" with .map()
// TODO: d) Find largest expense with .filter() + .reduce()
// TODO: Group by category using reduce
// TODO: Log each category with Object.entries().forEach()
```

### Lab 7 Module 2

```
// TODO: Write async function displayTransactions()
// TODO: Call displayTransactions()
// TODO: Write async function loadWithErrorHandling()
// TODO: Call loadWithErrorHandling()
// TODO: Write async function runSequential() — console.time/timeEnd
// TODO: Write async function runParallel() — Promise.all, console.time/timeEnd
// TODO: Call both using async wrapper (await runSequential(), then await runParallel())
```

### Lab 7 Module 3

```
// TODO: click listener on #load-btn — fetch, show loading, render rows, update status
// TODO: click listener on #summary-btn — fetch, calculate 4 totals, render 4 cards
```

### Lab 7 Module 4

```
// TODO: "submit" listener on #add-form — POST fetch with FormData, show status, refresh
// TODO: Write startEdit(id) — GET fetch, populate edit form, show cancel, update status
// TODO: Write cancelEdit() — reset form, clear id, show hint, clear status
// TODO: "click" listener on #cancel-edit-btn → cancelEdit()
// TODO: "submit" listener on #edit-form — read id, PUT fetch, check .ok, refresh
// TODO: Write deleteTransaction(id) — DELETE fetch, show status, refresh
```

### Lab 7 Part B

```
// TODO: Write async function loadTransactions()
// TODO: Write function updateSummary()
// TODO: Write function renderTransactions()
// TODO: Write async function addTransaction(data)
// TODO: Write async function updateTransaction(id, data)
// TODO: Write async function deleteTransaction(id)
// TODO: Write function getFilteredTransactions()
// TODO: "input" listener on #search → renderTransactions()
// TODO: "change" listener on #filter-type → renderTransactions()
// TODO: Write function startEdit(id)
// TODO: Write function cancelEdit()
// TODO: "submit" listener on #transaction-form — branch on editingId
// TODO: Call loadTransactions() at bottom of file
```

### Assignment 2

```
// TODO 1:  fetchAllRecipes()         — GET, parse, return array
// TODO 2:  createRecipe(data)        — POST, headers, body, return created
// TODO 3:  updateRecipe(id, data)    — PUT to API_URL+"/"+id, return updated
// TODO 4:  deleteRecipeById(id)      — DELETE to API_URL+"/"+id
// TODO 5:  loadPage(page)            — fetch .html, inject, active nav, wire handlers
// TODO 6:  recipeToHTMLCard(recipe)  — template literal with all recipe fields
// TODO 7:  renderRecipes()           — map cards into #recipes-grid, empty state
// TODO 8:  loadRecipes()             — fetchAllRecipes, store, renderRecipes
// TODO 9:  handleRecipeSubmit(e)     — FormData, Number conversion, branch editingId
// TODO 10: startEdit(id)             — find, set editingId, await loadPage, populate all fields
// TODO 11: cancelEdit()              — null editingId, reset form, restore UI
// TODO 12: handleDelete(id)          — confirm(), deleteRecipeById, loadRecipes
// TODO 13: DOMContentLoaded → loadPage("recipes")
```

### Practice Session

```
// Q1  (5 marks):  Fix .dashboard-grid — display:grid, repeat(auto-fit, minmax(...))
// Q2  (10 marks): loadTransactions() — GET fetch, store, refreshAll()
// Q3  (12 marks): updateSummary() — filter+reduce, update 3 elements, color balance
// Q4  (15 marks): renderTransactions() — getFilteredTransactions, map rows, +/- color, empty state
// Q5  (10 marks): addTransaction(data) — POST, push created, refreshAll()
// Q6  (10 marks): updateTransaction(id, data) — PUT, findIndex+replace, refreshAll()
// Q7  (10 marks): deleteTransaction(id) — DELETE, filter out id, refreshAll()
// Q8  (12 marks): getFilteredTransactions() — search+type filter; "input"+"change" listeners
// Q9  (16 marks): startEdit(id) + cancelEdit() + form submit branch on editingId
```

---

## 27. FINAL RECAP: The 10 Essential Code Patterns

### Type 1 — Calculate totals (filter + reduce)

```javascript
const "change to total variable" = "change to array name"
    .filter(t => t."change to type property" === "income")
    .reduce((sum, t) => sum + t."change to amount property", 0);
```

### Type 2 — Render list to table (map + join)

```javascript
document.getElementById("change to container ID").innerHTML = "change to array name".map(t => `
    <tr>
        <td>${t."change to property A"}</td>
        <td>${t."change to property B"}</td>
    </tr>
`).join("");
```

### Type 3 — Add via form (preventDefault + Number + push + reset)

```javascript
document.getElementById("change to form ID").addEventListener("submit", (e) => {
    e.preventDefault();
    const amount = Number(document.getElementById("change to amount input ID").value);
    "change to array name".push({ "change to description property": "change to description value", amount, "change to type property": "expense", "change to category property": "change to category value" });
    "change to refresh function name"();
    e.target.reset();
});
```

### Type 4 — Fetch from API (async + two awaits + try/catch)

```javascript
async function "change to load function name"() {
    try {
        const response = await fetch("change to API URL constant");
        const "change to data variable" = await response.json();
        // use "change to data variable"
    } catch (err) { console.error("Load failed:", err); }
}
```

### Type 5 — POST to API (method + headers + JSON.stringify)

```javascript
await fetch("change to API URL constant", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify("change to data variable")
});
```

### Type 6 — Define a class (constructor + methods)

```javascript
class "change to class name" {
    constructor("change to property A", "change to property B", "change to property C", "change to property D") {
        this."change to property A" = "change to property A"; this."change to property B" = "change to property B";
        this."change to property C" = "change to property C"; this."change to property D" = "change to property D";
    }
    "change to format method"()    { const sign = this."change to property C" === "income" ? "+" : "-"; return sign + this."change to property B".toLocaleString() + " QAR"; }
    "change to isExpense check method"() { return this."change to property C" === "expense"; }
    "change to isIncome check method"()  { return this."change to property C" === "income";  }
}
```

### Type 7 — Write a unit test (describe + it + expect + .to.equal)

```javascript
describe("change to test suite name", () => {
    it("change to test description", () => {
        const "change to instance variable" = new "change to class name"("Value A", 8000, "income", "Value D");
        expect("change to instance variable"."change to format method"()).to.equal("+8,000 QAR");
    });
});
```

### Type 8 — Persist with localStorage (JSON.stringify/parse + fallback)

```javascript
// Save
localStorage.setItem("change to storage key variable", JSON.stringify("change to array name"));
// Load with fallback
const data = JSON.parse(localStorage.getItem("change to storage key variable") || "[]");
```

### Type 9 — Search and filter (toLowerCase + includes + dropdown)

```javascript
return "change to array name".filter(t => {
    const matchesSearch = t."change to property name".toLowerCase().includes("change to search term variable".toLowerCase());
    const matchesFilter = "change to filter variable" === "all" || t."change to filter property" === "change to filter variable";
    return matchesSearch && matchesFilter;
});
```

### Type 10 — Edit mode toggle (editingId + startEdit + cancelEdit + branch)

```javascript
let "change to editing ID variable" = null;

function "change to start edit function name"(id) {
    "change to editing ID variable" = id;
    // populate form + show cancel button
}

function "change to cancel edit function name"() {
    "change to editing ID variable" = null;
    document.getElementById("change to form ID").reset();
    // hide cancel button, restore text
}

document.getElementById("change to form ID").addEventListener("submit", async (e) => {
    e.preventDefault();
    const "change to data variable" = "change to extract data logic";

    if ("change to editing ID variable" !== null) {
        await "change to update item function name"("change to editing ID variable", "change to data variable");
        "change to cancel edit function name"();
    } else {
        await "change to add item function name"("change to data variable");
    }
    e.target.reset();
});
```

---

*Last updated: April 2026 — covers all material from Labs 5–7 starter code, Tutorial B01 solutions, Assignment 2, and Practice Session*
