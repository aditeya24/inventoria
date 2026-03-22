import React, { useState } from 'react';
// Ensure this points to the CSS file we created
import './style.css';

const PasswordResetPage: React.FC = () => {
    // State to hold the password inputs
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle the form submission
    const handleReset = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the page from refreshing

        // Quick double-check to make sure passwords match
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match! Please try again.");
            return;
        }

        console.log('Password reset successfully submitted!');
        // You would typically call your backend API here to update the password
    };

    return (
        <form onSubmit={handleReset}>
            <fieldset>
                <label htmlFor="new-password">Enter new password</label>
                <input
                    type="password"
                    id="new-password"
                    name="new-password"
                    placeholder="Value"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />

                <label htmlFor="confirm-password">Re-enter new password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Value"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit">Confirm</button>
            </fieldset>
        </form>
    );
};

export default PasswordResetPage;