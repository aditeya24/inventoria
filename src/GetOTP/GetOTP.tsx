import { useState } from 'react';
import { Link } from 'react-router-dom';

export const GetOTP = () => {
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);

    const handleSendOTP = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sending reset link to:', email);
        // TODO: Add Supabase logic -> await supabase.auth.resetPasswordForEmail(email, { redirectTo: 'http://localhost:5173/reset-password' })
        setIsSent(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen font-sans bg-zinc-50 text-zinc-900">
            <form onSubmit={handleSendOTP} className="w-full max-w-sm p-8 bg-white border border-zinc-200 rounded-xl shadow-sm">

                <h2 className="mb-2 text-2xl font-bold text-center text-zinc-900">Reset Password</h2>

                {isSent ? (
                    <div className="p-4 mb-4 text-sm text-center text-emerald-800 bg-emerald-50 rounded-lg">
                        Check your email! We've sent you a link to reset your password.
                    </div>
                ) : (
                    <p className="mb-6 text-sm text-center text-zinc-500">
                        Enter your email and we'll send you an OTP link to reset your password.
                    </p>
                )}

                <fieldset className="flex flex-col gap-4 p-0 m-0 border-none" disabled={isSent}>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
                        <input
                            type="email" id="email" required
                            placeholder="name@example.com"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                        />
                    </div>

                    <button type="submit" className="w-full px-4 py-2 mt-2 text-sm font-medium text-white transition-colors bg-zinc-900 rounded-md hover:bg-zinc-800 disabled:opacity-50">
                        Send Reset Link
                    </button>

                    <div className="mt-4 text-center text-sm">
                        <Link to ="/login" className="text-zinc-600 hover:text-zinc-900 hover:underline flex items-center justify-center gap-1">
                            &larr; Back to Login
                        </Link>
                    </div>

                </fieldset>
            </form>
        </div>
    );
};