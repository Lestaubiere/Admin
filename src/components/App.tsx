import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LestaubiereApi } from '../api';

import { State } from '../store';
import { getCurrentUser } from '../store/app';

import { Authentication, Dashboard } from './Modules';

import './App.css';

function App() {
  const { loading, isAuthenticated } = useSelector((state: State) => ({
    loading: state.appState.loading,
    isAuthenticated: state.appState.isAuthenticated,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    LestaubiereApi.getInstance().setEnvironment('local');
  }, []);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (loading) {
    return null;
  }

  if (isAuthenticated) {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }

  return (
    <div className="App">
      <Authentication />
    </div>
  );
}

export default App;
