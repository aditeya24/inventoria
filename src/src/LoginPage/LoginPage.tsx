import React from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" />

                    <button type="submit">Sign In</button>

                    <a href="#">Forgot password?</a>

                    <p>New User?</p>
                    <button type="button">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default LoginPage;