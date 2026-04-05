# 📘 Version 1: Global Array — Complete Function Reference

> **State Management:** Every function in this file uses a **single global array variable** for storing, retrieving, and mutating application state. No localStorage is used.

---

## 📑 Table of Contents

1. [Global Array Declaration & Initial Data](#1-global-array-declaration--initial-data)
2. [loadItems — Fetch from API and Store in Array](#2-loaditems--fetch-from-api-and-store-in-array)
3. [updateSummary — Calculate Totals from Array](#3-updatesummary--calculate-totals-from-array)
4. [renderItems — Render Array to DOM](#4-renderitems--render-array-to-dom)
5. [addItem — POST to API and Push to Array](#5-additem--post-to-api-and-push-to-array)
6. [updateItem — PUT to API and Replace in Array](#6-updateitem--put-to-api-and-replace-in-array)
7. [deleteItem — DELETE from API and Filter Array](#7-deleteitem--delete-from-api-and-filter-array)
8. [getFilteredItems — Search & Filter the Array](#8-getfiltereditems--search--filter-the-array)
9. [startEdit — Find in Array and Populate Form](#9-startedit--find-in-array-and-populate-form)
10. [cancelEdit — Reset Edit State](#10-canceledit--reset-edit-state)
11. [refreshAll — Re-run Summary and Render](#11-refreshall--re-run-summary-and-render)
12. [Form Submit Handler — Add/Update Branch](#12-form-submit-handler--addupdate-branch)
13. [Event Listener Wiring](#13-event-listener-wiring)
14. [showDetails — Detail View from Array](#14-showdetails--detail-view-from-array)
15. [goBack — Return to Grid View](#15-goback--return-to-grid-view)
16. [getFilteredItems with Sort — Sort & Filter the Array](#16-getfiltereditems-with-sort--sort--filter-the-array)
17. [addToSecondaryList — Push to a Secondary Array](#17-addtosecondarylist--push-to-a-secondary-array)
18. [removeFromSecondaryList — Filter from Secondary Array](#18-removefromsecondarylist--filter-from-secondary-array)
19. [handleAddSubmit — Local-Only Add via Form](#19-handleaddsubmit--local-only-add-via-form)
20. [handleEditSubmit — Local-Only Edit via Form](#20-handleeditsubmit--local-only-edit-via-form)
21. [deleteItemLocal — Local-Only Delete](#21-deleteitemlocal--local-only-delete)
22. [loadSubCategory — Fetch by Dropdown Selection](#22-loadsubcategory--fetch-by-dropdown-selection)

---

## 1. Global Array Declaration & Initial Data

### Theoretical Overview
The global array is the single source of truth for all data in Version 1. It is declared at the top of the script and every function reads from or writes to this same array. No data persists across page reloads — when the page refreshes, the array starts empty and must be re-fetched.

### How to Get the Job Done
1. Declare `let mainArray = [];` at the top of your script file, outside all functions.
2. Declare `let editingId = null;` to track which item is being edited.
3. Declare your `API_URL` constant with the endpoint string.
4. Every function below references `mainArray` — change this name to match your project.

### Function Code

```javascript
// ============================================================
// GLOBAL STATE — All functions read/write this array
// Check index.html: Does <script src="js/app.js"></script> exist at bottom of <body>?
// ============================================================

// API endpoint — replace the URL string with your actual API endpoint
const API_URL = "https://your-api-endpoint.com/items"; // ← replace URL string

// Global array — this is the ONLY data store; all functions use this array
// Array index: mainArray[0], mainArray[1], ... each element is an object
let mainArray = []; // ← replace "mainArray" with your array variable name

// Editing state — null means "add mode", a number means "edit mode for that ID"
let editingId = null; // ← replace "editingId" with your editing variable name
```

### Programmer Reminders
- `mainArray` must be `let`, not `const`, because it gets reassigned during delete operations (`mainArray = mainArray.filter(...)`)
- `editingId` must also be `let` because it toggles between `null` and an ID value
- The API_URL is a `const` because it never changes

### Potential Output & Side Effects
- No visible output — this is declaration only
- `mainArray` starts as `[]` (empty) — the page will show "No items found" until `loadItems()` runs
- Data does NOT survive page refresh — the array resets to `[]` on every reload

---

## 2. loadItems — Fetch from API and Store in Array

### Theoretical Overview
This async function fetches data from a REST API using the Fetch API. It performs two awaits (one for the response, one for the JSON body), then stores the resulting array into the global `mainArray` variable. After storing, it calls `refreshAll()` to update the UI.

### How to Get the Job Done
1. Mark the function as `async` since it uses `await`
2. Use `try/catch` to handle network errors gracefully
3. `await fetch(API_URL)` gets the HTTP response object
4. `await response.json()` parses the body into a JavaScript array
5. Assign the parsed data to `mainArray` (the global array, index 0 through data.length-1)
6. Call `refreshAll()` to re-render the summary and the table/grid

### Function Code

```javascript
// ============================================================
// Check index.html: Does an element exist to display status messages?
// Requires: API_URL constant, mainArray global variable, refreshAll() function
// ============================================================

async function loadItems() { // ← replace function name
    try {
        // Step 1: Fetch from API — returns a Response object
        const response = await fetch(API_URL); // ← replace API_URL

        // Step 2: Parse JSON body — returns a JS array of objects
        const data = await response.json();

        // Step 3: Store in global array (replaces all previous data)
        // mainArray[0] = first item, mainArray[1] = second item, etc.
        mainArray = data; // ← replace "mainArray" with your global array name

        // Step 4: Refresh the UI (calls updateSummary + renderItems)
        refreshAll(); // ← replace with your refresh function name
    } catch (err) {
        console.error("Load failed:", err);
    }
}
```

### Programmer Reminders
- Requires `API_URL` to be defined as a const above this function
- Requires `mainArray` to be declared as `let` at the top of the script
- Requires `refreshAll()` to be defined somewhere in the script
- `fetch()` only works over HTTP — use Live Server, not `file://`
- Two `await` calls are needed: one for the response, one for `.json()`

### Potential Output & Side Effects
- **Array mutation:** `mainArray` is completely replaced with the fetched data (old data is lost)
- **DOM update:** `refreshAll()` triggers re-rendering of summary cards and item list
- **On error:** Console logs "Load failed:" — no data changes occur, `mainArray` stays as it was

---

## 3. updateSummary — Calculate Totals from Array

### Theoretical Overview
This function reads the global array, filters it into income and expense groups, then uses `.reduce()` to sum each group. It updates DOM elements with the calculated totals and applies a CSS class to color the balance green (positive) or red (negative).

### How to Get the Job Done
1. Filter `mainArray` for items where `.type === "income"`, then `.reduce()` to sum `.amount`
2. Filter `mainArray` for items where `.type === "expense"`, then `.reduce()` to sum `.amount`
3. Calculate `balance = totalIncome - totalExpenses`
4. Set `.textContent` on three DOM elements (income, expenses, balance)
5. Toggle CSS class on the balance element: `text-success` if ≥ 0, `text-danger` if < 0

### Function Code

```javascript
// ============================================================
// Check index.html: Do elements with these IDs exist?
//   - "total-income" (to display income total)
//   - "total-expenses" (to display expenses total)
//   - "total-balance" (to display calculated balance)
// Requires: mainArray global variable populated with objects having .type and .amount
// ============================================================

function updateSummary() { // ← replace function name
    // Read from global array — filter for income items, then sum their .amount
    // Accesses mainArray[0].type, mainArray[0].amount, mainArray[1].type, etc.
    const totalIncome = mainArray // ← replace array name
        .filter(t => t.type === "income") // ← replace .type property and "income" value
        .reduce((total, t) => total + t.amount, 0); // ← replace .amount property

    // Read from global array — filter for expense items, then sum their .amount
    const totalExpenses = mainArray // ← replace array name
        .filter(t => t.type === "expense") // ← replace "expense" value
        .reduce((total, t) => total + t.amount, 0); // ← replace .amount property

    // Calculate balance from the two totals
    const balance = totalIncome - totalExpenses;

    // Update DOM elements with calculated values
    document.getElementById("total-income").textContent   = totalIncome.toLocaleString()   + " QAR"; // ← replace ID and currency
    document.getElementById("total-expenses").textContent = totalExpenses.toLocaleString() + " QAR"; // ← replace ID and currency
    document.getElementById("total-balance").textContent  = balance.toLocaleString()       + " QAR"; // ← replace ID and currency

    // Color the balance element: green if positive/zero, red if negative
    const balanceEl = document.getElementById("total-balance"); // ← replace ID
    balanceEl.classList.remove("text-success", "text-danger");
    balanceEl.classList.add(balance >= 0 ? "text-success" : "text-danger");
}
```

### Programmer Reminders
- Requires `mainArray` to already contain data (call `loadItems()` first)
- Requires CSS classes `.text-success { color: green; }` and `.text-danger { color: red; }` in your stylesheet
- Check index.html: Do elements `#total-income`, `#total-expenses`, `#total-balance` exist?
- `.toLocaleString()` adds comma formatting (e.g., 15000 → "15,000")
- `.reduce((total, t) => total + t.amount, 0)` — the `0` is the starting value; without it, an empty array will error

### Potential Output & Side Effects
- **DOM changes:** Three text elements are updated with formatted numbers
- **CSS class change:** Balance element gets either `text-success` or `text-danger`
- **No array mutation:** This function only READS from `mainArray` — it does not modify it

---

## 4. renderItems — Render Array to DOM

### Theoretical Overview
This function takes the global array (optionally filtered), maps each item to an HTML string using template literals, joins them into one string, and injects them into a container element. If the array is empty, it shows an "empty state" message.

### How to Get the Job Done
1. Call `getFilteredItems()` to get a filtered copy of `mainArray` (or use `mainArray` directly if no filter is needed)
2. Get the container element by ID
3. If the filtered array is empty, show an empty state message and return
4. Use `.map()` to convert each object into an HTML string (table row or card)
5. Use `.join("")` to combine all strings into one
6. Set the container's `.innerHTML` to the combined string

### Function Code

```javascript
// ============================================================
// Check index.html: Does an element with id="item-container" exist? (e.g., <tbody id="item-container">)
// Requires: mainArray global variable, getFilteredItems() function
// ============================================================

function renderItems() { // ← replace function name
    // Step 1: Get filtered data from global array (calls getFilteredItems which reads mainArray)
    const filtered = getFilteredItems(); // ← replace with your filter function name, or just use: mainArray
    const container = document.getElementById("item-container"); // ← replace ID

    // Step 2: Handle empty state
    if (filtered.length === 0) {
        container.innerHTML = `<tr><td colspan="5" class="empty-message">No items found</td></tr>`; // ← replace colspan count
        return;
    }

    // Step 3: Map each array element to HTML, then join into one string
    // Accesses filtered[0].description, filtered[0].category, etc.
    container.innerHTML = filtered.map(t => `
        <tr>
            <td>${t.description}</td>     <!-- ← replace property names -->
            <td>${t.category}</td>
            <td>${t.type}</td>
            <td class="${t.type === 'income' ? 'text-success' : 'text-danger'}">
                ${t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()} QAR
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="startEdit(${t.id})">Edit</button>
                <button class="btn btn-sm btn-danger"  onclick="deleteItem(${t.id})">Delete</button>
            </td>
        </tr>
    `).join("");
}
```

### Programmer Reminders
- Requires `mainArray` to contain data and `getFilteredItems()` to be defined
- Check index.html: Does `<tbody id="item-container">` exist inside a `<table>`?
- The `onclick="startEdit(${t.id})"` calls the global `startEdit` function — make sure it exists
- The `onclick="deleteItem(${t.id})"` calls the global `deleteItem` function — make sure it exists
- `.join("")` is CRITICAL — without it, commas appear between rows
- `colspan="5"` must match the number of `<th>` columns in your table header

### Potential Output & Side Effects
- **DOM changes:** The container element's innerHTML is completely replaced
- **No array mutation:** This function only READS from `mainArray` — it does not modify it
- **Visual:** Each row shows item data with colored amount and Edit/Delete buttons

---

## 5. addItem — POST to API and Push to Array

### Theoretical Overview
This async function sends a POST request to the API with JSON data, receives the newly created item (with a server-assigned ID), pushes it to the end of the global array, and refreshes the UI.

### How to Get the Job Done
1. Use `fetch(API_URL, { method: "POST", headers, body })` to send the new item
2. Parse the server response with `.json()` — this returns the created item with its new ID
3. Push the created item to `mainArray` using `.push()`
4. Call `refreshAll()` to update the summary and the list

### Function Code

```javascript
// ============================================================
// Requires: API_URL constant, mainArray global variable, refreshAll() function
// This function is called from the form submit handler with a data object
// ============================================================

async function addItem(data) { // ← replace function name; keep "data" param
    try {
        // Step 1: POST to API with JSON body
        const response = await fetch(API_URL, { // ← replace API_URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        // Step 2: Parse server response — created item now has an ID from the server
        const created = await response.json();

        // Step 3: Push to end of global array
        // After push: mainArray[mainArray.length - 1] === created
        mainArray.push(created); // ← replace array name

        // Step 4: Refresh page summary and table
        refreshAll(); // ← replace refresh function name
    } catch (error) { console.error("Add error:", error); }
}
```

### Programmer Reminders
- Requires `API_URL`, `mainArray`, and `refreshAll()` to be defined
- The `data` parameter is a plain object like `{ description: "...", amount: 100, type: "expense", category: "..." }`
- `JSON.stringify(data)` converts the object to a JSON string for the request body
- The `headers: { "Content-Type": "application/json" }` is REQUIRED for POST/PUT
- The server returns the item with an `id` field added — this is why we push `created`, not `data`

### Potential Output & Side Effects
- **Array mutation:** One new element is added at the end of `mainArray` via `.push()`
- **API side effect:** A new record is created on the server
- **DOM update:** `refreshAll()` triggers re-rendering of summary and list

---

## 6. updateItem — PUT to API and Replace in Array

### Theoretical Overview
This async function sends a PUT request to update an existing item on the server, then replaces the corresponding element in the global array using `findIndex` and direct index assignment.

### How to Get the Job Done
1. Use `fetch(API_URL + "/" + id, { method: "PUT", headers, body })` to send updated data
2. Parse the server response to get the updated item
3. Find the item's position in `mainArray` using `.findIndex()`
4. Replace that array element: `mainArray[index] = updated`
5. Call `refreshAll()` to update the UI

### Function Code

```javascript
// ============================================================
// Requires: API_URL constant, mainArray global variable, refreshAll() function
// This function is called from the form submit handler with an id and data object
// ============================================================

async function updateItem(id, data) { // ← replace function name
    try {
        // Step 1: PUT to API endpoint with item ID in URL
        const response = await fetch(`${API_URL}/${id}`, { // ← replace API_URL
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        // Step 2: Parse server response — returns updated item
        const updated = await response.json();

        // Step 3: Find the item's index in the global array
        // Searches mainArray[0].id, mainArray[1].id, etc. until match found
        const index = mainArray.findIndex(t => t.id === id); // ← replace array and .id

        // Step 4: Replace the element at that index
        if (index !== -1) mainArray[index] = updated; // ← replace array name

        // Step 5: Refresh the UI
        refreshAll(); // ← replace refresh function name
    } catch (error) { console.error("Update error:", error); }
}
```

### Programmer Reminders
- Requires `API_URL`, `mainArray`, and `refreshAll()` to be defined
- `id` is the item's unique identifier from the server (e.g., `t.id`)
- `findIndex` returns `-1` if no match is found — the `if (index !== -1)` guard prevents array corruption
- `mainArray[index] = updated` replaces the ENTIRE object at that position

### Potential Output & Side Effects
- **Array mutation:** One element in `mainArray` is replaced with the updated version
- **API side effect:** An existing record is updated on the server
- **DOM update:** `refreshAll()` triggers re-rendering

---

## 7. deleteItem — DELETE from API and Filter Array

### Theoretical Overview
This async function sends a DELETE request to remove an item from the server, then removes it from the global array using `.filter()` to create a new array excluding the deleted item.

### How to Get the Job Done
1. Show a confirmation dialog — stop if the user cancels
2. Use `fetch(API_URL + "/" + id, { method: "DELETE" })` to delete on the server
3. Reassign `mainArray` to a filtered copy that excludes the deleted ID
4. Call `refreshAll()` to update the UI

### Function Code

```javascript
// ============================================================
// Requires: API_URL constant, mainArray global variable (must be let), refreshAll() function
// This function is called from onclick in rendered HTML buttons
// ============================================================

async function deleteItem(id) { // ← replace function name
    // Guard: ask user for confirmation before deleting
    if (!confirm("Are you sure?")) return;

    try {
        // Step 1: DELETE request to API
        await fetch(`${API_URL}/${id}`, { method: "DELETE" }); // ← replace API_URL

        // Step 2: Remove from global array by filtering out the deleted ID
        // Creates a NEW array without the deleted item, then reassigns
        mainArray = mainArray.filter(t => t.id !== id); // ← replace array and .id

        // Step 3: Refresh the UI
        refreshAll(); // ← replace refresh function name
    } catch (error) { console.error("Delete error:", error); }
}
```

### Programmer Reminders
- Requires `mainArray` to be `let` (not `const`) because `.filter()` creates a new array that replaces the old one
- `confirm("Are you sure?")` shows a browser dialog — returns `false` if user clicks Cancel
- `.filter(t => t.id !== id)` creates a new array with all items EXCEPT the one matching `id`

### Potential Output & Side Effects
- **Array mutation:** `mainArray` is reassigned to a new array (one element shorter)
- **API side effect:** The record is permanently deleted from the server
- **DOM update:** `refreshAll()` triggers re-rendering — the deleted item disappears

---

## 8. getFilteredItems — Search & Filter the Array

### Theoretical Overview
This function reads the search input and filter dropdown values from the DOM, then applies `.filter()` to the global array. It returns a new array containing only items that match both the search term AND the selected type filter.

### How to Get the Job Done
1. Read the search term from the search input element and convert to lowercase
2. Read the filter type from the dropdown element
3. Run `.filter()` on `mainArray` with two conditions: description match AND type match
4. Return the filtered array (do NOT modify `mainArray`)

### Function Code

```javascript
// ============================================================
// Check index.html: Do these elements exist?
//   - An input with id="search-input" for text search
//   - A select with id="filter-type" with options like "all", "income", "expense"
// Requires: mainArray global variable
// ============================================================

function getFilteredItems() { // ← replace function name
    // Read search term from DOM input — lowercase for case-insensitive matching
    const searchTerm = document.getElementById("search-input").value.toLowerCase(); // ← replace ID
    // Read selected filter type from dropdown
    const filterType = document.getElementById("filter-type").value; // ← replace ID

    // Filter the global array — both conditions must be true
    // Reads mainArray[0].description, mainArray[0].type, etc.
    return mainArray.filter(t => { // ← replace array name
        // Condition 1: Description contains the search term (case-insensitive)
        const matchesSearch = t.description.toLowerCase().includes(searchTerm); // ← replace .description

        // Condition 2: Type matches dropdown, OR dropdown is "all" (show everything)
        const matchesType = filterType === "all" || t.type === filterType; // ← replace .type

        // BOTH must be true to keep the item
        return matchesSearch && matchesType;
    });
}
```

### Programmer Reminders
- This function does NOT modify `mainArray` — it returns a NEW filtered array
- Check index.html: Does `<input id="search-input">` exist?
- Check index.html: Does `<select id="filter-type">` exist with an `<option value="all">` option?
- `.toLowerCase()` must be used on BOTH the search term and the property being searched
- `.includes()` does partial matching — "sal" matches "Salary"

### Potential Output & Side Effects
- **Returns:** A new array (subset of `mainArray`) matching both search and filter criteria
- **No array mutation:** `mainArray` is not changed
- **No DOM changes:** This function only returns data — the caller (`renderItems`) handles DOM updates

---

## 9. startEdit — Find in Array and Populate Form

### Theoretical Overview
This function finds an item in the global array by its ID, sets the global `editingId` to that ID (switching from "add mode" to "edit mode"), and populates the form inputs with the item's current values so the user can modify them.

### How to Get the Job Done
1. Use `.find()` on `mainArray` to locate the item by ID
2. Guard: if no item found, return early
3. Set `editingId = id` to switch to edit mode
4. Set each form input's `.value` to the item's corresponding property
5. Update the submit button text from "Add" to "Update"
6. Show the cancel button

### Function Code

```javascript
// ============================================================
// Check index.html: Do these form input elements exist?
//   - Input with id="desc-input" for description
//   - Input with id="amount-input" for amount
//   - Select with id="type-select" for type
//   - Select with id="category-select" for category
//   - Button with id="submit-btn" (submit button text changes)
//   - Button with id="cancel-btn" (hidden by default, shown during edit)
// Requires: mainArray global variable, editingId global variable
// ============================================================

function startEdit(id) { // ← replace function name
    // Step 1: Find the item in the global array by matching .id
    // Searches mainArray[0].id, mainArray[1].id, etc.
    const item = mainArray.find(i => i.id === id); // ← replace array and .id
    if (!item) return; // Guard: item not found

    // Step 2: Set editing state to this item's ID (switches to edit mode)
    editingId = id; // ← replace variable name

    // Step 3: Populate form inputs with the item's current values
    document.getElementById("desc-input").value      = item.description; // ← replace ID and property
    document.getElementById("amount-input").value    = item.amount;      // ← replace ID and property
    document.getElementById("type-select").value     = item.type;        // ← replace ID and property
    document.getElementById("category-select").value = item.category;    // ← replace ID and property

    // Step 4: Update UI to show edit mode
    document.getElementById("submit-btn").textContent = "Update Item"; // ← replace ID
    const cancelBtn = document.getElementById("cancel-btn"); // ← replace ID
    if (cancelBtn) cancelBtn.style.display = "inline-block";
}
```

### Programmer Reminders
- Requires `mainArray` to contain data and `editingId` to be declared as `let`
- `.find()` returns the FIRST match or `undefined` if none found
- The form input IDs must EXACTLY match the IDs in your HTML
- After calling this function, the form submit handler should detect `editingId !== null` and call `updateItem()` instead of `addItem()`

### Potential Output & Side Effects
- **State change:** `editingId` changes from `null` to the item's ID
- **DOM changes:** Form inputs are populated; submit button text changes; cancel button appears
- **No array mutation:** `mainArray` is not modified

---

## 10. cancelEdit — Reset Edit State

### Theoretical Overview
This function resets the application from "edit mode" back to "add mode" by clearing `editingId`, resetting the form, and restoring the UI elements to their default state.

### How to Get the Job Done
1. Set `editingId = null` (back to add mode)
2. Call `.reset()` on the form element to clear all inputs
3. Restore the submit button text to "Add Item"
4. Hide the cancel button

### Function Code

```javascript
// ============================================================
// Check index.html: Does the form with id="item-form" exist?
// Requires: editingId global variable
// ============================================================

function cancelEdit() { // ← replace function name
    // Step 1: Reset editing state to null (back to add mode)
    editingId = null; // ← replace variable name

    // Step 2: Clear all form inputs
    document.getElementById("item-form").reset(); // ← replace form ID

    // Step 3: Restore UI to add mode
    document.getElementById("submit-btn").textContent = "Add Item"; // ← replace ID
    const cancelBtn = document.getElementById("cancel-btn"); // ← replace ID
    if (cancelBtn) cancelBtn.style.display = "none";
}
```

### Programmer Reminders
- Requires `editingId` to be declared as `let` at the top of the script
- `.reset()` clears all inputs in the form to their default HTML values
- The form ID must match the one in your HTML

### Potential Output & Side Effects
- **State change:** `editingId` changes from an ID value back to `null`
- **DOM changes:** Form inputs are cleared; submit button text restored; cancel button hidden
- **No array mutation:** `mainArray` is not modified

---

## 11. refreshAll — Re-run Summary and Render

### Theoretical Overview
A simple helper function that calls both `updateSummary()` and `renderItems()` in sequence. This is called after every data mutation (add, update, delete, load) to keep the UI in sync with the global array.

### How to Get the Job Done
1. Call `updateSummary()` to recalculate and display totals
2. Call `renderItems()` to re-render the list/table from the array

### Function Code

```javascript
// ============================================================
// Requires: updateSummary() and renderItems() functions to be defined
// ============================================================

function refreshAll() { // ← replace function name
    updateSummary();    // ← replace with your summary function name
    renderItems();      // ← replace with your render function name
}
```

### Programmer Reminders
- This function has no parameters and returns nothing
- It must be called after EVERY data change: load, add, update, delete
- Both `updateSummary()` and `renderItems()` must be defined before this is called

### Potential Output & Side Effects
- **DOM changes:** Summary values and the item list are fully re-rendered
- **No array mutation:** Only reads from `mainArray`

---

## 12. Form Submit Handler — Add/Update Branch

### Theoretical Overview
This event listener handles form submissions. It prevents the default page reload, extracts form data using `FormData`, converts numeric fields, then branches: if `editingId` is set, it calls `updateItem()`; otherwise it calls `addItem()`.

### How to Get the Job Done
1. Attach a "submit" event listener to the form element
2. Call `e.preventDefault()` to stop the page from reloading
3. Use `new FormData(e.target)` and `Object.fromEntries()` to extract all named inputs
4. Convert numeric fields with `Number()`
5. Branch: if `editingId` is truthy → update; else → add
6. After update, call `cancelEdit()` to reset form; after add, call `e.target.reset()`

### Function Code

```javascript
// ============================================================
// Check index.html: Does a <form id="item-form"> exist with named inputs?
// Requires: editingId, addItem(), updateItem(), cancelEdit() to be defined
// ============================================================

document.getElementById("item-form").addEventListener("submit", async (e) => { // ← replace form ID
    e.preventDefault(); // CRITICAL: prevent page reload

    // Step 1: Extract all named form inputs at once
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Step 2: Convert amount from string to number (VERY IMPORTANT)
    data.amount = Number(data.amount); // ← replace .amount with your numeric field name

    // Step 3: Branch between add and update based on editingId
    if (editingId) { // ← replace variable name
        // Edit mode — update the existing item
        await updateItem(editingId, data); // ← replace function name and variable
        cancelEdit(); // ← replace function name
    } else {
        // Add mode — create a new item
        await addItem(data); // ← replace function name
        e.target.reset(); // Clear the form after adding
    }
});
```

### Programmer Reminders
- `e.preventDefault()` is CRITICAL — without it, the page reloads and all array data is lost
- `FormData` requires `name` attributes on `<input>` and `<select>` elements in the HTML form
- `Number(data.amount)` converts the string "100" to the number 100 — without this, amounts concatenate as strings
- The function is `async` because `addItem()` and `updateItem()` are async

### Potential Output & Side Effects
- **Calls addItem or updateItem:** Which triggers API calls and array mutations
- **Form reset:** Either via `cancelEdit()` (edit mode) or `e.target.reset()` (add mode)
- **State change:** `editingId` may be reset to `null` via `cancelEdit()`

---

## 13. Event Listener Wiring

### Theoretical Overview
These event listeners connect DOM elements to their handler functions. They wire up the search input, filter dropdown, cancel button, and the initial page load.

### How to Get the Job Done
1. Call `loadItems()` at the bottom of the script to load data on page load
2. Add "input" listener on search box → triggers re-render on every keystroke
3. Add "change" listener on filter dropdown → triggers re-render on selection change
4. Add "click" listener on cancel button → calls `cancelEdit()`

### Function Code

```javascript
// ============================================================
// Check index.html: Do these elements exist?
//   - Input with id="search-input"
//   - Select with id="filter-type"
//   - Button with id="cancel-btn"
// ============================================================

// 1. Load data on page load — fires immediately
loadItems(); // ← replace function name

// 2. Search input — re-render on every keystroke
document.getElementById("search-input").addEventListener("input", renderItems); // ← replace ID and function

// 3. Filter dropdown — re-render when selection changes
document.getElementById("filter-type").addEventListener("change", renderItems); // ← replace ID and function

// 4. Cancel button — reset form to add mode
document.getElementById("cancel-btn").addEventListener("click", cancelEdit); // ← replace ID and function
```

### Programmer Reminders
- `loadItems()` must be called AFTER all functions are defined — place at the bottom of the script
- The "input" event fires on every keystroke; "change" fires when dropdown value changes
- Pass the function NAME without `()` — `renderItems` not `renderItems()`
- Check index.html: These element IDs must exist or the script will throw errors

### Potential Output & Side Effects
- **loadItems():** Immediately triggers an API fetch and renders data
- **Search/Filter:** Re-renders the list whenever the user types or changes the filter
- **Cancel button:** Resets the form to add mode

---

## 14. showDetails — Detail View from Array

### Theoretical Overview
This function finds an item in the global array by ID, hides the grid container, shows a detail container, and injects a detailed HTML view of the single item.

### How to Get the Job Done
1. Use `.find()` on `mainArray` to locate the item
2. Hide the grid container using `style.display = "none"`
3. Show the details container using `style.display = "block"`
4. Set the detail container's innerHTML to show all item properties

### Function Code

```javascript
// ============================================================
// Check index.html: Do these containers exist?
//   - Element with id="grid-container" (the main grid/table view)
//   - Element with id="details-container" (hidden by default, shown on click)
// Requires: mainArray global variable
// ============================================================

function showDetails(itemId) { // ← replace function name and param
    // Find the item in the global array by ID
    const item = mainArray.find(i => i.id === itemId); // ← replace array and .id
    if (!item) return;

    // Hide grid, show details
    document.getElementById("grid-container").style.display = "none"; // ← replace ID
    const detailsWrap = document.getElementById("details-container"); // ← replace ID
    detailsWrap.style.display = "block";

    // Build detailed view HTML
    detailsWrap.innerHTML = `
        <div class="detailed-card">
            <img src="${item.image}">                         <!-- ← replace property -->
            <h2>${item.title}</h2>                            <!-- ← replace property -->
            <p>Price: $${item.price}</p>                      <!-- ← replace property -->
            <p>${item.description}</p>                        <!-- ← replace property -->
            <button onclick="goBack()">Back To Home</button>  <!-- ← replace function name -->
        </div>
    `;
}
```

### Programmer Reminders
- Requires `mainArray` to contain data
- The detail container should be hidden by default (CSS: `display: none`)
- The "Back" button calls `goBack()` which must be defined

### Potential Output & Side Effects
- **DOM changes:** Grid is hidden, detail view is shown with item data
- **No array mutation:** Only reads from `mainArray`

---

## 15. goBack — Return to Grid View

### Theoretical Overview
Hides the detail view and shows the grid view again by toggling `style.display`.

### Function Code

```javascript
// ============================================================
// Check index.html: Do elements "details-container" and "grid-container" exist?
// ============================================================

function goBack() { // ← replace function name
    document.getElementById("details-container").style.display = "none";  // ← replace ID
    document.getElementById("grid-container").style.display = "block";    // ← replace ID
}
```

### Potential Output & Side Effects
- **DOM changes:** Details view hidden, grid view shown
- **No array mutation**

---

## 16. getFilteredItems with Sort — Sort & Filter the Array

### Theoretical Overview
An extended version of `getFilteredItems` that also sorts the result based on dropdown criteria (alphabetical by name, numerical by price, or filter by status).

### Function Code

```javascript
// ============================================================
// Check index.html: Does a <select id="sort-filter-dropdown"> exist?
// Requires: mainArray global variable
// ============================================================

function getFilteredItems() { // ← replace function name
    const criteria = document.getElementById("sort-filter-dropdown").value; // ← replace ID

    // Step 1: Filter
    let results = mainArray.filter(item => { // ← replace array name
        if (criteria === "all") return true;
        if (criteria === "available") return item.status === "in_stock"; // ← replace property and value
        return true;
    });

    // Step 2: Sort (applied after filter)
    if (criteria === "name") {
        results.sort((a, b) => a.name.localeCompare(b.name)); // ← replace .name property
    } else if (criteria === "price") {
        results.sort((a, b) => a.price - b.price); // ← replace .price property
    }

    return results;
}
```

### Potential Output & Side Effects
- **Returns:** A filtered and/or sorted copy of the data
- **No array mutation:** `.filter()` creates a new array; `.sort()` mutates the copy, not `mainArray`

---

## 17. addToSecondaryList — Push to a Secondary Array

### Theoretical Overview
Finds an item in the main array and pushes it to a separate secondary array (e.g., a wishlist). Checks for duplicates first.

### Function Code

```javascript
// ============================================================
// Requires: mainArray and secondaryArray global variables
// ============================================================

let secondaryArray = []; // ← replace name (e.g., wishlistArray)

function addToSecondaryList(itemId) { // ← replace function name and param
    // Check for duplicates in the secondary array
    const exists = secondaryArray.find(item => item.id === itemId); // ← replace array and .id
    if (exists) {
        alert("Already added!");
        return;
    }

    // Find from master array
    const itemToAdd = mainArray.find(item => item.id === itemId); // ← replace array and .id

    if (itemToAdd) {
        // Push to secondary array
        secondaryArray.push(itemToAdd); // ← replace array name
        alert("Added!");
    }
}
```

### Potential Output & Side Effects
- **Array mutation:** `secondaryArray` gets one new element via `.push()`
- **No persistence:** Data is lost on page refresh

---

## 18. removeFromSecondaryList — Filter from Secondary Array

### Theoretical Overview
Removes an item from the secondary array using `.filter()` and triggers a re-render.

### Function Code

```javascript
// ============================================================
// Requires: secondaryArray global variable (must be let), refreshAll() function
// ============================================================

function removeFromSecondaryList(itemId) { // ← replace function name and param
    // Filter out the removed item — creates a new array
    secondaryArray = secondaryArray.filter(item => item.id !== itemId); // ← replace .id

    // Re-render
    refreshAll(); // ← replace function name
}
```

### Potential Output & Side Effects
- **Array mutation:** `secondaryArray` is reassigned to a new, shorter array
- **DOM update:** `refreshAll()` re-renders the UI

---

## 19. handleAddSubmit — Local-Only Add via Form

### Theoretical Overview
Handles form submission to add a new item directly to the global array WITHOUT any API call. Uses `Date.now()` to generate a unique ID.

### Function Code

```javascript
// ============================================================
// Check index.html: Does a form with onsubmit="handleAddSubmit(event)" exist?
// Requires: mainArray global variable, refreshAll() function
// ============================================================

function handleAddSubmit(event) { // ← replace function name
    event.preventDefault();

    // Create new object from form inputs
    const newItem = {
        id: Date.now(), // Generate unique ID without server
        title: document.getElementById("add-title-input").value,         // ← replace ID
        price: Number(document.getElementById("add-price-input").value)  // ← replace ID
    };

    // Push to global array
    mainArray.push(newItem); // ← replace array name

    // Reset form and refresh
    document.getElementById("add-form").reset(); // ← replace form ID
    refreshAll(); // ← replace function name
}
```

### Potential Output & Side Effects
- **Array mutation:** One new item pushed to `mainArray`
- **No API call:** Data exists only in memory, lost on refresh
- **DOM update:** Form is cleared, UI is refreshed

---

## 20. handleEditSubmit — Local-Only Edit via Form

### Theoretical Overview
Handles form submission to update an existing item in the global array locally, without any API call. Uses `findIndex` to locate and mutate the item in-place.

### Function Code

```javascript
// ============================================================
// Check index.html: Does a form with onsubmit="handleEditSubmit(event)" exist?
// Requires: mainArray global variable, refreshAll() function
// ============================================================

function handleEditSubmit(event) { // ← replace function name
    event.preventDefault();

    // Read the ID of the item being edited
    const idToUpdate = Number(document.getElementById("edit-id-hidden").value); // ← replace ID
    const newTitle = document.getElementById("edit-title-input").value;          // ← replace ID
    const newPrice = Number(document.getElementById("edit-price-input").value);  // ← replace ID

    // Find the item's index in the global array
    const index = mainArray.findIndex(item => item.id === idToUpdate); // ← replace .id

    if (index !== -1) {
        // Mutate the item's properties directly at that index
        mainArray[index].title = newTitle; // ← replace properties
        mainArray[index].price = newPrice;
    }

    // Reset form and refresh
    document.getElementById("edit-form").reset(); // ← replace form ID
    refreshAll(); // ← replace function name
}
```

### Potential Output & Side Effects
- **Array mutation:** Properties of `mainArray[index]` are directly modified
- **No API call:** Changes are local only
- **DOM update:** Form is cleared, UI is refreshed

---

## 21. deleteItemLocal — Local-Only Delete

### Theoretical Overview
Removes an item from the global array locally without any API call. Shows confirmation first.

### Function Code

```javascript
// ============================================================
// Requires: mainArray global variable (must be let), refreshAll() function
// ============================================================

function deleteItemLocal(itemId) { // ← replace function name
    if (!confirm("Are you sure?")) return;

    // Filter out the deleted item
    mainArray = mainArray.filter(item => item.id !== itemId); // ← replace array and .id

    // Re-render
    refreshAll(); // ← replace function name
}
```

### Potential Output & Side Effects
- **Array mutation:** `mainArray` is reassigned to a new array without the deleted item
- **No API call:** Deletion is local only

---

## 22. loadSubCategory — Fetch by Dropdown Selection

### Theoretical Overview
Fetches a subset of data from the API based on a dropdown selection, replacing the global array with the new data.

### Function Code

```javascript
// ============================================================
// Check index.html: Does <select id="category-dropdown" onchange="loadSubCategory()"> exist?
// Requires: API_URL, mainArray, refreshAll()
// ============================================================

async function loadSubCategory() { // ← replace function name
    const targetValue = document.getElementById("category-dropdown").value; // ← replace ID
    if (!targetValue) return;

    try {
        const response = await fetch(`${API_URL}/category/${targetValue}`); // ← replace API route
        const data = await response.json();

        // Replace global array with new data
        mainArray = data; // ← replace array name
        refreshAll(); // ← replace function name
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}
```

### Potential Output & Side Effects
- **Array mutation:** `mainArray` is completely replaced with the new category-specific data
- **DOM update:** `refreshAll()` re-renders with the new data

---

*Version 1 — Global Array. No data persists across page refreshes. Last updated: April 2026.*
