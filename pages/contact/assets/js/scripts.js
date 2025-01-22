// Variable declaration
const form = document.getElementById('contactForm');

// Event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Input and output
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Conditional statement
  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  // Simulating output
  console.log("Form Submitted:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  alert("Thank you for your message!");

  // Looping statement (example: validate input length)
  const inputs = [name, email, message];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].length < 3) {
      alert("Each input must be at least 3 characters long.");
      return;
    }
  }

  // Reset form fields after successful submission
  form.reset();
});
