import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const
    HomePage = () => {

    const navigate = useNavigate();
    // State for the main search bar
    const [searchQuery, setSearchQuery] = useState('');

    // Quick Stats for the user dashboard
    const userStats = {
        currentlyBorrowed: 3,
        overdueItems: 0,
        requestsPending: 1
    };

    // Mock data for the 12 items/categories based on your uploaded images
    const featuredItems = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        name: `Component ${i + 1}`,
        category: i % 2 === 0 ? "Microcontroller" : "Sensor",
        // This maps to your HomePageImages/image1.png, image2.png, etc.
        // For development, we use placeholders if the local images aren't wired up yet
        image: `https://via.placeholder.com/150?text=Image+${i + 1}`,
        available: Math.floor(Math.random() * 50) + 5
    }));

    // Navigation Handlers
    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div className="max-w-md min-h-screen px-5 pb-20 mx-auto font-sans bg-zinc-50 text-zinc-900">

            {/* Header Section */}
            <header className="flex items-center justify-between py-6">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate('/profile')} className="transition-shadow rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-400">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="User profile"
                            className="object-cover w-12 h-12 border-2 border-white rounded-full shadow-sm"
                        />
                    </button>
                    <div>
                        <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">Welcome back,</p>
                        <h1 className="text-xl font-bold text-zinc-900">Ramu</h1>
                    </div>
                </div>

                {/* Notification Bell */}
                <button className="p-2 transition-colors bg-white border shadow-sm rounded-xl border-zinc-200 hover:bg-zinc-50">
                    <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </header>

            {/* Search Bar */}
            <div className="relative mb-6">
                <svg className="absolute w-5 h-5 text-zinc-400 left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search inventory..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 pl-11 pr-4 text-sm transition-colors bg-white border shadow-sm border-zinc-200/80 rounded-xl focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                />
            </div>

            {/* Quick Actions & Dashboard Stats */}
            <div className="grid grid-cols-2 gap-3 mb-8">
                {/* Mini Stat Cards */}
                <div className="flex flex-col items-center p-3 bg-blue-50 border border-blue-100 rounded-xl">
                    <span className="text-2xl font-black text-blue-700">{userStats.currentlyBorrowed}</span>
                    <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase">Borrowed</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-amber-50 border border-amber-100 rounded-xl">
                    <span className="text-2xl font-black text-amber-700">{userStats.requestsPending}</span>
                    <span className="text-[10px] font-bold tracking-wider text-amber-600 uppercase">Pending</span>
                </div>
            </div>

            {/* Inventory Grid Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-zinc-900">Featured Inventory</h2>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
                </div>

                {/* Grid for the 12 images */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {featuredItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => navigateTo(`/item/${item.id}`)}
                            className="flex flex-col p-2 transition-shadow bg-white border shadow-sm cursor-pointer border-zinc-200/80 rounded-2xl hover:shadow-md"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover w-full mb-2 bg-zinc-100 rounded-xl aspect-square"
                            />
                            <div className="px-1 pb-1">
                                <h3 className="text-sm font-bold truncate text-zinc-900">{item.name}</h3>
                                <p className="text-xs text-zinc-500">{item.available} Available</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};