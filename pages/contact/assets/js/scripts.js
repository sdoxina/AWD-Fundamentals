// 1. Variable Declaration
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');
let form = document.getElementById('contactForm');

// 2. Input and Output
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Fetching the input values
    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;
    
    // Output the form data (this could be sending data to the server)
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // 3. Conditional Statements
    if (email.includes('@')) {
        console.log("Valid email.");
    } else {
        console.log("Invalid email.");
    }

    // 4. Looping Statements
    // Print each letter of the name using a loop
    for (let i = 0; i < name.length; i++) {
        console.log("Letter " + (i + 1) + ": " + name[i]);
    }

    // Reset form after submission
    form.reset();
});
