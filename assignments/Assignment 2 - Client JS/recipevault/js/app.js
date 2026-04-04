// =================================
// RecipeVault Client App
// =================================

// ============================================
// Section 1: Configuration
// ============================================

const API_URL = "https://recipevault-api.vercel.app/api/recipes";

// ============================================
// Section 2: State
// ============================================

let recipes = [];
let editingId = null;

// ============================================
// Section 3: API Helper Functions
// ============================================

// TODO 1: fetchAllRecipes()
// Fetch all recipes from the API
// - Use fetch() with async/await
// - Parse and return the JSON response
// - Wrap in try/catch, log errors to console
async function fetchAllRecipes(){
    try{
        const result = await fetch("https://recipevault-api.vercel.app/api/recipes");
        //again the fetch gets a massive response containing things
        if (!result.ok){ //we check just the ok status for errors
            throw new Error(`i am the get method and i ran into an error ${result.status}`)
        }
        const da_goods =  await result.json(); //i get the data
        console.log(da_goods) //i print the data
        return da_goods; //i return the data for future operations =)
    }
    catch (error){
        console.log("error",error);
    }
}

//fetchAllRecipes(); //seems to be working




// TODO 2: createRecipe(data)
// Send a POST request to add a new recipe
// - Set method to "POST"
// - Set headers: { "Content-Type": "application/json" }
// - Set body to JSON.stringify(data)
// - Return the parsed JSON response
// - Wrap in try/catch
async function createRecipe(data){
    try{
        const result = await fetch("https://recipevault-api.vercel.app/api/recipes",
            {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name:data.name,
                    description:data.description,
                    image:data.image,
                    prepTime:data.prepTime,
                    cookTime:data.cookTime,
                    servings:data.servings,
                    category:data.category,
                    cuisine:data.cuisine,
                    difficulty:data.difficulty,
                    ingredients:data.ingredients
                })
            }
        );
        //again the fetch gets a massive response containing things
        if (!result.ok){ //we check just the ok status for errors
            throw new Error(`i am the post method and i ran into an error ${result.status}`)
        }
        const da_goods =  await result.json(); //i get the data
        console.log(da_goods) //i print the data
        return da_goods; //i return the data for future operations =)
    }
    catch (error){
        console.log("error",error);
    }
}
// createRecipe('shawerma',"the typical sandwhich","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F19%2Fbe%2F1a%2F19be1a2dfbadfc83bcf237c5b6dca867.jpg&f=1&nofb=1&ipt=1f6457debf826721773bfecd9654f83486325ad92d3bd82d30da4643b0dea883",20,15,5,"main tag","syrian","medium","chicken saj bread garlic sauce");
// creating seems to work

// TODO 3: updateRecipe(id, data)
// Send a PUT request to update a recipe
// - URL: API_URL + "/" + id
// - Same headers and body format as createRecipe
// - Return the parsed JSON response
// - Wrap in try/catch
async function updateRecipe(parabola,data) {
    try{
        const result = await fetch(`https://recipevault-api.vercel.app/api/recipes/${parabola}`,{
            method:"PUT",
            headers: { "Content-Type":"application/json" },
            body:
            JSON.stringify(
                {
                    name:data.name,
                    description:data.description,
                    image:data.image,
                    prepTime:data.prepTime,
                    cookTime:data.cookTime,
                    servings:data.servings,
                    category:data.category,
                    cuisine:data.cuisine,
                    difficulty:data.difficulty,
                    ingredients:data.ingredients
                }
            )
        });
        //again the fetch gets a massive response containing things
        if (!result.ok){ //we check just the ok status for errors
            throw new Error(`i am the put method and i ran into an error ${result.status}`)
        }
        const da_goods =  await result.json(); //i get the data
        console.log(da_goods) //i print the data
        return da_goods; //i return the data for future operations =)
    }
    catch (error){
        console.log("error",error);
    }
    
}
// updateRecipe(1,"sheesh tawook","typical sandwich but better","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.simplyleb.com%2Fwp-content%2Fuploads%2FShish-Tawouk-1.jpg&f=1&nofb=1&ipt=564970d8d920439a6c1c8f713cef2d87e1f0cfd4ce9b0a04b5f281868b4cc799",25,40,7,"main","syrian2","hard","normal bread saj bread chicken breast red sauce garlic sauce vegetables");
// fetchAllRecipes();
// TODO 4: deleteRecipeById(id)
// Send a DELETE request to remove a recipe
// - URL: API_URL + "/" + id
// - Set method to "DELETE"
// - Return the parsed JSON response
// - Wrap in try/catch

async function deleteRecipeById(parabola){
    try{
        const result = await fetch(`https://recipevault-api.vercel.app/api/recipes/${parabola}`,
            {
                method: "DELETE",
                headers: {"Content-Type": "application/json"}

            }
        );
        //again the fetch gets a massive response containing things
        if (!result.ok){ //we check just the ok status for errors
            throw new Error(`i am the delete method and i ran into an error ${result.status}`)
        }
        // da_goods =  await result.json(); //i get the data
        // console.log(da_goods) //i print the data
        // return da_goods; //i return the data for future operations =)
    }
    catch (error){
        console.log("error",error);
    }
}
// deleteRecipeById(12);  seems to be working
// fetchAllRecipes();

// ============================================
// Section 4: Navigation
// ============================================

// TODO 5: loadPage(page)
// Load a page fragment into the main content area
// - Fetch the HTML from `pages/${page}.html`
// - Get the response text
// - Set document.querySelector("#main").innerHTML to the HTML
// - Update active nav link (toggle "active" class)
// - If page is "recipes": call loadRecipes()
// - If page is "add-recipe": wire up the form submit event to handleRecipeSubmit
async function loadPage(page){
    try{
        const result = await fetch(`pages/${page}.html`);
        //again the fetch gets a massive response containing things
        if (!result.ok){ //we check just the ok status for errors
            throw new Error(`i am the get method and i ran into an error ${result.status}`)
        }
        const da_goods =  await result.text(); //i get the data
        // return da_goods; //i return the data for future operations =)
        document.querySelector("#main").innerHTML = da_goods;//inserting this into the main of index
        
        const nav = document.querySelectorAll(".nav-link");
        nav.forEach(element => {
            const click = element.getAttribute('onclick');
            if (click && click.includes(`'${page}'`)){
                element.classList.add("active");
            }
            else{
                element.classList.remove("active");
            }
        })
        if (page == "recipes"){
            loadRecipes(); 
        
        }
        if (page === "add-recipe"){
            const form = document.getElementById("recipe-form");
            if (form) {
                form.addEventListener("submit", handleRecipeSubmit);
            }
        }
    }
    catch (error){
        console.log("error",error);
        document.querySelector("#main").innerHTML = `<p>Error loading ${page}</p>`;
    }
}


// ============================================
// Section 5: Display Recipes
// ============================================

// TODO 6: recipeToHTMLCard(recipe)
// Convert a recipe object into an HTML card string using a template literal
// Use the recipe properties (id, name, description, image, prepTime, cookTime, servings, difficulty)
// to fill in the card below. Here's what the rendered HTML should look like:
//
// <div class="recipe-card">
//     <img src="images/photo.jpg" alt="Recipe Name" class="recipe-card-img">
//     <div class="recipe-card-body">
//         <h3>Recipe Name</h3>
//         <p>A short description of the recipe.</p>
//         <div class="recipe-meta">
//             <span>Prep: 10 min</span>
//             <span>Cook: 25 min</span>
//             <span>Serves: 4</span>
//         </div>
//         <span class="badge badge-easy">Easy</span>
//     </div>
//     <div class="recipe-card-actions">
//         <button class="btn btn-primary btn-sm" onclick="startEdit(1)">Edit</button>
//         <button class="btn btn-danger btn-sm" onclick="handleDelete(1)">Delete</button>
//     </div>
// </div>
function recipeToHTMLCard(recipe){
    return `
    <div class="recipe-card">
    <img src="${recipe.image}" alt="${recipe.name}" class="recipe-card-img">
    <div class="recipe-card-body">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}.</p>
        <div class="recipe-meta">
            <span>Prep: ${recipe.prepTime} mins</span>
            <span>Cook: ${recipe.cookTime} mins</span>
            <span>Serves: ${recipe.servings}</span>
        </div>
        <span class="badge badge-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
    </div>
    <div class="recipe-card-actions">
        <button class="btn btn-primary btn-sm" onclick="startEdit(${recipe.id})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="handleDelete(${recipe.id})">Delete</button>
    </div>
</div>
    `
}


// TODO 7: renderRecipes()
// Render all recipes into the grid
// - Get the #recipes-grid element
// - If recipes array is empty, show "No recipes found" message
// - Otherwise, map each recipe through recipeToHTMLCard and join with ""
// - Set the grid's innerHTML to the result
function renderRecipes(){
const grid = document.querySelector("#recipes-grid");


if (!grid){
    console.log("error 100000, no grid element found aslan");
    return;
}

if (recipes.length == 0){
    grid.innerHTML = "<p>we do not have anything here....YET</p>";
    return;
}
const new_recipes = recipes.map(dish => recipeToHTMLCard(dish)).join("") 

grid.innerHTML = new_recipes;
}


// TODO 8: loadRecipes()
// Load recipes from the API and display them
// - Call fetchAllRecipes() and store the result in the recipes array
// - Call renderRecipes()
// - Wrap in try/catch
async function loadRecipes(){

    try{
        const da_goods = await fetchAllRecipes();
        recipes = da_goods;
        renderRecipes();

    }
    catch(error){
        console.log("i couldnt load anything");
        const grid = document.querySelector("#recipes-grid");
        if (grid) {
            grid.innerHTML = "<p>Error loading recipes. Please try again.</p>";
        }
    }

}




// ============================================
// Section 6: Add / Edit Recipe
// ============================================

// TODO 9: handleRecipeSubmit(e)
// Handle the recipe form submission
// - Prevent default form behavior
// - Extract form data using Object.fromEntries(new FormData(e.target))
// - Convert prepTime, cookTime, and servings to numbers using Number()
// - If editingId is set: call updateRecipe(editingId, data), then cancelEdit()
// - Otherwise: call createRecipe(data)
// - Reset the form
// - Navigate to the recipes page using loadPage("recipes")
// - Wrap in try/catch
async function handleRecipeSubmit(e){
    e.preventDefault(); //time stopping the page
    const form = new FormData(e.target);
    let data = Object.fromEntries(form);

    //thesew guys are supposed to be numbers
    data.prepTime = Number(data.prepTime);
    data.cookTime = Number(data.cookTime);
    data.servings = Number(data.servings);

    if (editingId!==null){ //is something being editted rn?
        await updateRecipe(editingId,data);
        cancelEdit();
    }
    else{
        await createRecipe(data);
    }
    e.target.reset();
    await loadPage("recipes");
}


// TODO 10: startEdit(id)
// Populate the form with a recipe's data for editing
// - Find the recipe in the recipes array by id
// - If not found, return early
// - Set editingId to the recipe's id
// - Navigate to the add-recipe page using loadPage("add-recipe")
// - After loadPage completes, populate each form field with the recipe's data
// - Change the form title to "Edit Recipe"
// - Change the submit button text to "Update Recipe"
// - Show the cancel button (remove "hidden" class)
async function startEdit(id){
    let found = recipes.find(r => r.id === id);
    if (!found){
        console.log(`WE COULDNT FIND THE RECIPE ${id}, ABORT`);
        return;
    }

    editingId = id; 
    await loadPage("add-recipe");
    document.querySelector("#recipe-name").value= found.name;
    document.querySelector("#recipe-description").value= found.description;
    document.querySelector("#recipe-ingredients").value= found.ingredients;
    document.querySelector("#recipe-difficulty").value= found.difficulty;
    document.querySelector("#recipe-category").value= found.category;
    document.querySelector("#recipe-image").value= found.image;
    document.querySelector("#recipe-prepTime").value= found.prepTime;
    document.querySelector("#recipe-cookTime").value= found.cookTime;
    document.querySelector("#recipe-servings").value= found.servings;
    document.querySelector("#recipe-cuisine").value= found.cuisine;

    document.getElementById("form-title").textContent = "initating edit recipe.exe"

    document.querySelector("#submit-btn").textContent = "Update Recipe";
        
    document.querySelector("#cancel-btn").classList.remove("hidden");

}




// TODO 11: cancelEdit()
// Cancel editing and reset the form
// - Set editingId to null
// - Reset the form
// - Change the form title back to "Add New Recipe"
// - Change the submit button text back to "Add Recipe"
// - Hide the cancel button (add "hidden" class)

function cancelEdit(){
    editingId = null; //straight up
    if (document.querySelector("#recipe-form")===null) {return;}
    document.querySelector("#recipe-form").reset();
    document.querySelector("#form-title").textContent = "Add New recipe";
    document.querySelector("#submit-btn").textContent = "add recipe";
    document.querySelector("#cancel-btn").classList.add("hidden");
}


// ============================================
// Section 7: Delete Recipe
// ============================================

// TODO 12: handleDelete(id)
// Delete a recipe after confirmation
// - Show a confirm() dialog: "Are you sure you want to delete this recipe?"
// - If confirmed: call deleteRecipeById(id), then call loadRecipes()
// - Wrap in try/catch

async function handleDelete(id){
const certain = confirm("final choice? deleting the choice?");

if (!certain){
    return;
}
try{
    await deleteRecipeById(id);

    await loadRecipes();


}

catch(error){
    console.log("WE RAN INTO AN ERROR WHILE HANDLING DELETE");
    alert("failed to delete, try again and lets see what happens");
}
}

// ============================================
// Section 8: Initialize
// ============================================

// TODO 13: Add a DOMContentLoaded event listener
// - When the page loads, call loadPage("recipes") to show the recipes page by default
document.addEventListener("DOMContentLoaded", () => {
    loadPage("recipes");
});
