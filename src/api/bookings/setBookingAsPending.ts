import { LestaubiereApi } from '..';
import { Booking } from '../../types';

export async function setBookingAsPending(
  this: LestaubiereApi,
  id: number | string,
): Promise<Booking> {
  const url = new URL(`${this.getBaseApiUrl()}/booking/${id}`);

  const response = await fetch(url.href, {
    method: 'PATCH',
    credentials: 'include',
    headers: this.getHeaders(),
  });

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return data;
}
