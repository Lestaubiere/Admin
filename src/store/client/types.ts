import { Client, Meta } from '../../types';

export enum ClientActions {
  FETCH_CLIENTS__REQUEST = '@@client/FETCH_CLIENTS__REQUEST',
  FETCH_CLIENTS__SUCCESS = '@@client/FETCH_CLIENTS__SUCCESS',
  FETCH_CLIENTS__FAIL = '@@client/FETCH_CLIENTS__FAIL',
}

export type ClientState = {
  initialLoading: boolean;
  loading: boolean;
  clients: Client[];
  meta?: Meta;
};

type getClientsRequestActionType = {
  type: ClientActions.FETCH_CLIENTS__REQUEST;
};

type getClientsSuccessActionType = {
  type: ClientActions.FETCH_CLIENTS__SUCCESS;
  payload: { data: Client[]; meta: Meta };
};

type getClientsFailActionType = {
  type: ClientActions.FETCH_CLIENTS__FAIL;
};

export type getClientsActionType =
  | getClientsRequestActionType
  | getClientsSuccessActionType
  | getClientsFailActionType;

export type ClientActionTypes = getClientsActionType;
