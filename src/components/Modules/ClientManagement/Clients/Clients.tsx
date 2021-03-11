import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useDebouncedCallback } from 'use-debounce';
import { LestaubiereApi } from '../../../../api';

import { State } from '../../../../store';
import { getClients } from '../../../../store/client';
import { setBreadcrumbs, setTitle } from '../../../../store/navigation';
import { ClientFilters } from '../../../../types';

import { Pagination } from '../../../Core';
import { Filters, List } from '.';

import './Clients.css';

function Clients() {
  const [filters, setFilters] = useState<ClientFilters>({});
  const [page, setPage] = useState<number>(1);

  const { loading, meta } = useSelector((state: State) => ({
    loading: state.clientState.loading,
    meta: state.clientState.meta,
  }));

  const dispatch = useDispatch();

  const history = useHistory();

  const debouncedGetClients = useDebouncedCallback((filters: ClientFilters, page: number) => {
    dispatch(getClients(filters, { page, perPage: 10 }));
  }, 500);

  useEffect(() => {
    dispatch(
      setBreadcrumbs([
        { label: 'Gestion clientèle', path: '/gestion-clients' },
        { label: 'Clients', path: '/gestion-clients/clients' },
      ]),
    );

    dispatch(setTitle('Gestion clientèle - Clients'));
  }, [dispatch]);

  useEffect(() => {
    LestaubiereApi.getSocket().on('client:new', () => {
      dispatch(getClients(filters, { page, perPage: 10 }));
    });
  }, [dispatch, filters, page]);

  useEffect(() => {
    debouncedGetClients.callback(filters, page);
  }, [history, debouncedGetClients, filters, page]);

  function handleFilter(name: 'search', value: string | null) {
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
    <div className="CM-Clients">
      <Filters search={filters.search} onChange={handleFilter} />
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

export default Clients;
