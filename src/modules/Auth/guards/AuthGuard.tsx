import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/modules/Auth/contexts';
import { SplashScreen } from '@/components/loading-screen';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, isLoading, profile } = useAuth();

  useEffect(() => {
    const checkAndRedirect = () => {
      if (!isAuthenticated) {
        navigate('/auth/signin');
        setLoading(false);
        return;
      }
      setLoading(false);
    };

    if (!isLoading) {
      checkAndRedirect();
    }
  }, [isAuthenticated, isLoading, navigate, profile]);

  if (loading) return <SplashScreen />;
  return isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;
