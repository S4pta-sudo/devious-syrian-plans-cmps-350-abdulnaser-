# 📘 Web Development Past Midterms Reference Library

> **How to use:** This file provides the solutions to past midterm concepts (Wishlists, Details views, Sort/Filter) exactly using the specific methods, logic, and standard patterns taught in **Lab 9 (Practice Session)**. There are NO advanced syntaxes or "weird" codes. It follows your previous lab assignments literally line-by-line.

---

## 🧠 The Universal Midterm Pattern (4 Core Steps)
> After analyzing every single past midterm PDF (Online Store, Crypto Tracker, Gaming Store), they **all** follow this exact 4-step structure. Identify which specific variation your exam is using, and copy the required functions!

### STEP 1: Fetching & Caching [20-30 pts]
* **The Task:** When the page loads, get data from an API and show it. 
* **The Catch:** *Almost all* exams explicitly ask you to check if data exists in LocalStorage first. If it does, use it. If not, fetch it from the API and save it to LocalStorage.
* **Needs:** `loadItems()` (with the conditional cache check included in Section 1).

### STEP 2: Rendering [20-30 pts]
* **The Task:** Display the data visually (usually in a responsive Grid of cards, or sometimes a Dropdown).
* **Needs:** `renderGrid()` (Section 3).

### STEP 3: Sorting & Filtering [15-20 pts]
* **The Task:** Provide a Dropdown menu that sorts (Alphabetical/Price) or filters (Availability) the data.
* **Needs:** `getFilteredItems()` running inside your render function (Section 2).

### STEP 4: Modifying Local Data [25-30 pts]
* **The Task:** You must provide a way for the user to mutate the local data and save it back to LocalStorage permanently. Exams ask for one of three variations:
  * **Variation A (Wishlists):** Click "Add", push to a new array, show Wishlist. → **Needs:** `addToWishlist()`, `removeItem()`
  * **Variation B (Forms):** A form to Add a NEW product, or Edit an EXISTING product. → **Needs:** `handleAddSubmit()`, `handleEditSubmit()`
  * **Variation C (Details/Delete):** Click "Details" to view one item, or click "Delete" to wipe it locally. → **Needs:** `showDetails()`, `deleteItem()`

---

## 📑 Table of Contents

1. [Initial Data Fetch (with Local Storage saving)](#1-initial-data-fetch-with-local-storage-saving)
2. [Sorting & Filtering (Integrated exactly like Lab 9)](#2-sorting--filtering-integrated-exactly-like-lab-9)
3. [Grid Rendering & Details View (View Swapping)](#3-grid-rendering--details-view-view-swapping)
4. [Dependent Dropdown (Fetch on Select)](#4-dependent-dropdown-fetch-on-select)
5. [Wishlist (LocalStorage Add & Remove)](#5-wishlist-localstorage-add--remove)
6. [Update Form Logic (Local Only)](#6-update-form-logic-local-only)

---

## 1. Initial Data Fetch (with Local Storage saving)

> **Context:** If the exam asks to cache to local storage without an API updating route. Follows loadTransactions() from Lab 9.

```javascript
// SETUP REQUIRED:
// - Replace API_URL
// - Replace mainArray with your generic global array variable
// - Replace refreshAll with your render function

const API_URL = "https://your-api-url..."; // ← replace URL (keep the quotes!)
let mainArray = [];                        // ← replace global array name (no quotes)

    /**
 * Fetch from API OR Load from Cache
 */
async function loadItems() {               // ← replace function name
    try {
        // 1. Critical Step: Check cache first (Asked in Gaming Store & Online Store)
        const cachedData = localStorage.getItem("my_cache_key"); // ← replace "my_cache_key" (keep the quotes!)
        if (cachedData) {
            mainArray = JSON.parse(cachedData); // ← replace mainArray (no quotes)
            refreshAll();                       // ← replace function name
            return; // STOP execution, we found it in cache!
        }

        // 2. If no cache, fetch from API
        const response = await fetch(API_URL); // ← replace API_URL variable (no quotes)
        const data = await response.json();
        
        mainArray = data;                  // ← replace array name (no quotes)

        // 3. Save to LocalStorage immediately for next visit
        localStorage.setItem("my_cache_key", JSON.stringify(mainArray)); // ← replace "my_cache_key" (keep the quotes!)

        refreshAll();                      // ← replace function name
    } catch (err) {
        console.error("Load failed:", err);
    }
}
```

---

## 2. Sorting & Filtering (Integrated exactly like Lab 9)

> **Context:** In Lab 9, the Teacher uses a `getFiltered...` function that runs immediately inside the rendering function. Do NOT use fancy inline event listeners.

```javascript
// SETUP REQUIRED:
// - Replace "sortFilterDropdown" 
// - Replace mainArray
// - Replace property conditions

    /**
 * Search, filter, and sort algorithm
 */
function getFilteredItems() {                                     // ← replace function name
    const criteria = document.getElementById("sortFilterDropdown").value; // ← replace ID (keep the quotes!)
    
    // Start with filter logic exactly like Lab 9
    let results = mainArray.filter(item => {                      // ← replace mainArray (no quotes)
        if (criteria === "all") return true;                      // ← replace "all" (keep quotes if it's text)
        if (criteria === "available") return item.status === "in_stock"; // ← replace properties (no quotes) and values (keep quotes string values!)
        return true; 
    });

    // Add sort logic at the bottom if requested by the exam
    if (criteria === "name") {
        results.sort((a, b) => a.name.localeCompare(b.name));     // ← replace .name properties (no quotes)
    } else if (criteria === "price") {
        results.sort((a, b) => a.price - b.price);                // ← replace .price properties (no quotes)
    }

    return results; // Return the mutated copy to the mapping function
}
```

---

## 3. Grid Rendering & Details View (View Swapping)

> **Context:** In Lab 9, `renderTransactions` maps the `filtered` results directly.

```javascript
    /**
 * Render Grid mapping
 */
function renderGrid() {                                           // ← replace function name
    // Call the filter first!
    const filtered = getFilteredItems();                          // ← replace function name
    const container = document.getElementById("grid-body");       // ← replace ID (keep the quotes!)
    
    if (filtered.length === 0) {
        container.innerHTML = "<p>No items found</p>";
        return;
    }

    container.innerHTML = filtered.map(item => `                  <!-- ← replace HTML and ${item.property} (no quotes around variables) -->
        <div class="card">
            <img src="${item.image}">         
            <h2>${item.title}</h2>                        
            <p>Price: $${item.price}</p>                  
            <button class="btn" onclick="showDetails(${item.id})">Details</button> 
        </div>
    `).join("");
}

    /**
 * Swap to Details View using basic style manipulation
 */
function showDetails(itemId) {                                    // ← replace function name and param
    const item = mainArray.find(i => i.id === itemId);            // ← replace mainArray and .id (no quotes)
    if (!item) return;

    // Toggle Visibility
    document.getElementById("grid-body").style.display = "none";  // ← replace ID (keep quotes!)
    const detailsWrap = document.getElementById("detailsContainer"); // ← replace ID (keep quotes!)
    detailsWrap.style.display = "block";

    // Build exhaustive UI
    detailsWrap.innerHTML = `                                     <!-- ← replace HTML and ${item.property} variables -->
        <div class="detailed-card">
            <img src="${item.image}">                        
            <h2>${item.title}</h2>                           
            <button onclick="goBack()">Back To Home</button>      <!-- ← replace back function name -->
        </div>
    `;
}

    /**
 * Go Back
 */
function goBack() {                                               // ← replace function name
    document.getElementById("detailsContainer").style.display = "none";  // ← replace ID (keep quotes!)
    document.getElementById("grid-body").style.display = "block";        // ← replace ID (keep quotes!)
}
```

---

## 4. Dependent Dropdown (Fetch on Select)

> **Context:** Same pattern as Lab 9 `loadTransactions` but triggered continuously via an HTML `<select onchange="...">` event.

```javascript
// HTML BINDING REQUIRED: 
// <select id="categoryDropdown" onchange="loadSubCategory()">

    /**
 * Fetch new API data based on dropdown selection
 */
async function loadSubCategory() {                                // ← replace function name
    const targetValue = document.getElementById("categoryDropdown").value; // ← replace ID (keep the quotes!)
    if (!targetValue) return; 
    
    try {
        // Just call Fetch exactly like loadItems()
        const response = await fetch(`${API_URL}/category/${targetValue}`); // ← replace API_URL route logic
        const data = await response.json();
        
        mainArray = data;                                         // ← replace mainArray (no quotes)
        refreshAll();                                             // ← replace refresh function name
    } catch (err) {
        console.error("Fetch Error:", err);
    }
}
```

---

## 5. Wishlist (LocalStorage Add & Remove)

> **Context:** Follows array pushing logic exactly from `app.js`'s `addTransaction` and `deleteTransaction`, but avoids the API and saves to an exclusive Wishlist Array globally.

```javascript
// HTML BINDING REQUIRED: 
// <button onclick="addToWishlist(${item.id})">Add</button>

let wishlistArray = JSON.parse(localStorage.getItem("wishlist_key")) || []; // ← replace name and "wishlist_key" (keep the quotes for key!)

    /**
 * Local cache addition replacing POST fetch
 */
function addToWishlist(itemId) {                                  // ← replace function name and param
    // 1. Validation flag using .find
    const exists = wishlistArray.find(item => item.id === itemId); // ← replace array and .id (no quotes)
    if (exists) {   
        alert("Already inside!");
        return;
    }

    // 2. Find from the master array
    const itemToAdd = mainArray.find(item => item.id === itemId); // ← replace mainArray and .id (no quotes)
    
    if (itemToAdd) {
        wishlistArray.push(itemToAdd);                            // ← replace array name (no quotes)
        localStorage.setItem("wishlist_key", JSON.stringify(wishlistArray)); // ← replace "wishlist_key" (keep the quotes!)
        alert("Added!");
    }
}

// HTML BINDING REQUIRED: 
// <button onclick="removeItem(\${item.id})">Delete</button>

    /**
 * Local cache deletion replacing DELETE fetch
 */
function removeItem(itemId) {                                     // ← replace function name and param
    // 1. Remove from local array exactly like deleteTransaction()
    wishlistArray = wishlistArray.filter(item => item.id !== itemId); // ← replace .id (no quotes)
    
    // 2. Save
    localStorage.setItem("wishlist_key", JSON.stringify(wishlistArray)); // ← replace "wishlist_key" (keep the quotes!)

    // 3. Render
    refreshAll();                                                 // ← replace function name
}
```

---

## 6. Update Form Logic (Local Only)

> **Context:** Matches the `updateTransaction` logic identically. Includes Edit setup, Submit mapping, and standard Deletion.

```javascript
// HTML BINDING REQUIRED (Inside Grid Map HTML): 
// <button onclick="startEdit(${item.id})">Edit</button>
// <button onclick="deleteItem(${item.id})">Delete</button>

    /**
 * Move object data into the form inputs for editing
 */
function startEdit(itemId) {                                      // ← replace function name and param
    const item = mainArray.find(i => i.id === itemId);            // ← replace array and .id (no quotes)
    if (!item) return;

    // Populate the form inputs with data
    document.getElementById("editIdHiddenField").value = item.id; // ← replace ID (keep quotes!) and property (no quotes)
    document.getElementById("editTitle").value = item.title;      // ← replace ID (keep quotes!) and property (no quotes)
    document.getElementById("editPrice").value = item.price;      // ← replace ID (keep quotes!) and property (no quotes)
    
    // Optional: Scroll to form or update heading
    window.scrollTo(0, 0); 
}

    /**
 * Add New Item locally (Asked in B51 Exam)
 */
function handleAddSubmit(event) {                                 // ← replace function name
    event.preventDefault();

    // Create new object natively extracting from form
    const newItem = {
        id: Date.now(), // Generate fake ID natively
        title: document.getElementById("addTitle").value,          // ← replace ID (keep quotes!)
        price: Number(document.getElementById("addPrice").value)   // ← replace ID (keep quotes!)
    };

    // Push explicitly to array
    mainArray.push(newItem);                                      // ← replace mainArray (no quotes)

    // Save and Render
    localStorage.setItem("my_cache_key", JSON.stringify(mainArray)); // ← replace key
    document.getElementById("addForm").reset();                   // ← replace form ID
    refreshAll();                                                 // ← replace function name
}

// HTML BINDING REQUIRED (On the Edit Form tag): 
// <form id="updateForm" onsubmit="handleEditSubmit(event)">

    /**
 * Update locally replacing PUT fetch
 */
function handleEditSubmit(event) {                                // ← replace function name
    event.preventDefault();

    const idToUpdate = Number(document.getElementById("editIdHiddenField").value); // ← replace ID (keep quotes!)
    const newTitle = document.getElementById("editTitle").value;                   // ← replace ID (keep quotes!)
    const newPrice = Number(document.getElementById("editPrice").value);           // ← replace ID (keep quotes!)
    
    // Find index exactly like updateTransaction()
    const index = mainArray.findIndex(item => item.id === idToUpdate); // ← replace .id (no quotes)
    
    if (index !== -1) {
        // Swap values
        mainArray[index].title = newTitle;                        // ← replace properties (no quotes)
        mainArray[index].price = newPrice;
    }

    // Save
    localStorage.setItem("my_cache_key", JSON.stringify(mainArray)); // ← replace "my_cache_key" (keep the quotes!)

    // Re-render DOM and optionally reset form
    document.getElementById("updateForm").reset();                // ← replace form ID (keep the quotes!)
    refreshAll();                                                 // ← replace function name
}

    /**
 * Delete locally replacing DELETE fetch
 */
function deleteItem(itemId) {                                     // ← replace function name
    if (!confirm("Are you sure?")) return;

    // Filter out the deleted item
    mainArray = mainArray.filter(item => item.id !== itemId);     // ← replace array and .id (no quotes)
    
    // Save
    localStorage.setItem("my_cache_key", JSON.stringify(mainArray)); // ← replace "my_cache_key" (keep the quotes!)
    
    // Re-render DOM
    refreshAll();                                                 // ← replace function name
}
```
