import { LestaubiereApi } from '..';
import { User } from '../../types';

export async function getCurrentUser(this: LestaubiereApi): Promise<User> {
  const url = new URL(`${this.getBaseApiUrl()}/auth/user`);

  const response = await fetch(url.href, {
    method: 'GET',
    credentials: 'include',
    headers: this.getHeaders(),
  });

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return data;
}
