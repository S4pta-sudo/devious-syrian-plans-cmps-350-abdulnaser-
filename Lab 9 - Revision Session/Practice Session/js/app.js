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
async function LoadTransaction(){
 
  statusEl.textContent = "Loading transactions...";
  try{
    let response = await fetch();
    if (response.ok !== true){
      throw new Error(`HTTP ${response.status}`);

    }
    const data = response.json();
    }
    
    catch (error){
      statusEl.textContent = `error: ${error.message}`;
    
  }
  const table = document.getElementById("transaction-body");
  let sign = data.type ? "+" : "-";
  table.innerHTML = data.map( dat => `
    <tr>
    <td> ${dat.description}</td>
    <td> ${dat.category}</td>
    <td> ${dat.type}</td>
    <td> ${dat.amount}</td>
    <td> ${dat.type}</td>
    <td> ${sign}</td>
    </tr>
    `).join("");
  
}

async function updateSummary(){
  try{
    let response = await fetch();
    if (response.ok !== true){
      throw new Error(`HTTP ${response.status}`);

    }
    const data = response.json();
    }
    
    catch (error){
      statusEl.textContent = `error: ${error.message}`;
    
  }
  let income = 0; let expense = 0; let bal = 0;

  expense = data.filter(dat => dat.type == "expense").reduce(dat, sum => sum+=dat.expense,0 );
  income = data.filter(dat => dat.type == "income").reduce(dat, sum => sum+=dat.income,0 );
  bal = expense-income;

  summary_income = document.getElementById("total-income");
  summary_income.textContent = `${income}`;  
  
  summary_expense = document.getElementById("total-expense");
  summary_expense.textContent = `${expense}`;
  
  summary_bal = document.getElementById("total-balance");
  let sign;
  if (bal>0){sign = 'green';}
  else{sign = 'red';}
  summary_bal.innerHTML = `<p class="amount" id="total-balance" style="color:${sign}>0 QAR</p>`
  summay_bal.textContent = `${bal}`;
  
}

async function addTransaction(){
  
  const response = fetch("https://myfinance-api-bay.vercel.app/reset",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({ id:"59", description:"monthly slavery", amount: "6985", category:"salary", date: )
  })
}

