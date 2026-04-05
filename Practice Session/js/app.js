/* =================================
   MyFinance Transaction Manager
   Practice Session

   API URL: https://myfinance-api-bay.vercel.app/transactions

   Endpoints:
     GET    /transactions       → Fetch all transactions
     GET    /transactions/:id   → Fetch one transaction
     POST   /transactions       → Create a new transaction
     PUT    /transactions/:id   → Update a transaction
     DELETE /transactions/:id   → Delete a transaction
   ================================= */

// Write ALL your code below this line
let trans =[];
editingID = null;
async function loadTranscations(){
  
  try{
    const res = await fetch("https://myfinance-api-bay.vercel.app/transactions");
    if (!res.ok){
      throw new Error(`i am the get i cant do my job gg ${res.status}`);

    }
    const determination = await res.json();
    return determination;

  }
  catch(error){
    console.log(`error :) :`+error);
  }

}
// console.log(loadTranscations());

async function UpdateSummary(){
  const trans = await loadTranscations();
  const total_income = trans.filter(obj => obj.type === "income").reduce((obj2,sum)=>sum+=obj2.amount,0);
  const total_expense = trans.filter(obj => obj.type === "expense").reduce((obj2,sum)=>sum+=obj2.amount,0);
  const bal = total_income-total_expense;
  document.querySelector("#total-income").textContent= `${total_income}`
  document.querySelector("#total-expenses").textContent= `${total_expense}`
  const sign = bal>0? "green":"red";
  document.querySelector("#total-balance").textContent= `${sign}${bal}`;
  document.querySelector("#total-balance").attributes.style = `color:${sign}`;

}

function renderTransaction(){
  const place =document.querySelector("#transaction-body");
  place.innerHTML = trans.map(element => `
    <td>${element.description}</td>
    <td>${element.category}</td>
    <td>${element.type}</td>
    <td>${element.amount}</td>
    <td>${element.date}</td>
    `).join("")
}

async function addTransaction(data){
  
  try{
    const res = await fetch("https://myfinance-api-bay.vercel.app/transactions",{
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          description:data.description,
          amount:data.amount,
          type:data.type,
          category:data.category      
      })
    });
    if (!res.ok){
      throw new Error(`we ran into an error + ${res.status}`);
    }
  
  }
  catch(error){
    console.log("rip oof"+error)
  }
  
}

async function updateTransaction(id,data){
  
  try{
    const res = await fetch(`https://myfinance-api-bay.vercel.app/transactions/${id}`,{
      method:"PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          description:data.description,
          amount:data.amount,
          type:data.type,
          category:data.category      
      })
    });
    if (!res.ok){
      throw new Error(`we ran into an error + ${res.status}`);
    }
  
  }
  catch(error){
    console.log("rip oof"+error)
  }
  
}


async function deleteTransaction(id){
  
  try{
    const res = await fetch(`https://myfinance-api-bay.vercel.app/transactions/${id}`,{
      method:"Delete",
      headers: {"Content-Type": "application/json"},
    });
    trans = trans.filter(x=>x.id===id);
    if (!res.ok){
      throw new Error(`we ran into an error + ${res.status}`);
    }
  
  }
  catch(error){
    console.log("rip oof"+error)
  }
  
}

async function getFilteredTransactions(){
  const searchText = document.querySelector("#search").value.toLowerCase();
  const typeFilter = document.querySelector("#filter-type").value;
  
  // Step 2: Filter the global trans array
  const filtered = trans.filter(transaction => {
      // Check type filter
      let matchesType = true;
      if (typeFilter !== "all") {
          matchesType = transaction.type === typeFilter;
      }
  // Check search filter
  let matchesSearch = true;
  if (searchText !== "") {
      matchesSearch = transaction.description.toLowerCase().includes(searchText);
  }
  
  // Return true only if BOTH conditions pass
  return matchesType && matchesSearch;
});

return filtered;
}

async function startedit(id){
  //idk how to implement
  const transaction = trans.find(t=>t.id === id);

  if (!transaction){
    console.log("WE RAN INTO AN ERROR RIP, could not find who to edit");
    return;
  }
  editingID = id;//in case we do find the guy

  // Step 3: Populate the form with the transaction's data
  document.querySelector("#desc").value = transaction.description;
  document.querySelector("#amount").value = transaction.amount;
  document.querySelector("#type").value = transaction.type;
  document.querySelector("#category").value = transaction.category;
  
  // Step 4: Change UI to show edit mode
  document.querySelector("#form-title").textContent = "Edit Transaction";
  document.querySelector("#submit-btn").textContent = "Update Transaction";
  document.querySelector("#cancel-btn").style.display = "inline-block";




}

async function canceledit(){
  //idk how to implement

      // Step 1: Clear editingId
      editingId = null;
    
      // Step 2: Reset the form
      document.querySelector("#transaction-form").reset();
      
      // Step 3: Change UI back to add mode
      document.querySelector("#form-title").textContent = "Add Transaction";
      document.querySelector("#submit-btn").textContent = "Add Transaction";
      document.querySelector("#cancel-btn").style.display = "none";
      
      // Step 4: Clear the hidden edit-id field if it exists
      const editIdField = document.querySelector("#edit-id");
      if (editIdField) {
          editIdField.value = "";
      }
}



