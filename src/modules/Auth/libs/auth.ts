import { User } from '../types';

const jwtDecode = (token: string): Record<string, any> => {
  const base64Url = token?.split('.')[1];
  const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );
  return JSON.parse(jsonPayload);
};

const isValidToken = (accessToken: string | null): boolean => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const tokenExpired = (exp: number) => {
  let expiredTimer: NodeJS.Timeout | undefined;

  const currentTime = Date.now();

  const timeLeft = exp * 1000 - currentTime;

  if (expiredTimer) {
    clearTimeout(expiredTimer);
  }

  expiredTimer = setTimeout(() => {
    alert('Token expired');
    removeStoredTokens();
    window.location.href = '/';
  }, timeLeft);
};

const getStoredToken = (): string => {
  return localStorage.getItem('token') || '';
};

const getStoredTokens = () => {
  return {
    token: localStorage.getItem('token'),
    refreshToken: localStorage.getItem('refreshToken'),
  };
};

const getStoredRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

const setStoredToken = (token: string) => {
  localStorage.setItem('token', token);
};

const setStoredRefreshToken = (token: string) => {
  localStorage.setItem('refreshToken', token);
};

const setStoredTokens = (token: string, refreshToken: string) => {
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
};

const removeStoredTokens = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};

const getStoredUser = () => {
  const userJson = localStorage.getItem('user');
  return userJson ? JSON.parse(userJson) : null;
};

const setStoredUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export {
  getStoredToken,
  getStoredTokens,
  getStoredRefreshToken,
  setStoredToken,
  setStoredTokens,
  setStoredRefreshToken,
  removeStoredTokens,
  getStoredUser,
  setStoredUser,
  jwtDecode,
  isValidToken,
  tokenExpired,
};
