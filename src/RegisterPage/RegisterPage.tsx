import { useState } from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registering:', email);
        // TODO: Add Supabase logic -> await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName } } })
    };

    return (
        <div className="flex items-center justify-center min-h-screen font-sans bg-zinc-50 text-zinc-900">
            <form onSubmit={handleRegister} className="w-full max-w-sm p-8 bg-white border border-zinc-200 rounded-xl shadow-sm">

                <h2 className="mb-2 text-2xl font-bold text-center text-zinc-900">Create an Account</h2>
                <p className="mb-6 text-sm text-center text-zinc-500">Join Inventoria to borrow hardware</p>

                <fieldset className="flex flex-col gap-4 p-0 m-0 border-none">

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="fullName" className="text-sm font-medium text-zinc-700">Full Name</label>
                        <input
                            type="text" id="fullName" required
                            placeholder="Ramu"
                            value={fullName} onChange={(e) => setFullName(e.target.value)}
                            className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
                        <input
                            type="email" id="email" required
                            placeholder="name@university.edu"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="text-sm font-medium text-zinc-700">Password</label>
                        <input
                            type="password" id="password" required
                            placeholder="••••••••"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                        />
                    </div>

                    <button type="submit" className="w-full px-4 py-2 mt-2 text-sm font-medium text-white transition-colors bg-zinc-900 rounded-md hover:bg-zinc-800">
                        Register
                    </button>

                    <hr className="my-2 border-zinc-200" />

                    <div className="text-center text-sm">
                        <span className="text-zinc-600">Already have an account? </span>
                        <Link to="/login" className="font-semibold text-zinc-900 hover:underline">Log in</Link>
                    </div>

                </fieldset>
            </form>
        </div>
    );
};