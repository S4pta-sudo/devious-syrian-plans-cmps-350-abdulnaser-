/**
 * ┌─────────────────────────────────────────────────────────────────────────────┐
│                    WHY JSON IS THE BRIDGE                                    │
│                                                                              │
│   JavaScript Object                     JSON String                         │
│   ┌─────────────────────┐              ┌─────────────────────────────────┐ │
│   │ {                   │              │ '{"name":"Ramen",               │ │
│   │   name: "Ramen",    │  ────────►   │   "price": 15,                  │ │
│   │   price: 15,        │  stringify   │   "ingredients": ["noodles"]}'  │ │
│   │   ingredients: [    │              └─────────────────────────────────┘ │
│   │     "noodles"       │                         │                        │
│   │   ]                 │                         │                        │
│   │ }                   │                         │                        │
│   └─────────────────────┘                         │                        │
│            ▲                                      │                        │
│            │                                      │                        │
│            └──────────────────────────────────────┘                        │
│                         JSON.parse                                         │
│                                                                              │
│   JSON.stringify() = Object → String (for saving)                           │
│   JSON.parse() = String → Object (for using)                                │
└─────────────────────────────────────────────────────────────────────────────┘
 * 
 * 
 */

// 1. SAVE data to localStorage
localStorage.setItem("keyName", "value");

// 2. LOAD data from localStorage
const value = localStorage.getItem("keyName");

// 3. DELETE data from localStorage
localStorage.removeItem("keyName");

// 4. CLEAR ALL data (be careful!)
localStorage.clear();



// SAVING
const userSettings = {
    theme: "dark",
    fontSize: 16,
    notifications: true
};

// Step 1: Convert object to JSON string
const jsonString = JSON.stringify(userSettings);

// Step 2: Save to localStorage
localStorage.setItem("userPreferences", jsonString);

// LOADING (next time page loads)
// Step 1: Get the string from localStorage
const savedString = localStorage.getItem("userPreferences");

// Step 2: Check if it exists
if (savedString) {
    // Step 3: Convert back to object
    const settings = JSON.parse(savedString);
    console.log(settings.theme);  // "dark"
} else {
    // First time visitor, use defaults
    console.log("No saved preferences");
}


/////////////////////////////////




/** editting
 * 
 * ┌─────────────────────────────────────────────────────────────────────────────┐
│                    EDIT MODE PATTERN                                         │
│                                                                              │
│   editingId = null:                                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  Form is EMPTY                                                       │   │
│   │  Submit button says "Add"                                           │   │
│   │  Cancel button HIDDEN                                                │   │
│   │  Submit → calls createTransaction()                                  │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│   editingId = 5:                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  Form is PRE-FILLED with transaction #5's data                      │   │
│   │  Submit button says "Update"                                        │   │
│   │  Cancel button VISIBLE                                               │   │
│   │  Submit → calls updateTransaction(5, newData)                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
 */

// ========== GLOBAL FLAG ==========
let editingId = null;

// ========== START EDITING ==========
async function startEdit(id) {
    // Find the transaction
    const transaction = transactions.find(t => t.id === id);
    
    // Set the flag
    editingId = id;
    
    // Load the form page (if using SPA)
    await loadPage("add-transaction");
    
    // Fill the form
    document.getElementById("description").value = transaction.description;
    document.getElementById("amount").value = transaction.amount;
    document.getElementById("type").value = transaction.type;
    document.getElementById("category").value = transaction.category;
    
    // Change UI to edit mode
    document.getElementById("form-title").textContent = "Edit Transaction";
    document.getElementById("submit-btn").textContent = "Update Transaction";
    document.getElementById("cancel-btn").style.display = "inline-block";
}

// ========== CANCEL EDITING ==========
function cancelEdit() {
    editingId = null;
    document.getElementById("transaction-form").reset();
    document.getElementById("form-title").textContent = "Add Transaction";
    document.getElementById("submit-btn").textContent = "Add Transaction";
    document.getElementById("cancel-btn").style.display = "none";
}

// ========== FORM SUBMIT (The Decider) ==========
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = {
        description: document.getElementById("description").value,
        amount: parseFloat(document.getElementById("amount").value),
        type: document.getElementById("type").value,
        category: document.getElementById("category").value
    };
    
    if (editingId === null) {
        // ADD MODE
        await createTransaction(formData);
    } else {
        // EDIT MODE
        await updateTransaction(editingId, formData);
        cancelEdit();  // Reset back to add mode
    }
    
    // Refresh everything
    await loadTransactions();
    document.getElementById("transaction-form").reset();
}

////////////////////////////////////////

//event listener:

// ========== SETUP FILTERS (Run once on page load) ==========
function setupFilters() {
    const searchInput = document.getElementById("search");
    const typeSelect = document.getElementById("filter-type");
    
    // "input" event fires on every keystroke
    searchInput.addEventListener("input", () => {
        renderTransactions();  // Re-render with new filter
    });
    
    // "change" event fires when dropdown selection changes
    typeSelect.addEventListener("change", () => {
        renderTransactions();  // Re-render with new filter
    });
}


/** flow of data:
 * ┌─────────────────────────────────────────────────────────────────────────────┐
│                    EVERYTHING TOGETHER                                       │
│                                                                              │
│   PAGE LOADS                                                                 │
│   │                                                                          │
│   ▼                                                                          │
│   DOMContentLoaded → loadPage("transactions")                               │
│   │                                                                          │
│   ├──► fetch("pages/transactions.html") → inject HTML                       │
│   │                                                                          │
│   └──► loadTransactions()                                                   │
│        │                                                                     │
│        ├──► fetch("API/transactions") → response.json()                     │
│        │                                                                     │
│        └──► transactions = data (global)                                    │
│             │                                                               │
│             └──► renderTransactions()                                       │
│                  │                                                          │
│                  ├──► getFilteredTransactions() (reads search/type)         │
│                  │                                                          │
│                  ├──► .map() → HTML strings                                 │
│                  │                                                          │
│                  └──► .join() + innerHTML → User sees table                 │
│                                                                              │
│   ───────────────────────────────────────────────────────────────────────   │
│                                                                              │
│   USER CLICKS "EDIT"                                                         │
│   │                                                                          │
│   ▼                                                                          │
│   startEdit(id)                                                             │
│   │                                                                          │
│   ├──► transaction = transactions.find(t => t.id === id)                    │
│   │                                                                          │
│   ├──► editingId = id (global)                                              │
│   │                                                                          │
│   ├──► loadPage("add-transaction") → inject form                            │
│   │                                                                          │
│   ├──► Fill form with transaction data                                      │
│   │                                                                          │
│   └──► Change UI (button text, show cancel)                                 │
│                                                                              │
│   ───────────────────────────────────────────────────────────────────────   │
│                                                                              │
│   USER SUBMITS FORM                                                          │
│   │                                                                          │
│   ▼                                                                          │
│   handleFormSubmit()                                                        │
│   │                                                                          │
│   ├──► if (editingId === null) → createTransaction(formData)                │
│   │    │                                                                     │
│   │    └──► fetch("API/transactions", { method: "POST", body: data })       │
│   │                                                                          │
│   └──► else → updateTransaction(editingId, formData)                        │
│        │                                                                    │
│        └──► fetch("API/transactions/5", { method: "PUT", body: data })      │
│                                                                              │
│   ───────────────────────────────────────────────────────────────────────   │
│                                                                              │
│   AFTER API UPDATE:                                                          │
│   │                                                                          │
│   ├──► loadTransactions() → refresh transactions array                      │
│   │                                                                          │
│   ├──► cancelEdit() → editingId = null, reset form                          │
│   │                                                                          │
│   └──► renderTransactions() → update table                                   │
│                                                                              │
│   ───────────────────────────────────────────────────────────────────────   │
│                                                                              │
│   USER TYPES IN SEARCH BOX                                                   │
│   │                                                                          │
│   ▼                                                                          │
│   "input" event fires → renderTransactions()                                │
│   │                                                                          │
│   └──► getFilteredTransactions() → filters by search text                   │
│        │                                                                    │
│        └──► .filter(t => t.description.includes(searchText))                │
│             │                                                               │
│             └──► Re-render table with only matching transactions            │
│                                                                              │
│   ───────────────────────────────────────────────────────────────────────   │
│                                                                              │
│   USER CLICKS "DELETE"                                                       │
│   │                                                                          │
│   ▼                                                                          │
│   handleDelete(id)                                                          │
│   │                                                                          │
│   ├──► confirm("Are you sure?")                                             │
│   │                                                                          │
│   ├──► fetch("API/transactions/5", { method: "DELETE" })                    │
│   │                                                                          │
│   └──► loadTransactions() → refresh, re-render                              │
└─────────────────────────────────────────────────────────────────────────────┘
 * 
 */


