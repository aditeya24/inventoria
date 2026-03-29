import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PasswordReset = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleUpdatePassword = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError('');
        console.log('Updating password...');
        // TODO: Add Supabase logic -> await supabase.auth.updateUser({ password: newPassword })
        // navigate('/login')
    };

    return (
        <div className="flex items-center justify-center min-h-screen font-sans bg-zinc-50 text-zinc-900">
            <form onSubmit={handleUpdatePassword} className="w-full max-w-sm p-8 bg-white border border-zinc-200 rounded-xl shadow-sm">

                <h2 className="mb-2 text-2xl font-bold text-center text-zinc-900">Create New Password</h2>
                <p className="mb-6 text-sm text-center text-zinc-500">Your new password must be different from previous used passwords.</p>

                {error && <div className="p-3 mb-4 text-sm text-red-700 bg-red-50 rounded-lg">{error}</div>}

                <fieldset className="flex flex-col gap-4 p-0 m-0 border-none">

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="newPassword" className="text-sm font-medium text-zinc-700">New Password</label>
                        <input
                            type="password" id="newPassword" required minLength={6}
                            placeholder="••••••••"
                            value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                            className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-zinc-700">Confirm Password</label>
                        <input
                            type="password" id="confirmPassword" required minLength={6}
                            placeholder="••••••••"
                            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                        />
                    </div>

                    <button type="submit" className="w-full px-4 py-2 mt-2 text-sm font-medium text-white transition-colors bg-zinc-900 rounded-md hover:bg-zinc-800">
                        Reset Password
                    </button>

                </fieldset>
            </form>
        </div>
    );
};