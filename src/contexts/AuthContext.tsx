import { createContext, useContext, useEffect, useState, } from "react";
import { supabase } from '../services/supabase';
import type { User } from '@supabase/supabase-js';

// 1. Create the Context
const AuthContext = createContext<{ user: User | null; isLoading: boolean } | null>(null);

// 2. Create the Provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Supabase automatically checks the session on load AND listens for logins/logouts
    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
      setIsLoading(false);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Create the simple Hook
export const useAuth = () => useContext(AuthContext)!;