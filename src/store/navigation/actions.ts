import { NavigationActions, setBreadcrumbsActionType, setTitleActionType } from './types';

export const setBreadcrumbs = (
  breadcrumbs: { label: string; path: string }[],
): setBreadcrumbsActionType => ({
  type: NavigationActions.SET_BREADCRUMBS,
  payload: breadcrumbs,
});

export const setTitle = (title: string): setTitleActionType => ({
  type: NavigationActions.SET_TITLE,
  payload: title,
});
