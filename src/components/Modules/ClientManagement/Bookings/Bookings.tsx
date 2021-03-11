import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useDebouncedCallback } from 'use-debounce';

import { BookingFilters } from '../../../../types';
import { LestaubiereApi } from '../../../../api';
import { State } from '../../../../store';
import { setBreadcrumbs, setTitle } from '../../../../store/navigation';
import { getBookings } from '../../../../store/booking';

import { Pagination } from '../../../Core';
import { Filters, List } from '.';

import './Bookings.css';

export function Bookings() {
  const [filters, setFilters] = useState<BookingFilters>({});
  const [page, setPage] = useState<number>(1);

  const { loading, meta } = useSelector((state: State) => ({
    loading: state.bookingState.loading,
    meta: state.bookingState.meta,
  }));

  const dispatch = useDispatch();

  const history = useHistory();

  const debouncedGetBookings = useDebouncedCallback((filters: BookingFilters, page: number) => {
    dispatch(getBookings(filters, { page, perPage: 10 }));
  }, 500);

  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { label: 'Gestion clientèle', path: '/gestion-clients' },
        { label: 'Réservations', path: '/gestion-clients/reservations' },
      ]),
    );

    dispatch(setTitle('Gestion clientèle - Réservations'));
  }, [dispatch]);

  useEffect(() => {
    LestaubiereApi.getSocket().on('booking:new', () => {
      dispatch(getBookings(filters, { page, perPage: 10 }));
    });
  }, [dispatch, filters, page]);

  useEffect(() => {
    debouncedGetBookings.callback(filters, page);
  }, [history, debouncedGetBookings, filters, page]);

  function handleFilter(name: 'search' | 'status' | 'season', value: string | null) {
    setPage(1);

    if (value) {
      setFilters((oldState) => ({ ...oldState, [name]: value }));
    } else {
      const { [name]: deletedKey, ...rest } = filters;

      setFilters(rest);
    }
  }

  function handlePaginate(page: number) {
    setPage(page);
  }

  return (
    <div className="CM-Bookings">
      <Filters
        search={filters.search}
        status={filters.status}
        season={filters.season}
        onChange={handleFilter}
      />
      <List />
      {meta && (
        <Pagination
          page={meta.current_page}
          perPage={meta.per_page}
          total={meta.total}
          disabled={loading}
          onChange={handlePaginate}
        />
      )}
    </div>
  );
}
