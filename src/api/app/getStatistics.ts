import { LestaubiereApi } from '..';

export async function getStatistics(
  this: LestaubiereApi,
): Promise<{
  newBookings: number;
  bookingsThisSeason: number;
  bookingsPreviousSeason: number;
  bookingsNextSeason: number;
  bookingsThisYear: number;
  bookingsByMonth: { month: string; amount: string }[];
}> {
  const url = new URL(`${this.getBaseApiUrl()}/statistics`);

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
