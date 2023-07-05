// Function to validate and process the form submission
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the form elements
    var country = document.getElementById('country');
    var cardno = document.getElementById('cardno');
    var validtill = document.getElementById('validtill');
    var cvv = document.getElementById('cvv');
    var checkbox = document.getElementById('checkbox');
  
    // Check if the required fields are filled
    if (country.value === '' || cardno.value === '' || validtill.value === '' || cvv.value === '') {
      showError('Please fill in all the required fields.');
      return;
    }
  
    // Validate card number length
    if (cardno.value.length !== 16) {
      showError('Invalid card number. Please enter a valid card number.');
      return;
    }
  
    // Validate validtill format (MM/YY)
    if (!validtill.value.match(/^\d{2}\/\d{2}$/)) {
      showError('Invalid valid till format. Please enter in MM/YY format.');
      return;
    }
  
    // Validate CVV length
    if (cvv.value.length !== 3) {
      showError('Invalid CVV. Please enter a valid CVV.');
      return;
    }
  
    // If the checkbox is checked, display success message
    if (checkbox.checked) {
      showSuccess('Payment successful! Your address is the same as the delivery address.');
    } else {
      showSuccess('Payment successful!');
    }
  }
  
  // Function to display error message
  function showError(message) {
    var errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
  
    var container = document.querySelector('.container');
    container.insertBefore(errorDiv, container.firstChild);
  }
  
  // Function to display success message
  function showSuccess(message) {
    var successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.textContent = message;
  
    var container = document.querySelector('.container');
    container.insertBefore(successDiv, container.firstChild);
  }
  
  // Add event listener to the form submission
  var form = document.querySelector('form');
  form.addEventListener('submit', validateForm);
  