// 1. The Components
export interface ComponentItem {
    id: string;
    name: string;
    category: string | null;
    totalQuantity: number;
    avalibleQuantity: number;
    location: string | null;
    createdAt: string | null;
}

// 2. The User Profile
export interface UserProfile{
    id: string;
    name: string | null;
    role: string | null;
    createdAt: string | null;
}

// 3. The Borrow Transactions
export interface Transactions {
    id: string;
    componentId: string;
    userId: string;
    quantity: string;
    borrowedAt: string | null;
    returnedAt: string | null;
    status: string | null;
}