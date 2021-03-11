import { LestaubiereApi } from '..';
import { Booking, BookingFilters, Meta, Pagination } from '../../types';

export async function getBookings(
  this: LestaubiereApi,
  filters?: BookingFilters,
  pagination?: Pagination,
): Promise<{ data: Booking[]; meta: Meta }> {
  const url = new URL(`${this.getBaseApiUrl()}/booking`);

  if (filters) {
    Object.keys(filters).forEach((key) => {
      url.searchParams.append(`filters[${key}]`, filters[key as keyof BookingFilters] as string);
    });
  }

  if (pagination) {
    url.searchParams.append('pagination[page]', pagination.page.toString());
    url.searchParams.append('pagination[perPage]', pagination.perPage.toString());
  }

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
