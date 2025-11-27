let currentType = 'income';
    
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
      window.location.href = './';
    }

  // Get references to elements


