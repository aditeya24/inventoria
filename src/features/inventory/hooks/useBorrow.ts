import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { borrowService } from '../../../services/borrowService';

export function useBorrow() {
  // Grab the logged-in student's ID directly from your new Dome
  const { user } = useAuth(); 
  const [isBorrowing, setIsBorrowing] = useState(false);
  const [borrowError, setBorrowError] = useState<string | null>(null);

  const borrowItem = async (componentId: string, quantity: number = 1) => {
    // Failsafe : Prevent ghosts from checking out hardware
    if (!user) {
      setBorrowError("You must be logged in to borrow items.");
      return false; 
    }

    try {
      setIsBorrowing(true);
      setBorrowError(null);
      
      // Engine call, Hand it the item ID, the Student ID, and the quantity
      await borrowService.checkoutItem(componentId, user.id, quantity);
      
      return true; // Check Success
    } catch (err: any) {
      setBorrowError(err.message || "Failed to process checkout.");
      return false; // check Failed
    } finally {
      setIsBorrowing(false);
    }
  };

  return { borrowItem, isBorrowing, borrowError };
}