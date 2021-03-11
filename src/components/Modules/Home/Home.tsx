import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { State } from '../../../store';
import { setBreadcrumbs, setTitle } from '../../../store/navigation';

import { Header } from '..';
import { BookingAmounts, BookingsByMonth } from '.';

import './Home.css';

function Home() {
  const { user } = useSelector((state: State) => ({ user: state.appState.user }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBreadcrumbs([]));

    dispatch(setTitle(`Bienvenue ${user?.firstName} ${user?.lastName}`));
  }, [dispatch, user]);

  return (
    <div className="Home">
      <Header />
      <div className="Home__content">
        <div className="Home__column Home__column--1/3">
          <BookingAmounts />
        </div>
        <div className="Home__column Home__column--2/3">
          <BookingsByMonth />
        </div>
      </div>
    </div>
  );
}

export default Home;
