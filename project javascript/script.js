// Change paragraph text when button is clicked
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
  dynamicText.textContent = 'Details has been submitted!';
});

// Handle form submission and display user's input
const userForm = document.getElementById('user-form');
const userInput = document.getElementById('user-input');
const displayName = document.getElementById('display-name');

userForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from refreshing the page

  const name = userInput.value.trim();

  if (name) {
    displayName.textContent = `Hello, ${name}! Welcome to NIN portal.`;
  } else {
    displayName.textContent = `Please enter a valid name.`;
  }

  // Clear input field after submission
  userInput.value = '';
});


//1. Button Click Interaction:
//I created button click interaction such that when the user clicks the "Submit Details" button, the JavaScript code listens for the click event and changes the text inside the <p> element with the id="dynamic-text".

//2. Form Submission Interaction:
//I also created form submission where hen the user submits the form, JavaScript captures the input and prevents the page from refreshing using e.preventDefault(). It then displays the entered name in a paragraph below the form.

//Challenges
//The major challenge faced was coming up with the interaction and make it reflect or produce desired output