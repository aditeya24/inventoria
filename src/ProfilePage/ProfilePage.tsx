import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
    const navigate = useNavigate();

    // Mock User Data - Ready to be replaced with Supabase auth.user() data
    const userProfile = {
        name: "Ramu",
        email: "ramu@ktu.edu",
        department: "Computer Science",
        joinedDate: "November 2025"
    };

    // Mock Stats
    const userStats = {
        activeBorrows: 3,
        totalReturned: 14,
        overdue: 0
    };

    const handleLogout = () => {
        console.log("Logging out...");
        // TODO: await supabase.auth.signOut();
        navigate('/login');
    };

    return (
        <div className="max-w-md min-h-screen px-5 pb-10 mx-auto font-sans bg-zinc-50 text-zinc-900">

            {/* Header Section */}
            <header className="flex items-center justify-between py-5 mb-2">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center justify-center w-10 h-10 transition-colors bg-white border rounded-full shadow-sm border-zinc-200 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
                    <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1 className="text-base font-bold text-zinc-900">My Profile</h1>
                <div className="w-10"></div> {/* Spacer to perfectly center the title */}
            </header>

            <main className="flex flex-col gap-5">

                {/* ID Card / Main Info */}
                <div className="flex flex-col items-center p-6 text-center bg-white border shadow-sm border-zinc-200/80 rounded-2xl">
                    <div className="relative mb-4">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Profile Avatar"
                            className="object-cover w-24 h-24 border-4 border-white rounded-full shadow-md bg-zinc-100"
                        />
                        <button className="absolute bottom-0 right-0 p-1.5 text-white bg-zinc-900 rounded-full shadow-sm hover:bg-zinc-800 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                    </div>

                    <h2 className="text-xl font-bold text-zinc-900">{userProfile.name}</h2>
                    <p className="text-sm font-medium text-zinc-500">{userProfile.email}</p>
                    <span className="inline-block px-3 py-1 mt-3 text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg">
                        {userProfile.department}
                    </span>
                </div>

                {/* Account Stats */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="flex flex-col items-center p-4 bg-white border shadow-sm border-zinc-200/80 rounded-2xl">
                        <span className="text-2xl font-black text-blue-600">{userStats.activeBorrows}</span>
                        <span className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase mt-1">Active</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white border shadow-sm border-zinc-200/80 rounded-2xl">
                        <span className="text-2xl font-black text-emerald-600">{userStats.totalReturned}</span>
                        <span className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase mt-1">Returned</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white border shadow-sm border-zinc-200/80 rounded-2xl">
                        <span className="text-2xl font-black text-red-600">{userStats.overdue}</span>
                        <span className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase mt-1">Overdue</span>
                    </div>
                </div>

                {/* Settings Menu */}
                <div className="overflow-hidden bg-white border shadow-sm border-zinc-200/80 rounded-2xl">
                    <div className="flex flex-col divide-y divide-zinc-100">

                        <button className="flex items-center justify-between p-4 transition-colors hover:bg-zinc-50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-100 text-zinc-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-zinc-800">Borrowing History</span>
                            </div>
                            <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>

                        <button className="flex items-center justify-between p-4 transition-colors hover:bg-zinc-50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-100 text-zinc-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-semibold text-zinc-800">Account Security</span>
                            </div>
                            <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>

                    </div>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full gap-2 p-4 mt-2 text-sm font-bold text-red-600 transition-colors bg-white border shadow-sm border-red-100 rounded-2xl hover:bg-red-50"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Log Out
                </button>

                <p className="mt-4 text-xs text-center text-zinc-400">
                    Joined {userProfile.joinedDate}
                </p>

            </main>
        </div>
    );
};