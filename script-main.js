updateAllViews();
updateAllAmounts();

// Common functions
document.addEventListener('DOMContentLoaded', () => {
  // Force fresh data load
  transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  // Update UI immediately
  updateAllViews();
  
  // Add debug logs
  console.log('Transactions loaded:', transactions);
  console.log(transactions);
  
});

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
function updateAllAmounts() {
  document.querySelectorAll('.amount-display').forEach(element => {
    const originalAmount = parseFloat(element.dataset.amount);
    element.textContent = formatAmount(originalAmount);
  });
}




document.addEventListener('DOMContentLoaded', () => {
  // Get the container element where transactions will be displayed
  const txnDiv = document.getElementById('txn');
  const sign = transactions[0].type === 'income' ? '+' : '-';  
    let temp=0
    // Set the inner HTML of the transaction div
    for(i=transactions.length-1; i>transactions.length-5; i--){
      const txnDiv = document.getElementById(`txn${temp}`);
      temp++;
      const sign = transactions[i].type === 'income' ? '+' : '-';
      const amtcolor=transactions[i].type === 'income' ? '#2cbf75' : '#f44336';
      txnDiv.innerHTML = `
        <div class="txn-in1">
          <div class="txn-icon">
            <i class="bi bi-currency-rupee"></i>
          </div>
          <div class="txn-in">
            <div class="txn-name">${transactions[i].title}</div>
            <div class="txn-date">${transactions[i].date}</div>
          </div>
        </div>
        <div class="txn-amount" style="color: ${amtcolor}; display:flex; justify-content:center;">
        <i class="bi bi-currency-rupee" style= font-size:18px;></i>

        ${sign}${transactions[i].amount}</div>
        `;

        
    }
  });






window.saveTransaction = function(transaction) {
  // Push new transaction to array
  transactions.push({
    ...transaction,
    id: Date.now().toString(),
    date: transaction.date || new Date().toISOString().split('T')[0]
  });
  
  // Force update localStorage
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
  // Force reload the dashboard
  window.location.href = './';
};

function saveTransaction(transaction) {
  transactions.push({
    ...transaction,
    id: Date.now().toString(),
    date: transaction.date || new Date().toISOString().split('T')[0]
  });
  localStorage.setItem('transactions', JSON.stringify(transactions));
  updateAllViews();
}

function updateAllViews() {
  updateDashboard();
}

function updateDashboard() {
  if (!document.getElementById('net-balance')) return;

  // Force fresh calculation
  const income = transactions.filter(t => t.type === 'income')
                   .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense')
                    .reduce((sum, t) => sum + t.amount, 0);

  // Direct DOM update with formatted values
  document.getElementById('net-balance').textContent = 
    `${income - expenses}`;
  
  document.getElementById('total-income').textContent = 
    `${income}`;
  
  document.getElementById('total-expense').textContent = 
    `${expenses}`;
  document.getElementById('period-income').textContent =
    `${transactions.length}`;
  // Debug logs
  console.log('Dashboard updated with:', {income, expenses});
}


// let currentType = 'income';
    
    function toggleType(type) {
      currentType = type;
      document.querySelectorAll('.type-toggle button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === type);
      });
    }



    
    function handleSubmit() {
      const transaction = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        amount: parseFloat(document.getElementById('amount').value),
        date: document.getElementById('date').value,
        type: currentType
      };

      saveTransaction(transaction);
      window.location.href = '#';
    }
    updateAllAmounts();
    updateAllViews();

    