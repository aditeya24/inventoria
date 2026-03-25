// Select the form and input elements
const resetForm = document.querySelector('form') as HTMLFormElement;
const newPasswordInput = document.getElementById('new-password') as HTMLInputElement;
const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;

resetForm.addEventListener('submit', async (event: Event) => {
    // Prevent the page from reloading on submit
    event.preventDefault();

    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // 1. Frontend Validation
    if (!newPassword || !confirmPassword) {
        alert('Please fill out both password fields.');
        return;
    }

    if (newPassword.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    /* ======================================================================
       BACKEND INTEGRATION: Updating the database via Node.js
       ======================================================================
       To securely update the password, you need to send it to your backend.
       You will also need a way to identify WHICH user is resetting their
       password (usually done via a secure token passed in the URL).
       ====================================================================== */

    try {
        /*
        // Example: Grab a reset token from the URL parameters
        // const urlParams = new URLSearchParams(window.location.search);
        // const resetToken = urlParams.get('token');

        // Send the new password and token to your Node.js API
        const response = await fetch('/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // token: resetToken,
                newPassword: newPassword
            }),
        });

        // AT THIS POINT, YOUR NODE.JS BACKEND TAKES OVER:
        // a. Validates the reset token to ensure the request is legitimate.
        // b. Hashes the 'newPassword' using a library like bcrypt.
        // c. Connects to the database and updates the user's record with the new hash.
        // d. Sends a success or error response back to this script.

        const result = await response.json();

        if (response.ok) {
            alert('Password successfully reset! You can now log in.');
            window.location.href = '../LoginPage/LoginPage.html';
        } else {
            alert(`Failed to reset password: ${result.message}`);
        }
        */

        // Simulated frontend response for testing purposes
        console.log('[SIMULATOR] Passwords match. Ready to send to backend for hashing and DB update.');
        alert('Password reset validated! Check `PasswordReset.ts` to wire up your database connection.');

    } catch (error) {
        console.error('Network error during password reset:', error);
        alert('Could not connect to the server. Please try again later.');
    }
});