import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import classNames from 'classnames';

import { State } from '../../../../../store';

import { Client, Header, Loading } from '.';

import './List.css';

export function List() {
  const { id } = useParams<{ id?: string }>();

  const { initialLoading, loading, clients } = useSelector((state: State) => ({
    initialLoading: state.clientState.initialLoading,
    loading: state.clientState.loading,
    clients: state.clientState.clients,
  }));

  function renderContent() {
    if (clients.length > 0) {
      return clients.map((client) => (
        <Client key={client.id} client={client} isVisible={client.id.toString() === id} />
      ));
    }

    return <div className="CM-ClientsList__empty">Aucun client correspond à la recherche.</div>;
  }

  if (initialLoading) {
    return <Loading />;
  }

  const classes = classNames('CM-ClientsList', {
    'CM-ClientsList--loading': loading,
  });

  return (
    <div className={classes}>
      <Header />
      <div className="CM-ClientsList__content">{renderContent()}</div>
    </div>
  );
}
