import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/modules/Auth/contexts";
import { SplashScreen } from "@/components/loading-screen";

interface Props {
  children: React.ReactNode;
  redirectTo?: string;
}

const NonAuthGuard: React.FC<Props> = ({
  children,
  redirectTo = "/",
}) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo);
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, navigate, redirectTo]);

  if (loading) return <SplashScreen />;
  return !isAuthenticated ? <>{children}</> : null;
};

export default NonAuthGuard;
