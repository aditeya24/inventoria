// Select DOM elements
const emailInputOTP = document.getElementById('email') as HTMLInputElement;
const getOtpBtn = document.querySelector('button[type="button"]') as HTMLButtonElement;
const otpInput = document.getElementById('otp') as HTMLInputElement;
// The second form handles to submit
const submitForm = document.querySelectorAll('.card')[1] as HTMLFormElement;

// variable to store the generated OTP
let generatedOtp: string | null = null;
const targetEmail: string = "target@gmail.com";

// Helper function to generate a random 4-digit number
function generateOTP(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// 1. Handle "Get OTP" button click
getOtpBtn.addEventListener('click', async () => {
    const userEmail = emailInputOTP.value;

    if (!userEmail) {
        alert('Please enter your email address first.');
        return;
    }

    // Generate the 4-digit OTP
    generatedOtp = generateOTP();

    try {
        /* =========================================================
        BACKEND INTEGRATION: Uncomment and adjust this fetch call
        once you have a backend server set up to send the email.
        =========================================================

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: targetEmail, // Hardcoded to your specific email
                userProvidedEmail: userEmail,
                otp: generatedOtp
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        */

        // Simulated success for testing purposes
        console.log(`[SIMULATOR] Sending OTP: ${generatedOtp} to ${targetEmail}`);
        alert('OTP sent! (Check your browser console to see the simulated email)');

    } catch (error) {
        console.error('Failed to send OTP:', error);
        alert('There was an error sending the OTP.');
    }
});

// 2. Handle OTP Submission and Redirect
submitForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevents the page from refreshing

    const enteredOtp = otpInput.value;

    if (!generatedOtp) {
        alert('Please request an OTP first.');
        return;
    }

    if (enteredOtp === generatedOtp) {
        // Success: Redirect to the next webpage
        window.location.href = '../HomePage/HomePage.html';
    } else {
        alert('Invalid OTP. Please try again.');
    }
});