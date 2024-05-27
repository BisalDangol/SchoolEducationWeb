function validateForm(event) {

    event.preventDefault();
  
    // Reset previous error messages
    resetErrors();
  
    // Get form value
  
  
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const message = document.getElementById('message').value;
    const confirmmessage = document.getElementById('confirmmessage').value;
  
  
  
  
    // Name validation (required)
  
    if (name.trim() === '' || name.length < 5) {
      document.getElementById('nameError').innerText = 'Name is required';
      return;
    }
  
    // Email validation (required)
    if (email.trim() === '') {
      document.getElementById('emailError').innerText = 'Email is required';
      return;
    }
  
    // Number validation (required)
    if (number.trim() === '' || !/^\d{10}$/.test(number)) {
      document.getElementById('numberError').innerText = 'Number should be greater than 10 digits';
      return;
    }
  

    // If all validations pass, submit the form (you can replace this with your actual form submission logic)
    document.getElementById('myForm').submit();
  }
  
  function resetErrors() {
    // Reset all error messages
    const errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].innerText = '';
    }
  
  }