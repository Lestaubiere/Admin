import { ReactElement } from 'react';

import { SideNavigationLink } from '../Link';

import './Group.css';

interface Props {
  children: ReactElement<typeof SideNavigationLink> | ReactElement<typeof SideNavigationLink>[];
}

export function SideNavigationGroup(props: Props) {
  return <div className="SideNavigation-Group">{props.children}</div>;
}
