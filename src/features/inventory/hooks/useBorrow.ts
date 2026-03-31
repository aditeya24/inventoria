import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
// Note: Adjust this import path to wherever your borrow database logic lives!
import { borrowService } from 'src/services/borrowService';

export function useBorrow() {
  // 1. Grab the logged-in student's ID directly from your new Umbrella!
  const { user } = useAuth(); 
  const [isBorrowing, setIsBorrowing] = useState(false);
  const [borrowError, setBorrowError] = useState<string | null>(null);

  const borrowItem = async (componentId: string, quantity: number = 1) => {
    // Failsafe: Prevent ghosts from checking out hardware
    if (!user) {
      setBorrowError("You must be logged in to borrow items.");
      return false; 
    }

    try {
      setIsBorrowing(true);
      setBorrowError(null);
      
      // Call the engine! Hand it the item ID, the Student ID, and the quantity
      await borrowService.checkoutItem(componentId, user.id, quantity);
      
      return true; // Success!
    } catch (err: any) {
      setBorrowError(err.message || "Failed to process checkout.");
      return false; // Failed!
    } finally {
      setIsBorrowing(false);
    }
  };

  return { borrowItem, isBorrowing, borrowError };
}