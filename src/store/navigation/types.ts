export enum NavigationActions {
  SET_BREADCRUMBS = '@@navigation/SET_BREADCRUMBS',
  SET_TITLE = '@@navigation/SET_TITLE',
}

export type NavigationState = {
  breadcrumbs: { label: string; path: string }[];
  title: string;
};

export type setBreadcrumbsActionType = {
  type: NavigationActions.SET_BREADCRUMBS;
  payload: { label: string; path: string }[];
};

export type setTitleActionType = { type: NavigationActions.SET_TITLE; payload: string };

export type NavigationActionTypes = setBreadcrumbsActionType | setTitleActionType;
