import { LestaubiereApi } from '..';
import { Client, ClientFilters, Meta, Pagination } from '../../types';

export async function getClients(
  this: LestaubiereApi,
  filters?: ClientFilters,
  pagination?: Pagination,
): Promise<{ data: Client[]; meta: Meta }> {
  const url = new URL(`${this.getBaseApiUrl()}/client`);

  if (filters) {
    Object.keys(filters).forEach((key) => {
      url.searchParams.append(`filters[${key}]`, filters[key as keyof ClientFilters] as string);
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
