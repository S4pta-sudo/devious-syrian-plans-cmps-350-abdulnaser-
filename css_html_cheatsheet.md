# CSS & HTML Exam Cheat Sheet
> Based on: Lab 1 (HTML), Lab 2 (Forms/Multimedia), Lab 3 (CSS Fundamentals), Lab 4 (Layouts), Assignment 1 (RecipeVault)
> **Search keywords are in BOLD** — use Ctrl+F to find any topic instantly.

---

## 🔍 QUICK SEARCH INDEX

| I need to... | Jump to section |
|---|---|
| **Make text bold / italic / underline** | [Text Formatting Tags](#1-html-text-formatting) |
| **Create a link / anchor tag** | [Links](#2-html-links) |
| **Embed an image** | [Images & Figures](#3-images--figures) |
| **Embed a YouTube video** | [Multimedia / iFrame](#4-multimedia--iframe) |
| **Create a table** | [Tables](#5-html-tables) |
| **Create a form** | [Forms & Inputs](#6-html-forms--inputs) |
| **HTML5 semantic tags** | [Semantic Structure](#7-semantic-html5-structure) |
| **Link a CSS file** | [Linking CSS](#8-linking-css) |
| **CSS variables / custom properties** | [CSS Variables](#9-css-variables-root) |
| **Color values (hex, rgb, hsl)** | [Colors](#10-colors) |
| **Font size / weight / family** | [Typography](#11-typography) |
| **Bold / italic in CSS** | [Typography](#11-typography) |
| **Box model (margin padding border)** | [Box Model](#12-box-model) |
| **Rounded corners** | [Box Model](#12-box-model) |
| **Center something** | [Centering Patterns](#centering-patterns) |
| **Background color / gradient** | [Backgrounds](#13-backgrounds) |
| **Hover effect / :hover** | [Pseudo-classes](#14-pseudo-classes) |
| **Box shadow / text shadow** | [Shadows](#15-shadows--transitions) |
| **Transition / animation** | [Shadows & Transitions](#15-shadows--transitions) |
| **Selectors (class, id, descendant)** | [CSS Selectors](#16-css-selectors) |
| **Flexbox** | [Flexbox](#17-flexbox) |
| **Flexbox centering** | [Flexbox](#17-flexbox) |
| **Flexbox navigation** | [Flexbox Nav Template](#flexbox-nav-template) |
| **CSS Grid** | [CSS Grid](#18-css-grid) |
| **Grid areas / named layout** | [CSS Grid Areas](#grid-template-areas-pattern) |
| **4-column card grid** | [Grid Card Pattern](#grid-card-pattern) |
| **Responsive / media queries** | [Responsive Design](#19-responsive-design--media-queries) |
| **Mobile-first breakpoints** | [Responsive Design](#19-responsive-design--media-queries) |
| **Table zebra striping** | [Full CSS Templates](#20-full-copy-paste-css-templates) |
| **Button styles** | [Full CSS Templates](#20-full-copy-paste-css-templates) |
| **Form input styling** | [Full CSS Templates](#20-full-copy-paste-css-templates) |
| **Complete page CSS template** | [Full CSS Templates](#20-full-copy-paste-css-templates) |

---

---

# PART 1 — HTML

---

## 1. HTML Text Formatting

```html
<!-- Semantic meaning (preferred) -->
<strong>Bold / important text</strong>
<em>Italic / emphasized text</em>
<mark>Highlighted text</mark>
<del>Strikethrough / deleted text</del>
<ins>Underlined / inserted text</ins>
<small>Small print / fine print</small>
<abbr title="HyperText Markup Language">HTML</abbr>
<code>inline code snippet</code>
<sup>superscript</sup>   <!-- e.g. x²  -->
<sub>subscript</sub>     <!-- e.g. H₂O -->

<!-- Visual only (avoid for content) -->
<b>Bold (visual only)</b>
<i>Italic (visual only)</i>
<u>Underline (visual only)</u>
<s>Strikethrough (visual only)</s>

<!-- Special characters -->
&copy;    <!-- © -->
&amp;     <!-- & -->
&lt;      <!-- < -->
&gt;      <!-- > -->
&nbsp;    <!-- non-breaking space -->
```

---

## 2. HTML Links

```html
<!-- Basic link -->
<a href="page.html">Click me</a>

<!-- External link — ALWAYS use target + rel for external -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External Site</a>

<!-- Email link -->
<a href="mailto:someone@example.com">Email us</a>

<!-- Phone link -->
<a href="tel:+97412345678">Call us</a>

<!-- Same-page anchor (jump to section) -->
<a href="#section-id">Jump to section</a>
<section id="section-id">...</section>

<!-- Link with image inside -->
<a href="page.html">
    <img src="logo.png" alt="Logo">
</a>
```

---

## 3. Images & Figures

```html
<!-- Basic image — always include alt, width, height -->
<img src="image.jpg" alt="Description of image" width="600" height="400">

<!-- Figure with caption (Assignment 1 pattern) -->
<figure>
    <img src="chicken.jpg" alt="Grilled Chicken" width="600" height="400">
    <figcaption>Grilled Chicken with Salad</figcaption>
</figure>

<!-- Responsive image (CSS: max-width: 100%) -->
<img src="photo.jpg" alt="Photo" style="max-width: 100%;">

<!-- Image inside a link -->
<a href="recipe.html">
    <figure>
        <img src="pasta.jpg" alt="Creamy Pasta" width="300" height="200">
        <figcaption>Creamy Pasta</figcaption>
    </figure>
</a>
```

---

## 4. Multimedia / iFrame

```html
<!-- YouTube embed (Assignment 1 pattern) -->
<figure>
    <iframe
        src="https://www.youtube.com/embed/mhDJNfV7hjk"
        width="560"
        height="315"
        allowfullscreen>
    </iframe>
    <figcaption>Cooking Tutorial Video</figcaption>
</figure>

<!-- HTML5 Video -->
<video controls width="600">
    <source src="video.mp4" type="video/mp4">
    Your browser does not support video.
</video>

<!-- HTML5 Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>
```

---

## 5. HTML Tables

```html
<!-- Full table pattern (Assignment 1 requirement) -->
<table>
    <caption><small>Weekly Meal Plan — Last updated: 2026</small></caption>

    <thead>
        <tr>
            <th scope="col">Day</th>
            <th scope="col">Breakfast</th>
            <th scope="col">Lunch</th>
            <th scope="col">Dinner</th>
            <th scope="col">Calories</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <th scope="row">Monday</th>
            <td>Oats</td>
            <td>Salad</td>
            <td>Chicken</td>
            <td>1800</td>
        </tr>
        <tr>
            <th scope="row">Tuesday</th>
            <td>Eggs</td>
            <td>Pasta</td>
            <td>Fish</td>
            <td>1950</td>
        </tr>
        <!-- colspan: spans multiple columns -->
        <tr>
            <th scope="row">Weekend</th>
            <td colspan="3">Eat whatever you want 🍕</td>
            <td>2500</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <th scope="row">Average</th>
            <td colspan="3">Mixed Diet</td>
            <td>2000</td>
        </tr>
    </tfoot>
</table>
```

**Key table attributes:**
| Tag/Attr | Purpose |
|---|---|
| `<caption>` | Table title (shown above) |
| `<thead>` | Header rows group |
| `<tbody>` | Body rows group |
| `<tfoot>` | Footer/summary row group |
| `<th scope="col">` | Column header cell |
| `<th scope="row">` | Row header cell |
| `<td colspan="3">` | Cell spanning 3 columns |
| `<td rowspan="2">` | Cell spanning 2 rows |

---

## 6. HTML Forms & Inputs

```html
<!-- Form shell -->
<form action="submit.php" method="POST">

    <!-- FIELDSET 1 — Recipe Info (Assignment 1 pattern) -->
    <fieldset>
        <legend>Recipe Information</legend>

        <!-- Text input with label, required, placeholder, aria -->
        <label for="name">Recipe Name</label>
        <input type="text" id="name" name="name"
               required aria-required="true"
               placeholder="e.g. Grilled Chicken">

        <!-- Textarea with aria-describedby -->
        <label for="ingredients">Ingredients</label>
        <textarea id="ingredients" name="ingredients"
                  required rows="5"
                  aria-describedby="ingredients-help"></textarea>
        <small id="ingredients-help">One ingredient per line.</small>

        <!-- Select with optgroup -->
        <label for="category">Category</label>
        <select id="category" name="category">
            <optgroup label="Mains">
                <option value="chicken">Chicken</option>
                <option value="beef">Beef</option>
            </optgroup>
            <optgroup label="Desserts">
                <option value="cake">Cake</option>
            </optgroup>
        </select>

        <!-- Datalist (autocomplete suggestions) -->
        <label for="cuisine">Cuisine</label>
        <input type="text" id="cuisine" name="cuisine" list="cuisine-options">
        <datalist id="cuisine-options">
            <option value="Italian">
            <option value="Japanese">
            <option value="Mexican">
        </datalist>

        <!-- Number with min/max/step -->
        <label for="prep-time">Prep Time (minutes)</label>
        <input type="number" id="prep-time" name="prepTime"
               min="5" max="180" step="5">

        <!-- Date input -->
        <label for="date">Date</label>
        <input type="date" id="date" name="date">

        <!-- File upload -->
        <label for="photo">Recipe Photo</label>
        <input type="file" id="photo" name="photo" accept="image/*">

    </fieldset>

    <!-- FIELDSET 2 — Details (Assignment 1 pattern) -->
    <fieldset>
        <legend>Details</legend>

        <!-- Radio buttons (group by same name) -->
        <fieldset>
            <legend>Difficulty</legend>
            <label>
                <input type="radio" name="difficulty" value="easy"> Easy
            </label>
            <label>
                <input type="radio" name="difficulty" value="medium"> Medium
            </label>
            <label>
                <input type="radio" name="difficulty" value="hard"> Hard
            </label>
        </fieldset>

        <!-- Checkboxes -->
        <label><input type="checkbox" name="tags" value="vegetarian"> Vegetarian</label>
        <label><input type="checkbox" name="tags" value="vegan"> Vegan</label>
        <label><input type="checkbox" name="tags" value="gluten-free"> Gluten-Free</label>

    </fieldset>

    <!-- Buttons -->
    <button type="submit">Submit Recipe</button>
    <button type="reset">Reset Form</button>

</form>
```

**Input type reference:**
| Type | Use for |
|---|---|
| `type="text"` | Any short text |
| `type="email"` | Email address (validates @) |
| `type="password"` | Hidden text |
| `type="number"` | Numbers (has min/max/step) |
| `type="date"` | Date picker |
| `type="file"` | File upload |
| `type="checkbox"` | Multiple select (same name = group) |
| `type="radio"` | Single select (same name = group) |
| `type="range"` | Slider |
| `type="submit"` | Submit the form |
| `type="reset"` | Clear the form |
| `type="hidden"` | Hidden value sent with form |

**Key attributes:**
| Attribute | Effect |
|---|---|
| `required` | Makes field mandatory |
| `aria-required="true"` | Accessibility version of required |
| `placeholder="..."` | Ghost text inside input |
| `min="5" max="100"` | Number limits |
| `step="5"` | Increment amount |
| `list="datalist-id"` | Link input to datalist |
| `aria-describedby="id"` | Connects input to help text for screen readers |
| `accept="image/*"` | File type filter |

---

## 7. Semantic HTML5 Structure

```html
<!-- FULL PAGE SEMANTIC STRUCTURE (Lab 3/4, Assignment 1) -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <!-- Logo, site name, tagline -->
        <h1>Site Name</h1>
        <p>Tagline here</p>
    </header>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="form.html">Share</a></li>
        </ul>
    </nav>

    <main>
        <section id="featured">
            <h2>Featured Recipes</h2>

            <!-- Article = self-contained piece of content -->
            <article class="recipe-card">
                <figure>
                    <img src="chicken.jpg" alt="Grilled Chicken" width="300" height="200">
                    <figcaption>Grilled Chicken</figcaption>
                </figure>
                <h3>Grilled Chicken</h3>
                <p>A delicious grilled chicken recipe.</p>
                <ul>
                    <li>Prep: 15 mins</li>
                    <li>Cook: 30 mins</li>
                    <li>Serves: 4</li>
                </ul>
            </article>

        </section>

        <section id="meal-plan">
            <h2>Weekly Meal Plan</h2>
            <!-- table goes here -->
        </section>
    </main>

    <aside>
        <!-- Cooking tips, related links, sidebar content -->
        <h2>Cooking Tips</h2>
        <ol>
            <li><strong>Tip 1:</strong> Use <em>fresh</em> herbs</li>
            <li><mark>Always preheat</mark> your oven</li>
        </ol>
        <ul>
            <li><a href="https://example.com" target="_blank" rel="noopener noreferrer">External Resource</a></li>
            <li><a href="mailto:chef@example.com">Email Me</a></li>
            <li><a href="tel:+97412345678">Call Us</a></li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2026 RecipeVault. 
            <del>Bad food</del> <strong>Great food</strong> for everyone.
        </p>
        <nav>
            <a href="index.html">Home</a>
            <a href="share-recipe.html">Share</a>
        </nav>
    </footer>

</body>
</html>
```

**Semantic element summary:**
| Tag | Purpose |
|---|---|
| `<header>` | Page/section header (logo, title) |
| `<nav>` | Navigation links |
| `<main>` | Main page content (ONE per page) |
| `<section>` | Thematic group of content |
| `<article>` | Self-contained content (card, post) |
| `<aside>` | Sidebar / tangentially related content |
| `<footer>` | Page/section footer |
| `<figure>` | Image/media with caption |
| `<figcaption>` | Caption for figure |

---

---

# PART 2 — CSS FUNDAMENTALS

---

## 8. Linking CSS

```html
<!-- External stylesheet (ALWAYS use this — in <head>) -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>

<!-- Internal style block (in <head>, second best) -->
<head>
    <style>
        h1 { color: blue; }
    </style>
</head>

<!-- Inline style (AVOID — only for quick tests) -->
<h1 style="color: blue;">Title</h1>
```

---

## 9. CSS Variables (`:root`)

```css
/* SETUP REQUIRED: Define in :root at the TOP of your CSS file */
/* Assignment 1 / Lab 3 full variable set */
:root {
    /* Primary Colors */
    --primary-color: #2c3e50;          /* Dark blue — headers, nav */
    --primary-light: #34495e;          /* Hover states */

    /* Secondary Colors */
    --secondary-color: #3498db;        /* Blue — links, buttons */
    --secondary-light: #5dade2;        /* Button hover */

    /* Accent Colors */
    --accent-success: #27ae60;         /* Green — positive values */
    --accent-warning: #f39c12;         /* Orange — caution */
    --accent-danger:  #e74c3c;         /* Red — errors, negative */

    /* Text Colors */
    --text-primary:   #2c3e50;         /* Main text */
    --text-secondary: #7f8c8d;         /* Muted/secondary text */

    /* Background Colors */
    --bg-primary:   #ffffff;           /* White */
    --bg-secondary: #f8f9fa;           /* Light grey page bg */
    --border-color: #e0e0e0;           /* Borders */

    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.10);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
}

/* Using variables */
body {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
}
```

---

## 10. Colors

```css
/* Named color */
color: red;
color: darkblue;

/* Hexadecimal — most common */
color: #ff0000;           /* red */
color: #3498db;           /* blue */
color: #333;              /* shorthand for #333333 (dark grey) */
color: #fff;              /* shorthand for #ffffff (white) */

/* RGB */
color: rgb(52, 152, 219);

/* RGBA — with transparency (0 = invisible, 1 = solid) */
color: rgba(52, 152, 219, 0.5);      /* 50% transparent blue */
background: rgba(0, 0, 0, 0.1);     /* subtle dark overlay */

/* HSL (Hue 0-360, Saturation %, Lightness %) */
color: hsl(204, 70%, 53%);
```

**Common colors from lab:**
| Color | Hex | Use |
|---|---|---|
| Dark navy | `#2c3e50` | Headers, nav, footer |
| Blue | `#3498db` | Links, buttons |
| Green | `#27ae60` | Success, income, positive |
| Orange | `#f39c12` | Warnings |
| Red | `#e74c3c` | Danger, expense, errors |
| Light grey | `#f8f9fa` | Page backgrounds |
| Muted text | `#7f8c8d` | Secondary text, labels |
| White | `#ffffff` | Card backgrounds |
| Border | `#e0e0e0` | Borders |

---

## 11. Typography

```css
/* Font family — always include fallbacks */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Font sizes */
font-size: 16px;           /* base — good default for body */
font-size: 1rem;           /* = 16px (relative to root) */
font-size: 1.5rem;         /* = 24px */
font-size: 2rem;           /* = 32px */
font-size: 0.875rem;       /* = 14px (smaller/muted text) */

/* Font weight — MAKE TEXT BOLD */
font-weight: 400;          /* normal */
font-weight: 600;          /* semi-bold */
font-weight: 700;          /* bold */
font-weight: bold;         /* same as 700 */
font-weight: normal;       /* same as 400 */

/* Font style — MAKE TEXT ITALIC */
font-style: italic;
font-style: normal;

/* Text decoration — UNDERLINE, STRIKETHROUGH */
text-decoration: none;           /* remove underline from links */
text-decoration: underline;
text-decoration: line-through;   /* strikethrough */

/* Text alignment */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Line height — space between lines */
line-height: 1.6;          /* 1.5–1.8 is readable for body text */

/* Letter spacing */
letter-spacing: -0.5px;    /* tighten headings */
letter-spacing: 1px;       /* open/spaced out */

/* Text transform */
text-transform: uppercase;
text-transform: capitalize;
text-transform: lowercase;

/* HEADING HIERARCHY (Lab 3 requirement) */
h1 { font-size: 2rem;   font-weight: 700; color: var(--primary-color); }
h2 { font-size: 1.5rem; font-weight: 600; color: var(--primary-color); }
h3 { font-size: 1.25rem;font-weight: 600; color: var(--primary-color); }
p  { font-size: 1rem;   color: var(--text-primary); }
.muted { font-size: 0.875rem; color: var(--text-secondary); }
```

---

## 12. Box Model

```
+------------------------------------------+
|              MARGIN                       |   ← outside the border
|   +----------------------------------+   |
|   |           BORDER                 |   |   ← visible edge
|   |   +--------------------------+   |   |
|   |   |        PADDING           |   |   |   ← inside the border
|   |   |   +------------------+   |   |   |
|   |   |   |     CONTENT      |   |   |   |   ← text, images
|   |   |   +------------------+   |   |   |
|   |   +--------------------------+   |   |
|   +----------------------------------+   |
+------------------------------------------+
```

```css
.box {
    /* Width & Height */
    width: 300px;
    height: 200px;
    max-width: 100%;           /* never wider than parent */
    min-height: 100vh;         /* at least full screen height */

    /* Padding — space INSIDE border */
    padding: 20px;                          /* all 4 sides */
    padding: 10px 20px;                     /* top/bottom | left/right */
    padding: 10px 20px 15px 25px;          /* top | right | bottom | left */
    padding-top: 10px;                      /* individual side */

    /* Border */
    border: 2px solid #333;                 /* width | style | color */
    border: 1px solid var(--border-color);  /* with variable */
    border-top: 3px solid #3498db;          /* single side */
    border-left: 4px solid #27ae60;         /* left accent (Lab 3!) */
    border-bottom: 1px solid #eee;

    /* Rounded corners — BORDER RADIUS */
    border-radius: 8px;           /* all corners equal */
    border-radius: 50%;           /* makes a circle */
    border-radius: 8px 0 8px 0;  /* top-left, top-right, bottom-right, bottom-left */

    /* Margin — space OUTSIDE border */
    margin: 20px;                 /* all sides */
    margin: 0 auto;               /* center horizontally (width must be set!) */
    margin: 20px 0;               /* top/bottom=20px, left/right=0 */
    margin-top: 20px;             /* individual side */

    /* Box sizing — ALWAYS ADD THIS */
    box-sizing: border-box;       /* width includes padding + border */
}

/* Global reset (add once at top of CSS) */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Memory trick for shorthand order: T R B L = "TRouBLe"**
- `padding: 10px 20px 15px 25px` → Top=10, Right=20, Bottom=15, Left=25

### Centering Patterns

```css
/* CENTER HORIZONTALLY — block element with fixed width */
.centered-block {
    width: 960px;
    margin: 0 auto;
}

/* CENTER TEXT */
.centered-text {
    text-align: center;
}

/* CENTER WITH FLEXBOX (most versatile) */
.flex-center {
    display: flex;
    justify-content: center;   /* horizontal center */
    align-items: center;       /* vertical center */
}

/* CENTER SINGLE ELEMENT VERTICALLY IN FULL HEIGHT */
.full-center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

---

## 13. Backgrounds

```css
/* Solid color */
background-color: #3498db;
background-color: var(--bg-secondary);

/* Linear gradient (Lab 3 hero pattern) */
background: linear-gradient(135deg, #3498db, #2c3e50);
background: linear-gradient(to right, #3498db, #2c3e50);
background: linear-gradient(to bottom, #667eea, #764ba2);

/* Image background */
background-image: url('hero-bg.jpg');
background-size: cover;          /* fill container, crop if needed */
background-position: center;
background-repeat: no-repeat;

/* White card background */
background-color: white;

/* Semi-transparent overlay */
background-color: rgba(0, 0, 0, 0.5);
```

---

## 14. Pseudo-classes

```css
/* HOVER — when mouse is over element */
.btn:hover {
    background-color: #2980b9;
    transform: translateY(-2px);   /* lift up 2px */
}

/* ACTIVE — while being clicked */
.btn:active {
    transform: translateY(0);      /* press back down */
}

/* FOCUS — keyboard tab focus (form inputs, links) */
input:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.4);
}

/* VISITED — already clicked link */
a:visited { color: #9b59b6; }

/* LINK — unvisited link */
a:link { color: #3498db; }

/* TABLE ZEBRA STRIPING (Lab 3 requirement) */
tbody tr:nth-child(even) {
    background-color: #f8f9fa;
}
tbody tr:nth-child(odd) {
    background-color: #ffffff;
}

/* TABLE ROW HOVER */
tbody tr:hover {
    background-color: #e8f4f8;
}

/* FIRST / LAST CHILD */
li:first-child { border-top: none; }
li:last-child  { border-bottom: none; }
```

---

## 15. Shadows & Transitions

```css
/* BOX SHADOW — offset-x | offset-y | blur | spread | color */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);        /* subtle */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);        /* card */
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);      /* card hover */
box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);   /* focus ring */

/* TEXT SHADOW */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

/* TRANSITION — smooth animation between states */
transition: all 0.3s ease;                   /* animate everything */
transition: background-color 0.3s ease;      /* one property */
transition: box-shadow 0.3s ease, transform 0.3s ease;  /* multiple */

/* TRANSFORM — move, scale, rotate without breaking layout */
transform: translateY(-2px);    /* lift element up 2px */
transform: translateY(0);       /* normal position */
transform: scale(1.05);         /* scale up 5% */
transform: rotate(45deg);       /* rotate */

/* Full hover lift pattern (Labs 3/4, Assignment 1) */
.card {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    box-shadow: var(--shadow-sm);
}
.card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
}
```

---

## 16. CSS Selectors

```css
/* ELEMENT selector — all of that tag */
p { color: #333; }
h1 { font-size: 2rem; }

/* CLASS selector — elements with that class (reusable) */
.card { background: white; }
.btn { padding: 12px 24px; }
.text-success { color: #27ae60; }
.text-danger  { color: #e74c3c; }

/* ID selector — ONE specific element */
#main-title { font-size: 28px; }
#nav-menu   { background: #2c3e50; }

/* DESCENDANT selector — elements inside other elements */
nav a { color: white; text-decoration: none; }
.card h3 { font-size: 0.9rem; color: #7f8c8d; }
table th { background-color: #2c3e50; color: white; }

/* MULTIPLE selectors — same styles for multiple elements */
h1, h2, h3 { font-family: 'Segoe UI', sans-serif; }

/* DIRECT CHILD selector */
nav > ul { list-style: none; }

/* Combining class + element */
article.recipe-card { border-radius: 8px; }
```

**Specificity (low → high — higher wins):**
1. Element (p) → score: 1
2. Class (.btn) → score: 10
3. ID (#title) → score: 100
4. Inline style → score: 1000

---

---

# PART 3 — FLEXBOX

---

## 17. Flexbox

> **Use flexbox for: nav bars, centering, row/column of items, button groups**

### Core Concept
```
display: flex  →  parent becomes flex container, children become flex items
flex-direction: row  →  items go LEFT → RIGHT (default)
flex-direction: column  →  items go TOP → BOTTOM
```

### Container Properties

```css
.flex-container {
    display: flex;

    /* DIRECTION */
    flex-direction: row;            /* → horizontal (default) */
    flex-direction: column;         /* ↓ vertical */
    flex-direction: row-reverse;    /* ← reverse horizontal */
    flex-direction: column-reverse; /* ↑ reverse vertical */

    /* JUSTIFY-CONTENT — alignment on MAIN axis */
    justify-content: flex-start;    /* pack items to start */
    justify-content: flex-end;      /* pack items to end */
    justify-content: center;        /* center items */
    justify-content: space-between; /* items spread, NO gap at edges */
    justify-content: space-around;  /* equal space around each item */
    justify-content: space-evenly;  /* perfectly even spacing */

    /* ALIGN-ITEMS — alignment on CROSS axis */
    align-items: stretch;           /* fill cross-axis height (default) */
    align-items: flex-start;        /* align to top/left */
    align-items: flex-end;          /* align to bottom/right */
    align-items: center;            /* center on cross axis */
    align-items: baseline;          /* align text baselines */

    /* WRAP */
    flex-wrap: nowrap;              /* no wrapping (default) — can overflow */
    flex-wrap: wrap;                /* wrap items to next line */

    /* GAP — space between items */
    gap: 16px;                      /* equal gap all around */
    gap: 16px 24px;                 /* row-gap | column-gap */
    column-gap: 16px;
    row-gap: 8px;
}
```

### Item Properties

```css
.flex-item {
    /* FLEX — grow | shrink | basis */
    flex: 1;                /* grow to fill equal space */
    flex: 0 0 auto;         /* fixed size, don't grow or shrink */
    flex: 1 1 200px;        /* can grow/shrink, starts at 200px */

    /* Individual control */
    flex-grow: 1;           /* allowed to grow (0=no, 1=yes, 2=grow twice as much) */
    flex-shrink: 1;         /* allowed to shrink (0=no, 1=yes) */
    flex-basis: 200px;      /* starting width before growing/shrinking */

    /* ORDER — change visual position without changing HTML */
    order: 0;               /* default */
    order: -1;              /* move to beginning */
    order: 1;               /* move to end */

    /* ALIGN-SELF — override container's align-items for just this item */
    align-self: flex-start;
    align-self: center;
    align-self: flex-end;
}
```

### Flexbox Nav Template

```css
/* SETUP: Replace class names to match your HTML */
/* Lab 4 / Assignment 1 navbar pattern */

/* Desktop nav — logo left, links right */
.navbar {
    display: flex;
    justify-content: space-between;   /* logo left, links right */
    align-items: center;              /* vertically centered */
    padding: 16px 24px;
    background-color: var(--primary-color);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 24px;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--secondary-light);
}
```

### Flexbox Responsive Nav Template

```css
/* Mobile-first: stacked vertically */
.navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: #2c3e50;
}

.nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    gap: 12px;
    margin: 0;
    padding: 0;
}

/* Tablet+ = horizontal */
@media (min-width: 768px) {
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        padding: 16px 24px;
    }
    .nav-links {
        flex-direction: row;
        gap: 24px;
    }
}
```

### Flexbox Button Group

```css
.button-group {
    display: flex;
    gap: 12px;
    align-items: center;
}

/* Buttons side by side, wrapping on small screens */
.button-group-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
```

---

---

# PART 4 — CSS GRID

---

## 18. CSS Grid

> **Use CSS Grid for: page layouts, card grids, any 2D (rows AND columns) arrangement**

### Core Concept
```
display: grid  →  parent becomes grid container
grid-template-columns: 1fr 1fr 1fr  →  creates 3 equal columns
1fr = "fraction" of available space
```

### Grid Container Properties

```css
.grid-container {
    display: grid;

    /* COLUMNS — most important property */
    grid-template-columns: 1fr 1fr 1fr;          /* 3 equal columns */
    grid-template-columns: repeat(3, 1fr);        /* same as above */
    grid-template-columns: repeat(4, 1fr);        /* 4 equal columns */
    grid-template-columns: 250px 1fr;             /* sidebar + main */
    grid-template-columns: 200px 1fr 200px;       /* sidebar + main + sidebar */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* auto-responsive! */

    /* ROWS */
    grid-template-rows: auto 1fr auto;   /* header=content-size, main=grows, footer=content */
    grid-template-rows: 80px 1fr 60px;   /* fixed heights */

    /* GAP — space between grid cells */
    gap: 16px;                /* row-gap and column-gap equal */
    gap: 16px 24px;           /* row-gap | column-gap */
    row-gap: 16px;
    column-gap: 24px;

    /* NAMED AREAS */
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}
```

### Grid Item Properties

```css
.grid-item {
    /* SPAN columns */
    grid-column: 1 / 3;      /* from column line 1 to line 3 (spans 2 cols) */
    grid-column: span 2;     /* span 2 columns from current position */
    grid-column: 1 / -1;     /* span ALL columns */

    /* SPAN rows */
    grid-row: 1 / 3;         /* from row 1 to row 3 (spans 2 rows) */
    grid-row: span 2;

    /* PLACE IN NAMED AREA */
    grid-area: header;
    grid-area: sidebar;
    grid-area: main;
    grid-area: footer;
}
```

### Grid Card Pattern

```css
/* SETUP: Replace .dashboard-grid and .metric-card with your class names */
/* Lab 4 / Assignment 1 card grid pattern */

/* 4 cards in a row (desktop) */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px;
}

.metric-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.metric-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
}
```

### Grid Template Areas Pattern

```css
/* SETUP: Replace class names and column widths to match your HTML */
/* Lab 4 classic layout: header + nav + main + sidebar + footer */

/* Mobile — single column, sidebar below main */
body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "header"
        "nav"
        "main"
        "aside"
        "footer";
    min-height: 100vh;
}

/* Assign elements to areas */
header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }

/* Desktop — sidebar on right or left */
@media (min-width: 1024px) {
    body {
        grid-template-columns: 1fr 280px;       /* main=flexible, sidebar=280px */
        grid-template-areas:
            "header header"
            "nav    nav"
            "main   aside"
            "footer footer";
    }
}

/* Sidebar on LEFT instead */
@media (min-width: 1024px) {
    body {
        grid-template-columns: 250px 1fr;       /* sidebar=250px, main=flexible */
        grid-template-areas:
            "header header"
            "nav    nav"
            "aside  main"
            "footer footer";
    }
}
```

### Auto-Fit Responsive Grid (No Media Queries!)

```css
/* Cards automatically reflow — no breakpoints needed */
/* minmax(250px, 1fr) = minimum 250px wide, expand to fill */
.recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
}
```

---

---

# PART 5 — RESPONSIVE DESIGN

---

## 19. Responsive Design & Media Queries

### Core Concept: Mobile-First
```
Write base CSS for MOBILE (small screen)
Then use @media (min-width: ...) to ENHANCE for larger screens
```

```css
/* THIS IS WRONG (Desktop-First) */
.container { width: 1200px; }
@media (max-width: 768px) { .container { width: 100%; } }  /* ← fixing down */

/* THIS IS CORRECT (Mobile-First) */
.container { width: 100%; }                /* mobile default */
@media (min-width: 768px)  { .container { width: 750px;  margin: 0 auto; } }
@media (min-width: 1024px) { .container { width: 1200px; } }
```

### Breakpoints (from Lab 4 / Assignment 1)

| Breakpoint | Screen | What changes |
|---|---|---|
| Default | < 768px (Mobile) | Single column, nav stacked, table scrolls |
| `min-width: 768px` | 768px–1023px (Tablet) | Nav horizontal, cards 2-col |
| `min-width: 1024px` | 1024px+ (Desktop) | Full layout, sidebar beside main, cards 4-col |

### Full Responsive CSS Template

```css
/* ===== BASE (MOBILE) ===== */

/* Required: viewport meta tag in HTML head */
/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */

/* Container */
.container {
    width: 100%;
    padding: 16px;
}

/* Nav — stacked */
nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    gap: 8px;
    margin: 0;
    padding: 0;
}

/* Cards — 1 column */
.card-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

/* Page layout — single column */
body {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "header"
        "nav"
        "main"
        "aside"
        "footer";
}

/* Table — horizontal scroll on mobile */
.table-container {
    overflow-x: auto;
}

table {
    min-width: 500px;   /* prevent squishing */
    width: 100%;
}

/* ===== TABLET (768px+) ===== */
@media (min-width: 768px) {

    .container {
        max-width: 768px;
        margin: 0 auto;
        padding: 24px;
    }

    nav {
        flex-direction: row;
        justify-content: space-between;
    }

    nav ul {
        flex-direction: row;
        gap: 24px;
    }

    .card-grid {
        grid-template-columns: repeat(2, 1fr);   /* 2 columns */
    }
}

/* ===== DESKTOP (1024px+) ===== */
@media (min-width: 1024px) {

    .container {
        max-width: 1200px;
        padding: 32px;
    }

    .card-grid {
        grid-template-columns: repeat(4, 1fr);   /* 4 columns */
    }

    /* OR for Assignment 1 — 3 columns for recipe cards */
    .recipe-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    body {
        grid-template-columns: 1fr 280px;         /* main + sidebar */
        grid-template-areas:
            "header header"
            "nav    nav"
            "main   aside"
            "footer footer";
    }

    table {
        min-width: auto;    /* no forced width on desktop */
    }
}
```

---

---

# PART 6 — READY-TO-COPY CSS TEMPLATES

---

## 20. Full Copy-Paste CSS Templates

### Complete Base CSS (Lab 3 / Assignment 1 standard)

```css
/* =================================
   0. GLOBAL RESET + VARIABLES
   ================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color:   #2c3e50;
    --secondary-color: #3498db;
    --secondary-light: #5dade2;
    --accent-success:  #27ae60;
    --accent-danger:   #e74c3c;
    --text-primary:    #2c3e50;
    --text-secondary:  #7f8c8d;
    --bg-primary:      #ffffff;
    --bg-secondary:    #f8f9fa;
    --border-color:    #e0e0e0;
    --shadow-sm:       0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md:       0 4px 8px rgba(0, 0, 0, 0.10);
    --shadow-lg:       0 8px 16px rgba(0, 0, 0, 0.15);
    --radius-md:       8px;
    --spacing-md:      16px;
    --spacing-lg:      24px;
}

/* =================================
   1. BASE STYLES
   ================================= */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-secondary);
}

img {
    max-width: 100%;
    height: auto;
}

a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover { color: var(--secondary-light); }

/* =================================
   2. TYPOGRAPHY
   ================================= */
h1 { font-size: 2rem;    font-weight: 700; color: var(--primary-color); }
h2 { font-size: 1.5rem;  font-weight: 600; color: var(--primary-color); }
h3 { font-size: 1.25rem; font-weight: 600; color: var(--primary-color); }
p  { font-size: 1rem;    color: var(--text-primary); }
.muted { font-size: 0.875rem; color: var(--text-secondary); }

/* =================================
   3. HEADER
   ================================= */
header {
    background: linear-gradient(135deg, #3498db, #2c3e50);
    color: white;
    padding: 24px;
    text-align: center;
}

header h1 { color: white; }

/* =================================
   4. NAVIGATION
   ================================= */
nav {
    background-color: var(--primary-color);
    padding: 0 24px;
}

nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0;
}

nav a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 16px 20px;
    transition: background-color 0.3s ease;
}

nav a:hover    { background-color: var(--primary-light, #34495e); color: white; }
nav a.active   { background-color: var(--secondary-color); color: white; }

/* =================================
   5. CARDS
   ================================= */
.card {
    background-color: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 20px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
}

/* Left-accent card variant */
.card-accent {
    border-left: 4px solid var(--accent-success);
}

/* Amount display in metric cards */
.card .amount {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--accent-success);
    margin: 4px 0 0;
}

/* =================================
   6. TABLES
   ================================= */
.table-container {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    min-width: 500px;
}

table caption {
    text-align: left;
    color: var(--text-secondary);
    font-size: 0.875rem;
    padding-bottom: 8px;
}

thead th {
    background-color: var(--primary-color);
    color: white;
    font-weight: 600;
    padding: 12px 16px;
    text-align: left;
}

tbody td, tfoot td, tfoot th {
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
}

/* Zebra striping */
tbody tr:nth-child(even)  { background-color: var(--bg-secondary); }
tbody tr:nth-child(odd)   { background-color: var(--bg-primary); }

/* Row hover */
tbody tr:hover { background-color: #e8f4f8; }

tfoot { font-weight: 600; background-color: var(--bg-secondary); }

/* =================================
   7. FORMS
   ================================= */
form {
    background: var(--bg-primary);
    padding: 24px;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
}

fieldset {
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 20px;
    margin-bottom: 24px;
}

legend {
    font-weight: 600;
    color: var(--primary-color);
    padding: 0 8px;
}

label {
    display: block;
    font-weight: 500;
    margin-bottom: 4px;
    color: var(--text-primary);
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="date"],
input[type="password"],
textarea,
select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    font-size: 1rem;
    font-family: inherit;
    background-color: white;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 16px;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

textarea { resize: vertical; min-height: 120px; }

.help-text {
    display: block;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-top: -12px;
    margin-bottom: 12px;
}

/* Radio / Checkbox group */
.radio-group,
.checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
}

.radio-group label,
.checkbox-group label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    cursor: pointer;
}

/* =================================
   8. BUTTONS
   ================================= */
.btn {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background-color: var(--secondary-color);
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
    transform: translateY(-2px);
    color: white;
}

.btn-secondary {
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    background-color: #dde0e3;
}

.btn-danger {
    background-color: var(--accent-danger);
    color: white;
}

.btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.4);
}

.btn:active { transform: translateY(0); }

/* Button group — side by side */
.btn-group {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
}

/* =================================
   9. SIDEBAR / ASIDE
   ================================= */
aside {
    background-color: var(--bg-secondary);
    border-top: 4px solid var(--accent-success);
    border-radius: var(--radius-md);
    padding: 20px;
}

aside h2, aside h3 {
    margin-bottom: 12px;
}

aside ul, aside ol {
    padding-left: 20px;
    line-height: 1.8;
}

aside ul li, aside ol li {
    margin-bottom: 8px;
}

/* =================================
   10. FOOTER
   ================================= */
footer {
    background-color: var(--primary-color);
    color: white;
    padding: 32px 24px;
    text-align: center;
}

footer a {
    color: var(--secondary-light, #5dade2);
    text-decoration: none;
    margin: 0 8px;
}

footer a:hover { color: white; }

footer p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.875rem;
}
```

---

## Flexbox vs Grid — When to Use

| Use **Flexbox** when... | Use **CSS Grid** when... |
|---|---|
| One direction only (row OR column) | Two directions (rows AND columns) |
| Navigation bars | Full page layout |
| Centering a single item | Card grids |
| Button groups | Dashboard with sidebar |
| Unknown number of items | Known/fixed structure |
| Content controls the size | Layout controls the size |

**Combine both:** Grid for the page layout, Flexbox for components inside cells.

---

## Common Mistakes to Avoid

| ❌ Wrong | ✅ Correct |
|---|---|
| Forgetting `<link>` to CSS | Always link in `<head>` |
| Using inline styles in HTML | Put styles in CSS file |
| Using `max-width` for mobile-first | Use `min-width` for mobile-first |
| Forgetting `box-sizing: border-box` | Add `* { box-sizing: border-box; }` |
| No `:hover` / `:focus` states | Add transitions on interactive elements |
| Fixed pixel widths on everything | Use `%`, `fr`, `max-width` |
| No `alt` on images | Always include descriptive `alt` text |
| `<strong>` for visual bold only | Use `font-weight: bold` in CSS for visual, `<strong>` for importance |
| Forgetting `list-style: none` on nav | Remove bullets from `<ul>` in nav |
| Forgetting `overflow-x: auto` on table | Wrap table in `.table-container` |

---

## Quick Reference Card

### Make something bold:
- **HTML:** `<strong>text</strong>`
- **CSS:** `font-weight: 700;` or `font-weight: bold;`

### Make something italic:
- **HTML:** `<em>text</em>`
- **CSS:** `font-style: italic;`

### Center something horizontally:
- Block element: `margin: 0 auto;` (needs fixed `width`)
- Text: `text-align: center;`
- Flex: `justify-content: center;`

### Center something vertically:
- Flex: `align-items: center;` on parent with `display: flex;`

### Hover effect:
```css
.element { transition: all 0.3s ease; }
.element:hover { background-color: #2980b9; transform: translateY(-2px); }
```

### Remove underline from link:
```css
a { text-decoration: none; }
```

### Make a circle:
```css
.circle { border-radius: 50%; }
```

### Full-width element:
```css
.full-width { width: 100%; }
```

### 3-column grid:
```css
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
```

### Auto-responsive grid:
```css
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; }
```
