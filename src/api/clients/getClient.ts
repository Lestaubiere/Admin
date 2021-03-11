import { LestaubiereApi } from '..';
import { Client } from '../../types';

export async function getClient(this: LestaubiereApi, id: number | string): Promise<Client> {
  const url = new URL(`${this.getBaseApiUrl()}/client/${id}`);

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
