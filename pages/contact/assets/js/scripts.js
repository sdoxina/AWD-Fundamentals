<script>
    // 1. Variable Declaration: Getting input elements
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // 2. Input and Output: Handling form submission and displaying input
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Store input values
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;

        // 3. Conditional Statements: Check if inputs are empty
        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        // 4. Looping Statements: Check if all required fields are filled
        const fields = [name, email, message];
        let allFilled = true;
        for (let i = 0; i < fields.length; i++) {
            if (!fields[i]) {
                allFilled = false;
                break;
            }
        }

        if (allFilled) {
            // Output: Display entered details
            alert(`Thank you, ${name}! We have received your message: "${message}"`);
        } else {
            alert('Please fill in all fields.');
        }

        // Clear form fields after submission
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
</script>