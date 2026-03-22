import React, { useState } from 'react';
// Make sure to import the CSS file we created!
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
    // State to hold the user's input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle the form submission
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the page from refreshing
        console.log('User submitted:', { email, password });
        // You would typically call your backend API here
    };

    return (
        <form onSubmit={handleRegister}>
            <fieldset>
                {/* Note: In React, 'for' becomes 'htmlFor' */}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Value"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Value"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Register</button>
            </fieldset>
        </form>
    );
};

export default RegisterPage;