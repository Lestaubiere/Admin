import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { State } from '../store';

export type Route = { label: string; items: { label: string; path: string }[] };

function useRoute(pathname: string): Route | undefined {
  const { user } = useSelector((state: State) => ({ user: state.appState.user }));

  const route = useMemo<Route | undefined>(() => {
    switch (pathname) {
      case '/':
        return {
          label: `Bienvenue ${user?.firstName} ${user?.lastName}`,
          items: [{ label: 'Accueil', path: '/' }],
        };

      case '/gestion-clients':
        return {
          label: 'Gestion clientèle',
          items: [{ label: 'Gestion clientèle', path: '/gestion-clients' }],
        };

      case '/gestion-clients/reservations':
        return {
          label: 'Gestion clientèle - Réservations',
          items: [
            { label: 'Gestion clientèle', path: '/gestion-clients' },
            { label: 'Réservations', path: '/gestion-clients/reservations' },
          ],
        };

      case '/gestion-clients/clients':
        return {
          label: 'Gestion clientèle - Clients',
          items: [
            { label: 'Gestion clientèle', path: '/gestion-clients' },
            { label: 'Clients', path: '/gestion-clients/clients' },
          ],
        };

      default:
        return undefined;
    }
  }, [pathname, user]);

  return route;
}

export default useRoute;
