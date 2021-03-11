import { ReactElement } from 'react';

import { TopNavigationLink } from './Link';

import './TopNavigation.css';

interface Props {
  children: ReactElement<typeof TopNavigationLink> | ReactElement<typeof TopNavigationLink>[];
}

export function TopNavigation(props: Props) {
  return <div className="TopNavigation">{props.children}</div>;
}
