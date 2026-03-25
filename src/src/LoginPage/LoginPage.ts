// Select the form and input elements
const loginForm = document.querySelector('form') as HTMLFormElement;
const emailInputLogin = document.getElementById('email') as HTMLInputElement;
const passwordInputLogin = document.getElementById('password') as HTMLInputElement;

loginForm.addEventListener('submit', async (event: Event) => {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // Retrieve the values entered by the user
    const email = emailInputLogin.value;
    const password = passwordInputLogin.value;

    // Basic frontend validation
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    /* ======================================================================
       BACKEND INTEGRATION: Database check and password verification
       ======================================================================
       This commented section demonstrates how to send the user's credentials
       to your Node.js backend.
       ====================================================================== */

    try {
        /*
        // 1. Send the email and password to your Node.js API endpoint
        //    (Replace the URL with your actual backend route)
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        });

        // 2. AT THIS POINT, YOUR NODE.JS BACKEND TAKES OVER:
        //    a. It receives the email and password.
        //    b. It connects to the database (e.g., MongoDB, PostgreSQL, MySQL).
        //    c. It searches for a user matching the provided email.
        //    d. If the user exists, it securely compares the entered password
        //       against the stored hashed password (usually using a library like bcrypt).
        //    e. It sends a response back to this frontend script.

        // Parse the JSON response sent back from your Node.js server
        const result = await response.json();

        // 3. Handle the backend's response
        if (response.ok) {
            // Login successful!
            console.log('Login successful:', result);

            // If your backend issues a token (like a JWT), save it here:
            // localStorage.setItem('authToken', result.token);

            // Redirect the user to the dashboard or home page
            window.location.href = '../Dashboard/Dashboard.html';
        } else {
            // Login failed (e.g., "User not found" or "Incorrect password")
            alert(`Login failed: ${result.message}`);
        }
        */

        // Simulated frontend response for testing purposes
        console.log(`[SIMULATOR] Attempting login for: ${email}`);
        alert('Credentials captured! Check your `LoginPage.ts` file for the backend connection code.');

    } catch (error) {
        // This catches network errors (e.g., if your Node.js server is offline)
        console.error('An error occurred during login:', error);
        alert('Could not connect to the server. Please try again later.');
    }
});