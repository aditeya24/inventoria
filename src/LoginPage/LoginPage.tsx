import { useState } from 'react'; // ADDED: useState
import { useNavigate, Link } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();

    // ADDED: State to hold the form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = () => {
        navigate('/register');
    };

    // ADDED: Form submission handler
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the page from reloading
        console.log('Logging in with:', email);
        // TODO: Add Supabase logic -> await supabase.auth.signInWithPassword({ email, password })
        // navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen font-sans bg-zinc-50">

            {/* ADDED: onSubmit handler to the form */}
            <form onSubmit={handleLogin} className="w-full max-w-sm p-8 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-center text-zinc-900">
                    Login to Inventoria
                </h2>

                <fieldset className="flex flex-col gap-4 p-0 m-0 border-none">

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email</label>
                        <input
                            type="email" id="email" required
                            placeholder="name@example.com"
                            // ADDED: value and onChange bindings
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="text-sm font-medium text-zinc-700">Password</label>
                        <input
                            type="password" id="password" required
                            placeholder="••••••••"
                            // ADDED: value and onChange bindings
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-3 py-2 text-sm border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900"
                        />
                    </div>

                    <button type="submit" className="w-full px-4 py-2 mt-2 text-sm font-medium text-white transition-colors bg-zinc-900 rounded-md hover:bg-zinc-800">
                        Sign In
                    </button>

                    <div className="text-sm text-right">
                        <Link to="/get-otp" className="text-zinc-600">Forgot password?</Link>
                    </div>

                    <hr className="my-2 border-zinc-200" />

                    <div className="flex flex-col items-center gap-3 text-center">
                        <p className="text-sm text-zinc-600">New User?</p>
                        <button type="button" onClick={handleRegisterClick} className="w-full px-4 py-2 text-sm font-medium transition-colors border border-zinc-300 rounded-md text-zinc-700 bg-zinc-50 hover:bg-zinc-100">
                            Register
                        </button>
                    </div>

                </fieldset>
            </form>
        </div>
    );
};