import { useState, useEffect } from 'react';
// Note: Adjust this import path to wherever your inventory database fetcher lives!
import { inventoryService } from '../../../services/inventoryService'; 

export function useInventory() {
  const [items, setItems] = useState<any[]>([]); // You can replace 'any' with your Item type later
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInventory() {
      try {
        setIsLoading(true);
        const data = await inventoryService.getAllComponents();
        setItems(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch inventory");
      } finally {
        setIsLoading(false);
      }
    }

    fetchInventory();
  }, []);

  return { items, isLoading, error };
}