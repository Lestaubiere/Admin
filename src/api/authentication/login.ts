import { LestaubiereApi } from '..';
import { User } from '../../types';

export async function login(this: LestaubiereApi, email: string, password: string): Promise<User> {
  const url = new URL(`${this.getBaseApiUrl()}/auth/login`);

  const response = await fetch(url.href, {
    method: 'POST',
    credentials: 'include',
    headers: this.getHeaders(),
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return data;
}
