import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ItemDetailPage = () => {
    // Toggle between 'borrow' and 'return' modes
    const navigate = useNavigate();
    const [activeMode, setActiveMode] = useState<'borrow' | 'return'>('borrow');
    const [actionAmount, setActionAmount] = useState('');

    // Mock data representing the item's state in the inventory AND the user's specific state
    const itemData = {
        id: "ITEM-001",
        name: "Arduino Uno R3",
        category: "Microcontrollers",
        description: "A standard microcontroller board based on the ATmega328P. Perfect for prototyping and FOSS Hack hardware projects.",
        available: 85,
        maxAmount: 100,
        // How many the current user (Ramu) is already holding
        userCurrentlyBorrowed: 2,
        nextDueDate: "2026-04-12"
    };

    const handleAction = () => {
        // Convert the string input into an actual number
        const quantity = parseInt(actionAmount, 10);

        if (activeMode === 'borrow') {
            console.log(`Ready to tell Supabase to BORROW ${quantity} of ${itemData.id}`);
            // TODO: Supabase Borrow Logic
            // Example: await supabase.from('borrowed_items').insert({...})

        } else {
            console.log(`Ready to tell Supabase to RETURN ${quantity} of ${itemData.id}`);
            // TODO: Supabase Return Logic
            // Example: await supabase.from('borrowed_items').update({...})
        }

        // Reset field after action
        setActionAmount('');

    };

    const handleBack = () => {
        // Now it always routes back to the main dashboard
        navigate('/');
    };

    return (
        <div className="max-w-md min-h-screen px-5 pb-10 mx-auto font-sans bg-zinc-50 text-zinc-900">

            {/* Header Section */}
            <header className="flex items-center justify-between py-5">
                <button
                    onClick={handleBack}
                    className="flex items-center justify-center w-10 h-10 transition-colors bg-white border rounded-full shadow-sm border-zinc-200 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900"
                >
                    <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <span className="text-sm font-bold tracking-widest text-zinc-400">{itemData.id}</span>
            </header>

            <main className="flex flex-col gap-5">

                {/* Item Information Card */}
                <div className="p-5 bg-white border shadow-sm border-zinc-200/80 rounded-2xl">
                    <img
                        src="https://via.placeholder.com/400"
                        alt={itemData.name}
                        className="object-cover w-full mb-5 border border-zinc-100 bg-zinc-50 rounded-xl aspect-video"
                    />

                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="text-lg font-bold text-zinc-900">{itemData.name}</h3>
                            <span className="inline-block px-2.5 py-1 mt-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-md">
                                {itemData.category}
                            </span>
                        </div>
                    </div>

                    <p className="text-sm leading-relaxed text-zinc-600">
                        {itemData.description}
                    </p>

                    {/* Status Highlights */}
                    <div className="grid grid-cols-2 gap-3 mt-5">
                        <div className="flex flex-col p-3 border rounded-lg bg-zinc-50 border-zinc-100">
                            <span className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase">Inventory</span>
                            <span className="text-lg font-black text-zinc-900">{itemData.available} <span className="text-sm font-medium text-zinc-400">/ {itemData.maxAmount}</span></span>
                        </div>
                        <div className="flex flex-col p-3 border rounded-lg bg-zinc-50 border-zinc-100">
                            <span className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase">You Have</span>
                            <span className="text-lg font-black text-blue-700">{itemData.userCurrentlyBorrowed}</span>
                        </div>
                    </div>
                </div>

                {/* Unified Action Card */}
                <div className="p-5 bg-white border shadow-sm border-zinc-200/80 rounded-2xl">

                    {/* Segmented Control / Tabs */}
                    <div className="flex p-1 mb-5 bg-zinc-100 rounded-xl">
                        <button
                            onClick={() => setActiveMode('borrow')}
                            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                                activeMode === 'borrow'
                                    ? 'bg-white text-zinc-900 shadow-sm'
                                    : 'text-zinc-500 hover:text-zinc-700'
                            }`}
                        >
                            Borrow
                        </button>
                        <button
                            onClick={() => setActiveMode('return')}
                            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                                activeMode === 'return'
                                    ? 'bg-white text-zinc-900 shadow-sm'
                                    : 'text-zinc-500 hover:text-zinc-700'
                            }`}
                        >
                            Return
                        </button>
                    </div>

                    {/* Dynamic Form Area */}
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between">
                            <label htmlFor="actionAmount" className="text-sm font-semibold text-zinc-800">
                                {activeMode === 'borrow' ? 'Amount to Borrow' : 'Amount to Return'}
                            </label>

                            {/* Contextual helper text */}
                            {activeMode === 'return' && itemData.userCurrentlyBorrowed === 0 && (
                                <span className="text-xs font-medium text-red-500">None to return</span>
                            )}
                        </div>

                        <div className="flex gap-3">
                            <input
                                type="number"
                                id="actionAmount"
                                min="1"
                                max={activeMode === 'borrow' ? itemData.available : itemData.userCurrentlyBorrowed}
                                placeholder="Qty"
                                value={actionAmount}
                                onChange={(e) => setActionAmount(e.target.value)}
                                disabled={activeMode === 'return' && itemData.userCurrentlyBorrowed === 0}
                                className="w-24 p-3 text-sm transition-colors border shadow-inner border-zinc-300 rounded-xl focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 bg-zinc-50 focus:bg-white disabled:opacity-50"
                            />

                            <button
                                type="button"
                                onClick={handleAction}
                                disabled={!actionAmount || (activeMode === 'return' && itemData.userCurrentlyBorrowed === 0)}
                                className={`flex-1 px-6 py-3 text-sm font-semibold text-white transition-all shadow-sm rounded-xl disabled:opacity-50 ${
                                    activeMode === 'borrow'
                                        ? 'bg-zinc-900 hover:bg-zinc-800 hover:shadow'
                                        : 'bg-blue-700 hover:bg-blue-800 hover:shadow' // Distinct color for returning
                                }`}
                            >
                                {activeMode === 'borrow' ? 'Confirm Borrow' : 'Confirm Return'}
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};