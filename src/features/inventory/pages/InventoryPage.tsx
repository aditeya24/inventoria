import { useState, useEffect } from "react";

// Importing Architectural Hooks
import { useInventory } from "../hooks/useInventory";
import { useBorrow } from "../hooks/useBorrow";

// Import UI Components
import ItemCard from "../components/ItemCard";
import SkeletonCard from "../components/SkeletonCard";

export function InventoryPage() {
    // The Reader : automatically fetch data from the database
    const { items: fetchedItems, isLoading: isPageLoading } = useInventory();

    // The Mutator: brings in the secure transaction logic 
    const { borrowItem } = useBorrow();

    // UI State: We keep a local copy of items so the UI team's "optimistic update" still works
    const [displayItems, setDisplayItems] = useState<any[]>([]);
    
    // UI State: Keeps track of exactly which item is currently spinning
    const [borrowingID, setBorrowingID] = useState<string | null>(null);

    // Sync the fetched database items into our local visual state when they load
    useEffect(() => {
        setDisplayItems(fetchedItems);
    }, [fetchedItems]);

    async function handleBorrow(id: string, quantity: number) {
        try {
            setBorrowingID(id); // Start individual card spinner

            // The Engine runs. It automatically uses the real student's ID from the AuthContext.
            const success = await borrowItem(id, quantity);

            if (success) {
                // The UI team's optimistic update: instantly update the screen visually
                setDisplayItems(prev =>
                    prev.map(item =>
                        item.id === id
                            ? { ...item, available_quantity: Math.max(0, item.available_quantity - quantity) }
                            : item
                    )
                );
            }
        } catch (err) {
            console.error("Borrow failed", err);
        } finally {
            setBorrowingID(null); // To stop spinner
        }
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">Inventory Page</h1>

            {isPageLoading ? (
                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,300px))] justify-center">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            ) : (
                <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,300px))] justify-center">
                    {displayItems.map((item) => (
                        <ItemCard 
                            key={item.id} 
                            item={item} 
                            onBorrow={handleBorrow} 
                            loading={borrowingID === item.id} 
                        />
                    ))}
                </div>
            )}
        </div>
    );
}