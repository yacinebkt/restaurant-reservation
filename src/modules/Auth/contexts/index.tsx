import React, { createContext, useContext, useEffect, useState } from 'react';
import { setStoredToken, setStoredTokens, setStoredUser } from '../libs';
import { getToken } from '../services';
import { User } from '../types';

// Define the shape of the authentication context
interface AuthContextType {
  user: User | null;
  profile: any | null;
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  storUserData: (user: User, token: string, refreshToken: string) => void;
  removeUserData: () => void;
  uploadData: Function;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define a custom hook to access the authentication context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Define the AuthProviderProps type
interface AuthProviderProps {
  children: React.ReactNode;
}

// Create the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [profile] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  async function uploadData() {
    const data: {
      user: User | null;
      token: string | null;
      isLogged: boolean;
      exp: Date | null;
    } = await getToken();

    const { user, token, isLogged, exp } = data || {};
    if (!token && !isLogged) {
      removeUserData();
      setIsLoading(false);
      return;
    }
    setUser(user);
    setToken(token);
    setRefreshToken(refreshToken);
    setIsLoading(false);

    if (isLogged) {
      const refetchData = new Date(exp || '').getTime() - new Date().getTime();
      console.log(refetchData, { isLogged });
      setTimeout(uploadData, Number(refetchData) >= 0 ? refetchData : 0);
    }
  }
  // Load user and token from local storage on component mount
  useEffect(() => {
    uploadData();
  }, []);

  // Login function to set user and token and store them in local storage
  const storUserData = (user: User, token: string, refreshToken?: string) => {
    setStoredUser(user);
    refreshToken ? setStoredTokens(token, refreshToken) : setStoredToken(token);
    uploadData();
  };

  // Logout function to clear user and token from state and local storage
  const removeUserData = () => {
    setUser(null);
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isAuthenticated,
        token,
        refreshToken,
        storUserData,
        removeUserData,
        isLoading,
        uploadData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
