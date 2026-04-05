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