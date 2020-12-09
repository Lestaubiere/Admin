import { LestaubiereApi } from '..';
import { Booking } from '../../types';

export async function getBookings(this: LestaubiereApi): Promise<Booking[]> {
  const url = new URL(`${this.getBaseUrl()}/booking`);

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
