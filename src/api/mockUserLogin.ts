import { Tokens } from './types';

// Simple function to create a mock JWT
function createMockJWT(payload: object, expiresIn: string): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const encodedPayload = btoa(
    JSON.stringify({
      ...payload,
      exp: Math.floor(Date.now() / 1000) + parseInt(expiresIn) * 60 * 60,
    })
  );
  const signature = btoa('mock_signature'); // In a real scenario, this would be cryptographically signed

  return `${header}.${encodedPayload}.${signature}`;
}

// Updated mockUserLogin function with a delay
export function mockUserLogin(email: string, password: string): Promise<Tokens> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockCredentials = {
        email: 'test@gmail.com',
        password: 'test_123456',
      };

      if (email === mockCredentials.email && password === mockCredentials.password) {
        const payload = { email };

        const accessToken = createMockJWT(payload, '1'); // expires in 1 hour
        const refreshToken = createMockJWT(payload, '168'); // expires in 7 days

        resolve({
          data: {
            access_token: accessToken,
            refresh_token: refreshToken,
          },
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
}
