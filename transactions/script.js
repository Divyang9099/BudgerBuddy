const openModalBtn = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');

// Function to open modal
openModalBtn.addEventListener('click', function () {
  modalOverlay.style.display = 'flex';
});

// Function to close modal when close button is clicked
closeModalBtn.addEventListener('click', function () {
  modalOverlay.style.display = 'none';
});

// Optional: close modal when clicking outside the modal content
window.addEventListener('click', function (e) {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});

let temp_transactions=[];
for (i=transactions.length-1; i>=0;i--){
  temp_transactions.push(transactions[i]);
}
console.log("HEY", temp_transactions);
        // Sample data
      //   const transactions = [
      //     { id: 1, description: 'Rose Milk Raja', category: 'Food & Drink', amount: 50.00, wallet: 'HDFC', balance: 50253.00 },
      //     { id: 2, description: 'NEFT Transfer', category: 'Food & Drink', amount: 150.00, wallet: 'KVB', balance: 50253.00 },
      //     { id: 3, description: 'Juice Box', category: 'Food & Drink', amount: 50.00, wallet: 'KVB', balance: 50253.00 },
      //     { id: 4, description: 'Biryani King', category: 'Food & Drink', amount: 750.00, wallet: 'HDFC', balance: 50253.00 }
      // ];

      function createActionMenu(transaction) {
          const menu = document.createElement('div');
          menu.className = 'action-menu';
          menu.innerHTML =` 
              <button onclick="editTransaction(${transaction.id})">Edit</button>
              <button onclick="deleteTransaction(${transaction.id})">Delete</button>
          `;
          return menu;
      }

      function renderTransactions() {
          const tbody = document.getElementById('transactionsBody');
          tbody.innerHTML = '';

          temp_transactions.forEach(transaction => {
              const row = document.createElement('tr');
              row.innerHTML =` 
                  <td>${transaction.title}</td>
                  <td>
                      <div class="category">
                          ${transaction.description}
                      </div>
                  </td>
                  <td class="amount">+ ₹${transaction.amount.toFixed(2)}</td>
                  <td>${transaction.date}</td>
                  <td>${transaction.type}</td>
                  <td class="actions">
                      <button class="action-trigger">⋮</button>
                  </td>`
              ;

              const actionTrigger = row.querySelector('.action-trigger');
              const actionMenu = createActionMenu(transaction);
              row.querySelector('.actions').appendChild(actionMenu);

              actionTrigger.addEventListener('click', (e) => {
                  e.stopPropagation();
                  // Close all other menus
                  document.querySelectorAll('.action-menu.active').forEach(menu => {
                      if (menu !== actionMenu) {
                          menu.classList.remove('active');
                      }
                  });
                  actionMenu.classList.toggle('active');
              });

              tbody.appendChild(row);
          });
      }

      // Close menus when clicking outside
      document.addEventListener('click', () => {
          document.querySelectorAll('.action-menu.active').forEach(menu => {
              menu.classList.remove('active');
          });
      });

      function editTransaction(id) {
          // Implement edit functionality
          console.log('Edit transaction:', id);
      }

      function deleteTransaction(id) {
          // Implement delete functionality
          const index = transactions.findIndex(t => t.id == id);
          console.log('Delete transaction:',  id , index);
          if (index !== -1) {
              transactions.splice(index, 1);
              localStorage.setItem('transactions', JSON.stringify(transactions));
              renderTransactions();
          // }
          updateAllViews();
          window.location.href = '../transactions/';



          
      }
    }
      // Initial render
      

      renderTransactions();
      
const toggleBtn = document.getElementById("theme-toggle");

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}

toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save preference
});

document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.querySelector(".main-date");
    
    if (dateElement) {
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        
        dateElement.textContent = currentDate;
    }
});


