# 📘 Version 2: localStorage — Complete Function Reference

> **State Management:** Every function in this file uses **localStorage** for storing, retrieving, and mutating application state. Data persists across page refreshes and browser restarts.

---

## 📑 Table of Contents

1. [localStorage Setup & Constants](#1-localstorage-setup--constants)
2. [loadItems — Fetch from API with localStorage Cache](#2-loaditems--fetch-from-api-with-localstorage-cache)
3. [updateSummary — Calculate Totals from localStorage](#3-updatesummary--calculate-totals-from-localstorage)
4. [renderItems — Render localStorage Data to DOM](#4-renderitems--render-localstorage-data-to-dom)
5. [addItem — POST to API and Save to localStorage](#5-additem--post-to-api-and-save-to-localstorage)
6. [updateItem — PUT to API and Update localStorage](#6-updateitem--put-to-api-and-update-localstorage)
7. [deleteItem — DELETE from API and Remove from localStorage](#7-deleteitem--delete-from-api-and-remove-from-localstorage)
8. [getFilteredItems — Search & Filter from localStorage](#8-getfiltereditems--search--filter-from-localstorage)
9. [startEdit — Find in localStorage and Populate Form](#9-startedit--find-in-localstorage-and-populate-form)
10. [cancelEdit — Reset Edit State](#10-canceledit--reset-edit-state)
11. [refreshAll — Re-run Summary and Render](#11-refreshall--re-run-summary-and-render)
12. [Form Submit Handler — Add/Update Branch](#12-form-submit-handler--addupdate-branch)
13. [Event Listener Wiring](#13-event-listener-wiring)
14. [clearAll — Remove Data from localStorage](#14-clearall--remove-data-from-localstorage)
15. [showDetails — Detail View from localStorage](#15-showdetails--detail-view-from-localstorage)
16. [goBack — Return to Grid View](#16-goback--return-to-grid-view)
17. [getFilteredItems with Sort — Sort & Filter from localStorage](#17-getfiltereditems-with-sort--sort--filter-from-localstorage)
18. [addToSecondaryList — Push to localStorage Secondary List](#18-addtosecondarylist--push-to-localstorage-secondary-list)
19. [removeFromSecondaryList — Filter from localStorage Secondary List](#19-removefromsecondarylist--filter-from-localstorage-secondary-list)
20. [handleAddSubmit — Local-Only Add and Save to localStorage](#20-handleaddsubmit--local-only-add-and-save-to-localstorage)
21. [handleEditSubmit — Local-Only Edit and Save to localStorage](#21-handleeditsubmit--local-only-edit-and-save-to-localstorage)
22. [deleteItemLocal — Local-Only Delete from localStorage](#22-deleteitemlocal--local-only-delete-from-localstorage)
23. [loadSubCategory — Fetch by Dropdown and Cache in localStorage](#23-loadsubcategory--fetch-by-dropdown-and-cache-in-localstorage)
24. [Count Items in localStorage](#24-count-items-in-localstorage)

---

## localStorage Critical Rules

```javascript
// localStorage ONLY stores STRINGS — always stringify when saving
localStorage.setItem("myKey", JSON.stringify(dataArray));

// Always parse when loading — with fallback to empty array
const data = JSON.parse(localStorage.getItem("myKey") || "[]");

// Remove one key
localStorage.removeItem("myKey");

// Remove ALL keys
localStorage.clear();
```

**Key facts:**
- Class instances LOSE their methods when stored — they come back as plain objects
- Data survives page refreshes and browser restarts
- Each key stores ONE string — use `JSON.stringify` for arrays/objects

---

## 1. localStorage Setup & Constants

### Theoretical Overview
In Version 2, the global array is loaded from localStorage at startup. A storage key constant identifies where data is saved. The `editingId` variable still uses a regular `let` since it's session-only state.

### How to Get the Job Done
1. Define your `API_URL` constant with the endpoint string.
2. Define a `STORAGE_KEY` constant for the localStorage key name.
3. Load the initial array from localStorage using `JSON.parse` with a fallback to `[]`.
4. Declare `editingId` as `let` for session-only edit tracking.

### Function Code

```javascript
// ============================================================
// SETUP — All functions read/write localStorage using this key
// Check index.html: Does <script src="js/app.js"></script> exist at bottom of <body>?
// ============================================================

// API endpoint — replace the URL string with your actual API endpoint
const API_URL = "https://your-api-endpoint.com/items"; // ← replace URL string

// localStorage key — this string identifies where data is stored in the browser
// localStorage key name: "app_items_data"
const STORAGE_KEY = "app_items_data"; // ← replace key string (keep the quotes!)

// Load initial data from localStorage — persists across page refreshes
// Expected data structure: JSON array of objects, e.g., [{"id":1,"description":"...","amount":100}, ...]
let mainArray = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); // ← replace "mainArray"

// Editing state — null means "add mode", a number means "edit mode for that ID"
// This is session-only (resets on refresh) — not stored in localStorage
let editingId = null; // ← replace "editingId"
```

### Programmer Reminders
- `STORAGE_KEY` is a `const` string — it's the key name used in all `localStorage.setItem()` and `localStorage.getItem()` calls
- `JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")` safely handles the case where nothing is stored yet (returns empty array)
- `mainArray` is `let` because it gets reassigned during delete/load operations
- `editingId` is NOT stored in localStorage — it resets to `null` on every page refresh

### Potential Output & Side Effects
- **On first visit:** `localStorage.getItem(STORAGE_KEY)` returns `null`, so `mainArray` starts as `[]`
- **On return visit:** `mainArray` starts with the previously saved data
- Data persists until the user clears it or calls `localStorage.removeItem(STORAGE_KEY)`

---

## 2. loadItems — Fetch from API with localStorage Cache

### Theoretical Overview
This async function first checks localStorage for cached data. If found, it uses the cache and skips the API call. If no cache exists, it fetches from the API, stores the result in both the global array and localStorage, then refreshes the UI.

### How to Get the Job Done
1. Check if localStorage already has data for `STORAGE_KEY`
2. If cached data exists: parse it, store in `mainArray`, refresh, and STOP
3. If no cache: fetch from API, parse the response
4. Store the fetched data in `mainArray`
5. Save to localStorage using `JSON.stringify`
6. Call `refreshAll()` to update the UI

### Function Code

```javascript
// ============================================================
// Check index.html: Does an element exist to display status messages?
// Requires: API_URL, STORAGE_KEY constants, mainArray global variable, refreshAll() function
// localStorage key used: STORAGE_KEY (reads and writes)
// Expected data structure: JSON array of objects stored under STORAGE_KEY
// ============================================================

async function loadItems() { // ← replace function name
    try {
        // Step 1: Check localStorage cache FIRST (asked in past exams)
        // localStorage key: STORAGE_KEY — expected value: JSON string of array
        const cachedData = localStorage.getItem(STORAGE_KEY); // ← replace STORAGE_KEY
        if (cachedData) {
            // Cache HIT — parse and use cached data, skip API call
            mainArray = JSON.parse(cachedData); // ← replace "mainArray"
            refreshAll(); // ← replace function name
            return; // STOP — no API call needed
        }

        // Step 2: Cache MISS — fetch from API
        const response = await fetch(API_URL); // ← replace API_URL
        const data = await response.json();

        // Step 3: Store in global array
        mainArray = data; // ← replace "mainArray"

        // Step 4: Save to localStorage for next visit
        // localStorage key: STORAGE_KEY — value: JSON.stringify of the full array
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray)); // ← replace STORAGE_KEY and array name

        // Step 5: Refresh the UI
        refreshAll(); // ← replace function name
    } catch (err) {
        console.error("Load failed:", err);
    }
}
```

### Programmer Reminders
- The cache check (`localStorage.getItem(STORAGE_KEY)`) must be FIRST — before the fetch
- If cached data exists, the function returns early — the API is never called
- `JSON.stringify(mainArray)` converts the array to a string for storage
- `JSON.parse(cachedData)` converts the string back to an array
- This caching pattern is explicitly asked in past exams (Gaming Store, Online Store)

### Potential Output & Side Effects
- **localStorage read:** Checks `STORAGE_KEY` for existing data
- **localStorage write:** Saves fetched data under `STORAGE_KEY` (only on cache miss)
- **Array mutation:** `mainArray` is replaced with either cached or fetched data
- **DOM update:** `refreshAll()` renders the data
- **On return visits:** API is never called — data loads instantly from cache

---

## 3. updateSummary — Calculate Totals from localStorage

### Theoretical Overview
Reads the global array (which was loaded from localStorage), filters for income and expense items, reduces each to a total, and updates DOM elements. The logic is identical to Version 1 — the difference is that `mainArray` was populated from localStorage at startup.

### How to Get the Job Done
1. Filter `mainArray` (loaded from localStorage) for income items, then reduce to sum
2. Filter for expense items, then reduce to sum
3. Calculate balance
4. Update DOM elements
5. Color the balance element

### Function Code

```javascript
// ============================================================
// Check index.html: Do elements with these IDs exist?
//   - "total-income", "total-expenses", "total-balance"
// Requires: mainArray global variable (loaded from localStorage at startup)
// localStorage key used: none (reads from mainArray which mirrors localStorage)
// ============================================================

function updateSummary() { // ← replace function name
    // mainArray mirrors localStorage — any data displayed was loaded from STORAGE_KEY
    const totalIncome = mainArray // ← replace array name
        .filter(t => t.type === "income") // ← replace .type and "income"
        .reduce((total, t) => total + t.amount, 0); // ← replace .amount

    const totalExpenses = mainArray // ← replace array name
        .filter(t => t.type === "expense") // ← replace "expense"
        .reduce((total, t) => total + t.amount, 0); // ← replace .amount

    const balance = totalIncome - totalExpenses;

    // Update DOM
    document.getElementById("total-income").textContent   = totalIncome.toLocaleString()   + " QAR"; // ← replace ID and currency
    document.getElementById("total-expenses").textContent = totalExpenses.toLocaleString() + " QAR";
    document.getElementById("total-balance").textContent  = balance.toLocaleString()       + " QAR";

    // Color the balance
    const balanceEl = document.getElementById("total-balance"); // ← replace ID
    balanceEl.classList.remove("text-success", "text-danger");
    balanceEl.classList.add(balance >= 0 ? "text-success" : "text-danger");
}
```

### Programmer Reminders
- `mainArray` was loaded from localStorage at startup or via `loadItems()` — it mirrors what is in `STORAGE_KEY`
- This function does NOT read from localStorage directly — it reads from the in-memory mirror
- Check index.html: Do elements `#total-income`, `#total-expenses`, `#total-balance` exist?

### Potential Output & Side Effects
- **DOM changes:** Three text elements updated, balance colored
- **No localStorage changes:** This function only READS from `mainArray`

---

## 4. renderItems — Render localStorage Data to DOM

### Theoretical Overview
Maps the array (mirroring localStorage) to HTML rows and injects them into the DOM container. Calls `getFilteredItems()` first to apply search/filter.

### Function Code

```javascript
// ============================================================
// Check index.html: Does <tbody id="item-container"> exist?
// Requires: mainArray (mirroring localStorage), getFilteredItems() function
// localStorage key used: none directly (reads from mainArray which mirrors STORAGE_KEY)
// ============================================================

function renderItems() { // ← replace function name
    // Get filtered data from the array (which mirrors localStorage)
    const filtered = getFilteredItems(); // ← replace filter function name, or just use: mainArray
    const container = document.getElementById("item-container"); // ← replace ID

    if (filtered.length === 0) {
        container.innerHTML = `<tr><td colspan="5" class="empty-message">No items found</td></tr>`;
        return;
    }

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

### Potential Output & Side Effects
- **DOM changes:** Container innerHTML replaced with rendered rows
- **No localStorage changes**

---

## 5. addItem — POST to API and Save to localStorage

### Theoretical Overview
Sends a POST request to the API, receives the created item, pushes it to `mainArray`, saves the updated array to localStorage, and refreshes the UI.

### Function Code

```javascript
// ============================================================
// Requires: API_URL, STORAGE_KEY, mainArray, refreshAll()
// localStorage key used: STORAGE_KEY (writes after adding)
// Expected data structure: JSON array — new item appended at end
// ============================================================

async function addItem(data) { // ← replace function name
    try {
        const response = await fetch(API_URL, { // ← replace API_URL
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const created = await response.json();

        // Push to in-memory array
        mainArray.push(created); // ← replace array name

        // SAVE to localStorage — persist the addition
        // localStorage key: STORAGE_KEY — value: full array as JSON string
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray)); // ← replace STORAGE_KEY and array

        refreshAll(); // ← replace function name
    } catch (error) { console.error("Add error:", error); }
}
```

### Programmer Reminders
- After every mutation (add/update/delete), you MUST save to localStorage
- `localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray))` is the persist step

### Potential Output & Side Effects
- **Array mutation:** One new item pushed to `mainArray`
- **localStorage write:** Updated array saved under `STORAGE_KEY`
- **API side effect:** New record created on server
- **Persists across refresh:** The new item will still be there after page reload

---

## 6. updateItem — PUT to API and Update localStorage

### Theoretical Overview
Sends a PUT request, replaces the item in `mainArray`, saves the updated array to localStorage, and refreshes the UI.

### Function Code

```javascript
// ============================================================
// Requires: API_URL, STORAGE_KEY, mainArray, refreshAll()
// localStorage key used: STORAGE_KEY (writes after updating)
// ============================================================

async function updateItem(id, data) { // ← replace function name
    try {
        const response = await fetch(`${API_URL}/${id}`, { // ← replace API_URL
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const updated = await response.json();

        // Replace in in-memory array
        const index = mainArray.findIndex(t => t.id === id); // ← replace array and .id
        if (index !== -1) mainArray[index] = updated; // ← replace array

        // SAVE to localStorage — persist the update
        // localStorage key: STORAGE_KEY — value: full array as JSON string
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray)); // ← replace STORAGE_KEY and array

        refreshAll(); // ← replace function name
    } catch (error) { console.error("Update error:", error); }
}
```

### Potential Output & Side Effects
- **Array mutation:** One element in `mainArray` replaced
- **localStorage write:** Updated array saved under `STORAGE_KEY`
- **API side effect:** Record updated on server
- **Persists across refresh:** The update remains after page reload

---

## 7. deleteItem — DELETE from API and Remove from localStorage

### Theoretical Overview
Sends a DELETE request, filters the item from `mainArray`, saves the shorter array to localStorage, and refreshes the UI.

### Function Code

```javascript
// ============================================================
// Requires: API_URL, STORAGE_KEY, mainArray (must be let), refreshAll()
// localStorage key used: STORAGE_KEY (writes after deleting)
// ============================================================

async function deleteItem(id) { // ← replace function name
    if (!confirm("Are you sure?")) return;

    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" }); // ← replace API_URL

        // Remove from in-memory array
        mainArray = mainArray.filter(t => t.id !== id); // ← replace array and .id

        // SAVE to localStorage — persist the deletion
        // localStorage key: STORAGE_KEY — value: full array as JSON string (now shorter)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray)); // ← replace STORAGE_KEY and array

        refreshAll(); // ← replace function name
    } catch (error) { console.error("Delete error:", error); }
}
```

### Potential Output & Side Effects
- **Array mutation:** `mainArray` reassigned to a new array without the deleted item
- **localStorage write:** Updated (shorter) array saved under `STORAGE_KEY`
- **API side effect:** Record permanently deleted from server
- **Persists across refresh:** The item stays deleted after page reload

---

## 8. getFilteredItems — Search & Filter from localStorage

### Theoretical Overview
Identical to Version 1 — reads from `mainArray` (which mirrors localStorage). Applies search and type filter.

### Function Code

```javascript
// ============================================================
// Check index.html: Do "search-input" and "filter-type" elements exist?
// Requires: mainArray (mirroring localStorage data under STORAGE_KEY)
// localStorage key used: none directly
// ============================================================

function getFilteredItems() { // ← replace function name
    const searchTerm = document.getElementById("search-input").value.toLowerCase(); // ← replace ID
    const filterType = document.getElementById("filter-type").value; // ← replace ID

    // Filter the array (which mirrors localStorage data)
    return mainArray.filter(t => { // ← replace array name
        const matchesSearch = t.description.toLowerCase().includes(searchTerm); // ← replace .description
        const matchesType = filterType === "all" || t.type === filterType; // ← replace .type
        return matchesSearch && matchesType;
    });
}
```

### Potential Output & Side Effects
- **Returns:** A filtered subset of `mainArray` (which mirrors localStorage)
- **No localStorage or array mutation**

---

## 9. startEdit — Find in localStorage and Populate Form

### Theoretical Overview
Finds an item in `mainArray` (mirroring localStorage) by ID and populates the form for editing.

### Function Code

```javascript
// ============================================================
// Check index.html: Do form inputs "desc-input", "amount-input", "type-select", "category-select" exist?
// Requires: mainArray (mirroring localStorage), editingId
// localStorage key used: none (reads from mainArray)
// ============================================================

function startEdit(id) { // ← replace function name
    // Find item in array (which mirrors localStorage data under STORAGE_KEY)
    const item = mainArray.find(i => i.id === id); // ← replace array and .id
    if (!item) return;

    editingId = id; // ← replace variable name

    // Populate form
    document.getElementById("desc-input").value      = item.description; // ← replace ID and property
    document.getElementById("amount-input").value    = item.amount;
    document.getElementById("type-select").value     = item.type;
    document.getElementById("category-select").value = item.category;

    // Update UI for edit mode
    document.getElementById("submit-btn").textContent = "Update Item"; // ← replace ID
    const cancelBtn = document.getElementById("cancel-btn"); // ← replace ID
    if (cancelBtn) cancelBtn.style.display = "inline-block";
}
```

### Potential Output & Side Effects
- **State change:** `editingId` set to the item's ID
- **DOM changes:** Form inputs populated, button text changed, cancel button shown
- **No localStorage changes**

---

## 10. cancelEdit — Reset Edit State

### Function Code

```javascript
// ============================================================
// Check index.html: Does <form id="item-form"> exist?
// ============================================================

function cancelEdit() { // ← replace function name
    editingId = null; // ← replace variable name
    document.getElementById("item-form").reset(); // ← replace form ID

    document.getElementById("submit-btn").textContent = "Add Item"; // ← replace ID
    const cancelBtn = document.getElementById("cancel-btn"); // ← replace ID
    if (cancelBtn) cancelBtn.style.display = "none";
}
```

---

## 11. refreshAll — Re-run Summary and Render

### Function Code

```javascript
function refreshAll() { // ← replace function name
    updateSummary();    // ← replace function name
    renderItems();      // ← replace function name
}
```

---

## 12. Form Submit Handler — Add/Update Branch

### Function Code

```javascript
// ============================================================
// Check index.html: Does <form id="item-form"> exist with named inputs?
// ============================================================

document.getElementById("item-form").addEventListener("submit", async (e) => { // ← replace form ID
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.amount = Number(data.amount); // ← replace .amount with your numeric field

    if (editingId) { // ← replace variable name
        await updateItem(editingId, data); // ← replace function name
        cancelEdit(); // ← replace function name
    } else {
        await addItem(data); // ← replace function name
        e.target.reset();
    }
});
```

---

## 13. Event Listener Wiring

### Function Code

```javascript
// ============================================================
// Check index.html: Do "search-input", "filter-type", "cancel-btn" elements exist?
// ============================================================

// Load data — checks localStorage cache first, then API fallback
loadItems(); // ← replace function name

// On startup: also render whatever is already in localStorage
// (mainArray was loaded from localStorage at declaration time)
refreshAll(); // ← replace function name

// Search — re-render on keystroke
document.getElementById("search-input").addEventListener("input", renderItems); // ← replace IDs/functions

// Filter — re-render on change
document.getElementById("filter-type").addEventListener("change", renderItems); // ← replace IDs/functions

// Cancel — reset edit mode
document.getElementById("cancel-btn").addEventListener("click", cancelEdit); // ← replace IDs/functions
```

### Programmer Reminders
- `refreshAll()` is called at startup to immediately render data loaded from localStorage
- `loadItems()` then checks if fresher data should be fetched from the API

### Potential Output & Side Effects
- **On startup:** Data from localStorage is rendered immediately, then API may update it

---

## 14. clearAll — Remove Data from localStorage

### Theoretical Overview
Removes the data from both the global array and localStorage, then refreshes the UI.

### Function Code

```javascript
// ============================================================
// Check index.html: Does a button with id="clear-btn" exist?
// localStorage key used: STORAGE_KEY (removed)
// ============================================================

document.getElementById("clear-btn").addEventListener("click", () => { // ← replace ID
    // Remove from localStorage
    // localStorage key: STORAGE_KEY — this key is completely removed
    localStorage.removeItem(STORAGE_KEY); // ← replace STORAGE_KEY

    // Reset in-memory array
    mainArray = []; // ← replace array name

    // Refresh UI (will show empty state)
    refreshAll(); // ← replace function name
});
```

### Potential Output & Side Effects
- **localStorage deletion:** `STORAGE_KEY` is removed — data will not persist
- **Array mutation:** `mainArray` set to empty array
- **DOM update:** UI shows empty state

---

## 15. showDetails — Detail View from localStorage

### Function Code

```javascript
// ============================================================
// Requires: mainArray (mirroring localStorage data under STORAGE_KEY)
// ============================================================

function showDetails(itemId) { // ← replace function name
    // Find in array (which mirrors localStorage)
    const item = mainArray.find(i => i.id === itemId); // ← replace array and .id
    if (!item) return;

    document.getElementById("grid-container").style.display = "none"; // ← replace ID
    const detailsWrap = document.getElementById("details-container"); // ← replace ID
    detailsWrap.style.display = "block";

    detailsWrap.innerHTML = `
        <div class="detailed-card">
            <img src="${item.image}">               <!-- ← replace property -->
            <h2>${item.title}</h2>                  <!-- ← replace property -->
            <p>Price: $${item.price}</p>            <!-- ← replace property -->
            <button onclick="goBack()">Back</button> <!-- ← replace function name -->
        </div>
    `;
}
```

---

## 16. goBack — Return to Grid View

### Function Code

```javascript
function goBack() { // ← replace function name
    document.getElementById("details-container").style.display = "none";  // ← replace ID
    document.getElementById("grid-container").style.display = "block";    // ← replace ID
}
```

---

## 17. getFilteredItems with Sort — Sort & Filter from localStorage

### Function Code

```javascript
// ============================================================
// Requires: mainArray (mirroring localStorage data under STORAGE_KEY)
// ============================================================

function getFilteredItems() { // ← replace function name
    const criteria = document.getElementById("sort-filter-dropdown").value; // ← replace ID

    let results = mainArray.filter(item => { // ← replace array name
        if (criteria === "all") return true;
        if (criteria === "available") return item.status === "in_stock"; // ← replace property and value
        return true;
    });

    if (criteria === "name") {
        results.sort((a, b) => a.name.localeCompare(b.name)); // ← replace .name
    } else if (criteria === "price") {
        results.sort((a, b) => a.price - b.price); // ← replace .price
    }

    return results;
}
```

---

## 18. addToSecondaryList — Push to localStorage Secondary List

### Theoretical Overview
Maintains a secondary list (e.g., wishlist) entirely in localStorage. Checks for duplicates, pushes the item, and saves immediately.

### Function Code

```javascript
// ============================================================
// localStorage key used: "secondary_list_key" (reads AND writes)
// Expected data structure: JSON array of objects
// Requires: mainArray (to find the item to add)
// ============================================================

// localStorage key for secondary list
const SECONDARY_KEY = "secondary_list_key"; // ← replace key string (keep quotes!)

// Load secondary list from localStorage at startup
let secondaryArray = JSON.parse(localStorage.getItem(SECONDARY_KEY) || "[]"); // ← replace name

function addToSecondaryList(itemId) { // ← replace function name
    // Check for duplicates in the secondary list
    const exists = secondaryArray.find(item => item.id === itemId); // ← replace array and .id
    if (exists) {
        alert("Already added!");
        return;
    }

    // Find from master array (mirrors main localStorage data)
    const itemToAdd = mainArray.find(item => item.id === itemId); // ← replace array and .id

    if (itemToAdd) {
        // Push to secondary array
        secondaryArray.push(itemToAdd); // ← replace array name

        // SAVE to localStorage — persist the secondary list
        // localStorage key: SECONDARY_KEY — value: full secondary array as JSON string
        localStorage.setItem(SECONDARY_KEY, JSON.stringify(secondaryArray)); // ← replace key and array

        alert("Added!");
    }
}
```

### Potential Output & Side Effects
- **Array mutation:** `secondaryArray` gets one new element
- **localStorage write:** Secondary list saved under `SECONDARY_KEY`
- **Persists across refresh:** The item stays in the secondary list

---

## 19. removeFromSecondaryList — Filter from localStorage Secondary List

### Function Code

```javascript
// ============================================================
// localStorage key used: SECONDARY_KEY (writes after removing)
// ============================================================

function removeFromSecondaryList(itemId) { // ← replace function name
    // Filter out the item
    secondaryArray = secondaryArray.filter(item => item.id !== itemId); // ← replace .id

    // SAVE to localStorage — persist the removal
    // localStorage key: SECONDARY_KEY — value: updated secondary array
    localStorage.setItem(SECONDARY_KEY, JSON.stringify(secondaryArray)); // ← replace key and array

    refreshAll(); // ← replace function name
}
```

### Potential Output & Side Effects
- **Array mutation:** `secondaryArray` reassigned without the removed item
- **localStorage write:** Shorter array saved under `SECONDARY_KEY`

---

## 20. handleAddSubmit — Local-Only Add and Save to localStorage

### Theoretical Overview
Adds a new item locally (no API call) and saves the updated array to localStorage.

### Function Code

```javascript
// ============================================================
// localStorage key used: STORAGE_KEY (writes after adding)
// Check index.html: Does the form with add inputs exist?
// ============================================================

function handleAddSubmit(event) { // ← replace function name
    event.preventDefault();

    const newItem = {
        id: Date.now(), // Generate unique ID without server
        title: document.getElementById("add-title-input").value,         // ← replace ID
        price: Number(document.getElementById("add-price-input").value)  // ← replace ID
    };

    // Push to in-memory array
    mainArray.push(newItem); // ← replace array name

    // SAVE to localStorage — persist the new item
    // localStorage key: STORAGE_KEY — value: full array as JSON string
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray)); // ← replace key and array

    document.getElementById("add-form").reset(); // ← replace form ID
    refreshAll(); // ← replace function name
}
```

### Potential Output & Side Effects
- **Array mutation:** New item pushed to `mainArray`
- **localStorage write:** Full array saved under `STORAGE_KEY`
- **No API call:** Data is local only but persists via localStorage

---

## 21. handleEditSubmit — Local-Only Edit and Save to localStorage

### Function Code

```javascript
// ============================================================
// localStorage key used: STORAGE_KEY (writes after editing)
// ============================================================

function handleEditSubmit(event) { // ← replace function name
    event.preventDefault();

    const idToUpdate = Number(document.getElementById("edit-id-hidden").value); // ← replace ID
    const newTitle = document.getElementById("edit-title-input").value;          // ← replace ID
    const newPrice = Number(document.getElementById("edit-price-input").value);  // ← replace ID

    const index = mainArray.findIndex(item => item.id === idToUpdate); // ← replace .id

    if (index !== -1) {
        mainArray[index].title = newTitle; // ← replace properties
        mainArray[index].price = newPrice;
    }

    // SAVE to localStorage — persist the edit
    // localStorage key: STORAGE_KEY — value: full array with updated item
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray)); // ← replace key and array

    document.getElementById("edit-form").reset(); // ← replace form ID
    refreshAll(); // ← replace function name
}
```

### Potential Output & Side Effects
- **Array mutation:** Properties of `mainArray[index]` directly modified
- **localStorage write:** Full array (with updated values) saved under `STORAGE_KEY`

---

## 22. deleteItemLocal — Local-Only Delete from localStorage

### Function Code

```javascript
// ============================================================
// localStorage key used: STORAGE_KEY (writes after deleting)
// Requires: mainArray (must be let), refreshAll()
// ============================================================

function deleteItemLocal(itemId) { // ← replace function name
    if (!confirm("Are you sure?")) return;

    // Filter out the deleted item
    mainArray = mainArray.filter(item => item.id !== itemId); // ← replace array and .id

    // SAVE to localStorage — persist the deletion
    // localStorage key: STORAGE_KEY — value: shorter array without deleted item
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray)); // ← replace key and array

    refreshAll(); // ← replace function name
}
```

### Potential Output & Side Effects
- **Array mutation:** `mainArray` reassigned without the deleted item
- **localStorage write:** Shorter array saved under `STORAGE_KEY`
- **Persists across refresh:** The item stays deleted

---

## 23. loadSubCategory — Fetch by Dropdown and Cache in localStorage

### Function Code

```javascript
// ============================================================
// localStorage key used: STORAGE_KEY (writes after fetching)
// Check index.html: Does <select id="category-dropdown" onchange="loadSubCategory()"> exist?
// ============================================================

async function loadSubCategory() { // ← replace function name
    const targetValue = document.getElementById("category-dropdown").value; // ← replace ID
    if (!targetValue) return;

    try {
        const response = await fetch(`${API_URL}/category/${targetValue}`); // ← replace API route
        const data = await response.json();

        // Replace global array
        mainArray = data; // ← replace array name

        // SAVE to localStorage — cache the new category data
        // localStorage key: STORAGE_KEY — value: new data as JSON string
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mainArray)); // ← replace key and array

        refreshAll(); // ← replace function name
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}
```

---

## 24. Count Items in localStorage

### Theoretical Overview
Reads the array from localStorage and displays the count of items.

### Function Code

```javascript
// ============================================================
// Check index.html: Do "count-btn" and "storage-output" elements exist?
// localStorage key used: STORAGE_KEY (read-only)
// ============================================================

document.getElementById("count-btn").addEventListener("click", () => { // ← replace ID
    // Read from mainArray (which mirrors localStorage under STORAGE_KEY)
    document.getElementById("storage-output").textContent = // ← replace ID
        `${mainArray.length} items saved`;
});
```

### Potential Output & Side Effects
- **DOM changes:** Count text displayed in the output element
- **No localStorage changes:** Read-only operation

---

## Quick Reference: localStorage Key Map

| Key Name | What It Stores | When Written | When Read |
|---|---|---|---|
| `STORAGE_KEY` | Main data array (`[{id, description, amount, type, category}, ...]`) | After every add, update, delete, load | On page startup, on `loadItems()` cache check |
| `SECONDARY_KEY` | Secondary list array (e.g., wishlist) | After every add/remove to secondary list | On page startup |

---

*Version 2 — localStorage. Data persists across page refreshes and browser restarts. Last updated: April 2026.*
