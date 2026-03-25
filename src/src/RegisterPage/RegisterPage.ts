// Select the form and input elements
const registerForm = document.querySelector('form') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInputRegister = document.getElementById('password') as HTMLInputElement;

registerForm.addEventListener('submit', async (event: Event) => {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // Retrieve the values entered by the user
    const email = emailInput.value;
    const password = passwordInputRegister.value;

    // 1. Basic Frontend Validation
    if (!email || !password) {
        alert('Please enter both an email and a password to register.');
        return;
    }

    if (password.length < 8) {
        alert('For your security, please use a password that is at least 8 characters long.');
        return;
    }

    /* ======================================================================
       BACKEND INTEGRATION: Creating a new user in the database
       ======================================================================
       This commented section demonstrates how to send the new user's
       credentials to your Node.js backend for secure processing and storage.
       ====================================================================== */

    try {
        /*
        // 1. Send the email and password to your Node.js API registration endpoint
        //    (Replace '/api/register' with your actual backend route)
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        // 2. AT THIS POINT, YOUR NODE.JS BACKEND TAKES OVER:
        //    a. It receives the email and password.
        //    b. It checks the database to ensure a user with this email doesn't already exist.
        //    c. If the email is unique, it SECURELY HASHES the password (e.g., using bcrypt).
        //    d. It inserts a new record into the database with the email and the HASHED password.
        //    e. It sends a success or error response back to this frontend script.

        // Parse the JSON response sent back from your Node.js server
        const result = await response.json();

        // 3. Handle the backend's response
        if (response.ok) {
            // Registration successful!
            alert('Registration successful! You can now log in.');

            // Redirect the user to the Login page
            window.location.href = '../LoginPage/LoginPage.html';
        } else {
            // Registration failed (e.g., "Email already in use")
            alert(`Registration failed: ${result.message}`);
        }
        */

        // Simulated frontend response for testing purposes
        console.log(`[SIMULATOR] Attempting to register new user: ${email}`);
        alert('Registration captured! Check `RegisterPage.ts` for the backend database connection code.');

    } catch (error) {
        // This catches network errors (e.g., if your Node.js server is offline)
        console.error('An error occurred during registration:', error);
        alert('Could not connect to the server. Please try again later.');
    }
});