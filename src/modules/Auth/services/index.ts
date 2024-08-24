import jwt from 'jwt-decode';
import apiService from '@/api';
import { authEndpoints } from '@/api/endpoints';
import { getStoredTokens, setStoredToken, setStoredUser } from '../libs';
import { mockUserLogin } from '@/api/mockUserLogin';

interface LoginResponse {
  refreshToken?: string;
  accessToken: string;
  user: any;
}

export const handleLogin = async (credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  try {

    const response = await mockUserLogin(credentials.email, credentials.password)

    if (response?.data?.access_token) {
      const { refresh_token, access_token } = response?.data;
      const data: {
        exp: number;
        iat: number;
        sub: string;
        metadata: { role: number; isActive: boolean };
      } = jwt(access_token); // Assuming jwtDecode returns user data
      return {
        refreshToken: refresh_token,
        accessToken: access_token,
        user: { role: data?.metadata?.role, id: data?.sub },
      };
    } else {
      throw new Error('An error occurred try again later');
    }
  } catch (error) {
    throw error;
  }
}; 

export const handleForgot = async (credentials: { email: string }): Promise<any> => {
  try {
    const response = await apiService.post(authEndpoints?.forgot, credentials);

    if (response?.status === 201) {
      const { email } = JSON.parse(response?.config?.data) || {};

      return { success: true, email: email };
    } else {
      throw new Error('An error occurred try again later');
    }
  } catch (error) {
    throw error;
  }
};


export const getAccessWithRefresh = async (credentials: {
  refresh_token: string;
}): Promise<any> => {
  try {
    const response = await apiService.post(authEndpoints?.refresh, credentials);

    if (response?.data?.access_token) {
      return { accessToken: response?.data?.access_token };
    } else {
      throw new Error('An error occurred try again later');
    }
  } catch (error) {
    throw error;
  }
};

export const getToken = async () => {
  try {
    const { token } = getStoredTokens() || {};
    let data: {
      exp: number;
      iat: number;
      sub: string;
      metadata: { role: number; isActive: boolean };
    } = jwt(token || '');
    const exp = new Date(data?.exp * 1000);
    const now = new Date();
    let isLogged = now < exp ? true : false;

    if (isLogged) {
      return {
        user: { role: data?.metadata?.role, id: data?.sub },
        token,
        isLogged,
        exp,
      };
    }
    return getNewToken();
  } catch (error) {
    return getNewToken();
  }
};

export const getNewToken = async () => {
  try {
    const { refreshToken } = getStoredTokens() || {};

    if (refreshToken) {
      const res = await getAccessWithRefresh({
        refresh_token: refreshToken || '',
      });

      let data: {
        exp: number;
        iat: number;
        sub: string;
        metadata: { role: number; isActive: boolean };
      } = jwt(res?.accessToken);
      const exp = new Date(data?.exp * 1000);
      const now = new Date();
      let isLogged = now < exp ? true : false;
      setStoredUser({ role: data?.metadata?.role, id: data?.sub });
      setStoredToken(res?.accessToken);

      return {
        user: { role: data?.metadata?.role, id: data?.sub },
        token: res?.accessToken,
        isLogged,
        exp: exp,
      };
    } else {
      return { user: null, token: null, isLogged: false, exp: null };
    }
  } catch (error) {
    return { user: null, token: null, isLogged: false, exp: null };
  }
};
