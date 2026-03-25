import React, { useState } from 'react';
import './style.css';

const OTPVerificationPage: React.FC = () => {
    // State for the inputs
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    // Handler for requesting the code
    const handleGetOtp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Requesting OTP for:', email);
        // API call to trigger OTP email goes here
    };

    // Handler for verifying the code
    const handleSubmitOtp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting OTP:', otp);
        // API call to verify the OTP goes here
    };

    return (
        <main className="otp-container">

            {/* Get OTP Card */}
            <form className="card" onSubmit={handleGetOtp}>
                <fieldset>
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
                    <button type="submit">Get OTP</button>
                </fieldset>
            </form>

            {/* Submit OTP Card */}
            <form className="card" onSubmit={handleSubmitOtp}>
                <fieldset>
                    <label htmlFor="otp">Enter OTP</label>
                    <input
                        type="text"
                        id="otp"
                        name="otp"
                        placeholder="Value"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </fieldset>
            </form>

        </main>
    );
};

export default OTPVerificationPage;